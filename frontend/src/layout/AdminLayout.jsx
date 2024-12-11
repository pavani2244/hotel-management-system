import { UserCircle } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom/AppSidebar";
import { Toaster } from "@/components/ui/toaster";
import { Dashboard } from "@/pages";

const AdminLayout = () => {
  return (
    <div className="w-full h-full flex items-center justify-center font-poppins">
      <div className="w-[15%] h-full bg-white border-0 border-r">
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
      </div>
      <div className="w-[85%] h-full">
        <div className="w-full bg-orange-500 flex text-white items-center justify-between px-4 py-5 shadow-md">
          <div>
            <span>Admin Panel</span>
          </div>
          <div className="flex items-center justify-center gap-x-2">
            <UserCircle />
            <span>admin</span>
          </div>
        </div>
        <main className="px-5 py-3 max-h-[700px] overflow-scroll">
          <Dashboard />
        </main>
        <Toaster />
      </div>
    </div>
  );
};

export default AdminLayout;
