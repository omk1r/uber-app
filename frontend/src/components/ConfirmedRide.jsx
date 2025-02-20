import React from 'react';

const ConfirmedRide = ({
  setConfirmedRidePanel,
  setVehicleFound,
  createRide,
  pickup,
  destination,
  fare,
  vehicleType,
}) => {
  return (
    <>
      <div className="flex justify-between">
        <h3 className="mb-5 font-semibold text-2xl">Confirm your ride</h3>

        <h5 onClick={() => setConfirmedRidePanel(false)} className="text-2xl">
          <i className="ri-arrow-down-s-line"></i>
        </h5>
      </div>

      <div className="flex flex-col justify-between items-center gap-2">
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png"
          alt=""
          className="h-20"
        />
        <div className="mt-5 w-full">
          <div className="flex items-center gap-5 p-3 border-gray-200 border-b-2">
            <i className="ri-map-pin-2-line"></i>
            <div>
              <h3 className="font-medium text-lg">562/11-A</h3>
              <p className="-mt-1 text-gray-500">{pickup}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-gray-200 border-b-2">
            <i className="ri-map-pin-3-fill"></i>
            <div>
              <h3 className="font-medium text-lg">562/11-A</h3>
              <p className="-mt-1 text-gray-500">{destination}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-fill"></i>
            <div>
              <h3 className="font-medium text-lg">₹{fare[vehicleType]}</h3>
              <p className="-mt-1 text-gray-500">Cash</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            setVehicleFound(true);
            setConfirmedRidePanel(false);
            createRide();
          }}
          className="bg-green-600 mt-5 p-2 rounded-lg w-full font-semibold text-white"
        >
          Confirm
        </button>
      </div>
    </>
  );
};

export default ConfirmedRide;
