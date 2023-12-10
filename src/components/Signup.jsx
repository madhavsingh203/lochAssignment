import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = () => {
    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern?.test(email)) {
      // Display an error message if the email is not valid
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Clear any previous error messages
    setErrorMessage("");

    window.location.href = "https://app.loch.one/welcome";
  };

  return (
    <form>
      <div className="w-full h-full p-4 ovwer flex flex-col gap-4 md:justify-center break-words items-center md:h-[100vh]">
        <div className="px-2 flex flex-col gap-6 w-80">
          <h1 className="text-3xl font-semibold text-gray-300">
            Sign up for exclusive access
          </h1>
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            className="h-10 border rounded-lg font-light p-4 py-6"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={handleSignUp}
            className="bg-black text-white p-2 rounded-lg"
          >
            Get started
          </button>
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
        </div>
        <p className="text-lg font-semibold">
          You’ll receive an email with an invite link to join.
        </p>
      </div>
    </form>
  );
};

export default Signup;
