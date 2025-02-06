import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div>
      <div className="flex flex-col justify-between bg-[url('https://images.unsplash.com/photo-1515543582370-4cff31e54e8b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center pt-8 w-full h-screen">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
          className="ml-8 w-20"
        />
        <div className="bg-white px-4 py-4 pb-7">
          <h2 className="font-bold text-3xl">Get started with Uber</h2>
          <Link
            to="/login"
            className="flex justify-center items-center bg-black mt-4 py-3 rounded w-full text-white"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
