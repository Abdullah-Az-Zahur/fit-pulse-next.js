"use client";
import Link from "next/link";
import { BsGear } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { RiHeartPulseLine } from "react-icons/ri";
import { FaRegMessage } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  const pathName = usePathname();
  const items = [
    { icon: <RxDashboard />, href: "/" },
    { icon: <RiHeartPulseLine />, href: "/heart" },
    { icon: <FaRegMessage />, href: "/message" },
    { icon: <GrNotes />, href: "/note" },
    { icon: <BsGear />, href: "/setting" },
  ];
  console.log(pathName);
  return (
    <aside className="w-full h-full text-white p-5 bg-transparent">
      <div className="flex flex-col justify-between h-full py-5">
        <div>
          <p>clock</p>
        </div>

        <ul className="flex-grow flex flex-col justify-center items-center">
          {items.map((item, index) => (
            <li key={index} className="mb-4">
              <Link href={item.href} legacyBehavior>
                <a
                  className={`block p-2 hover:bg-blue-500 rounded-full ${
                    pathName === item.href && "bg-blue-400"
                  }`}
                >
                  {item.icon}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <div className="dropdown dropdown-top">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
