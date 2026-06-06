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
      "Completed HSC (Science) with 86.33%, building a strong foundation in Mathematics and Physics before pursuing engineering.",
    type: "education",
  },
  {
    period: "2022 – 2026",
    role: "B.E. Computer Engineering",
    organization: "Sinhgad College of Engineering (SPPU)",
    location: "Pune, Maharashtra",
    description:
      "Pursuing B.E. in Computer Engineering with CGPA 6.91/10. Specializing in full-stack development, data structures, and software systems. Final-year focus on enterprise-grade Spring Boot microservices.",
    type: "education",
  },
  {
    period: "Dec 2024 – Jan 2025",
    role: "Java Developer Intern",
    organization: "CUBAN IT PVT LTD",
    location: "Pune, Maharashtra",
    description:
      "Built responsive and reusable React.js UI components. Integrated RESTful APIs into frontend modules for seamless client-backend communication. Applied core Java OOP principles including inheritance, polymorphism, encapsulation, and abstraction.",
    type: "work",
  },
  {
    period: "2026",
    role: "Seeking Full-Time Opportunity",
    organization: "Open to Pune & Remote",
    location: "India",
    description:
      "Available for Java Full Stack Developer roles. Targeting product companies, service firms (TCS, Wipro, Infosys, Cognizant, Accenture), and growth-stage startups building with Spring Boot and React.",
    type: "goal",
  },
];
