const express = require('express')

const Scores = require('./score-model.js');
const bcrypt = require('bcryptjs')

const {restricted, restricted_by_profile} = require('../authenticate-middleware.js')

const router = require('express').Router();


router.get('/history', restricted, (req, res) => {
  Scores.find(req.decodedToken.user.teacher_id)
  .then(score => {
    res.status(200).json(score)
  })
  .catch(error => {
    res.status(500).json({message: "Could not find score with that id."})
  })

});

router.post('/start', restricted, (req, res) => {

  Scores.getOpen(req.decodedToken.user.teacher_id)
    .then(score => {
      if(score) {

        res.status(201).json(score)
      } else {
        data = {score_teacher_id: req.decodedToken.user.teacher_id, score_value: 100, score_closed: 0}
        Scores.add(data)
        .then(newscore => {
          res.status(201).json(newscore)
        })
        .catch(error => {
          res.status(500).json({message: "Could not find score with that id."})
        })
      }
    })
    .catch(error => {
      res.status(500).json({message: "Unknown error."})
    })



});


router.put('/end', restricted, (req, res) => {
  const data = req.body
  data.score_closed = 1

  Scores.getOpen(req.decodedToken.user.teacher_id)
    .then(score => {
      if(score) {
        Scores.update(data, score.score_id)
        .then(oldscore => {
          res.status(201).json(oldscore)
        })
        .catch(error => {
          res.status(500).json({message: "Could not find score with that id."})
        })
      } else {
        res.status(500).json({message: "There was no score to end."})
      }
    })
    .catch(error => {
      res.status(500).json({message: "Unknown error."})
    })
});

router.delete('/reset', restricted, (req, res) => {
  Scores.removeAllForTeacher(req.decodedToken.user.teacher_id)
    .then(score => {
      res.status(200).json(score)
    })
    .catch(error => {
      res.status(500).json({message: "Unknown error."})
    })
})


router.delete('/:id', restricted, (req, res) => {
  Scores.remove(req.params.id)
  .then(oldscore => {
    res.status(201).json(oldscore)
  })
  .catch(error => {
    res.status(500).json({message: "Unknown error."})
  })

});



module.exports = router;
