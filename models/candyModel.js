const db = require('../database/dbConfig.js');

function find() {
  return db('candy');
}

function findById(id) {
  return db('candy')
    .where({ id })
    .first();
}

function findByUserId(userId) {
  return db('candy').where({ userId });
}

function insert(candy) {
  return db('candy').insert(candy);
}

function update(id, changes) {
  return db('candy')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('candy')
    .where({ id })
    .del();
}

module.exports = {
  find,
  findById,
  findByUserId,
  insert,
  update,
  remove
};
