exports.seed = function(knex) {
  return knex('candy')
    .del()
    .then(function() {
      return knex('candy').insert([
        { candyName: 'Chocolate', userId: 1 },
        { candyName: 'Cake', userId: 5 },
        { candyName: 'Lollypops', userId: 1 },
        { candyName: 'Cotton Candy', userId: 2 }
      ]);
    });
};
