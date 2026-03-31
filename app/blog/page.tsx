
import Link from "next/link"
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
    image: "/images/pexel2.jpg"
  },
  {
    title: "Third blog",
    description: "This is the third blog description",
    slug: "third-blog",
    date: "2023-10-03",
    author: "John Doe",
    image: "/images/pexel3.jpg"
  },
  {
    title: "Fourth blog",
    description: "This is the four blog description",
    slug: "four-blog",
    date: "2023-10-04",
    author: "John Doe",
    image: "/images/pexel5.jpg"
  },
  {
    title: "Fifth blog",
    description: "This is the five blog description",
    slug: "five-blog",
    date: "2023-10-05",
    author: "John Doe",
    image: "/images/pexel6.jpg"
  },
  {
    title: "Six blog",
    description: "This is the sixth blog description",
    slug: "six-blog",
    date: "2023-10-06",
    author: "John Doe",
    image: "/images/pexel7.jpg"
  }
]



const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {blogs.map((blog, index) => (
          
          <div
            key={blog.slug}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transform transition duration-500 hover:scale-105"
          >

            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={300}
              priority={index === 0}
              className="w-full h-64 object-cover"
            />

            <div className="p-4">
              
              <h2 className="text-2xl text-gray-800 dark:text-gray-200 mb-2 font-semi-bold">
                {blog.title}
              </h2>

              <p className="text-gray-600 mb-4">
                {blog.description}
              </p>

              <div className="text-sm text-gray-500 mb-4">
                <span>By {blog.author}</span> |{" "}
                <span>{new Date(blog.date).toLocaleDateString()}</span>
              </div>

              <Link
                href={`/blog/${blog.slug}`}
                className="border px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Click here

              </Link>

            </div>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default Blog