exports.up = function(knex) {
  return knex.schema.createTable('scores', scores => {
    scores.increments('score_id');
    scores.integer('score_value');
    scores.integer('score_teacher_id')
        .unsigned()
        .notNullable()
        .references('teacher_id')
        .inTable('teachers')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('scores');
};
