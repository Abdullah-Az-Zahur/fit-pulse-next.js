import Link from "next/link";

const Sidebar = () => {
  const items = [
    { name: "Overview", href: "/" },
    { name: "Heart", href: "/heart" },
    { name: "Message", href: "/message" },
    { name: "Note", href: "/note" },
    { name: "Setting", href: "/setting" },
  ];
  return (
    <aside className="w-full h-full text-white p-4 bg-transparent">
      <div className="flex flex-col justify-between h-full py-5">
        <div>
          <p>clock</p>
        </div>

        <ul className="flex-grow flex flex-col justify-center">
          {items.map((item) => (
            <li key={item.name} className="mb-4">
              <Link href={item.href} legacyBehavior>
                <a className="block p-2 hover:bg-blue-500 rounded">
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <p>profile</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
