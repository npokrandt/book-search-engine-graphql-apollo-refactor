import { gql } from "@apollo/client";

export const ME = gql`
    query Me {
        me {
            _id
            username
            email
            savedBooks {
                title
            }
        }
    }
`