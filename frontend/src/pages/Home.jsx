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

  console.log('page relaoded');

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
        ease: 'power2.out',
      });
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
      });
    }
  }, [panelOpen]);

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
          <LocationSearchPanel />
        </div>
      </div>
    </div>
  );
};

export default Home;
