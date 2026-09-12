export interface TimelineEntry {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  type: "education" | "work" | "goal";
}

export const timeline: TimelineEntry[] = [
  {
    period: "2021 – 2022",
    role: "Higher Secondary Certificate (HSC)",
    organization: "Ligade Patil Jr College of Science",
    location: "Karad, Maharashtra",
    description:
      "Completed HSC (Science) with 86.33%, building a solid analytical foundation in Mathematics and Physics before embarking on Computer Engineering.",
    type: "education",
  },
  {
    period: "2022 – 2026",
    role: "B.E. Computer Engineering",
    organization: "Sinhgad College of Engineering (SPPU)",
    location: "Pune, Maharashtra",
    description:
      "Completed B.E. in Computer Engineering with CGPA 7.08/10. Specializing in enterprise full-stack development, distributed systems, Spring Boot microservices, Redis caching, and Kafka streaming architectures.",
    type: "education",
  },
  {
    period: "Apr 2026 – Jul 2026",
    role: "Java Developer Intern",
    organization: "Amdox Technologies",
    location: "Pune, Maharashtra",
    description:
      "Developed modular, reusable React.js components and integrated RESTful APIs with Spring Boot backend services. Implemented core business logic utilizing Java OOP principles, reducing UI latency and improving code maintainability.",
    type: "work",
  },
  {
    period: "2026 – Present",
    role: "Seeking Full-Time Opportunity",
    organization: "Open to Pune, Bangalore, Mumbai & Remote",
    location: "India",
    description:
      "Available for Java Full Stack Developer & Software Engineer roles. Eager to contribute to product engineering teams building high-throughput microservices and modern React applications.",
    type: "goal",
  },
];
