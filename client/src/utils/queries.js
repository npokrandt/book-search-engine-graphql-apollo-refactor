import { gql } from "@apollo/client";

export const ME = gql`
  query Me($id: ID, $username: String) {
    me(_id: $id, username: $username) {
      _id
      email
      savedBooks {
        image
        title
        authors
        link
        description
        bookId
      }
      username
    }
  }
` 