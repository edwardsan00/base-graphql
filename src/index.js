require('dotenv/config')

import { GraphQLServer } from 'graphql-yoga'

import { typeDefs } from './graphql/types'
import { resolvers } from './graphql/resolvers'

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start({ port: 8000 }, ({ port }) => {
  console.log('Server on port', port)
})