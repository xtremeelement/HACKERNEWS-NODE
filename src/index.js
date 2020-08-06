const { GraphQLServer, PubSub } = require('graphql-yoga');
const { PrismaClient } = require('@prisma/client');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutations');
const User = require('./resolvers/User');
const Link = require('./resolvers/Links');
const Subscription = require('./resolvers/Subscription');
const Vote = require('./resolvers/Vote');

const prisma = new PrismaClient();
const pubsub = new PubSub();

const resolvers = {
    Query,
    Mutation,
    User,
    Link,
    Subscription,
    Vote
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            prisma,
            pubsub
        }        
    }
})

server.start(() => console.log('Server is runnign on http://localhost:4000'));