import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';

// Create the apollo client
export const apolloClient = new ApolloClient({
    link: createHttpLink({
      uri: import.meta.env.VITE_GRAPHQL_URL,
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'ignore'
        }
    }
  })