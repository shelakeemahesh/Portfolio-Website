export interface Skill {
  name: string;
  percentage: number;
  category: "frontend" | "backend" | "database";
}

export const skills: Skill[] = [
  // Frontend
  { name: "React 18 / TypeScript / ES6+", percentage: 92, category: "frontend" },
  { name: "HTML5 / CSS3 / Tailwind CSS",  percentage: 95, category: "frontend" },
  { name: "Zustand / State Management",   percentage: 86, category: "frontend" },
  { name: "Three.js / React Three Fiber", percentage: 75, category: "frontend" },
  { name: "Framer Motion / Animations",   percentage: 82, category: "frontend" },

  // Backend
  { name: "Java 21 / Core OOP",            percentage: 95, category: "backend" },
  { name: "Spring Boot 3 / Microservices", percentage: 92, category: "backend" },
  { name: "Spring Security 6 / JWT / OAuth", percentage: 90, category: "backend" },
  { name: "Hibernate / Spring Data JPA",   percentage: 88, category: "backend" },
  { name: "RESTful APIs / System Design",  percentage: 92, category: "backend" },

  // Database & Tools
  { name: "MySQL / PostgreSQL",            percentage: 88, category: "database" },
  { name: "Redis / In-Memory Caching",     percentage: 82, category: "database" },
  { name: "Apache Kafka / Messaging",      percentage: 78, category: "database" },
  { name: "Docker / Postman / Git",        percentage: 86, category: "database" },
  { name: "Vercel / Render / CI/CD",       percentage: 90, category: "database" },
];
