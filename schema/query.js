const graphql = require('graphql');
const Candy = require('../models/candyModel.js');
const User = require('../models/userModel.js');
const { UserType, CandyType } = require('./types.js');

const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      description: 'Gets all users',
      resolve() {
        return User.find()
          .then((res) => {
            if (res.length) {
              return res;
            }
            return new Error('The users could not be found.');
          })
          .catch(() => {
            return new Error('There was an error completing your request.');
          });
      },
    },
    getUserById: {
      type: UserType,
      description: 'Gets a user by user ID',
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return User.findById(args.id)
          .then((res) => {
            if (res) {
              return res;
            }
            return new Error('The user could not be found.');
          })
          .catch(() => {
            return new Error('There was an error completing your request.');
          });
      },
    },
    getAllCandy: {
      type: new GraphQLList(CandyType),
      description: 'Gets all candy',
      resolve() {
        return Candy.find()
          .then((res) => {
            if (res.length) {
              return res;
            }
            return new Error('The candy could not be found.');
          })
          .catch(() => {
            return new Error('There was an error completing your request.');
          });
      },
    },
    getCandyById: {
      type: CandyType,
      description: 'Gets a candy by candy ID',
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Candy.findById(args.id)
          .then((res) => {
            if (res) {
              return res;
            }
            return new Error('The candy could not be found.');
          })
          .catch((err) => {
            return new Error('There was an error completing your request.');
          });
      },
    },
  },
});

module.exports = RootQuery;
