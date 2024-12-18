import { GraphQLClient } from "graphql-request";

// Create a reusable GraphQL client instance
const graphqlClient = new GraphQLClient("http://localhost:5000/graphql", {
  headers: {
    // Add headers as needed (e.g., Authorization)
    Authorization: `Bearer YOUR_ACCESS_TOKEN`,
  },
});

export default graphqlClient;
