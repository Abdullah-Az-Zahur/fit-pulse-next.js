"use client";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import OverView from "../SideBarContents/OverView";

const Homepage = () => {
  const [selectedContent, setSelectedContent] = useState("OverView");

  const contentComponents = {
    OverView: <OverView />,
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {/* <Sidebar /> */}
    </div>
  );
};

export default Homepage;
