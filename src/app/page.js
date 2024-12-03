import Homepage from "@/components/Homepage/Homepage";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import OverView from "@/components/SideBarContents/OverView";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <OverView />
      </main>
    </div>
  );
}
