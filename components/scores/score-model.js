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
  return db('scores');
}


function findById(id) {
  return db('scores')
    .select('username', 'score_name', 'mic_sensitivity', 'animal_change_time')
    .where( 'score_id', id )
    .first();
}

function findByUsername(username) {
  return db('scores')
    .where({ username })
    .first();
}

function add(score) {
  return db('scores')
    .insert(score)
    .then(ids => {
      return "Success.";
    });
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
