export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  features: string[];
  metrics?: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  metrics: string[];
  techStack: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
}

export interface Profile {
  name: string;
  titles: string[];
  summary: string;
  about: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  experiences: Experience[];
  projects: Project[];
  skillsMatrix: SkillCategory[];
  education: Education[];
}

export const portfolioData: Profile = {
  name: "Portfolio Owner",
  titles: [
    "Full Stack Web Developer",
    "MERN Stack & Gen AI Developer",
    "React.js & Next.js Specialist",
    "Real-Time Application Architect",
  ],
  summary:
    "Results driven Full Stack Developer specializing in the architecture and development of high performance web applications. Proficient in React.js, Next.js, Node.js, and MongoDB, with advanced expertise in integrating WebSockets and geospatial APIs. Proven ability to engineer scalable solutions including low latency fleet management platforms, intelligent GPS tracking systems, and comprehensive business dashboards that seamlessly translate complex real-time data into premium user experiences.",
  about:
    "Based in Nagpur, Maharashtra, I focus on full stack development to craft robust backend systems and dynamic frontends. With a strong foundation in React development and Node.js backend development, I have extensive experience architecting real-time applications. My background includes working heavily with REST APIs, real-time GPS telemetry, and complex mapping integrations to construct scalable web applications with smooth UX and precise data rendering.",
  email: "rohitsanjayshukla@gmail.com",
  phone: "+91 9511748806",
  location: "Nagpur, Maharashtra, India",
  github: "https://github.com/Rohitshukla1997",
  linkedin: "https://www.linkedin.com/in/rohit-shukla-221601218/",
  experiences: [
    {
      role: "Full Stack Engineer",
      company: "HB Gadget Technology",
      period: "2024 - Present",
      description: [
        "Architected enterprise-grade telematics and GPS tracking platforms using Next.js and the Full stack, integrating real-time WebSockets and Google Maps APIs for live fleet monitoring.",
        "Engineered low-latency background data pipelines utilizing Node.js and Redis to process high-frequency geospatial coordinates and complex geofencing calculations.",
        "Developed dynamic lead and sales management ecosystems featuring AI chatbots, cross-platform webhook aggregations (Meta, Google Ads, IndiaMART), and WhatsApp/Shopify API integrations.",
        "Designed modular analytics dashboards for detailed reporting, predictive fuel consumption tracking, and automated billing modules.",
      ],
      metrics: [
        "Scaled real-time data ingestion architectures to seamlessly process 200+ telemetry requests per second.",
        "Automated multi-platform webhook synchronizations and invoicing workflows, saving finance and sales teams over 15 hours weekly.",
      ],
      techStack: [
        "Next.js",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "WebSockets",
        "Google Maps API",
        "Firebase",
        "Redis",
        "Tailwind CSS",
        "Webhook Integration",
      ],
    },
  ],
  projects: [
    {
      title: "Credence Tracker",
      description:
        "Advanced real-time tracking platform featuring live maps, history playback, geofence violations, and instant push notifications.",
      techStack: [
        "Next.js",
        "MongoDB",
        "Node.js",
        "Express.js",
        "Google Maps API",
        "WebSockets",
        "AI Chat Bot",
        "Firebase",
      ],
      features: [
        "Live visual tracking of fleet with auto-updating maps and status cards",
        "History playback route animation showcasing speeds and stop times",
        "Instant alarms for geofence breaches, overspeeding, and power cuts",
      ],
      metrics: [
        "Currently tracking 5,000+ active commercial assets",
        "99.9% real-time connection uptime",
      ],
      link: "https://vts.credencetracker.com/login#/dashboard",
    },
    {
      title: "Fleet Management System (FMS)",
      description:
        "Enterprise system optimizing fuel consumption, maintenance schedules, driver behaviors, and trip dispatch workflow.",
      techStack: [
        "React.js",
        "MongoDB",
        "Node.js",
        "Express.js",
        "Google Maps API",
        "WebSockets",
        "AI Chat Bot",
        "Firebase",
      ],
      features: [
        "Analytical dashboards displaying fuel efficiency, idle time, and mileage statistics",
        "Maintenance alerts, scheduling logs, and renewal notices for documents",
        "Driver behavior scorecards based on harsh braking, acceleration, and idling",
      ],
      metrics: [
        "Reduced fleet operational fuel costs by 12%",
        "Automated reports generated weekly",
      ],
      link: "https://maintenance.credencetracker.com/",
    },
    {
      title: "Rocket Sales Tracker",
      description:
        "Comprehensive sales representative monitoring app tracking live coordinates, attendance, and client visit logs.",
      techStack: [
        "React.js",
        "MongoDB",
        "Node.js",
        "Express.js",
        "Google Maps API",
        "WebSockets",
        "AI Chat Bot",
        "Firebase",
        "WhatsApp Integration",
        "Shopify Integration",
        "Webhooks",
      ],
      features: [
        "Live location trail of active sales reps during work hours",
        "Client visit check-in geo-verification matching representative location",
        "Daily reports showing total distance traveled and visits completed",
      ],
      metrics: [
        "Improved representative accountability by 30%",
        "2,000+ daily check-ins processed",
      ],
      link: "https://salestrack.rocketsalestracker.com/",
    },
    {
      title: "Lead Management System",
      description:
        "Comprehensive lead tracking and management system to streamline sales pipelines, monitor conversions, and automate follow-up tasks.",
      techStack: [
        "Next.js",
        "MongoDB",
        "Node.js",
        "Express.js",
        "WebSockets",
        "AI Chat Bot",
        "Firebase",
        "Webhook Integration",
        "Meta Ads Integration",
        "Google Ads",
        "IndiaMART",
        "LinkedIn Data",
      ],
      features: [
        "Visual sales pipeline with drag-and-drop lead stage progression",
        "Automated follow-up reminders and email integration",
        "Analytics dashboard for lead conversion rates and team performance",
      ],
      metrics: [
        "Increased lead conversion rate by 25%",
        "Managed over 10,000 active leads monthly",
      ],
      link: "https://lead.rocketsalestracker.com/",
    },
    {
      title: "Repair Service Management System",
      description:
        "End-to-end service application for logging repair requests, dispatching technicians, and tracking resolution statuses.",
      techStack: [
        "Next.js",
        "MongoDB",
        "Node.js",
        "Express.js",
        "WebSockets",
        "AI Chat Bot",
        "Firebase",
        "WhatsApp Integration",
      ],
      features: [
        "Dynamic ticketing system for logging and categorizing repair requests",
        "Technician assignment portal with workload and availability tracking",
        "Real-time status updates and SMS notifications for customers",
      ],
      metrics: [
        "Reduced average repair resolution time by 30%",
        "Processed 500+ service tickets per week",
      ],
      link: "https://repair.rocketsalestracker.com/",
    },
    {
      title: "Parentseye",
      description:
        "A comprehensive school bus tracking and student safety application providing real-time visibility for parents and school administrators.",
      techStack: [
        "Next.js",
        "MongoDB",
        "Node.js",
        "Express.js",
        "Google Maps API",
        "WebSockets",
        "AI Chat Bot",
        "Firebase",
      ],
      features: [
        "Real-time GPS tracking of school buses with live ETA updates",
        "Automated push notifications for boarding, alighting, and bus proximity",
        "Secure admin dashboard for route management and driver communication",
      ],
      metrics: [
        "Improved student safety monitoring for over 50 schools",
        "Handled 10,000+ daily active parent users with 99.9% uptime",
      ],
      link: "https://parent.parentseye.in/",
    },
  ],
  skillsMatrix: [
    {
      category: "Languages",
      skills: [
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "SQL", level: 75 },
      ],
    },
    {
      category: "Frontend & UI",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js (App/Pages)", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 85 },
        { name: "Redux / Zustand", level: 90 },
      ],
    },
    {
      category: "Backend & Databases",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Express.js", level: 95 },
        { name: "MongoDB / Mongoose", level: 90 },
        { name: "WebSockets / Socket.io", level: 88 },
        { name: "REST APIs", level: 95 },
      ],
    },
    {
      category: "Tools & Infrastructure",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS (S3/EC2)", level: 75 },
        { name: "Google Maps Platform", level: 92 },
        { name: "Postman / Insomnia", level: 95 },
        { name: "Firebase", level: 80 },
      ],
    },
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Shir Shivaji Science College, Nagpur",
      period: "2021 - 2023",
    },
    {
      degree: "B.Sc. in Computer Science",
      institution: "Nagpur University",
      period: "2018 - 2021",
    },
  ],
};
