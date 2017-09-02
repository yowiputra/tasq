
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
      table.increments('id').primary();
      table.string('name');
      table.timestamps(true, true);
    })
    .then(function() {
      return knex.schema.createTable('tasks', function(table){
        table.increments('id').primary();
        table.string('task');
        table.integer('user_id').unsigned().references('id').inTable('users');
        table.boolean('done').defaultTo(false);
        table.timestamps(true, true);
      })
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tasks').dropTable('users');
};
