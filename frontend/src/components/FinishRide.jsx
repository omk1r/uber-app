import React from 'react';
import { Link } from 'react-router-dom';

const FinishRide = ({ setFinishRidePanel }) => {
  return (
    <>
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold text-2xl">Finish this Ride</h3>

        <h5 onClick={() => setFinishRidePanel(false)} className="text-2xl">
          <i className="ri-arrow-down-s-line"></i>
        </h5>
      </div>

      <div className="flex justify-between items-center mt-2 p-3 border-2 border-yellow-300 rounded-xl">
        <div className="flex items-center gap-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9zilY2Yu2hc19pDZFxgWDTUDy5DId7ITqA&s"
            alt=""
            className="rounded-full w-10 h-10 object-cover"
          />
          <h2 className="font-medium text-xl">Urja saini</h2>
        </div>
        <h5 className="font-semibold text-lg">2.2 KM</h5>
      </div>

      <div className="flex flex-col justify-between items-center gap-2 my-4">
        <div className="w-full">
          <div className="flex items-center gap-5 p-3 border-gray-200 border-b-2">
            <i className="ri-map-pin-2-line"></i>
            <div>
              <h3 className="font-medium text-lg">562/11-A</h3>
              <p className="-mt-1 text-gray-500">Kankariya Talab, Bhopal</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-gray-200 border-b-2">
            <i className="ri-map-pin-3-fill"></i>
            <div>
              <h3 className="font-medium text-lg">562/11-A</h3>
              <p className="-mt-1 text-gray-500">Kankariya Talab, Bhopal</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-fill"></i>
            <div>
              <h3 className="font-medium text-lg">₹193.20</h3>
              <p className="-mt-1 text-gray-500">Cash</p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <Link
            to={'/captain-home'}
            className="flex justify-center items-center bg-green-600 mt-2 p-3 rounded-lg w-full font-semibold text-white"
          >
            Finish Ride
          </Link>
          <p className="mt-2 font-medium text-red-500 text-sm text-center">
            Click on finish ride if you have completed the payment.
          </p>
        </div>
      </div>
    </>
  );
};

export default FinishRide;
