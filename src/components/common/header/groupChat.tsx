import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserRoundPlus } from "lucide-react";
import Link from "next/link";

export function DialogGroupChat() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            size={"icon-lg"}
            className=" hover:bg-token-hover hover:text-inherit rounded-full  cursor-pointer "
          >
            <UserRoundPlus size={50} />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] md:max-w-[500px] gap-4 border-0 p-1 bg-secondary-1 text-textClr-1">
          <DialogHeader className="gap-6 p-4">
            <DialogTitle>Use ChatGPT together</DialogTitle>
            <DialogDescription className="text-inherit">
              Add people to your chats to plan, share ideas, and creative.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className=" sm:justify-between w-full pb-4 pr-4">
            <Button
              variant={"ghost"}
              asChild
              className="hover:bg-token-hover hover:text-inherit rounded-full"
            >
              <Link href={"#"}>Learn more</Link>
            </Button>
            <div className="flex items-center gap-2">
              <DialogClose asChild>
                <Button className="cursor-pointer rounded-full bg-netural-1 ">
                  Cancel
                </Button>
              </DialogClose>

              <Button
                variant="outline"
                className="text-primary-1 cursor-pointer rounded-full "
              >
                Start group chat
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
