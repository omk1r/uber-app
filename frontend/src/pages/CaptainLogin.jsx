import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captainData
    );
    if (response.status === 200) {
      const data = response.data;
      console.log(response.data);
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }

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
            className="bg-[#eeee] mb-7 px-4 py-2 rounded w-full placeholder:text-base text-lg"
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
            className="bg-[#eeee] mb-7 px-4 py-2 rounded w-full placeholder:text-base text-lg"
          />

          <button className="bg-[#111] mb-3 px-4 py-2 rounded w-full font-semibold text-white placeholder:text-base text-lg">
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
          className="flex justify-center items-center bg-[#d5622d] mb-7 px-4 py-2 rounded w-full font-semibold text-white placeholder:text-base text-lg"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
