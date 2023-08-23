import PhoneIcon from "./icons/PhoneIcon";

const Navbar = () => {
  return (
    <div className="py-4 px-5 shadow-md text-lg md:text-xl xl:text-2xl h-[8vh] flex items-center gap-2">
      <span className="bg-indigo-600 p-2 text-white rounded-full">
        <PhoneIcon />
      </span>
      Contact Manager
    </div>
  );
};

export default Navbar;
