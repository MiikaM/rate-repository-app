import { gql } from "@apollo/client";

export const AUTHENTICATE = gql`
mutation authenticate($username: String!, $password: String!){
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`

export const CREATE_USER =gql`
mutation createUser($username: String!, $password: String!) {
  createUser(user: {username: $username, password: $password}) {
    id
  }
}`

export const CREATE_REVIEW = gql`
mutation createReview($ownerName: String!, $rating: Int!, $repositoryName: String!, $text: String) {
    createReview(review: {ownerName: $ownerName, repositoryName: $repositoryName, rating: $rating, text: $text}) {
      createdAt
      rating
      repositoryId
      text
      userId
      repository {
        name
      }
    }
}`