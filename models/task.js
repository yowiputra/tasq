const bookshelf = require('../bookshelf');

module.exports = bookshelf.Model.extend({
  tableName: 'tasks'
})
