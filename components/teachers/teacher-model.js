const db = require('../../database/dbConfig.js');

module.exports = {
  find,
  findById,
  findByUsername,
  add,
  update,
  remove
};


function find() {
  return db('teachers');
}


function findById(id) {
  return db('teachers')
    .select('teacher_id', 'username', 'teacher_name', 'mic_sensitivity', 'animal_change_time')
    .where( 'teacher_id', id )
    .first();
}

function findByUsername(username) {
  return db('teachers')
    .where({ username })
    .first();
}

function add(teacher) {
  return db('teachers')
    .insert(teacher)
    .then(ids => {
      return findById(ids[0])
    });
}

function update(changes, id) {
  return db('teachers')
    .where( 'teacher_id', id )
    .update(changes);
}

function remove(id) {
  return db('teachers')
    .where('teacher_id', id)
    .del();
}
