import React from 'react';

const Home = () => {
  return (
    <div className="relative h-screen">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
        className="top-5 left-5 absolute w-20"
      />
      <div className="w-screen h-screen">
        <img
          src="https://cdn.dribbble.com/users/914217/screenshots/4506553/media/7be2be6f43f64c27946d1068a602ece1.gif"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="top-0 absolute bg-white p-5 w-full">
        <h4 className="font-semibold text-3xl">Find a trip</h4>
        <form action="">
          <input
            className="bg-[#eee] mt-3 px-8 py-2 rounded-lg w-full text-lg"
            type="text"
            placeholder="Add a pick-up location"
          />
          <input
            className="bg-[#eee] mt-3 px-8 py-2 rounded-lg w-full text-lg"
            type="text"
            placeholder="Enter your destination"
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
