import React from "react";

const Login = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" className="border p-2 w-full" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" className="border p-2 w-full" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4">Login</button>
      </form>
    </div>
  );
};

export default Login;