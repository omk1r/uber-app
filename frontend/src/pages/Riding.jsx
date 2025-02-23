import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Added useLocation
import { useEffect, useContext } from 'react';
import { SocketContext } from '../context/SocketContext';
import { useNavigate } from 'react-router-dom';
// import LiveTracking from '../components/LiveTracking';

const Riding = () => {
  const location = useLocation();
  const { ride } = location.state || {}; // Retrieve ride data
  const { socket } = useContext(SocketContext);
  const navigate = useNavigate();

  socket.on('ride-ended', () => {
    navigate('/home');
  });

  return (
    <div className="h-screen">
      <Link
        to="/home"
        className="top-2 right-2 fixed flex justify-center items-center bg-white rounded-full w-10 h-10"
      >
        <i className="ri-home-5-line font-medium text-lg"></i>
      </Link>
      <div className="h-1/2">{/* <LiveTracking /> */}</div>
      <div className="p-4 h-1/2">
        <div className="flex justify-between items-center">
          <img
            className="h-12"
            src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
            alt=""
          />
          <div className="text-right">
            <h2 className="font-medium text-lg capitalize">
              {ride?.captain.fullname.firstname}
            </h2>
            <h4 className="-mt-1 -mb-1 font-semibold text-xl uppercase">
              {ride?.captain.vehicle.plate}
            </h4>
            <p className="text-gray-600 text-sm">Maruti Suzuki Alto</p>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center gap-2">
          <div className="mt-5 w-full">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="ri-map-pin-2-fill text-lg"></i>
              <div>
                <h3 className="font-medium text-lg">562/11-A</h3>
                <p className="-mt-1 text-gray-600 text-sm">
                  {ride?.destination}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3">
              <i className="ri-currency-line"></i>
              <div>
                <h3 className="font-medium text-lg">₹{ride?.fare} </h3>
                <p className="-mt-1 text-gray-600 text-sm">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-green-600 mt-5 p-2 rounded-lg w-full font-semibold text-white">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
