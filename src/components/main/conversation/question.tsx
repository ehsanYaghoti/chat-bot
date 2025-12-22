export default function Question({ content }: { content: string }) {
  return (
    <div className=" w-full text-right" dir="rtl">
      <p className="bg-netural-1 w-fit p-4 rounded-2xl  ">{content}</p>
    </div>
  );
}
