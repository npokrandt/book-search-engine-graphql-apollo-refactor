import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation Login ($email: String!, $password: String!){
        login (email: $email, password: $password){
            token
            user {
                username
                email
                _id
            }
        }
    }
`

export const ADD_USER = gql`
    mutation AddUser ($userInput: UserInput){
        addUser (userInput: $userInput){
            _id
            username
            email
        }
    }
`

export const SAVE_BOOK = gql`
    mutation SaveBook($bookInput: BookInput){
        saveBook (bookInput: $bookInput){
            username
            savedBooks{
                title
            }
        }
    }
`

export const REMOVE_BOOK = gql`
    mutation RemoveBook ($bookId: ID){
        removeBook(bookId: $bookId){
            username
            savedBooks{
                title
            }
        }
    }
`