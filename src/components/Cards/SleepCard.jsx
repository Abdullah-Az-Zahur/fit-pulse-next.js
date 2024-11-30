import Image from "next/image";
import React from "react";

const SleepCard = ({ title, value, img }) => {
  return (
    <div className="border-2 rounded-2xl p-2 w-full">
      {/* header */}
      <div className="flex ">
        <div>
          <h3 className="text-center text-lg font-bold">{title}</h3>
          <h2 className="text-center ">{value}</h2>
        </div>
      </div>
      <div>
        <h3>body</h3>
      </div>
    </div>
  );
};

export default SleepCard;
