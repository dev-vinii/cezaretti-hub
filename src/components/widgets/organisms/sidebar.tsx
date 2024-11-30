import { LogOut, Package, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const sidebarItems = [
  { path: "/", icon: <User />, label: "Home" },
  { path: "/products", icon: <Package />, label: "Products" },
];

function SideBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <aside className="flex h-screen w-20 flex-col items-center justify-between bg-[#040404] p-4 text-white">
      <div className="flex cursor-pointer flex-col items-center gap-4">
        {sidebarItems.map(({ path, icon }) => (
          <div
            key={path}
            onClick={() => navigate(path)}
            className="flex flex-col items-center text-white"
          >
            {icon}
            <span
              className={`mt-1 h-1 w-6 rounded-full ${
                pathname === path ? "bg-white" : "bg-transparent"
              }`}
            />
          </div>
        ))}
      </div>
      <LogOut />
    </aside>
  );
}

export { SideBar };
