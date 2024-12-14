// GraphQL queries for frontend data fetching
import { gql } from '@apollo/client';

// Query to fetch hello message from backend
export const HELLO_QUERY = gql`
  query GetHelloMessage {
    hello {
      message
    }
  }
`;
