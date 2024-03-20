import { gql, useQuery } from "@apollo/client";
interface ICharacter {
  character: {
    episode: Array<{ name: string; episode: string }>;
    image: string;
    name: string;
    gender: string;
  };
}

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      id
      image
      gender
      episode {
        name
        episode
      }
    }
  }
`;

export const useCharacter = (id: string) => {
  const { error, data, loading } = useQuery<ICharacter>(GET_CHARACTER, {
    variables: {
      id,
    },
  });

  return { error, data, loading };
};
