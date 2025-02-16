import React from 'react';
import { Link } from 'react-router-dom';

const CaptainHome = () => {
  return (
    <div>
      <div className="relative h-screen">
        <div className="top-0 fixed flex justify-between items-center p-6 w-full">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt=""
            className="w-20"
          />
          <Link
            to={'/captain-home'}
            className="flex justify-center items-center bg-white rounded-full w-10 h-10"
          >
            <i className="font-medium text-lg ri-logout-box-r-line"></i>
          </Link>
        </div>
        <div className="h-3/5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRUqoICN37QQVovjChZ_y4tgtGjIhNSHNC7w&s"
            alt=""
            className="h-full"
          />
        </div>

        <div className="p-6 h-2/5">
          <div className="flex justify-around items-center">
            <div className="flex justify-start items-center gap-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9zilY2Yu2hc19pDZFxgWDTUDy5DId7ITqA&s"
                alt=""
                className="rounded-full w-10 h-10 object-cover"
              />
              <h4 className="font-medium text-lg">Harsh Patel</h4>
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
      </div>
    </div>
  );
};

export default CaptainHome;
