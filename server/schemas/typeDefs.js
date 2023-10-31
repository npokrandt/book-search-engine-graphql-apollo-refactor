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
    addUser(userInput: UserInput): User
    login(email: String!, password: String!): Auth
    saveBook(bookData: BookInput): User
    removeBook(bookId: ID): User
}

type Auth {
    token: ID
    user: User
}
`

module.exports = typeDefs 