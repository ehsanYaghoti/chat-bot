import Header from "@/components/common/header/header";
import SidebarLayout from "@/components/layouts/sidebarLayout";

export default function Home() {
  return (
    <SidebarLayout>
      <div className="w-full flex flex-col min-h-screen">
        <Header />
        <main className=" w-full  bg-secondary-1 grow flex items-center justify-center text-textClr-1 ">
            <input type="text" placeholder="Ask anything" className="border " />
        </main>
      </div>
    </SidebarLayout>
  );
}
