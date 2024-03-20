import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link
        to="/"
        className="flex justify-center py-2 text-[25px] bg-gray-100 text-gray-600"
      >
        Rickdiculous
      </Link>
    </header>
  );
};

export default Header;
