import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query repositories($after: String,$first: Int, $orderBy: AllRepositoriesOrderBy!, $orderDirection: OrderDirection!, $searchKeyword: String) {
  repositories(after: $after, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
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
query getUser($withReviews: Boolean = false){
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
          repositoryId
          repository {
            name
            ownerName
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
query Reviews($id: ID!, $after: String, $first: Int) {
  repository(id: $id) {
    id
    fullName
    reviews(first: $first, after: $after) {
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
        hasNextPage
        startCursor
      }
    }
  }
}
`