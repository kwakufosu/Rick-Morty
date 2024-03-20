import { Link } from "react-router-dom";
import Character from "../components/Charater";

const CharacterPg = () => {
  return (
    <div>
      <div className="flex justify-center mb-2">
        <Link to="/characters" className="hover:underline">
          &larr; Back to Characters
        </Link>
      </div>
      <Character />
    </div>
  );
};

export default CharacterPg;
