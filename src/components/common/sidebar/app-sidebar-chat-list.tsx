import {
  Archive,
  ChevronRight,
  MoreHorizontal,
  Pencil,
  Trash2,
  Upload,
  UserRoundPlus,
} from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,

} from "@/components/ui/sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";
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


export default function ChatsList({state} : {state : "collapsed" | "expanded"}) {
  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel asChild>
          <CollapsibleTrigger className="text-white/80 text-[14px]! pl-1! font-extralight! group">
            Your chats
            <ChevronRight className="ml-2 lg:hidden lg:group-hover:flex transition-transform group-data-[state=open]/collapsible:rotate-90" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent
            className={`${state === "collapsed" ? "hidden" : "flex"}`}
          >
            <SidebarMenu className="gap-0 mt-3 font-light!">
              {conversationHistoryList.map((conversation, index) => (
                <SidebarMenuItem
                  key={index}
                  className="hover:bg-token-hover rounded-lg cursor-pointer "
                >
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
                  <DropdownMenu>
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
  );
}
