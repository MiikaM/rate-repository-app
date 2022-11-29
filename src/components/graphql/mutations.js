import { gql } from "@apollo/client";

export const AUTHENTICATE = gql`
mutation authenticate($username: String!, $password: String!){
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`

//TODO
// export const CREATE_REVIEW = gql`
// mutation createReview($fullName: String!, $rating: Int!, $text: String!, id:)`