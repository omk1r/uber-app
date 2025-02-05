import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    });
    setEmail('');
    setPassword('');
  };
  return (
    <div className="flex flex-col justify-between p-7 h-screen">
      <div>
        <img
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
          className="mb-4 w-20"
        />
        <form onSubmit={submitHandler}>
          <h3 className="mb-2 font-medium text-lg">What's your email ?</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeee] mb-7 px-4 py-2 rounded w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="mb-2 font-medium text-lg">Enter Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
            placeholder="password"
            className="bg-[#eeee] mb-7 px-4 py-2 rounded w-full text-lg placeholder:text-base"
          />

          <button className="bg-[#111] mb-3 px-4 py-2 rounded w-full font-semibold text-lg text-white placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          Wanna Join our fleet ?{' '}
          <Link to="/captain-signup" className="text-blue-600">
            Register
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="flex justify-center items-center bg-[#d5622d] mb-7 px-4 py-2 rounded w-full font-semibold text-lg text-white placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
