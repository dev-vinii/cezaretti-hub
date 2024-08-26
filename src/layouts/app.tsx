import { SideBar } from "@/components/widgets/organisms/sidebar";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <main className="flex">
      <SideBar />
      <Outlet />
    </main>
  );
}
