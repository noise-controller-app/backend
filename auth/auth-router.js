const express = require('express')

const Teachers = require('./auth-model.js');
const bcrypt = require('bcryptjs')

const {restricted, restricted_by_profile} = require('./authenticate-middleware.js')

const router = require('express').Router();

router.post('/register', (req, res) => {
  let teacher = req.body

  teacher.password = bcrypt.hashSync(teacher.password, 10)

  Teachers.add(teacher)
  .then(teacher => {
    res.status(201).json(teacher)
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
      req.session.user = teacher
      res.status(200).json({message: "Welcome!"})
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
    res.status(200).json(teacher)
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



module.exports = router;
