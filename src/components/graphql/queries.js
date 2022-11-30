import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query repositories($orderBy: AllRepositoriesOrderBy!, $orderDirection: OrderDirection!, $searchKeyword: String) {
  repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
    edges {
      node {
        description
        forksCount
        fullName
        language
        ownerAvatarUrl
        reviewCount
        ratingAverage
        stargazersCount
        id
      }
      cursor
    }
    pageInfo {
      endCursor
      startCursor
      hasNextPage
    }
  }
}`

export const GET_USER = gql`
query getUser($withReviews: Boolean = False){
  me{
    id
    username
    reviews @include(if: $withReviews) {
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
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
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
      cursor
    }
    pageInfo {
      endCursor
      startCursor
      hasNextPage
    }
  }
}
`