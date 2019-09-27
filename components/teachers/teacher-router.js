const express = require('express')

const Teachers = require('./teacher-model.js');
const Scores = require('../scores/score-model.js');

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

const {restricted, restricted_by_profile} = require('../authenticate-middleware.js')

const router = require('express').Router();

router.post('/register', (req, res) => {
  let teacher = req.body
  console.log(teacher)

  teacher.password = bcrypt.hashSync(teacher.password, 10)
  console.log(teacher)

  Teachers.add(teacher)
  .then(teacher => {
    res.status(201).json({message: "Welcome! Successfully registered & logged in.", teacher: teacher})
  })
  .catch(error => {
    res.status(500).json({message: "There was an error during sign up."})
  })
});

router.post('/login', (req, res) => {
  let {username, password} = req.body

  Teachers.findByUsername(username)
  .then(teacher => {
    if(teacher && bcrypt.compareSync(password, teacher.password)){

      const token = generateToken(teacher)
      Scores.find(teacher.teacher_id)

      .then(scores => {
        res.status(201).json({token: token, message: "Welcome! Successfully logged in.", teacher: teacher, scores: scores})
      })
      .catch(error => {
        res.status(500).json({message: "Invalid Credentials."})
      })
    } else {
      res.status(500).json({message: "Invalid Credentials."})
    }
  })
  .catch(error => {
    res.status(500).json({message: "Invalid Credentials."})
  })
});

router.delete('/logout', restricted, (req, res) => {
  req.session.user = null;
  res.status(200).json({message: "Logged out!"})
});

router.get('/:id', restricted_by_profile, (req, res) => {
  const {id} = req.params
    console.log("GETTING ", id)

  Teachers.findById(id)
  .then(teacher => {
    Scores.find(teacher.teacher_id)
    .then(scores => {
      res.status(201).json({teacher: teacher, scores: scores})
    })
  })
  .catch(error => {
    res.status(500).json({message: "Could not find teacher with that id."})
  })

});

router.put('/:id', restricted_by_profile, (req, res) => {
  const {id} = req.params
  const data = req.body

  Teachers.update(data, id)
  .then(teacher => {
    res.status(201).json(teacher)
  })
  .catch(error => {
    res.status(500).json({message: "Could not find teacher with that id."})
  })
});

router.delete('/:id', restricted_by_profile, (req, res) => {
  const {id} = req.params

  Teachers.remove(id)
  .then(teacher => {
    res.status(201).json(teacher)
  })
  .catch(error => {
    res.status(500).json({message: "Could not find teacher with that id."})
  })
});

function generateToken(user) {
  const payload = {
    subject: user.teacher_id, // sub in payload is what the token is about
    user: user
  };

  const options = {
    expiresIn: '1d', // show other available options in the library's documentation
  };

  // extract the secret away so it can be required and used where needed
  return jwt.sign(payload, process.env.JWT_SECRET, options); // this method is synchronous
}

module.exports = router;
