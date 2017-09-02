const bookshelf = require('../bookshelf');
const tasks = require('./task.js');

module.exports = bookshelf.Model.extend({
  tableName: 'users',
  userTasks: function() {
    return this.hasMany(tasks);
  }
}, {
  dependents: ['userTasks']
})
