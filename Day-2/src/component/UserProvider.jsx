import React, { useEffect, useState } from "react";
import Context from "../context/Context";

export default function UserProvider({ children }) {
  const [eusername, setEuserName] = useState("");
  const [epassword, setEpassword] = useState("");
  const [user, setUser] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);

  const handleLoggedIn = (e) => {
    e.preventDefault();
    const foundUser = user.find(
      (users) => users.username === eusername && users.password === epassword
    );

    if (foundUser) {
      alert("Log in success");
      setIsLoggedIn(true);
    } else {
      alert("Log in failed");
      setIsLoggedIn(false);
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const newUser = { username: eusername, password: epassword };
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("User added : ", data);
        return fetch("http://localhost:3000/user");
      })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
    setEuserName("");
    setEpassword("");
  };

  return (
    <Context.Provider
      value={{
        user,
        eusername,
        epassword,
        setEuserName,
        setEpassword,
        isLoggedIn,
        setIsLoggedIn,
        handleLoggedIn,
        handleSignUp,
      }}
    >
      {children}
    </Context.Provider>
  );
}
