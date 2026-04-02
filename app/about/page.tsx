

import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="flex flex-cols items-center justify-between p-32 bg-gray-200 dark:bg-gray-800">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative h-48 w-48 rounded-lg overflow-hidden">
                <Image
                  src="/images/pexel1.jpg"
                  alt="profile"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                About Me
              </h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                Hello! I'm Asim, a passionate web developer and tech enthusiast...
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
                Whether you're just starting out or looking to sharpen your skills...
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Asim Journey as a Coder
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
             from curious beginner to seasoned developer, here's how Asim navigated the world of programming.
            </p>
          </div>

          {/* Timeline items */}
          <div className="space-y-12">
            {/* Example timeline item */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image
                  src="/images/pexel3.jpg"
                  alt="The Spark of Curiosity"
                  width={500}
                  height={300}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  The Spark of Curiosity
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Asim coding journey began in university level when he stumbled upon his first programming language—Python. What started as a simple curiosity quickly turned into a passion, as Asim spent countless hours experimenting with code, building small projects, and learning the fundamentals of web Developer developmen
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img src="/images/pexel2.jpg" alt="Asim learning new skills" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Diving Deeper</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  After mastering the basics, Asim thirst for knowledge grew and web development. He began exploring more complex topics such as java script and  Asim quickly expanded his skill set
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}