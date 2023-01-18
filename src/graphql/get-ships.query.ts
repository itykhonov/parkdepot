import { gql } from '@apollo/client';

export const GET_SHIPS = gql`
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
      id
      type
      image
      abs
      active
      attempted_landings
      class
      course_deg
      home_port
      imo
      missions {
        flight
        name
      }
      mmsi
      model
      name
      position {
        latitude
        longitude
      }
      roles
      speed_kn
      status
      successful_landings
      url
      weight_kg
      weight_lbs
      year_built
    }
  }
`;
