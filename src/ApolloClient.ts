import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';

// Create the apollo client
export const apolloClient = new ApolloClient({
    link: createHttpLink({
      uri: 'http://localhost:4000/graphql',
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'ignore'
        }
    }
  })