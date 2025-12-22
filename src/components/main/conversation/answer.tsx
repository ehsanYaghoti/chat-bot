


export default function Answer ({content } : {content : string}) {
    return (
        <div className=" w-full text-left" dir="ltr">
          <p className="bg-netural-1 w-fit p-4 rounded-2xl  ">
            {
                content
            }
          </p>
        </div>
    )
}
