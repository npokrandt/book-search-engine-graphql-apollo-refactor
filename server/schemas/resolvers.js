const {User, Book} = require('../models')

module.exports = {
    Query: {
        user: async (parent, {_id}, contextValue, info) => {
            return await User.findById(_id)//populate('books')
        },
    },
    Mutation: {
        addUser: async (parent, {userInput}, contextValue, info) => {
            return await User.create(userInput)
        }
    }
}