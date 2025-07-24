import React from 'react';

export const ExploreOnMap = () => {
  return (
    <div
      className="text-white bg-black h-[300px] relative bg-cover cursor-pointer"
      style={{
        backgroundImage: "url('/map.png')",
      }}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10"></div>
    </div>
  );
};
