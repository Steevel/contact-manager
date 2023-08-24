// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deleteContact } from "../store/features/contactSlice";
import { useAppDispatch } from "../store/hooks";
import { Contact } from "../types";

interface ContactCardProps {
  contact: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="h-fit">
      <article className="w-[250px] rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
        <div className="rounded-[10px] bg-white p-4  sm:p-6">
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            {contact.firstName} {contact.lastName}
          </h3>
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            {contact.phoneNumber}
          </h3>

          <div className="flex flex-wrap gap-1 mt-4">
            <span
              className={`whitespace-nowrap rounded-full  px-2.5 py-0.5 text-xs ${
                contact.status === "Active"
                  ? "bg-emerald-100 text-emerald-600"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {contact.status}
            </span>
          </div>

          <div className="flex flex-col gap-2 mt-6">
            <button
              className="inline-block px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
              onClick={() => navigate(`/edit/${contact.id}`)}
            >
              Edit
            </button>
            <button
              className="inline-block px-5 py-3 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-400"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ContactCard;
