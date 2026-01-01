"use client";

import { JSX } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function CodeBlock({ inline, children }: any) {
  const code = String(children).trim();

  const copy = async () => {
    await navigator.clipboard.writeText(code);
  };

  if (inline) {
    return <code>{children}</code>;
  }

  return (
    <div className="relative">
      <button
        onClick={copy}
        className="absolute right-2 top-2 text-xs bg-gray-700 text-white px-2 py-1 rounded"
      >
        Copy
      </button>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function Answer({ content }: { content: string | JSX.Element }) {
  // const safeHtml = DOMPurify.sanitize(content)

  return (
    <div
      className="prose prose-invert max-w-none grow flex-1 w-full text-left py-4 overflow-y-hidden"
      dir="ltr"
    >
      {/* <p className="bg-transparent w-fit py-4 rounded-2xl  " dangerouslySetInnerHTML={{__html : safeHtml}} /> */}
      {typeof content === "string" ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      ) : (
        content
      )}
    </div>
  );
}
