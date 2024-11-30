import Image from "next/image";
import React from "react";
import HeartbeatGraph from "../Graphs/HeartbeatGraph";

const HeartRateCard = ({ title, value, img }) => {
  return (
    <div className="border-2 rounded-2xl p-2 w-full">
      {/* header */}
      <div className="flex ">
        <div>
          <Image className="mx-2 my-2 h-10 w-10" src={img} alt="Card Img" />
        </div>
        <div>
          <h3 className="text-center text-lg font-bold">{title}</h3>
          <h2 className="text-center ">{value}</h2>
        </div>
      </div>
      <div>
        <HeartbeatGraph />
      </div>
    </div>
  );
};

export default HeartRateCard;