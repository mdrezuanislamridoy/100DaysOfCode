import React from "react";
import { useContext } from "react";
import Context from "../context/Context";

export default function ({ setHideShow }) {
  const {
    data,
    setData,
    heading,
    setHeading,
    description,
    setDescription,
    fetchData,
  } = useContext(Context);

  const datas = { data, heading };
  const onIconClick = () => {
    setHideShow(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      heading,
      description,
    };

    fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(() => {
        fetchData();
        onIconClick();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="w-96 m-auto p-2">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold text-gray-200">Create a Post</h2>
        <i
          onClick={onIconClick}
          className="fa-regular fa-circle-xmark cursor-pointer text-white"
        ></i>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col"></div>
        <div className="flex flex-col">
          <label
            htmlFor="heading"
            className="text-lg font-medium mb-2 text-white"
          >
            Create a Heading
          </label>
          <input
            type="text"
            id="heading"
            className="border border-gray-300 rounded-lg p-2 bg-gray-50"
            placeholder="Enter heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="desc" className="text-lg font-medium mb-2 text-white">
            Create a Description
          </label>
          <textarea
            id="desc"
            className="border border-gray-300 rounded-lg p-2 resize-none bg-gray-50"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
