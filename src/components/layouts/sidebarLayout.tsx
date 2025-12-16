import { AppSidebar } from "@/components/common/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar"


export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <SidebarProvider  defaultOpen={true} >
      <AppSidebar />
      {children}
    </SidebarProvider>
  );
}
