exports.up = function(knex) {
  return knex.schema.createTable('teachers', teachers => {
    teachers.increments('teacher_id');

    teachers
      .string('username', 255)
      .notNullable()
      .unique();
    teachers.string('password', 255).notNullable();
    teachers.string('teacher_name', 255).notNullable();
    teachers.string('email', 255).notNullable();
    teachers.integer('mic_sensitivity');
    teachers.integer('animal_change_time');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('teachers');
};
