import React, { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
import axios from 'axios';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmedRidePanel, setConfirmedRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(null);
  const [fare, setFare] = useState({});
  const [vehicleType, setVehicleType] = useState(null);

  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmedRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const handlePickupChange = async (e) => {
    setPickup(e.target.value);
    if (pickup.length >= 3) {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
          {
            params: { input: e.target.value },
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
        setPickupSuggestions(response.data);
      } catch {
        // handle error
      }
    }
  };

  const handleDestinationChange = async (e) => {
    setDestination(e.target.value);
    if (destination.length >= 3) {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
          {
            params: { input: e.target.value },
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
        setDestinationSuggestions(response.data);
      } catch (err) {
        console.log(err);
      }
    }
  };

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
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)',
        ease: 'sine.in',
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
        ease: 'sine.out',
      });
    }
  }, [vehiclePanelOpen]);

  useGSAP(() => {
    if (confirmedRidePanel) {
      gsap.to(confirmedRidePanelRef.current, {
        transform: 'translateY(0)',
        ease: 'sine.in',
      });
    } else {
      gsap.to(confirmedRidePanelRef.current, {
        transform: 'translateY(100%)',
        ease: 'sine.out',
      });
    }
  }, [confirmedRidePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)',
        ease: 'sine.in',
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)',
        ease: 'sine.out',
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)',
        ease: 'sine.in',
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)',
        ease: 'sine.out',
      });
    }
  }, [waitingForDriver]);

  async function createRide() {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/rides/create`,
      {
        pickup,
        destination,
        vehicleType,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    console.log(response.data);
  }

  async function findTrip() {
    setVehiclePanelOpen(true);
    setPanelOpen(false);

    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/rides/get-fare`,
      {
        params: { pickup, destination },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );

    setFare(response.data);
  }

  return (
    <div className="relative w-full max-w-xl h-screen overflow-hidden">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
        className="top-5 left-5 absolute w-20"
      />

      <div className="w-full">
        <img
          src="https://cdn.dribbble.com/users/914217/screenshots/4506553/media/7be2be6f43f64c27946d1068a602ece1.gif"
          alt=""
          className="w-full h-screen object-cover"
        />
      </div>

      {/* location search panel */}
      <div className="top-0 absolute flex flex-col justify-end w-full h-full">
        <div className="relative flex flex-col justify-center bg-white p-6 h-[35%]">
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
              onClick={() => {
                setPanelOpen(true);
                setActiveField('pickup');
              }}
              value={pickup}
              onChange={handlePickupChange}
              className="bg-[#eee] my-2 px-8 py-2 rounded-lg w-full text-base"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
                setActiveField('destination');
              }}
              value={destination}
              onChange={handleDestinationChange}
              className="bg-[#eee] my-2 px-8 py-2 rounded-lg w-full text-base"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
          {panelOpen && (
            <button
              onClick={findTrip}
              className="bg-black mt-3 px-4 py-2 rounded-lg w-full text-white"
            >
              Find Trip
            </button>
          )}
        </div>

        {/* location search history panel */}
        <div ref={panelRef} className="bg-white h-0 overflow-y-scroll">
          <LocationSearchPanel
            suggestions={
              activeField === 'pickup'
                ? pickupSuggestions
                : destinationSuggestions
            }
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
          />
        </div>
      </div>

      {/* vehicle panel */}
      <div
        ref={vehiclePanelRef}
        className="bottom-0 z-10 fixed bg-white px-3 py-8 w-full max-w-xl translate-y-full"
      >
        <VehiclePanel
          selectVehicle={setVehicleType}
          fare={fare}
          setVehiclePanelOpen={setVehiclePanelOpen}
          setConfirmedRidePanel={setConfirmedRidePanel}
        />
      </div>

      {/* confirmed vehicle panel */}
      {confirmedRidePanel && (
        <div
          ref={confirmedRidePanelRef}
          className="bottom-0 z-10 fixed bg-white px-3 py-8 w-full max-w-xl translate-y-full"
        >
          <ConfirmedRide
            pickup={pickup}
            destination={destination}
            fare={fare}
            vehicleType={vehicleType}
            createRide={createRide}
            setConfirmedRidePanel={setConfirmedRidePanel}
            setVehicleFound={setVehicleFound}
          />
        </div>
      )}

      {vehicleFound && (
        <div
          ref={vehicleFoundRef}
          className="bottom-0 z-10 fixed bg-white px-3 py-8 w-full max-w-xl translate-y-full"
        >
          <LookingForDriver
            pickup={pickup}
            destination={destination}
            fare={fare}
            vehicleType={vehicleType}
            setVehicleFound={setVehicleFound}
          />
        </div>
      )}

      <div
        ref={waitingForDriverRef}
        className="bottom-0 z-10 fixed bg-white px-3 py-8 w-full max-w-xl"
      >
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
