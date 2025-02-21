import React, { useContext } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainDetails = () => {
  const { captain } = useContext(CaptainDataContext);
  return (
    <div>
      {' '}
      <div className="flex justify-around items-center">
        <div className="flex justify-start items-center gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9zilY2Yu2hc19pDZFxgWDTUDy5DId7ITqA&s"
            alt=""
            className="rounded-full w-10 h-10 object-cover"
          />
          <h4 className="font-medium text-lg capitalize">
            {captain.fullname.firstname} {captain.fullname.lastname}
          </h4>
        </div>
        <div>
          <h4 className="font-semibold text-xl">₹295.20</h4>
          <p className="text-gray-600 text-sm">Earned</p>
        </div>
      </div>
      <div className="flex justify-center items-start gap-5 bg-gray-100 mt-6 p-3 rounded-2xl">
        <div className="text-center">
          <i className="mb-2 font-thin text-3xl ri-timer-2-line"></i>
          <h5 className="font-medium text-lg">10.2</h5>
          <p className="text-gray-600 text-sm">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="mb-2 ri-speed-up-line font-thin text-3xl"></i>
          <h5 className="font-medium text-lg">10.2</h5>
          <p className="text-gray-600 text-sm">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="mb-2 font-thin text-3xl ri-booklet-line"></i>
          <h5 className="font-medium text-lg">10.2</h5>
          <p className="text-gray-600 text-sm">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
