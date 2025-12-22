


export default function Answer ({content } : {content : string}) {
    return (
        <div className=" w-full text-left" dir="ltr">
          <p className="bg-transparent w-fit py-4 rounded-2xl  ">
            {
                content
            }
          </p>
        </div>
    )
}
