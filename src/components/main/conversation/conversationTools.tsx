
import {
  Copy,
  Ellipsis,
  RefreshCw,
  ThumbsDown,
  ThumbsUp,
  Upload,
} from "lucide-react";
import { Button } from "../../ui/button";

export default function ConversationTools () {

    return (
        <div className="flex items-center gap-0.5">
        <Button className="bg-transparent hover:bg-netural-1 cursor-pointer">
          <Copy />
        </Button>
        <Button className="bg-transparent hover:bg-netural-1 cursor-pointer">
          <ThumbsUp />
        </Button>
        <Button className="bg-transparent hover:bg-netural-1 cursor-pointer">
          <ThumbsDown />
        </Button>
        <Button className="bg-transparent hover:bg-netural-1 cursor-pointer">
          <Upload />
        </Button>
        <Button className="bg-transparent hover:bg-netural-1 cursor-pointer">
          <RefreshCw />
        </Button>
        <Button className="bg-transparent hover:bg-netural-1 cursor-pointer">
          <Ellipsis />
        </Button>
      </div>
    )
}
