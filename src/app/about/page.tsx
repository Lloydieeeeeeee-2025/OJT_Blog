import Carousel from "@/src/components/Carousel";

export default function About() {
    return (
        <main className="min-h-screen bg-white">
            {/* Cover Section */}
            <div className="w-full bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
                        {/* Text Content */}
                        <div className="order-2 md:order-1">
                            <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
                                About 12 Weeks OJT
                            </h1>
                            <div className="h-1 w-20 bg-black mb-6"></div>
                            <p className="text-lg text-gray-800 leading-relaxed">
                                Hello, Welcome! I am <span className="font-semibold">Lloyd De Leon</span>. This blog serves as documentation for my twelve-week On-the-Job Training at the Sorsogon City Police Station.
                            </p>
                        </div>

                        {/* Image - Half Screen */}
                        <div className="order-1 md:order-2 h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg shadow-lg overflow-hidden">
                            <img 
                                src="/mine.jpg" 
                                alt="Lloyd De Leon" 
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <article className="prose prose-lg max-w-none">
                    {/* The Venue Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mt-0 mb-6 pb-3 border-b-2 border-black">
                            The Venue
                        </h2>
                        <div className="mb-8">
                            <div
                                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg overflow-hidden"
                                style={{ backgroundImage: "url('/building/scps_building.jpg')" }}
                                aria-label="Sorsogon City Police Station Building"
                            ></div>
                        </div>
                        <div className="space-y-4 text-lg leading-relaxed text-gray-800">
                            <p>
                                The Sorsogon City Police Station was previously located in Imperial Barangay Pangpang and has now been transferred to Barangay Cabid-an, Sorsogon City, Sorsogon, headed by PNP Chief of Police Christopher Aduviso.
                            </p>
                            <p>
                                The two-story building houses various departments, including the PCAD, Police Clearance, Investigation, Operations, and Administrative offices, as well as the Office of the Chief of Police. The facility is fully air-conditioned and equipped with a standby generator to ensure that operations remain uninterrupted during power outages.
                            </p>
                        </div>
                    </section>

                    {/* Accomplishment Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mt-0 mb-6 pb-3 border-b-2 border-black">
                            Accomplishment
                        </h2>
                        <div className="mb-8">
                            <Carousel images={['/accomplishment/a.jpg', '/accomplishment/b.jpg', '/accomplishment/c.jpg']} />
                        </div>
                        <p className="text-lg leading-relaxed text-gray-800">
                            Our last day ended on the eighth day of January 2026 where we had a memorable photo session with the high-ranking officials of the Sorsogon City Police Station.
                        </p>
                    </section>

                    {/* Classmates Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mt-0 mb-6 pb-3 border-b-2 border-black">
                            Classmates
                        </h2>
                        <div className="mb-8">
                            <Carousel
                                images={[
                                    '/classmates/a.jpg',
                                    '/classmates/b.jpg',
                                    '/classmates/c.jpg',
                                    '/classmates/d.jpg',
                                    '/classmates/e.jpg'
                                ]}
                            />
                        </div>
                        <p className="text-lg leading-relaxed text-gray-800">
                            Our OJT started in August after inquiring at the Sorsogon City Police Station. We were warmly received by the personnel, who made the application process smooth and stress-free. Working alongside my classmates, we've found the SCPS team to be incredibly supportive. They foster a culture of helpfulness, ensuring that we learn effectively and receive assistance whenever we are struggling with our assignments.
                        </p>
                    </section>

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
            </div>
        </main>
    );
}