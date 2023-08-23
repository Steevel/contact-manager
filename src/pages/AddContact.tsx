import { useState } from "react";

const AddContact = () => {
  // States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("Active");

  // Functions
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (firstName || lastName || phoneNumber) {
        console.log("yea!");
        console.log({ firstName, lastName, phoneNumber, status });
      }
    } catch (e) {
      alert("Something went wrong. Please try again!");
    }
  };
  return (
    <div className=" h-full p-1 md:p-3 lg:p-4">
      <div className="flex flex-col items-center justify-center  h-full">
        <h1 className="text-2xl md:text-5xl pb-2 md:pb-5">Create Contact</h1>
        <div className=" rounded-md shadow-md w-full max-w-md mx-auto p-4">
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <div>
              <label
                htmlFor="firstname"
                className="block font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="mt-1 block px-3 w-full h-8 border-[1px] border-gray-300 rounded-md shadow-sm outline-none focus:border-none focus:ring-1 focus:ring-indigo-600"
              />
            </div>
            <div>
              <label
                htmlFor="lastname"
                className="block font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="mt-1 block px-3 w-full h-8 border-[1px] border-gray-300 rounded-md shadow-sm outline-none focus:border-none focus:ring-1 focus:ring-indigo-600"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="mt-1 block px-3 w-full h-8 border-[1px] border-gray-300 rounded-md shadow-sm outline-none focus:border-none focus:ring-1 focus:ring-indigo-600"
              />
            </div>
            <div>
              <span className="block font-medium text-gray-700">Status</span>
              <div className="mt-1 space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="active"
                    onClick={() => setStatus("Active")}
                    className="text-blue-500 focus:ring-blue-200"
                  />
                  <span className="ml-2">Active</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="inactive"
                    onClick={() => setStatus("Inactive")}
                    className="text-blue-500 focus:ring-blue-200"
                  />
                  <span className="ml-2">Inactive</span>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:ring focus:ring-blue-200"
            >
              Save Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
