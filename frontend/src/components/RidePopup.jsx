const RidePopup = ({
  setRidePopupPanel,
  setConfirmRidePopupPanel,
  ride,
  confirmRide,
}) => {
  return (
    <>
      <div className="flex justify-between mb-4 max-w-sm">
        <h3 className="font-semibold text-2xl">New Ride Available!</h3>

        <h5 onClick={() => setRidePopupPanel(false)} className="text-2xl">
          <i className="ri-arrow-down-s-line"></i>
        </h5>
      </div>

      <div className="flex justify-between items-center bg-yellow-300 mt-2 p-3 rounded-xl">
        <div className="flex items-center gap-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9zilY2Yu2hc19pDZFxgWDTUDy5DId7ITqA&s"
            alt=""
            className="rounded-full w-10 h-10 object-cover"
          />
          <h2 className="font-medium text-xl">
            {ride?.user.fullname.firstname + ' ' + ride?.user.fullname.lastname}
          </h2>
        </div>
        <h5 className="font-semibold text-lg">2.2 KM</h5>
      </div>

      <div className="flex flex-col justify-between items-center gap-2 my-4">
        <div className="w-full">
          <div className="flex items-center gap-5 p-3 border-gray-200 border-b-2">
            <i className="ri-map-pin-2-line"></i>
            <div>
              <h3 className="font-medium text-lg">562/11-A</h3>
              <p className="-mt-1 text-gray-500">{ride?.pickup}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-gray-200 border-b-2">
            <i className="ri-map-pin-3-fill"></i>
            <div>
              <h3 className="font-medium text-lg">562/11-A</h3>
              <p className="-mt-1 text-gray-500">{ride?.destination}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-fill"></i>
            <div>
              <h3 className="font-medium text-lg">{ride?.fare}</h3>
              <p className="-mt-1 text-gray-500">Cash</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <button
            onClick={() => setRidePopupPanel(false)}
            className="bg-gray-300 mt-1 p-2 px-8 rounded-lg font-semibold text-gray-700"
          >
            Ignore
          </button>
          <button
            onClick={() => {
              setConfirmRidePopupPanel(true);
              confirmRide();
            }}
            className="bg-green-600 mt-1 p-2 px-8 rounded-lg font-semibold text-white"
          >
            Accept
          </button>
        </div>
      </div>
    </>
  );
};

export default RidePopup;
