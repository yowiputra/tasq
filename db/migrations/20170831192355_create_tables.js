
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
      table.increments('id').primary();
      table.string('name');
      table.timestamps();
    })
    .then(function() {
      return knex.schema.createTable('tasks', function(table){
        table.increments('id').primary();
        table.string('task');
        table.integer('user_id').unsigned().references('id').inTable('users');
        table.boolean('done').defaultTo(false);
        table.timestamps();
      })
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tasks').dropTable('tasks');
};
