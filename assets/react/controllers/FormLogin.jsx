import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Add your logic for handling form submission here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mt-64 w-8/12 m-auto">
      <h1 className="text-2xl font-bold">Connexion</h1>
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div className="flex">
          <input
            type="email"
            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md p-2 rounded-md"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
      </div>
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Mot de passe
        </label>
        <div className="flex">
          <input
            type="password"
            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md p-2 rounded-md"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold rounded-md py-2 px-4 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      >
        Connexion
      </button>
    </form>
    
  );
};

export default LoginForm;