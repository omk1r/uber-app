import React from 'react';

const LocationSearchPanel = ({ vehiclePanel, setVehiclePanel }) => {
  const locations = [
    "24B, Near Kapoor's cafe, Sheriyans Coding School, Bhopal",
    ' 15A, Opposite Central Park, Tech Valley, Bangalore',
  ];

  return (
    <div>
      {/* this is a just a sample data */}
      {locations.map((location, index) => {
        return (
          <div
            className="flex justify-start items-center gap-4 my-2 p-3 border-2 border-gray-100 active:border-black rounded-full"
            key={index}
            onClick={() => setVehiclePanel(true)}
          >
            <h2 className="bg-[#B3B3B3] px-1 rounded-full text-black">
              <i className="ri-map-pin-2-line"></i>
            </h2>
            <h4 className="font-medium">{location}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
