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
import Logo from "../logo";
import UserMenu from "../user/userMenu";
import { Collapsible } from "@radix-ui/react-collapsible";
import { CollapsibleContent, CollapsibleTrigger } from "../../ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../../ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Separator } from "../../ui/separator";

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

const conversationHistoryList = [
  {
    title: "Conversation title 1",
    url: "#",
  },
  {
    title: "Conversation title 2",
    url: "#",
  },
  {
    title: "Conversation title 3",
    url: "#",
  },
  {
    title: "Conversation title 4",
    url: "#",
  },
  {
    title: "Conversation title 5",
    url: "#",
  },
  {
    title: "Conversation title 6",
    url: "#",
  },
  {
    title: "Conversation title 7",
    url: "#",
  },
  {
    title: "Conversation title 8",
    url: "#",
  },
  {
    title: "Conversation title 9",
    url: "#",
  },
  {
    title: "Conversation title 10 longggggggggggggggggg",
    url: "#",
  },
  {
    title: "Conversation title 11",
    url: "#",
  },
  {
    title: "Conversation title 12",
    url: "#",
  },
  {
    title: "Conversation title 13",
    url: "#",
  },
  {
    title: "Conversation title 14",
    url: "#",
  },
  {
    title: "Conversation title 15",
    url: "#",
  },
  {
    title: "Conversation title 16",
    url: "#",
  },
  {
    title: "Conversation title 17",
    url: "#",
  },
  {
    title: "Conversation title 18",
    url: "#",
  },
  {
    title: "Conversation title 19",
    url: "#",
  },
  {
    title: "Conversation title 20 longggggggggggggggggg",
    url: "#",
  },
];

export function AppSidebar() {
  const { state } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      color="bg-primary-1"
      className=" bg-primary-1 py-2 text-textClr-1 group border-0 border-r-primary-1"
    >
      <SidebarHeader
        className={cn(
          "flex flex-row items-center  w-full ",
          state === "collapsed" &&
            "p-0! justify-center group-data-[collapsible=icon]:p-0! group-data-[collapsible=icon]:self-center "
        )}
      >
        <Logo collapsed={state === "collapsed"} />
        <SidebarTrigger
          className={` cursor-pointer text-textClr-1 hover:text-slate-50 hover:bg-token-hover ml-auto   ${
            state === "collapsed" && "hidden"
          } `}
        />
      </SidebarHeader>
      <SidebarContent className=" text-textClr-1" style={{scrollbarWidth : "thin" , scrollbarColor : "#303030 transparent"}} >

      <SidebarGroup className=" sticky top-0 bg-primary-1  z-30" >
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className="hover:bg-token-hover text-inherit! hover:text-inherit "
                >
                  <a href={item.url} className="text-inherit">
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
              <SidebarGroupContent
                className={`${state === "collapsed" ? "hidden" : "flex"}`}
              >
                <SidebarMenu className="gap-2 mt-3 font-light!">
                  {conversationHistoryList.map((conversation , index) => (
                    <SidebarMenuItem  key={index} className="hover:bg-token-hover rounded-lg ">
                      <SidebarMenuButton
                        asChild
                        className="hover:bg-transparent hover:text-inherit scroll-mt-6 focus:bg-inherit! focus:text-inherit! peer  "
                      >
                        <Link
                          href={conversation.url}
                          className="overflow-hidden text-ellipsis whitespace-nowrap inline-block w-full! "
                        >
                          {conversation.title}
                        </Link>
                      </SidebarMenuButton>
                      <DropdownMenu >
                        <DropdownMenuTrigger asChild>
                          <SidebarMenuAction className="hover:bg-transparent! cursor-pointer outline-none">
                            <MoreHorizontal className="text-textClr-1   " />
                          </SidebarMenuAction>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          className={cn(
                            "*:hover:bg-token-hover! space-y-2 *:text-xs! border-none p-2 -translate-y-2 w-42 text-textClr-1  *:hover:text-inherit!   *:cursor-pointer  rounded-lg mt-5 -ml-3 z-50!  bg-[#353535]  "
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
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarFooter className="text-textClr-1" >
        <SidebarMenu>
          <SidebarMenuItem>
            <UserMenu collapsible={state === "collapsed"} />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
