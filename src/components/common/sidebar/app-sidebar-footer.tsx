import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import UserMenu from "../user/userMenu";

export function AppSidebarFooter({state} : {state : "collapsed" | "expanded"}) {

  return (
    <SidebarFooter className="text-textClr-1 felx mt-auto  sticky bottom-0 border-t border-t-white/5 mx-2 px-0 bg-primary-1  ">
      <SidebarMenu>
        <SidebarMenuItem>
          <UserMenu collapsible={state === "collapsed"} />
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}
