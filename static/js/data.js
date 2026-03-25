// ========== SITE DATA ==========
const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

const SKILLS = [
    { name: "Python", color: "orange" },
    { name: "HTML / CSS", color: "green" },
    { name: "C++", color: "orange" },
    { name: "Power BI", color: "green" },
    { name: "Blockchain", color: "orange" },
    { name: "Cyber Awareness", color: "green" },
    { name: "MS Office", color: "orange" },
];

const EDUCATION = [
    {
        date: "Oct 2023 — Apr 2026",
        title: "B.Sc. Information Technology",
        sub: "Nirmala Memorial Foundation College of Commerce and Science · CGPA: 9.4",
    },
    {
        date: "Feb 2023",
        title: "Higher Secondary Certificate (HSC)",
        sub: "Science Stream — Maharashtra State Board",
    },
    {
        date: "Mar 2021",
        title: "Secondary School Certificate (SSC)",
        sub: "Maharashtra State Board",
    },
];

const PROJECTS = [
    {
        tag: "Blockchain",
        tagClass: "blockchain",
        emoji: "🗳️",
        bannerGradient: "linear-gradient(135deg, rgba(255,106,0,0.2), rgba(255,154,68,0.1))",
        title: "E-Voting System Based on Blockchain",
        desc: "A decentralized, tamper-proof electronic voting system designed for small-scale institutions. Ensures transparency, immutability, and voter anonymity using blockchain technology.",
        techs: ["Python", "Flask", "Blockchain", "HTML/CSS", "JavaScript"],
    },
    {
        tag: "Data Analytics",
        tagClass: "analytics",
        emoji: "📊",
        bannerGradient: "linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,200,120,0.1))",
        title: "Sales Dashboard with Power BI",
        desc: "Designed an interactive Power BI dashboard to visualize and analyze sales trends, top-performing products, and regional performance for data-driven decision making.",
        techs: ["Power BI", "DAX", "Excel", "Data Modeling"],
    },
    {
        tag: "Data Analytics",
        tagClass: "analytics",
        emoji: "🎓",
        bannerGradient: "linear-gradient(135deg, rgba(0,255,136,0.15), rgba(255,106,0,0.1))",
        title: "Student Data Analysis with Excel",
        desc: "Analyzed student performance data using advanced Excel techniques including pivot tables, VLOOKUP, and conditional formatting to uncover trends in academic performance and generate actionable reports for educators.",
        techs: ["Excel", "Pivot Tables", "Data Visualization", "Statistical Analysis"],
    },
];

const EXPERIENCE = [
    {
        role: "Supervisor & Receptionist",
        company: "Navigator Education Classes",
        duration: "2 Years",
        desc: "Managed front-desk operations, coordinated class schedules, assisted students and parents with inquiries, and supported administrative workflows.",
    },
    {
        role: "Receptionist",
        company: "Smile Dental Clinic",
        duration: "6 Months",
        desc: "Handled appointment scheduling, patient management, and maintained organized records for smooth clinic operations.",
    },
];
