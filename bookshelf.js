const knex = require('knex');
const bookshelf = require('bookshelf');
const cascadeDelete = require('bookshelf-cascade-delete');
const knexConfig = require('./knexfile');

module.exports = bookshelf(knex(knexConfig.development)).plugin(cascadeDelete);
