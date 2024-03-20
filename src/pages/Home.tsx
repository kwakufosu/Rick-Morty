import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" h-full flex justify-center items-center ">
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibcCqUc_3aa8cvgEF3EBLu9oKsLhUeeLWuw&usqp=CAU"
          alt="Rick&MortyImg"
          className="rounded-md"
        />

        <button className="p-2 text-center w-full bg-yellow-400 text-gray-600 font-semibold mt-10 rounded-lg">
          <Link to="/characters"> Get Characters</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
