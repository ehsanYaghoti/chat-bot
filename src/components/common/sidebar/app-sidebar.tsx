"use client";

import { FolderPlus, Images, Search, SquarePen } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { AppSidebarFooter } from "./app-sidebar-footer";
import { AppSidebarHeader } from "./app-sidebar-header";
import ChatsList from "./app-sidebar-chat-list";
import Link from "next/link";

// Menu items
const items = [
  {
    title: "New Chat",
    url: "#",
    icon: SquarePen,
  },
  {
    title: "Search Chat",
    url: "#",
    icon: Search,
  },
  {
    title: "Library",
    url: "#",
    icon: Images,
  },
  {
    title: "Projects",
    url: "#",
    icon: FolderPlus,
  },
];

export function AppSidebar() {
  const { state } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      color="bg-primary-1"
      className=" bg-primary-1  text-textClr-1 group border-0 border-r-primary-1"
    >
      <SidebarContent
        className=" text-textClr-1 relative"
        style={{
          scrollbarWidth: "auto",
          scrollbarColor: "#303030 transparent",
        }}
      >
        <AppSidebarHeader state={state} />

        <SidebarGroup className=" sticky top-12 bg-primary-1  z-30">
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-token-hover text-inherit! hover:text-inherit "
                  >
                    <Link href={item.url} className="text-inherit">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <ChatsList state={state} />
        <AppSidebarFooter state={state} />
      </SidebarContent>
    </Sidebar>
  );
}
