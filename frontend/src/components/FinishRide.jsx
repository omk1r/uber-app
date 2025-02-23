import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FinishRide = (props) => {
  const navigate = useNavigate();

  async function endRide() {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/rides/end-ride`,
      {
        rideId: props.ride._id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );

    if (response.status === 200) {
      navigate('/captain-home');
    }
  }

  return (
    <div>
      <h5
        className="top-0 absolute p-1 w-[93%] text-center"
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-line text-gray-200 text-3xl"></i>
      </h5>
      <h3 className="mb-5 font-semibold text-2xl">Finish this Ride</h3>
      <div className="flex justify-between items-center mt-4 p-4 border-2 border-yellow-400 rounded-lg">
        <div className="flex items-center gap-3">
          <img
            className="rounded-full w-12 h-12 object-cover"
            src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg"
            alt=""
          />
          <h2 className="font-medium text-lg">
            {props.ride?.user.fullname.firstname}
          </h2>
        </div>
        <h5 className="font-semibold text-lg">2.2 KM</h5>
      </div>
      <div className="flex flex-col justify-between items-center gap-2">
        <div className="mt-5 w-full">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="font-medium text-lg">562/11-A</h3>
              <p className="-mt-1 text-gray-600 text-sm">
                {props.ride?.pickup}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <h3 className="font-medium text-lg">562/11-A</h3>
              <p className="-mt-1 text-gray-600 text-sm">
                {props.ride?.destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="font-medium text-lg">₹{props.ride?.fare} </h3>
              <p className="-mt-1 text-gray-600 text-sm">Cash</p>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full">
          <button
            onClick={endRide}
            className="flex justify-center bg-green-600 mt-5 p-3 rounded-lg w-full font-semibold text-white text-lg"
          >
            Finish Ride
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
