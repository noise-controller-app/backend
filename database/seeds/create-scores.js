
const bcrypt = require('bcryptjs')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('scores').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('scores').insert([
        {score_teacher_id: 1, score_value: 60, score_closed: 1},
        {score_teacher_id: 1, score_value: 40, score_closed: 1},
        {score_teacher_id: 1, score_value: 80, score_closed: 1},

        {score_teacher_id: 2, score_value: 60, score_closed: 1},
        {score_teacher_id: 2, score_value: 40, score_closed: 1},
        {score_teacher_id: 2, score_value: 80, score_closed: 1},

        {score_teacher_id: 3, score_value: 60, score_closed: 1},
        {score_teacher_id: 3, score_value: 40, score_closed: 1},
        {score_teacher_id: 3, score_value: 80, score_closed: 1},

        {score_teacher_id: 4, score_value: 60, score_closed: 1},
        {score_teacher_id: 4, score_value: 40, score_closed: 1},
        {score_teacher_id: 4, score_value: 80, score_closed: 1},

        {score_teacher_id: 5, score_value: 60, score_closed: 1},
        {score_teacher_id: 5, score_value: 40, score_closed: 1},
        {score_teacher_id: 5, score_value: 80, score_closed: 1},

        {score_teacher_id: 6, score_value: 60, score_closed: 1},
        {score_teacher_id: 6, score_value: 40, score_closed: 1},
        {score_teacher_id: 6, score_value: 80, score_closed: 1},

        {score_teacher_id: 7, score_value: 60, score_closed: 1},
        {score_teacher_id: 7, score_value: 40, score_closed: 1},
        {score_teacher_id: 7, score_value: 80, score_closed: 1}
      ]);
    });
};
