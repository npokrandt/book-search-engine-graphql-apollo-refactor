const {GraphQLError} = require('graphql')
const {User} = require('../models')
const {signToken, authError} = require('../utils/auth')


module.exports = {
    Query: {
        me: async (parent, {_id, username}, context, info) => {

            if (!context.user){
                authError()
            }

            const foundUser = await User.findOne({
                $or: [{_id}, {username}]
            })

            if (!foundUser){
                throw new GraphQLError("Cannot find user", {
                    extensions: {
                        code: 'NO_USER_FOUND'
                    }
                })
            }

            return foundUser
        },
    },
    Mutation: {
        addUser: async (parent, { userInput }, contextValue, info) => {
            console.log(userInput)
            const user = await User.create(userInput)

            if (!user){
                throw new GraphQLError('Something is wrong!', {
                    extensions: {
                        code: 'ERROR_CREATING_USER'
                    }
                })
            }
            const token = signToken(user)
            
            return {token, user}
        },
        login: async (parent, {username, email, password}, context, info) => {
            const user = await User.findOne({$or: [{username}, {email}]})
            if (!user){
                throw new GraphQLError("User not found", {
                    extensions: {
                        code: 'LOGIN_ERROR'
                    }
                })
            }

            const verifiedPW = await user.isCorrectPassword(password)

            const token = signToken(user)
            if (verifiedPW){
                return {user, token}
            } else {
                throw new GraphQLError("Login unsuccessful", {
                    extensions: {
                        code: 'LOGIN_ERROR'
                    }
                })
            }
        },
        saveBook: async (parent, {_id, bookInput}, context, info) => {

            if (!context.user){
                authError()
            }

            try {
                const updatedUser = await User.findByIdAndUpdate(
                    {_id},
                    { $addToSet: {'savedBooks': bookInput}},
                    {new: true}
                )
                return updatedUser
            } catch {
                throw new GraphQLError("Error saving book")
            }           
        },
        removeBook: async (parent, {_id, bookId}, context, info) => {

            if (!context.user){
                authError()
            }
            
            const user = await User.findOneAndUpdate(
                {_id},
                { $pull: {'savedBooks': {bookId}}},
                {new: true}
            )
            if (!user){
                throw new GraphQLError("User not found",)
            }
            return user           
        },
    }
}