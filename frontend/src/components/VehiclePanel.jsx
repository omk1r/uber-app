import React from 'react';

const VehiclePanel = ({
  setVehiclePanelOpen,
  setConfirmedRidePanel,
  fare,
  selectVehicle,
}) => {
  return (
    <>
      {' '}
      <div className="flex justify-between">
        <h3 className="mb-5 font-semibold text-2xl">Choose a vehicle</h3>

        <h5 onClick={() => setVehiclePanelOpen(false)} className="text-2xl">
          <i className="ri-arrow-down-s-line"></i>
        </h5>
      </div>
      <div
        onClick={() => {
          setConfirmedRidePanel(true);
          setVehiclePanelOpen(false);
          selectVehicle('car');
        }}
        className="flex justify-between items-center mb-2 p-3 border-2 border-gray-200 active:border-black rounded-xl w-full"
      >
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png"
          alt=""
          className="h-12"
        />
        <div className="w-1/2">
          <h4 className="font-medium text-lg">
            UberGo
            <span>
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="text-gray-500 text-sm">Affordable, compact rides</p>
        </div>
        <h2 className="font-semibold text-xl">₹{fare.car}</h2>
      </div>
      <div
        onClick={() => {
          setConfirmedRidePanel(true);
          setVehiclePanelOpen(false);
          selectVehicle('auto');
        }}
        className="flex justify-between items-center mb-2 p-3 border-2 border-gray-200 active:border-black rounded-xl w-full"
      >
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
          className="h-12"
        />
        <div className="w-1/2">
          <h4 className="font-medium text-lg">
            UberGo
            <span>
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="text-gray-500 text-sm">Affordable, compact rides</p>
        </div>
        <h2 className="font-semibold text-xl">₹{fare.auto}</h2>
      </div>
      <div
        onClick={() => {
          setConfirmedRidePanel(true);
          setVehiclePanelOpen(false);
          selectVehicle('moto');
        }}
        className="flex justify-between items-center mb-2 p-3 border-2 border-gray-200 active:border-black rounded-xl w-full"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTJw6dzEo1MYXOAbONCG1oL82rxU_Bitb-g&s"
          alt=""
          className="h-12"
        />
        <div className="w-1/2">
          <h4 className="font-medium text-lg">
            Moto
            <span>
              <i className="ri-user-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="text-gray-500 text-sm">Affordable, motorcycle ride</p>
        </div>
        <h2 className="font-semibold text-xl">₹{fare.moto}</h2>
      </div>
    </>
  );
};

export default VehiclePanel;
