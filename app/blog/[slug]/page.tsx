import { notFound } from "next/navigation"

import matter from "gray-matter"
import fs from "fs"
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'
//export const blogs = [
  //{
    //title: "First blog",
    //description: "This is the first blog description",
    //slug: "first-blog",
    //date: "2023-10-01",
    //author: "John Doe",
    //image: "/images/pexel1.jpg"
  //},
  //{
    //title: "Second blog",
    //description: "This is the second blog description",
    //slug: "second-blog",
    //date: "2023-10-02",
    //author: "John Doe",
    //image: "/images/pexel5.jpg"
  //},
  //{
    //title: "Third blog",
    //description: "This is the third blog description",
    //slug: "third-blog", 
    //date: "2023-10-04",
    //author: "John Doe",
    //image: "/images/pexel4.png"
  //},
  //{
    //title: "Four blog",
    //description: "This is the four blog description",
    //slug: "four-blog",
    //date: "2023-10-04",
    //author: "John Doe",
    //image: "/images/pexel6.jpg"
  //},
  //{
    //title: "Five blog",
    //description: "This is the five blog description",
    //slug: "five-blog", 
    //date: "2023-10-04",
    //author: "John Doe",
    //image: "/images/pexel3.jpg"
//},
  //{
    //title: "Six blog",
    //description: "This is the five blog description",
    //slug: "six-blog", 
    //: "2023-10-04",
    //author: "John Doe",
    //image: "/images/pexel3.jpg"
//},
  

//]

//1. 
//export default async function BlogPostPage({ 
  //params 
//}: { 
  //params: Promise<{ slug: string }> 
//}) {
    //const { slug } = await params;
  
  //const blog = blogs.find((b) => b.slug === slug);

  //if (!blog) return notFound();
  export default async function BlogPostPage({
  params,
}: {
 params: Promise<{ slug: string }>; // 2. Define params as a Promise
}) {
 
  const { slug } = await params;
  const normalizedSlug = decodeURIComponent(slug).replaceAll(" ", "-").toLowerCase();
  const filePath = path.join(process.cwd(), "app", "content", `${normalizedSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);

  const processor =  unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypePrettyCode, {
    theme: "github-dark",
    transformers: [
      transformerCopyButton({
        visibility: "always",
        feedbackDuration: 3000,
      }),
    ],
  })
  .use(rehypeFormat)
  .use(rehypeStringify)
  
  const htmlcontent = (await  processor.process(content)).toString()
  
 if (!fs.existsSync(filePath)) {
  return notFound();
}

  return (
    <div className="mx-auto max-w-5xl p-4">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>

      <p className="text-lg mb-4 border-l-4 pl-4 border-gray-500 italic">
        "{data.description}"
      </p>

      <div className="flex gap-4 text-sm text-gray-500 mb-6">
        <p className="text-sm text-gray-500 mb-4 italic">By {data.author}</p>
        <p className="text-sm text-gray-500 mb-4">{data.date}</p>
      </div>

      <div dangerouslySetInnerHTML={{ __html: htmlcontent }} className="prose dark:prose-invert"></div>
            
      
    </div>
  )
}