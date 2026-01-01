import InputComponent from "./inputGroup";

export default function InputBar({ title }: { title?: string }) {
  return (
    <div className="w-full fixed bottom-0 flex flex-col items-center gap-5 px-4  bg-linear-to-t from-primary-1 from-0% via-secondary-1 via-50%  to-transparent z-5  -mt-20 py-8 ">
      {title && <span className="text-3xl ">{title}</span>}
      <InputComponent />
    </div>
  );
}
