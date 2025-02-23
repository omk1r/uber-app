import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ConfirmRidePopup = ({
  setConfirmRidePopupPanel,
  setRidePopupPanel,
  ride,
}) => {
  const [OTP, setOTP] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/rides/start-ride`,
      {
        params: { rideId: ride._id, otp: OTP },

        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );

    console.log(response);

    if (response.status === 200) {
      setConfirmRidePopupPanel(false);
      setRidePopupPanel(false);
      navigate('/captain-riding', { state: { ride: ride } });
    }
  };
  return (
    <>
      <div className="flex justify-between max-w-sm">
        <h3 className="mb-5 font-semibold text-2xl">
          Confirm this ride to start
        </h3>

        <h5
          onClick={() => setConfirmRidePopupPanel(false)}
          className="text-2xl"
        >
          <i className="ri-arrow-down-s-line"></i>
        </h5>
      </div>

      <div className="flex justify-between items-center bg-yellow-300 mt-2 p-3 rounded-xl">
        <div className="flex items-center gap-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9zilY2Yu2hc19pDZFxgWDTUDy5DId7ITqA&s"
            alt=""
            className="rounded-full w-10 h-10 object-cover"
          />
          <h2 className="font-medium text-xl capitalize">
            {ride?.user.fullname.firstname}
          </h2>
        </div>
        <h5 className="font-semibold text-lg">2.2 KM</h5>
      </div>

      <div className="flex flex-col justify-between items-center gap-2 my-4">
        <div className="w-full">
          <div className="flex items-center gap-5 p-3 border-gray-200 border-b-2">
            <i className="ri-map-pin-2-line"></i>
            <div>
              <h3 className="font-medium text-lg">562/11-A</h3>
              <p className="-mt-1 text-gray-500">{ride?.pickup}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-gray-200 border-b-2">
            <i className="ri-map-pin-3-fill"></i>
            <div>
              <h3 className="font-medium text-lg">562/11-A</h3>
              <p className="-mt-1 text-gray-500">{ride?.destination}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-fill"></i>
            <div>
              <h3 className="font-medium text-lg">₹{ride?.fare}</h3>
              <p className="-mt-1 text-gray-500">Cash</p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              type="text"
              value={OTP}
              onChange={(e) => setOTP(e.target.value)}
              className="bg-[#eee] my-2 px-6 py-4 rounded-lg w-full font-mono text-lg"
              placeholder="Enter OTP"
            />
            <button className="flex justify-center items-center bg-green-600 mt-2 p-3 rounded-lg w-full font-semibold text-white">
              Confirm
            </button>
            <button
              onClick={() => {
                setConfirmRidePopupPanel(false);
                setRidePopupPanel(false);
              }}
              className="bg-red-500 mt-1 p-3 rounded-lg w-full font-semibold text-white"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ConfirmRidePopup;
