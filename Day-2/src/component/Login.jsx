import React, { useContext } from "react";
import Context from "../context/Context";
import { Link } from "react-router-dom";

export default function Login() {
  const { eusername, epassword, setEpassword, setEuserName, handleLoggedIn } =
    useContext(Context);

  return (
    <div className="flex justify-center bg-slate-200 items-center h-screen">
      <div className="container w-80 bg-cyan-800 text-white p-4 rounded-2xl shadow-xl">
        <h1 className="text-center text-3xl font-medium py-3">Login Here</h1>
        <form onSubmit={handleLoggedIn}>
          <label htmlFor="username">Enter your username</label>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            className="w-full my-2 p-1 rounded-full text-slate-800 focus:border-none outline-none px-2"
            value={eusername}
            onChange={(e) => setEuserName(e.target.value)}
          />
          <br />
          <label htmlFor="password">Enter your password</label>
          <br />
          <input
            type="password"
            id="password"
            value={epassword}
            onChange={(e) => setEpassword(e.target.value)}
            className="w-full my-2 p-1 rounded-full text-slate-800 focus:border-none outline-none px-2"
          />
          <input
            type="submit"
            value="Submit"
            className="w-full my-4 bg-gray-200 py-1 hover:bg-gray-400 hover:text-white rounded-full text-black"
          />
          <br />
          <p className="text-center">
            Don't have an account &nbsp;
            <Link to="/signup" className="text-slate-200 underline">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
