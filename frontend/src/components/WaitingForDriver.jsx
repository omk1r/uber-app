import React from 'react';

const WaitingForDriver = () => {
  return (
    <>
      <div className="flex justify-between">
        <h3 className="mb-5 font-semibold text-2xl">
          Meet at the pickup point
        </h3>

        <h5 className="text-2xl">
          <i className="ri-arrow-down-s-line"></i>
        </h5>
      </div>
      <div className="flex justify-evenly items-center">
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png"
          alt=""
          className="h-12"
        />
        <div className="text-right">
          <h2 className="font-medium text-lg">Sarthak</h2>
          <h4 className="-mt-1 -mb-1 font-semibold text-xl">MH 20 EQ 2345</h4>
          <p className="text-gray-600 text-sm">White Suzuki Espresso</p>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center gap-2">
        <div className="mt-5 w-full">
          <div className="flex items-center gap-5 p-3 border-gray-200 border-b-2">
            <i className="ri-map-pin-2-line"></i>
            <div>
              <h3 className="font-medium text-lg">562/11-A</h3>
              <p className="-mt-1 text-gray-500">Kankariya Talab, Bhopal</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-gray-200 border-b-2">
            <i class="ri-map-pin-3-fill"></i>
            <div>
              <h3 className="font-medium text-lg">562/11-A</h3>
              <p className="-mt-1 text-gray-500">Kankariya Talab, Bhopal</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i class="ri-currency-fill"></i>
            <div>
              <h3 className="font-medium text-lg">₹193.20</h3>
              <p className="-mt-1 text-gray-500">Cash</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaitingForDriver;
