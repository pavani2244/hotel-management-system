import { logo } from "@/assets";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { MENU_ITEMS } from "@/constants";
import { Link } from "react-router";

export function AppSidebar() {
  return (
    <Sidebar className="w-full h-screen" collapsible={"none"}>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="flex items-center justify-start">
              <img src={logo} alt="logo" className="object-cover" />
              <span className="text-2xl text-medium">Food Hub</span>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-10">
              {MENU_ITEMS.map((item) => (
                <SidebarMenuItem
                  className="hover:bg-slate-200 rounded-md py-1"
                  key={item.title}
                >
                  <SidebarMenuButton
                    asChild
                    className={`text-lg ${
                      window.location.pathname === item?.url
                        ? "bg-orange-500 text-white"
                        : ""
                    }`}
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
