import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmRidePopup = ({ setConfirmRidePopupPanel, setRidePopupPanel }) => {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold text-2xl">Confirm this ride to start</h3>

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
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              type="text"
              className="bg-[#eee] my-2 px-6 py-4 rounded-lg w-full font-mono text-lg"
              placeholder="Enter OTP"
            />
            <Link
              to={'/captain-riding'}
              className="flex justify-center items-center bg-green-600 mt-2 p-3 rounded-lg w-full font-semibold text-white"
            >
              Confirm
            </Link>
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
    </div>
  );
};

export default ConfirmRidePopup;
