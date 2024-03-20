import Loader from "../ui/Loader";
import { useCharacter } from "../hooks/useCharater";
import { useParams } from "react-router-dom";

const Charater = () => {
  console.log("running");
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id!);

  if (loading) return <Loader />;
  if (error) return <p>something went wrong</p>;

  return (
    <div className="grid grid-rows-[auto_1fr] justify-center px-4 md:px-0">
      <img src={data?.character.image} className=" w-full rounded-full " />
      <div className="text-center">
        <h1>{data?.character.name}</h1>
        <p>{data?.character.gender}</p>
        <ul>
          {data?.character.episode.map((episode) => {
            return (
              <li key={episode.name}>
                {episode.name} - <b>{episode.episode}</b>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Charater;
