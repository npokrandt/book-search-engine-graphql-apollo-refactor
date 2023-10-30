const typeDefs = `

type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
    bookCount: Int
}

input UserInput {
    username: String!
    email: String!
    password: String!
}

type Book {
    _id: ID!
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}

type Query {
    user(_id: ID!): User
}

type Mutation {
    addUser(userInput: UserInput): User
}
`

module.exports = typeDefs