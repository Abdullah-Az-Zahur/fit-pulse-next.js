import React from "react";
import TempCard from "../Cards/TempCard";
import thermometer from "../../../public/assets/images/thermometer.png";
import red_blood_cel from "../../../public/assets/images/red_blood_cel.png";
import glucose from "../../../public/assets/images/glucose.png";
import body from "../../../public/assets/images/body.png";
import heart from "../../../public/assets/images/heart.png";
import Image from "next/image";
import HeartRateCard from "../Cards/HeartRateCard";
import WeightCard from "../Cards/WeightCard";
import FoodCard from "../Cards/FoodCard";
import SleepCard from "../Cards/SleepCard";
import ActivityCard from "../Cards/ActivityCard";
import GlucoseCard from "../Cards/GlucoseCard";

const OverView = () => {
  return (
    <div className="flex ">
      {/* Left Section */}
      <section className="w-2/3">
        <div className="flex justify-between gap-2">
          <TempCard title={"Temperature"} value={27} img={thermometer} />
          <HeartRateCard title={"Heart Rate"} value={27} img={heart} />
          <GlucoseCard title={"Glucose"} value={27} img={glucose} />
        </div>

        <div className="border-2 rounded-2xl p-2 mt-2">
          <h2 className="text-2xl text-black font-bold text-left">
            Body Conditions
          </h2>
          <div className="flex">
            <div className="w-2/3">
              <div className="flex">
                <WeightCard />
                <FoodCard />
              </div>
              <SleepCard />
            </div>
            <ActivityCard />
          </div>
        </div>
      </section>
      {/* Right Section */}
      <section className="border-2 rounded-2xl p-2 ml-4 flex-1">
        <div className="h-[calc(100vh-168px)] max-h-screen overflow-hidden">
          <Image className="mx-auto object-cover" src={body} alt="body" />
        </div>
      </section>
    </div>
  );
};

export default OverView;
