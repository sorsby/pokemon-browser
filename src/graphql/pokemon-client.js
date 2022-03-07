import { ApolloClient } from "apollo-boost";
import { createHttpLink, gql, InMemoryCache } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "https://graphql-pokemon2.vercel.app",
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const POKEMONS_QUERY = gql`
  {
    pokemons(first: 151) {
      name
      id
      resistant
      weaknesses
      image
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
    }
  }
`;
