import React from 'react';

const Error = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-red-100">
      <h1 className="text-4xl text-red-500 font-bold mb-4">Error</h1>
      <p className="text-lg text-gray-700">Something went wrong. Please try again later.</p>
    </div>
  );
}

export default Error;

