import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      username: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
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
          <h3 className="mb-2 font-medium text-lg">What's your name ?</h3>
          <div className="flex gap-4 mb-5">
            <input
              required
              className="bg-[#eeee] px-4 py-2 rounded w-1/2 text-lg placeholder:text-base"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
            />
            <input
              required
              className="bg-[#eeee] px-4 py-2 rounded w-1/2 text-lg placeholder:text-base"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
            />
          </div>
          <h3 className="mb-2 font-medium text-lg">What's your email ?</h3>
          <input
            required
            className="bg-[#eeee] mb-5 px-4 py-2 rounded w-full text-lg placeholder:text-base"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
          />

          <h3 className="mb-2 font-medium text-lg">Enter Password</h3>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="bg-[#eeee] mb-5 px-4 py-2 rounded w-full text-lg placeholder:text-base"
          />

          <button className="bg-[#111] mb-3 px-4 py-2 rounded w-full font-semibold text-lg text-white placeholder:text-base">
            Signup
          </button>
        </form>
        <p className="text-center">
          Already have an account ?{' '}
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          By proceeding, you consent to get calls, WhatsApp or SMS messages,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
