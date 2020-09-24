export default `
  type Message {
    _id: ID!
    title: String!
    message: String!
  }

  type Query {
    ping: String!
    messages: [Message!]
  }

  type Mutation {
    createMessage(title: String!, message: String!): Message
  }
`;
