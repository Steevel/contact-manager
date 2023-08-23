import { Link } from "react-router-dom";
import PhoneIcon from "./icons/PhoneIcon";
import MapIcon from "./icons/MapIcon";

const Sidebar = () => {
  return (
    <div className=" h-full flex flex-col p-1 md:p-4 gap-4 border-r-2">
      <Link to="/" className="p-2 md:p-4 flex gap-2 rounded-md bg-gray-100">
        <span className="hidden md:block">
          <PhoneIcon />
        </span>
        Contacts
      </Link>
      <Link
        to="/charts"
        className="p-2 md:p-4 flex gap-2 rounded-md bg-gray-100"
      >
        <span className="hidden md:block">
          <MapIcon />
        </span>
        Charts & Maps
      </Link>
    </div>
  );
};

export default Sidebar;
