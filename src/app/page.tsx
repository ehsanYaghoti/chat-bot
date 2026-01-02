import Header from "@/components/common/header/header";
import InputBar from "@/components/input/inputBar";
import SidebarLayout from "@/components/layouts/sidebarLayout";
import Conversation from "@/components/main/conversation/conversation";
import ScrollBottomBtn from "@/components/main/conversation/scrollBottomBtn";

export default function Home() {
  return (
    <SidebarLayout>
      <div
        className="w-full flex flex-1 flex-col min-h-0 min-w-0 relative
         bg-secondary-1 items-center  text-textClr-1 "
      >
        <Header />
        <Conversation />
        <InputBar />
        <ScrollBottomBtn />
      </div>
    </SidebarLayout>
  );
}
