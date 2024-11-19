"use client";

import React from "react";

const Error = () => {
  return (
    <div className="flex justify-center align-middle items-center w-[100vw] h-[100vh] text-center text-gray-200">
      <div>
        <h1 className="text-2xl opacity-60 hover:opacity-100">Something went wrong !</h1>
        <p className="mt-2 opacity-60 hover:opacity-100">please try again in some time</p>
      </div>
    </div>
  );
};

export default Error;

