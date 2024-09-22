import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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
          <a className="underline" href={href}>
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
          <code className="my-1 rounded-md border-0 bg-gray-200 p-1">
            {children}
          </code>
        ),
        pre: ({ children }) => (
          <pre className="my-2 text-wrap rounded-md bg-gray-200 p-2">
            {children}
          </pre>
        ),
      }}
      remarkPlugins={[remarkGfm]}
    >
      {markdownText}
    </Markdown>
  )
}
