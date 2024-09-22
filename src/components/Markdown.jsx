import React, { useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const copyDoneSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
    />
  </svg>
);

const copySvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
    />
  </svg>
);

function Pre({ children }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children.props.children);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="group relative my-2">
      <button
        onClick={handleCopy}
        className={`${isCopied ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} absolute right-2 top-2 text-primary transition duration-200`}
      >
        <div className="">
          <div
            className={`absolute right-0 top-0 transition duration-300 ${isCopied ? 'opacity-100' : 'opacity-0'}`}
          >
            {copyDoneSvg}
          </div>
          <div
            className={`absolute right-0 top-0 transition duration-300 ${!isCopied ? 'opacity-100' : 'opacity-0'}`}
          >
            {copySvg}
          </div>
        </div>
      </button>
      <pre className="text-wrap rounded-md p-2 backdrop-brightness-[97%]">
        {children}
      </pre>
    </div>
  );
}

export default function _Markdown({ markdownText }) {
  return (
    <Markdown
      components={{
        h1: ({ children }) => <h1 className="py-4 text-4xl">{children}</h1>,
        h2: ({ children }) => <h1 className="py-2 text-2xl">{children}</h1>,
        h3: ({ children }) => <h1 className="py-1 text-xl">{children}</h1>,
        strong: ({ children }) => (
          <strong className="font-normal">{children}</strong>
        ),
        em: ({ children }) => <em className="italic">{children}</em>,
        a: ({ children, href }) => (
          <a className="font-normal underline" href={href}>
            {children}
          </a>
        ),
        table: ({ children }) => (
          <table className="table-auto">{children}</table>
        ),

        td: ({ children }) => (
          <td className="border-r border-primary px-2 last:border-r-0">
            {children}
          </td>
        ),

        tr: ({ children }) => (
          <tr className="even:backdrop-brightness-[97%]">{children}</tr>
        ),

        thead: ({ children }) => (
          <thead className="border-y border-primary last:border-0">
            {children}
          </thead>
        ),
        th: ({ children, style }) => (
          <th
            style={style}
            className="border-r border-primary px-2 py-1 last:border-r-0"
          >
            {children}
          </th>
        ),
        ol: ({ children }) => (
          <ol className="list-inside list-decimal">{children}</ol>
        ),
        ul: ({ children }) => (
          <ul className="list-inside list-disc">{children}</ul>
        ),
        li: ({ children }) => <li className="">{children}</li>,

        img: ({ src, alt }) => (
          <img className="grayscale" src={src} alt={alt} />
        ),
        p: ({ children }) => <p className="py-2 text-justify">{children}</p>,
        code: ({ children }) => (
          <code className="inline-block rounded-md border-0 px-1 backdrop-brightness-[97%]">
            {children}
          </code>
        ),
        pre: Pre,
      }}
      remarkPlugins={[remarkGfm]}
    >
      {markdownText}
    </Markdown>
  );
}
