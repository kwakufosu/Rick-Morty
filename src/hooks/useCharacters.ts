import { gql, useQuery } from "@apollo/client";

interface IQuery {
  characters: {
    results: Array<{ name: string; id: string; image: string }>;
  };
}

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const useCharacters = () => {
  const { error, data, loading } = useQuery<IQuery>(GET_CHARACTERS);

  return { error, data, loading };
};
