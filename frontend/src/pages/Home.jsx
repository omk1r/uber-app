import React, { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24,
        opacity: 1,
        duration: 0.5,
        ease: 'sine.in',
      });
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'sine.inOut',
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [vehiclePanel]);

  return (
    <div className="relative h-screen overflow-hidden">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
        className="top-5 left-5 absolute w-20"
      />
      <div className="w-full">
        <img
          src="https://cdn.dribbble.com/users/914217/screenshots/4506553/media/7be2be6f43f64c27946d1068a602ece1.gif"
          alt=""
          className="h-screen object-cover"
        />
      </div>
      <div className="top-0 absolute flex flex-col justify-end w-full h-screen">
        <div className="relative flex flex-col justify-center bg-white p-6 h-[30%]">
          {panelOpen && (
            <h5 onClick={() => setPanelOpen(false)} className="text-2xl">
              <i className="ri-arrow-down-s-line"></i>
            </h5>
          )}

          {!panelOpen && (
            <h4 className="font-semibold text-3xl">Find a trip</h4>
          )}

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="relative"
          >
            <div className="top-1/2 left-5 absolute bg-gray-500 opacity-50 rounded-full w-[2px] h-14 -translate-y-1/2 line"></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] my-2 px-8 py-2 rounded-lg w-full text-base"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] my-2 px-8 py-2 rounded-lg w-full text-base"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-0">
          <LocationSearchPanel
            vehiclePanel={vehiclePanel}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="bottom-0 z-10 fixed bg-white px-3 py-8 w-full translate-y-full"
      >
        <h3 className="mb-5 font-semibold text-2xl">Choose a vehicle</h3>
        <div className="flex justify-between items-center mb-2 p-3 border-2 border-gray-200 active:border-black rounded-xl w-full">
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
          <h2 className="font-semibold text-xl">₹193.20</h2>
        </div>
        <div className="flex justify-between items-center mb-2 p-3 border-2 border-gray-200 active:border-black rounded-xl w-full">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_470,w_835/v1657101905/assets/af/2c5369-2dec-4ea6-b67b-fba6e4a01f49/original/hcv_final.png"
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
          <h2 className="font-semibold text-xl">₹193.20</h2>
        </div>
        <div className="flex justify-between items-center mb-2 p-3 border-2 border-gray-200 active:border-black rounded-xl w-full">
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
          <h2 className="font-semibold text-xl">₹66.50</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
