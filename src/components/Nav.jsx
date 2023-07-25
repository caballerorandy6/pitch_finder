import { FaSearch } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="flex justify-center items-center w-full fixed top-0 bg-gradient-to-r from-orange-600 to-orange-500 left-0 p-7">
      <div className="relative flex items-center ">
        <FaSearch className="absolute ml-3" />
        <input
          className="w-full placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 border-none focus:outline-none text-gray-500"
          placeholder="Search Pitch"
          type="text"
          name="search"
          autoComplete="off"
          aria-label="Search Pitch"
        />
      </div>
    </nav>
  );
};

export default Nav;
