const typeDefs = `

type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
    bookCount: Int
}

type Book {
    authors: [String]
    description: String!
    bookId: ID!
    title: String!
    image: String
    link: String
}

input UserInput {
    username: String!
    email: String!
    password: String!
}

input BookInput {
    authors: [String]
    description: String!
    bookId: ID!
    title: String!
    image: String
    link: String
}

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(userInput: UserInput): Auth
    saveBook(bookInput: BookInput): User
    removeBook(bookId: ID): User
}

type Auth {
    token: ID
    user: User
}
`

module.exports = typeDefs 