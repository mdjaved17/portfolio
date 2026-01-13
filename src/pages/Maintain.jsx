
import React from "react";
import maintain from "../assets/maintain.png";

const UnderMaintenance = () => {
  return (
    <div className="h-screen w-screen bg-black">
      <img
        src={maintain}
        alt="Under Maintenance"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default UnderMaintenance;
