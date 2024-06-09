import React, { useState } from "react";
import "./Registration.css";
function RegistrationForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [language, setLanguage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, phoneNumber, language });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="custom-container">
        <div className="flex justify-center mb-6"></div>
        <h2 className="text-3xl font-bold text-side mb-6">Try now</h2>
        <p className="text-gray-600 text-side mb-6">Get a call from Toingg</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="fullName"
              className="form-input w-full px-2 py-2 border border-slate-600 rounded-lg text-gray-700 focus:ring-blue-500"
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="phone number"
              className="form-input w-full px-2 py-2 border border-slate-600 rounded-lg text-gray-500 focus:ring-blue-300"
              required
              placeholder="+91"

              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <select
              id="language"
              className="select w-full px-2 py-2 border border-slate-600 rounded-lg text-gray-700 focus:ring-blue-00"
              required
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="">choose your language</option>
            </select>
          </div>
          <div className="flex justify-center items-center mt-6">
            <div className="bg-[#FF9345] w-[50px] h-[50px] flex items-center justify-center rounded-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M6.62 10.79a15.93 15.93 0 0 0 6.83 6.83l2.2-2.2a1 1 0 0 1 1.06-.24c1.12.45 2.33.69 3.59.69a1 1 0 0 1 1 1v3.49a1 1 0 0 1-1 1A17.94 17.94 0 0 1 2 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.26.24 2.47.69 3.59a1 1 0 0 1-.24 1.06l-2.2 2.2z"
                />
              </svg>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;