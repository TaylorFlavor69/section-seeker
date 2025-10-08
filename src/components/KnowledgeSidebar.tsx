import { NavLink, useLocation } from "react-router-dom";
import {
  Code2,
  Database,
  Layers,
  Settings,
  FileCode,
  BookOpen,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", url: "/", icon: BookOpen },
      { title: "Quick Start", url: "/quick-start", icon: Code2 },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Components", url: "/components", icon: Layers },
      { title: "Data Models", url: "/data-models", icon: Database },
      { title: "API Reference", url: "/api-reference", icon: FileCode },
    ],
  },
  {
    title: "Advanced",
    items: [
      { title: "Configuration", url: "/configuration", icon: Settings },
    ],
  },
];

export function KnowledgeSidebar() {
  const { open } = useSidebar();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname === path) return true;
    return false;
  };

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarContent>
        {navItems.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel className="text-xs uppercase tracking-wider">
              {section.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive(item.url)}>
                      <NavLink
                        to={item.url}
                        className={({ isActive }) =>
                          isActive
                            ? "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium bg-sidebar-accent text-sidebar-accent-foreground"
                            : "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-sidebar-accent/50 text-sidebar-foreground"
                        }
                      >
                        <item.icon className="h-4 w-4" />
                        {open && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
