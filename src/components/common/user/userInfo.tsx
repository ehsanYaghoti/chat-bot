import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserInfo({ collapsible }: { collapsible: boolean }) {
  return (
    <div className=" flex items-center gap-2">
      <Avatar className="w-7 h-7 text-xs rounded-full  flex items-center justify-center">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="text-slate-50 bg-[#0169CC] ">
          CN
        </AvatarFallback>
      </Avatar>
      <div className="flex items-center justify-between">
        <div
          className={` ${
            collapsible ? "hidden" : "flex"
          }  flex-col items-start gap-1 min-w-0  `}
        >
          <span className="text-sm ">Username</span>
          <p className="text-xs text-white/50 mb-0.5">plan</p>
        </div>
      </div>
    </div>
  );
}
