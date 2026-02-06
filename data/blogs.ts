export interface BlogPost {
    week: number;
    title: string;
    date: string;
    content: string;
    images: string[];
}

export const blogs: BlogPost[] = [
    {
        week: 1,
        title: "My 12 Weeks OJT @ SCPS",
        date: "2025 of August",
        content: `My classmates and I were recently accepted for our On-the-Job Training at the Sorsogon City Police Station in Brgy. Cabid-an. The officers there have been very friendly and approachable, which has made our start so much easier. This blog will serve as a weekly diary of everything we do and learn during our OJT journey. In this place we have our own workplaces.

                We were assigned to the Admin Office. Our main tasks involved encoding data and organizing documents for the personnel board. These papers show the names of officers to be called in for duty when needed, so it’s an important part of keeping the station prepared and organized.`,
        images: [
            "/first-week/a.jpg",
            "/first-week/b.jpg",
            "/first-week/c.jpg",
            "/first-week/d.jpg",
        ]
    },
    {
        week: 2,
        title: "Encoding and Zoom Meetings",
        date: "August of 2025",
        content: `Over the following weeks, my responsibilities expanded. I was tasked with encoding names into a spreadsheet, which proved to be quite a challenge since it required manually searching for and verifying names on printed documents according to their ranks. Additionally, I occasionally helped set up the projector for their Zoom meetings.

                Despite the difficulty of the task, I stayed focused and gave it my best effort. I want to prove through my hard work that I am worthy of the opportunity to train in their office.`,
        images: [
            "/second-week/a.jpg",
            "/second-week/b.jpg",
            "/second-week/g.jpg",
            "/second-week/e.jpg",
        ]
    },
    {
        week: 3,
        title: "Documentation and Inspections",
        date: "September of 2025",
        content: `In the following weeks, we joined Sergeant Musni on his visits to the Sorsogon Municipality and his inspections of the Imperial and Bacon District Police Stations.

            Our main role during these trips was to document the meetings by taking photos of the people he spoke with. It was a great experience to see how inspections are handled in the field.`,
        images: [
            "/third-week/a.jpg",
            "/third-week/b.jpg",
            "/third-week/c.jpg",
            "/third-week/d.jpg",
        ]
    },
    {
        week: 4,
        title: "Preparation and Painting",
        date: "September of 2025",
        content: `This week was a busy one at the station as the councilors from each barangay in Sorsogon City held a major meeting. To prepare for their arrival, we assisted the SCPS team in organizing the food and water to be served to our local leaders.

            Aside from event prep, we also got a bit more 'hands-on' by helping paint the storage box for the station's earthquake emergency equipment. It will be displayed right in front of the station so it’s easy to access during an emergency and looks presentable for visitors. It feels good to help with something that contributes to both the station’s appearance and its safety readiness.`,
        images: [
            "/fourth-week/a.jpg",
            "/fourth-week/j.jpg",
            "/fourth-week/c.jpg",
            "/fourth-week/h.jpg",
        ]
    },
    {
        week: 5,
        title: "The Setup",
        date: "September of 2025",
        content: `In our sixth week, the station became even busier with frequent Zoom meetings and various visitors arriving at the conference room. Despite the rainy weather, we remained committed to our schedule and continued to report for duty. We are determined to stay on track and complete our OJT hours on time, rain or shine.`,
        images: [
            "/fifth-week/a.jpg",
            "/fifth-week/c.jpg",
            "/fifth-week/b.jpg",
            "/fifth-week/d.jpg",
        ]
    },
    {
        week: 6,
        title: "Stenciling and Patience",
        date: "October of 2025",
        content: `This week, I gained some hands-on experience with a task called stenciling. We were tasked with capturing the unique identification numbers of a damaged motorcycle for repair documentation. It’s a lot harder than it looks! The space inside the engine is so tight that I could barely fit a finger in to locate the ID. It was a test of patience and precision, but it’s a vital part of keeping accurate vehicle records.`,
        images: [
            "/sixth-week/a.jpg",
            "/sixth-week/b.jpg",
            "/sixth-week/c.jpg",
            "/sixth-week/d.jpg",
        ]
    },
    {
        week: 7,
        title: "Preparation for Kasanggayhan Festival",
        date: "October of 2025",
        content: `This week, the Salaam Police convened to discuss preparations for the upcoming Kasanggayahan Festival in Sorsogon City. The meeting was led by Chief of Police Aduviso, who emphasized the importance of unity between the SCPS and the Salaam Police units. Their goal is to ensure a coordinated effort in maintaining the safety and security of everyone visiting and participating in the festival festivities`,
        images: [
            "/seventh-week/a.jpg",
            "/seventh-week/b.jpg",
            "/seventh-week/c.jpg",
            "/seventh-week/d.jpg",
        ]
    },
    {
        week: 8,
        title: "The Recruitment Process",
        date: "October of 2025",
        content: `In my eighth week, I was tasked by Admin Marife Hagos to assist in the recruitment process. With nearly 200 applicants vying for only two available positions (starting as Patrolman/Patrolwoman), the screening process is incredibly strict.
        
        I took on an HR-like role, thoroughly checking each applicant's requirements. It was a bit difficult for me to turn people away if their documents were incomplete, but I understood the importance of following instructions and maintaining high standards. This experience is teaching me that being professional sometimes means making tough calls to ensure the integrity of the process.`,
        images: [
            "/eighth-week/a.jpg",
            "/eighth-week/b.jpg",
            "/eighth-week/c.jpg",
            "/eighth-week/d.jpg",
        ]
    },
    {
        week: 9,
        title: "More Applicants",
        date: "November of 2025",
        content: `The recruitment process became even more intensive this week. Police Captain David called in the applicants for official height and weight verification to ensure the data on their Personal Data Sheets (PDS) was accurate. The station has implemented very strict standards—applicants who do not meet the specific weight requirements are no longer accepted.`,
        images: [
            "/ninth-week/a.jpg",
            "/ninth-week/b.jpg",
            "/ninth-week/c.jpg",
            "/ninth-week/d.jpg",
        ]
    },
    {
        week: 10,
        title: "Final Screening",
        date: "November of 2025",
        content: `This week, I witnessed the final screening for the police applicants. The panel was composed of Chief of Police Aduviso and City Mayor Hamor, ensuring that the recruitment process was both rigorous and transparent. It was a great experience to see these leaders work together to choose the next generation of patrol officers for our community.`,
        images: [
            "/tenth-week/c.jpg",
            "/tenth-week/b.jpg",
            "/tenth-week/d.jpg",
            "/tenth-week/a.jpg",
        ]
    },
    {
        week: 11,
        title: "Score Card",
        date: "November of 2025",
        content: `One of my key responsibilities this week involved the digitization of personnel records. The officers maintain a 'Scorecard' to document their weekly operational duties and accomplishments. To improve efficiency, I was tasked with transitioning these records from hard copies to a digital format. This initiative ensures that performance data is more organized, searchable, and securely backed up for the station’s administration.`,
        images: [
            "/eleventh-week/a.jpg",
            "/eleventh-week/b.jpg",
            "/eleventh-week/c.jpg",
            "/eleventh-week/d.jpg",
        ]
    },
    {
        week: 12,
        title: "The Last Week",
        date: "December of 2025",
        content: `We spent our last week at the Sorsogon City Police Station finalizing the performance scorecards. The task was made more challenging by technical issues with the office equipment, specifically a recurring printer jam that required frequent troubleshooting. Dealing with these equipment issues taught me the importance of patience and technical adaptability in an administrative environment, ensuring that we still met our deadlines regardless of the obstacles.`,
        images: [
            "/twelfth-week/a.jpg",
            "/twelfth-week/b.jpg",
            "/twelfth-week/c.jpg",
            "/twelfth-week/d.jpg",
        ]
    }
];

export function getBlogByWeek(week: number): BlogPost | undefined {
    return blogs.find(blog => blog.week === week);
}

export function getAllWeeks(): number[] {
    return blogs.map(blog => blog.week);
}
