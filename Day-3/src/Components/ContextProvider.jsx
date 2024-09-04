import React, { useEffect, useState } from "react";
import Context from "../context/Context";

export default function ContextProvider({ children }) {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/posts");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Context.Provider
      value={{
        data,
        setData,
        heading,
        setHeading,
        description,
        setDescription,
        fetchData,
      }}
    >
      {children}
    </Context.Provider>
  );
}
