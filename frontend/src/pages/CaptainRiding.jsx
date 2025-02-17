import { Link } from 'react-router-dom';
import FinishRide from '../components/FinishRide';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import gsap from 'gsap';

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [finishRidePanel]);
  return (
    <>
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
        <div className="h-4/5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRUqoICN37QQVovjChZ_y4tgtGjIhNSHNC7w&s"
            alt=""
            className="h-full"
          />
        </div>

        <div
          className="relative flex justify-between items-center bg-yellow-400 p-6 h-1/5"
          onClick={() => setFinishRidePanel(true)}
        >
          <h5 className="top-0 absolute p-1 w-[90%] text-2xl text-center">
            <i className="ri-arrow-up-s-line text-3xl"></i>
          </h5>
          <h4 className="font-semibold text-xl">4 KM away</h4>
          <button className="bg-green-600 mt-1 p-2 px-8 rounded-lg font-semibold text-white">
            Complete Ride
          </button>
        </div>

        <div
          ref={finishRidePanelRef}
          className="bottom-0 z-10 fixed bg-white px-3 py-8 w-full max-w-xl translate-y-full"
        >
          <FinishRide />
        </div>
      </div>
    </>
  );
};

export default CaptainRiding;
