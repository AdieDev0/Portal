import React from "react";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Log = () => {
  const handleLogin = () => {
    alert("hello");
  };

  return (
    <div>
      <GoogleOAuthProvider clientId="851664458844-rdold58s192scdfitlnja7i6etftn332.apps.googleusercontent.com">
        <div className="min-h-screen flex items-center justify-center w-full">
          <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
            <h1 className="text-2xl font-bold text-center mb-4">
              Welcome Back!
            </h1>
            <form action="#">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your password"
                  required
                />
                <a
                  href="#"
                  className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
                    defaultChecked
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  to="/signup"
                  className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create Account
                </Link>
              </div>
              <div className="">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    const decoded = jwtDecode(credentialResponse?.credential);
                    console.log(decoded);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </GoogleOAuthProvider>
    </div>
  );
};

export default Log;
