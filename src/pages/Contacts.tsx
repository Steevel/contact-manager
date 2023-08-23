import { Link } from "react-router-dom";
import AddIcon from "../components/icons/AddIcon";

const Contacts = () => {
  return (
    <div className="h-full p-2 md:p-4">
      <div className="py-4 flex justify-center">
        <button>
          <Link
            className="max-w-sm group flex items-center justify-between gap-3 rounded-lg border border-indigo-600 bg-indigo-600 px-4 py-2 transition-colors hover:bg-transparent focus:outline-none focus:ring"
            to="/add"
          >
            <span className="shrink-0 rounded-full border border-current bg-white p-1 text-indigo-600 group-active:text-indigo-500">
              <AddIcon />
            </span>

            <span className="font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500">
              Add Contact
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Contacts;
