import Link from 'next/link';
import { blogs } from '@/data/blogs';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            My 12 Weeks OJT @ SCPS
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            A commitment to document, learn, and grow through consistent weekly reflections.
          </p>
        </div>

        <div className="space-y-8">
          {blogs.map((blog) => (
            <Link
              key={blog.week}
              href={`/weekly/${blog.week}`}
              className="block border-2 border-black p-6 sm:p-8 hover:bg-black hover:text-white transition-colors group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                  <span className="text-sm font-bold tracking-wider">
                    WEEK {blog.week}
                  </span>
                  <span className="text-sm text-gray-600 group-hover:text-gray-300">
                    {blog.date}
                  </span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight">
                {blog.title}
              </h2>

              <p className="text-gray-700 group-hover:text-gray-300 leading-relaxed line-clamp-3">
                {blog.content.split('\n\n')[0]}
              </p>

              <div className="mt-4 inline-flex items-center space-x-2 font-medium">
                <span>Read More</span>
                <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-16 pt-12 border-t-2 border-black">
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-semibold">Author:</span> Lloyd De Leon
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Contact:</span> <a href="mailto:lloyddeleon@thelewiscollege.edu.ph" className="text-gray-800 hover:underline">lloyddeleon@thelewiscollege.edu.ph</a>
          </p>
        </div>
      </div>

    </main>
  );
}
