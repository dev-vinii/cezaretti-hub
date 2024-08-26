import { LogOut, Package, User } from "lucide-react";

function SideBar() {
  function navigateTo(path: string) {
    window.location.href = path;
  }

  return (
    <aside className="flex h-screen w-20 flex-col items-center justify-between bg-[#040404] p-4 text-white">
      <div className="flex cursor-pointer flex-col items-center gap-4">
        <User onClick={() => navigateTo("/")} />{" "}
        <Package onClick={() => navigateTo("/products")} />
      </div>
      <LogOut />
    </aside>
  );
}

export { SideBar };
