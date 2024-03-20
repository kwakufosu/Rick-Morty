import { Link } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";
import Loader from "../ui/Loader";

export const Characters = () => {
  const { error, loading, data } = useCharacters();

  if (loading) return <Loader />;
  if (error) return <p>something went wrong</p>;

  return (
    <ul className="  grid grid-cols-3 md:grid-cols-4 justify-items-center gap-y-14 gap-x-10 px-16">
      {data?.characters.results.map((character) => {
        return (
          <li key={character.id}>
            <Link to={`/${character.id}`}>
              <img
                src={character.image}
                className="rounded-full w-36 md:w-full"
              />
              <h2 className="text-center hover:underline">{character.name}</h2>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Characters;
