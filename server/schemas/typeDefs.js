const typeDefs = `

type User {
    _id: ID
    username: String!
    email: String!
    savedBooks: [Book]
}

type Book {
    _id: ID
    authors: [String]
    description: String!
    bookId: String
    title: String!
    image: String
    link: String
}

input UserInput {
    _id: ID
    username: String
    email: String
    savedBooks: [BookInput]
}

input BookInput {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    title: String
    image: String
    link: String
}

type Query {
    me(_id: ID, username: String): User
}

type Mutation {
    login(username: String, email: String, password: String!): Auth
    addUser(userInput: UserInput): User
    saveBook(_id: ID!, bookInput: BookInput): User
    removeBook(_id: ID!, bookId: ID!): User
}

type Auth {
    token: String
    user: User
}
`

module.exports = typeDefs 