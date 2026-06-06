export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  stack: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "NexusHR",
    subtitle: "HR Management Platform",
    description:
      "Full-stack enterprise HR platform with modules for employee management, attendance tracking, leave management, payroll processing, and reporting.",
    bullets: [
      "JWT-based authentication and role-based access control (RBAC) using Spring Security",
      "RESTful APIs with optimized MySQL queries for efficient large-scale organizational data handling",
      "Responsive dashboard with modular UI components and real-time insights for HR operations",
    ],
    stack: ["React.js", "Spring Boot", "MySQL", "Spring Security", "JWT", "Hibernate/JPA"],
    liveUrl: "https://hr-frontend-one-sepia.vercel.app/login",
    githubUrl: "https://github.com/shelakeemahesh/HR-Frontend",
  },
  {
    id: "02",
    title: "SwiftCart",
    subtitle: "Full-Stack E-Commerce Platform",
    description:
      "Scalable e-commerce platform with product catalog, shopping cart, and order management. Secure backend APIs with MongoDB persistence.",
    bullets: [
      "Secure backend APIs for authentication, product management, and order processing",
      "Modular architecture optimized for maintainability and scalability",
      "Seamless frontend-backend integration for smooth user experience",
    ],
    stack: ["React.js", "Spring Boot", "MongoDB", "REST APIs", "Java"],
    liveUrl: "YOUR_ECOMMERCE_LIVE_URL",
    githubUrl: "YOUR_ECOMMERCE_GITHUB_URL",
  },
  {
    id: "03",
    title: "Money Manager",
    subtitle: "Personal Finance Tracker",
    description:
      "Personal finance management system to track income, expenses, and financial records with categorized expense tracking and PostgreSQL persistence.",
    bullets: [
      "Full CRUD operations with categorized expense tracking and PostgreSQL-based persistence",
      "RESTful APIs ensuring efficient data handling and seamless frontend integration",
      "Clean, responsive UI for improved user experience and financial insights",
    ],
    stack: ["React.js", "Spring Boot", "PostgreSQL", "JWT", "REST APIs", "Render"],
    liveUrl: "https://money-manager-one-chi.vercel.app/login",
    githubUrl: "https://github.com/shelakeemahesh/Money-Manager",
  },

{
    id: "04",
    title: "Alpha Urban Solutions",
    subtitle: "Smart Society Management Platform",
    description:
      "Smart society management platform for complaint handling, visitor tracking, maintenance billing, and resident communication. Secure backend APIs with PostgreSQL persistence.",
    bullets: [
        "Implemented resident, admin, and service provider modules with secure role-based access control",
        "Developed complaint, maintenance, and visitor management workflows using RESTful APIs and Spring Boot",
        "Built a responsive dashboard for notices, service requests, maintenance tracking, and community management",
      ],
      stack: ["React.js", "Spring Boot", "PostgreSQL", "JWT", "REST APIs", "Render"],
      liveUrl: "YOUR_ALPHA_URBAN_SOLUTIONS_LIVE_URL",
      githubUrl: "YOUR_ALPHA_URBAN_SOLUTIONS_GITHUB_URL",
  },

{
  id: "05",
  title: "ForexFlow",
  subtitle: "Real-Time Currency Exchange Platform",
  description:
    "A web-based currency conversion application that provides real-time exchange rates and instant currency conversion across multiple international currencies through external API integration.",
  bullets: [
    "Integrated real-time exchange rate APIs to fetch and display up-to-date currency conversion data",
    "Implemented instant currency conversion with support for multiple global currencies",
    "Built a responsive and user-friendly interface with efficient API handling and error management",
  ],
  stack: ["React 19 (TypeScript)", "Vite 6", "Tailwind CSS", "ExchangeRate API", "Axios", "LocalStorage"],
  liveUrl: "https://currency-converter-pi-drab.vercel.app/",
  githubUrl: "https://github.com/shelakeemahesh/currency-converter",
},
];
