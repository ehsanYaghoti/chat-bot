import {
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { cn } from "@/lib/utils";
import Logo from "../logo";

export function AppSidebarHeader({state} : {state : "collapsed" | "expanded"}) {

  return (
    <SidebarHeader
        className={cn(
          "flex flex-row items-center  w-full sticky top-0 h-12  bg-primary-1  z-40 ",
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
  );
}
