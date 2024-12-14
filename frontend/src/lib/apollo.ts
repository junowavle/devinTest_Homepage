// Apollo Client configuration for GraphQL integration
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// Create HTTP link with environment-based URL
const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_URL || 'http://localhost:8000/graphql',
});

// Initialize Apollo Client with configuration
export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
    },
  },
});
