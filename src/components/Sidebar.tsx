import { Link } from "react-router-dom";
import PhoneIcon from "./icons/PhoneIcon";
import MapIcon from "./icons/MapIcon";

const Sidebar = () => {
  return (
    <div className=" h-full flex flex-col px-1 py-3 md:p-4 gap-4 border-r-2">
      <Link
        to="/"
        className="p-2  flex justify-center md:justify-start gap-2 rounded-md bg-gray-100"
      >
        <PhoneIcon />
        <span className="hidden md:flex md:flex-col">Contacts</span>
      </Link>
      <Link
        to="/charts"
        className="p-2 flex justify-center items-center md:justify-start gap-2 rounded-md bg-gray-100"
      >
        <MapIcon />
        <span className="hidden md:block">Charts & Maps</span>
      </Link>
    </div>
  );
};

export default Sidebar;
