import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex flex-col justify-between p-7 h-screen">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
          className="mb-10 w-20"
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
          New here ?{' '}
          <Link to="/signup" className="text-blue-600">
            Create New Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="flex justify-center items-center bg-[#10b461] mb-7 px-4 py-2 rounded w-full font-semibold text-lg text-white placeholder:text-base"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
