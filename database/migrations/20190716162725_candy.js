exports.up = function (knex) {
  return knex.schema.createTable("candy", (tbl) => {
    tbl.increments();
    tbl.string("candyName", 256);
    tbl
      .integer("userId")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("candy");
};
