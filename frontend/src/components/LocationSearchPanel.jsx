import React from 'react';

const LocationSearchPanel = () => {
  return (
    <div>
      {/* this is a just a sample data */}

      <div className="flex justify-start items-center gap-2">
        <h2 className="bg-[#B3B3B3] px-2 py-1 rounded-full text-black">
          <i class="ri-map-pin-2-line"></i>
        </h2>
        <h4>24B, Near Kapoor's cafe, Sheriyans Coding School, Bhopal</h4>
      </div>
    </div>
  );
};

export default LocationSearchPanel;
