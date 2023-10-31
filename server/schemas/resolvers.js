const {GraphQLError} = require('graphql')
const {User, Book} = require('../models')
const {signToken} = require('../utils/auth')


module.exports = {
    Query: {
        me: async (parent, args, context, info) => {
            if (context.user){
                const _id = context.user._id
                return await User.findById(_id)//populate('books')
            }
            throw new GraphQLError("Login Required")
        },
    },
    Mutation: {
        addUser: async (parent, {userInput}, contextValue, info) => {
            return await User.create(userInput)
        },
        login: async (parent, {email, password}, context, info) => {
            const user = await User.findOne({email})
            //console.log(user)
            if (!user){
                throw new GraphQLError("User not found")
            }
            const verifiedPQ = await user.isCorrectPassword(password)

            const token = signToken(user)
            if (verifiedPQ){
                return {user, token}
            } else {
                console.log('login failed')
            }
        },
        saveBook: async (parent, args, context, info) => {

        },
        removeBook: async (parent, args, context, info) => {

        },
    }
}