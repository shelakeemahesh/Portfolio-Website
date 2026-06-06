export interface Skill {
  name: string;
  percentage: number;
  category: "frontend" | "backend" | "database";
}

export const skills: Skill[] = [
  // Frontend
  { name: "React.js / JavaScript ES6+",   percentage: 90, category: "frontend" },
  { name: "HTML5 / CSS3 / Tailwind CSS",  percentage: 95, category: "frontend" },
  { name: "Three.js / React Three Fiber", percentage: 70, category: "frontend" },
  { name: "Framer Motion",                percentage: 68, category: "frontend" },

  // Backend
  { name: "Spring Boot / Spring Security", percentage: 90, category: "backend" },
  { name: "Hibernate/JPA / RESTful APIs",  percentage: 88, category: "backend" },
  { name: "JWT Authentication / RBAC",     percentage: 85, category: "backend" },
  { name: "Java — Core & OOP",             percentage: 90, category: "backend" },

  // Database & Tools
  { name: "MySQL / PostgreSQL",            percentage: 85, category: "database" },
  { name: "MongoDB",                       percentage: 72, category: "database" },
  { name: "Git / GitHub / Postman",        percentage: 85, category: "database" },
  { name: "Vercel / Render / IntelliJ",   percentage: 90, category: "database" },
];
