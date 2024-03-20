import { Link } from "react-router-dom";
import Characters from "../components/Characters";

const AllCharacters = () => {
  return (
    <div>
      <div className="flex justify-center mb-2">
        <Link to="/" className="hover:underline">
          &larr; Home
        </Link>
      </div>
      <h1 className="text-center text-[30px] mb-5">All Characters</h1>
      <Characters />
    </div>
  );
};

export default AllCharacters;
