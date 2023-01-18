import { gql } from '@apollo/client';

export const GET_FILTERS = gql`
  query (
    $find: ShipsFind
    $limit: Int
    $offset: Int
    $order: String
    $sort: String
  ) {
    ships(
      find: $find
      limit: $limit
      offset: $offset
      order: $order
      sort: $sort
    ) {
      type
    }
  }
`;
