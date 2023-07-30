import SelectPitch from "./SelectPitch";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center w-full fixed top-0 from-gray-900 to-gray-600 bg-gradient-to-r left-0 p-10 border-b-2 border-white/80">
      <h1 className="text-center font-black text-6xl text-white/80">
        Pitch Finder
      </h1>
      <div className="relative w-2/12 flex flex-col">
        <label className="p-1 text-white/80 font-semibold">
          Select Pitch Here
        </label>
        <SelectPitch />
      </div>
    </nav>
  );
};

export default Nav;
