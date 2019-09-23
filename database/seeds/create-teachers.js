
const bcrypt = require('bcryptjs')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('teachers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('teachers').insert([
        {username: 'teacher1', password: bcrypt.hashSync('test', 10), teacher_name: "Mrs. Blue", email: "test@test.com", mic_sensitivity: 3, animal_change_time: 6},
        {username: 'teacher2', password: bcrypt.hashSync('test', 10), teacher_name: "Ms. Yellow", email: "test@test.com", mic_sensitivity: 3, animal_change_time: 6},
        {username: 'teacher3', password: bcrypt.hashSync('test', 10), teacher_name: "Mrs. Red", email: "test@test.com", mic_sensitivity: 3, animal_change_time: 6},
        {username: 'teacher4', password: bcrypt.hashSync('test', 10), teacher_name: "Mr. Pink", email: "test@test.com", mic_sensitivity: 3, animal_change_time: 6},
        {username: 'teacher5', password: bcrypt.hashSync('test', 10), teacher_name: "Mrs. Brown", email: "test@test.com", mic_sensitivity: 3, animal_change_time: 6},
        {username: 'teacher6', password: bcrypt.hashSync('test', 10), teacher_name: "Miss Purple", email: "test@test.com", mic_sensitivity: 3, animal_change_time: 6},
        {username: 'teacher7', password: bcrypt.hashSync('test', 10), teacher_name: "Mrs. Black", email: "test@test.com", mic_sensitivity: 3, animal_change_time: 6},
      ]);
    });
};
