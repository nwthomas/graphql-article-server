const graphql = require('graphql');
const User = require('../models/userModel.js');
const Candy = require('../models/candyModel.js');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    pictureUrl: { type: GraphQLString },
    street1: { type: GraphQLString },
    street2: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    zip: { type: GraphQLString },
    type: { type: GraphQLString },
    phone: { type: GraphQLString },
    candy: {
      type: new GraphQLList(CandyType),
      resolve(parent, args) {
        return Candy.findByUserId(parent.id);
      }
    }
  })
});

const CandyType = new GraphQLObjectType({
  name: 'Candy',
  fields: () => ({
    id: { type: GraphQLID },
    candyName: { type: new GraphQLNonNull(GraphQLString) },
    userId: { type: new GraphQLNonNull(GraphQLID) },
    user: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.userId);
      }
    }
  })
});

module.exports = {
  UserType,
  CandyType
};
