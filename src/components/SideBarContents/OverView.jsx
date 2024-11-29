import React from "react";
import TempCard from "../Cards/TempCard";
import thermometer from "../../../public/assets/images/thermometer.png";
import red_blood_cel from "../../../public/assets/images/red_blood_cel.png";
import glucose from "../../../public/assets/images/glucose.png";
import body from "../../../public/assets/images/body.png";
import heart from "../../../public/assets/images/heart.png";
import Image from "next/image";

const OverView = () => {
  return (
    <div className="flex">
      {/* Left Section */}
      <section className="w-2/3">
        <h3>Over View</h3>
        <div className="flex justify-between gap-2">
          <TempCard title={"Temperature"} value={27} img={thermometer} />
          <TempCard title={"Heart Rate"} value={27} img={heart} />
          <TempCard title={"Glucose"} value={27} img={glucose} />
        </div>
      </section>
      {/* Right Section */}
      <section>
        
        <div className="flex justify-between gap-2 h-screen">
          <Image src={body} alt="body" />
        </div>
      </section>
    </div>
  );
};

export default OverView;
