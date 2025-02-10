import React from "react";
const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 to-indigo-600 p-6">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl text-center w-full max-w-sm">
        <h2 className="text-white text-3xl font-semibold mb-6">Sign In</h2>
        <p className="text-gray-200 mb-6">Choose your role to continue</p>
        
        <div className="space-y-4">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-all">
            Sign in as User
          </button>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-all">
            Sign in as Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
