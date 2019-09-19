const db = require('../../database/dbConfig.js');

module.exports = {
  find,
  getOpen,
  findById,
  add,
  update,
  remove,
  removeAllForTeacher
};


function find() {
  return db('scores');
}


function findById(id) {
  return db('scores')
    .where( 'score_id', id )
    .first();
}


function add(score) {
  return db('scores')
    .insert(score)
    .then(ids => {
      return findById(ids[0]);
    });
}

function getOpen(teacher_id) {
  return db('scores')
    .where('score_teacher_id', teacher_id)
    .where('score_closed', 0)
    .first();
}

function update(changes, id) {
  return db('scores')
    .where( 'score_id', id )
    .update(changes);
}

function remove(id) {
  return db('scores')
    .where('score_id', id)
    .del();
}

function removeAllForTeacher(teacher_id) {
  return db('scores')
    .where('score_teacher_id', teacher_id)
    .del();
}
