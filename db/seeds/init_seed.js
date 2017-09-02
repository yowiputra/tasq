
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(() => knex('users').del())
    .then(() => {
      return knex('users')
        .returning('id')
        .insert([
          {name: 'Duncan'},
          {name: 'Albert'},
          {name: 'Harry'}
        ]);
    }).then(([duncan, albert, harry]) => {
      return knex('tasks').insert([
        {task: 'do dishes', user_id: duncan, done: false},
        {task: 'make bed', user_id: albert, done: true},
        {task: 'do laundry', user_id: albert, done: false},
        {task: 'throw out trash', user_id: harry, done: false}
      ])
    });
};
