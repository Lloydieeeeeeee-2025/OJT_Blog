import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogByWeek, getAllWeeks } from '@/data/blogs';
import BlogImages from '@/src/components/BlogImages';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function generateStaticParams() {
    const weeks = getAllWeeks();
    return weeks.map((week) => ({
        week: week.toString(),
    }));
}

export default async function WeeklyBlogPage({ params }: { params: { week: string } }) {
    const { week } = await params;
    const weekNumber = parseInt(week);
    const blog = getBlogByWeek(weekNumber);

    if (!blog) {
        notFound();
    }

    const prevWeek = weekNumber > 1 ? weekNumber - 1 : null;
    const nextWeek = weekNumber < 12 ? weekNumber + 1 : null;

    // Rest of your component remains the same
    return (
        <main className="min-h-screen bg-white">
            <article className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <div className="text-sm font-bold tracking-wider mb-2">
                        WEEK {blog.week}
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                        {blog.title}
                    </h1>
                    <time className="text-gray-600 text-lg">{blog.date}</time>
                </div>

                <div className="prose prose-lg max-w-none">
                    {blog.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-6 leading-relaxed text-gray-800">
                            {paragraph}
                        </p>
                    ))}
                </div>

                <BlogImages images={blog.images} altPrefix={`Week ${blog.week}`} />

                <div className="mt-16 pt-8 border-t-2 border-black flex flex-col sm:flex-row justify-between items-center gap-4">
                    {prevWeek ? (
                        <Link
                            href={`/weekly/${prevWeek}`}
                            className="flex items-center space-x-2 text-black hover:opacity-70 transition-opacity font-medium"
                        >
                            <ChevronLeft className="w-5 h-5" />
                            <span>Week {prevWeek}</span>
                        </Link>
                    ) : (
                        <div />
                    )}

                    <Link
                        href="/"
                        className="text-black hover:opacity-70 transition-opacity font-medium"
                    >
                        All Weeks
                    </Link>

                    {nextWeek ? (
                        <Link
                            href={`/weekly/${nextWeek}`}
                            className="flex items-center space-x-2 text-black hover:opacity-70 transition-opacity font-medium"
                        >
                            <span>Week {nextWeek}</span>
                            <ChevronRight className="w-5 h-5" />
                        </Link>
                    ) : (
                        <div />
                    )}
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
            </article>
        </main>
    );
}