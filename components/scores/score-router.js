const express = require('express')

const Scores = require('./score-model.js');
const bcrypt = require('bcryptjs')

const {restricted, restricted_by_profile} = require('../authenticate-middleware.js')

const router = require('express').Router();


router.get('/history', (req, res) => {
  Scores.find(req.session.user.teacher_id)
  .then(score => {
    res.status(200).json(score)
  })
  .catch(error => {
    res.status(500).json({message: "Could not find score with that id."})
  })

});

router.post('/start', (req, res) => {
  data = {score_teacher_id: req.session.user.teacher_id, score_value: 100}

  Scores.add(data)
  .then(score => {
    res.status(201).json(score)
  })
  .catch(error => {
    res.status(500).json({message: "Could not find score with that id."})
  })
});


router.put('/end/:id', (req, res) => {
  const {id} = req.params
  const data = req.body

  Scores.update(data, id)
  .then(score => {
    res.status(201).json(score)
  })
  .catch(error => {
    res.status(500).json({message: "Could not find score with that id."})
  })
});



module.exports = router;
