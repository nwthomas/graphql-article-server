const graphql = require('graphql');
const { GraphQLSchema } = graphql;
const RootQuery = require('./query.js');
const Mutation = require('./mutation.js');

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
