import DOMPurify from 'dompurify';


export default function Answer({ content }: { content: string }) {

    const safeHtml = DOMPurify.sanitize(content)

//   const pRef = useRef<HTMLParagraphElement>(null);


//   useEffect(() => {
//     const parser = new DOMParser();

//     const doc = parser.parseFromString(content, "text/html");


//     console.log(doc.body)

//     if (pRef.current !== null) pRef.current.appendChild(doc.body);

//     return () => {};
//   }, []);

  return (
    <div className=" w-full text-left" dir="ltr">
      <p className="bg-transparent w-fit py-4 rounded-2xl  " dangerouslySetInnerHTML={{__html : safeHtml}} />
    </div>
  );
}
