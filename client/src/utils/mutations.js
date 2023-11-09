import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($password: String!, $email: String, $username: String) {
    login(password: $password, email: $email, username: $username) {
      token
      user {
        _id
        email
        username
      }
    }
  }
` 

export const ADD_USER = gql`
  mutation AddUser($userInput: UserInput) {
    addUser(userInput: $userInput) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`

export const SAVE_BOOK = gql`
  mutation SaveBook($_id: ID!, $bookInput: BookInput) {
    saveBook(_id: $_id, bookInput: $bookInput) {
      username
      savedBooks {
        title
        bookId
      }
    }
  }
`

export const REMOVE_BOOK = gql`
  mutation RemoveBook($_id: ID!, $bookId: ID!) {
    removeBook(_id: $_id, bookId: $bookId) {
      username
      savedBooks {
        title
        bookId
      }
    }
  }
`