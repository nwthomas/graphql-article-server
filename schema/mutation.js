const graphql = require('graphql');
const User = require('../models/userModel.js');
const { UserType } = require('./types.js');

const { GraphQLString, GraphQLNonNull, GraphQLID, GraphQLObjectType } = graphql;

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addUser: {
      type: UserType,
      args: {
        username: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        pictureUrl: { type: GraphQLString },
        street1: { type: GraphQLString },
        street2: { type: GraphQLString },
        city: { type: GraphQLString },
        state: { type: GraphQLString },
        zip: { type: GraphQLString },
        type: { type: GraphQLString },
        phone: { type: GraphQLString }
      },
      resolve(parent, args) {
        return User.insert(args)
          .then(res => {
            if (res) {
              return res;
            }
            return new Error('The new user could not be created.');
          })
          .catch(() => {
            return new Error('There was an error completing your request.');
          });
      }
    },
    updateUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        username: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        pictureUrl: { type: GraphQLString },
        street1: { type: GraphQLString },
        street2: { type: GraphQLString },
        city: { type: GraphQLString },
        state: { type: GraphQLString },
        zip: { type: GraphQLString },
        type: { type: GraphQLString },
        phone: { type: GraphQLString }
      },
      resolve(parent, args) {
        return User.update(args.id, args)
          .then(res => {
            if (res) {
              return res;
            }
            return new Error('The user could not be updated.');
          })
          .catch(() => {
            return new Error('There was an error completing your request.');
          });
      }
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        return User.remove(args.id);
      }
    }
  })
});

module.exports = Mutation;
