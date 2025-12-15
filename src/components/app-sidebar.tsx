"use client";

import {
  Archive,
  ChevronDown,
  ChevronRight,
  FolderPlus,
  Images,
  MoreHorizontal,
  Pencil,
  Search,
  SquarePen,
  Trash,
  Trash2,
  Upload,
  UserRoundPlus,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Logo from "./common/logo";
import UserMenu from "./common/userMenu";
import { Collapsible } from "@radix-ui/react-collapsible";
import { CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Separator } from "./ui/separator";

// Menu items.
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
      className=" bg-primary-1 py-2 text-white group"
    >
      <SidebarHeader
        className={cn(
          "flex flex-row items-center justify-between w-full ",
          state === "collapsed" &&
            "p-0! justify-center group-data-[collapsible=icon]:p-0! group-data-[collapsible=icon]:self-center "
        )}
      >
        <Logo collapsed={state === "collapsed"} />
        <SidebarTrigger
          className={` cursor-pointer hover:text-slate-50 hover:bg-token-hover ${
            state === "collapsed" && "hidden"
          } `}
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-token-hover hover:text-inherit"
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="text-white/80 text-[14px]! pl-1! font-extralight! group">
                Your chats
                <ChevronRight className="ml-2 hidden group-hover:flex transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu className="gap-3 mt-3 font-light!">
                  <SidebarMenuItem className="hover:bg-token-hover rounded-lg ">
                    <SidebarMenuButton
                      asChild
                      className="hover:bg-transparent hover:text-inherit  "
                    >
                      <Link
                        href={"#"}
                        className="overflow-hidden text-ellipsis whitespace-nowrap inline-block w-full! "
                      >
                        Conversation 1
                        longggggggggggg44ggggggggggggg22222222222222222222
                      </Link>
                    </SidebarMenuButton>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <SidebarMenuAction className="hover:bg-transparent! cursor-pointer outline-none">
                          <MoreHorizontal className="text-textClr-1   " />
                        </SidebarMenuAction>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className={cn(
                          "*:hover:bg-token-hover! space-y-2 *:text-xs! border-none p-2 -translate-y-2 w-42 text-textClr-1  *:hover:text-inherit!   *:cursor-pointer  rounded-lg mt-5 -ml-3 z-50  bg-[#353535]  "
                        )}
                        side="bottom"
                        align="start"
                      >
                        <DropdownMenuItem>
                          <Upload className="text-inherit" />
                          Share
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <UserRoundPlus className="text-inherit" />
                          <span>Start a group chat</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Pencil className="text-inherit" />
                          <span>Rename</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className=" mx-2 opacity-10   pointer-events-none " />
                        <DropdownMenuItem>
                          <Archive className="text-inherit" />
                          <span>Archive</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-300">
                          <Trash2 className="text-inherit" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </SidebarMenuItem>
                  <SidebarMenuItem>Conversation 2</SidebarMenuItem>
                  <SidebarMenuItem>Conversation 3</SidebarMenuItem>
                  <SidebarMenuItem>Conversation 4</SidebarMenuItem>
                  <SidebarMenuItem>Conversation 4</SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <UserMenu collapsible={state === "collapsed"} />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
