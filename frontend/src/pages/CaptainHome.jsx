import { Link } from 'react-router-dom';
import CaptainDetails from '../components/CaptainDetails';
import RidePopup from '../components/RidePopup';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import ConfirmRidePopup from '../components/ConfirmRidePopup';

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);

  useGSAP(() => {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [ridePopupPanel]);

  useGSAP(() => {
    if (confirmRidePopupPanel) {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [confirmRidePopupPanel]);

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
          <CaptainDetails />
        </div>

        <div
          ref={ridePopupPanelRef}
          className="bottom-0 z-10 fixed bg-white px-3 py-8 w-full max-w-xl translate-y-full"
        >
          <RidePopup
            setRidePopupPanel={setRidePopupPanel}
            setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          />
        </div>

        <div
          ref={confirmRidePopupPanelRef}
          className="bottom-0 z-10 fixed bg-white px-3 py-8 w-full max-w-xl h-[90%] translate-y-full"
        >
          <ConfirmRidePopup
            setRidePopupPanel={setRidePopupPanel}
            setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          />
        </div>
      </div>
    </div>
  );
};

export default CaptainHome;
