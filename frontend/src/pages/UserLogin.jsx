import React from 'react';

const UserLogin = () => {
  return (
    <div className="p-7">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
          className="mb-10 w-20"
        />
        <form action="">
          <h3 className="mb-2 font-medium text-lg">What's your email ?</h3>
          <input
            required
            className="bg-[#eeee] mb-7 px-4 py-2 rounded w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="mb-2 font-medium text-lg">Enter Password</h3>
          <input
            type="password"
            name=""
            id="password"
            placeholder="password"
            className="bg-[#eeee] mb-7 px-4 py-2 rounded w-full text-lg placeholder:text-base"
          />

          <button className="bg-[#111] mb-7 px-4 py-2 rounded w-full font-semibold text-lg text-white placeholder:text-base">
            Login
          </button>
        </form>
      </div>
      <div>
        <button className="bg-[#111] mb-7 px-4 py-2 rounded w-full font-semibold text-lg text-white placeholder:text-base">
          Sign in as Captain
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
