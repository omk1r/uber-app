import React from 'react';

const LocationSearchPanel = ({
  suggestions,
  setVehiclePanel,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) => {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === 'pickup') {
      setPickup(suggestion);
    } else if (activeField === 'destination') {
      setDestination(suggestion);
    }
    // setVehiclePanel(true)
    // setPanelOpen(false)
  };

  return (
    <div>
      {/* Display fetched suggestions */}
      {suggestions.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => handleSuggestionClick(elem.description)}
          className="flex justify-start items-center gap-4 my-2 p-3 border-2 border-gray-50 active:border-black rounded-xl"
        >
          <h2 className="flex justify-center items-center bg-[#eee] rounded-full w-12 h-8">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{elem.description}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
