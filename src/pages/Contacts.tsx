import { Link } from "react-router-dom";
import AddIcon from "../components/icons/AddIcon";
import { useAppSelector } from "../store/hooks";
import ContactCard from "../components/ContactCard";

const Contacts = () => {
  const contacts = useAppSelector((state) => state.contacts.contacts);

  return (
    <div className="h-full p-2 md:p-4">
      <div className=" flex justify-center h-[80px]">
        <button>
          <Link
            className="flex items-center justify-between max-w-sm gap-3 px-4 py-2 transition-colors bg-indigo-600 border border-indigo-600 rounded-lg group hover:bg-transparent focus:outline-none focus:ring"
            to="/add"
          >
            <span className="p-1 text-indigo-600 bg-white border border-current rounded-full shrink-0 group-active:text-indigo-500">
              <AddIcon />
            </span>

            <span className="font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500">
              Add Contact
            </span>
          </Link>
        </button>
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center h-[calc(90vh-100px)] overflow-y-scroll">
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))
        ) : (
          <div className="p-2 text-2xl text-center bg-indigo-100 rounded-md md:text-3xl">
            Contacts Not found. Please add some contacts to display here!
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacts;
