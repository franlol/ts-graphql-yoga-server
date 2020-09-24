import { GraphQLServer } from "graphql-yoga";
import dbInit from './db';

import resolvers from './gql/resolvers';
import defs from './gql/schemas/message/messageSchema'

dbInit();

const gqlServer: GraphQLServer = new GraphQLServer({
  typeDefs: defs,
  resolvers
});

gqlServer.start({ port: 3001 },
  ({ port }) => console.log('GraphQL server runing on port', port)
);
