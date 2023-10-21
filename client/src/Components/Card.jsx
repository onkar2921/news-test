import React from "react";

export default function Card({ item }) {
  return (
    <>
      <div className="w-full h-full p-8">
        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transform hover:scale-105 transition-transform border-2 ">
          <h2 className="text-2xl font-semibold mb-2 text-blue-500 ">
            {item?.title}
          </h2>
          <p className="text-black flex text-center ">
            <h6 className="text-red-400">Author:-</h6>
          {item?.author}
          </p>
        </div>
      </div>
    </>
  );
}
