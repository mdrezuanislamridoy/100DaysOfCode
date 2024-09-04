import React, { useContext } from "react";
import bgImage from "../assets/heroBg.jpg";
import Context from "../context/Context";

export default function HomePage() {
  const { data } = useContext(Context);

  return (
    <>
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('${bgImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-lg md:text-xl mb-8">
            We are glad to have you here. Explore and discover more about us.
          </p>
          <a
            href="#get-started"
            className="bg-white text-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>
      <div className="py-3 h-52 flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl font-bold my-2">Important Information</h2>
        <p>
          Read about the latest updates and important information related to our
          blog.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((val) => (
            <div
              key={val.id}
              className="p-3 m-2 border border-black rounded-lg text-center"
            >
              <h2 className="text-xl font-semibold">{val.heading}</h2>
              <p>{val.description}</p>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </>
  );
}
