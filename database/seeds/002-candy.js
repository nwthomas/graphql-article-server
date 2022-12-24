exports.seed = function (knex) {
  return knex('candy')
    .del()
    .then(function () {
      return knex('candy').insert([
        { candyName: 'Chocolate', userId: 1 },
        { candyName: 'Chocolate Cake', userId: 5 },
        { candyName: 'Lollypops', userId: 1 },
        { candyName: 'Cotton Candy', userId: 2 },
        { candyName: 'Candy Corn', userId: 3 },
        { candyName: 'Mints', userId: 1 },
        { candyName: 'Apple Pie', userId: 2 },
        { candyName: 'Cherry Pie', userId: 4 },
        { candyName: 'Coffee Cake', userId: 1 },
        { candyName: 'Licorice', userId: 5 },
      ]);
    });
};
