import { notFound } from "next/navigation"
import Image from "next/image"

export const blogs = [
  {
    title: "First blog",
    description: "This is the first blog description",
    slug: "first-blog",
    date: "2023-10-01",
    author: "John Doe",
    image: "/images/pexel1.jpg"
  },
  {
    title: "Second blog",
    description: "This is the second blog description",
    slug: "second-blog",
    date: "2023-10-02",
    author: "John Doe",
    image: "/images/pexel5.jpg"
  },
  {
    title: "Third blog",
    description: "This is the third blog description",
    slug: "third-blog", 
    date: "2023-10-04",
    author: "John Doe",
    image: "/images/pexel4.png"
  },
  {
    title: "Four blog",
    description: "This is the four blog description",
    slug: "four-blog",
    date: "2023-10-04",
    author: "John Doe",
    image: "/images/pexel6.jpg"
  },
  {
    title: "Five blog",
    description: "This is the five blog description",
    slug: "five-blog", 
    date: "2023-10-04",
    author: "John Doe",
    image: "/images/pexel3.jpg"
  },
  {
    title: "Six blog",
    description: "This is the five blog description",
    slug: "six-blog", 
    date: "2023-10-04",
    author: "John Doe",
    image: "/images/pexel3.jpg"
  },
  

]

// 1. 
export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
    const { slug } = await params;
  
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return (
    <div className="mx-auto max-w-5xl p-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

      <p className="text-lg mb-4 border-l-4 pl-4 border-gray-500 italic">
        "{blog.description}"
      </p>

      <div className="flex gap-4 text-sm text-gray-500 mb-6">
        <span>By {blog.author}</span>
        <span>{blog.date}</span>
      </div>

      {blog.image && (
        <Image
          src={blog.image}
          alt={blog.title}
          width={800}
          height={400}
          className="mb-4 rounded"
        />
      )}
    </div>
  )
}
