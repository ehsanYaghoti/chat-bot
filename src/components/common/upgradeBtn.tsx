import Link from "next/link"
import { Button } from "../ui/button"



const UpgradeBtn = ({className} : {className ?: string} ) => {

    return (
        <Button
          size={"sm"}
          className={`bg-secondary-1 rounded-2xl p-0 border border-white/20 ${className}`}
        >
          <Link href={"#prices"} className="w-full h-full flex items-center justify-center px-3" >Upgrade</Link>
        </Button>
    )
}

export default UpgradeBtn;
