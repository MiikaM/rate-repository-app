import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query repositories($orderBy: AllRepositoriesOrderBy!, $orderDirection: OrderDirection!) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
        edges {
            node {
                id
                description
                forksCount
                fullName
                language
                ownerAvatarUrl
                reviewCount
                ratingAverage
                stargazersCount
              }
        }
      }
}`

export const GET_LOGGED_IN_USER = gql`
query {
  me {
    id
    username
  }
}
`;

export const GET_REPOSITORY = gql`
query Repository($id: ID!) {
  repository(id: $id) {
    id
    fullName
    url
    description
    language
    ownerAvatarUrl
    reviewCount
    ratingAverage
    stargazersCount
    forksCount
  }
}
`;

export const GET_REVIEWS = gql`
query Reviews($id: ID!) {
  repository(id: $id) {
    id
    fullName
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
}
`