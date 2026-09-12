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
    subtitle: "Enterprise HR Management Suite",
    description:
      "Full-stack enterprise HR platform with 5 comprehensive modules for employee onboarding, attendance tracking, leave management, payroll processing, and organizational analytics.",
    bullets: [
      "Secured with HMAC-SHA512 JWT, automated refresh token rotation, and TOTP-based Multi-Factor Authentication (MFA) across distinct user roles",
      "Streamlined request throughput by 15% adopting Java 21 virtual threads and non-blocking concurrency patterns",
      "Built responsive role-based dashboards with CQRS search optimization and cursor-based pagination for high-volume employee directories",
    ],
    stack: ["React 19", "Java 21", "Spring Boot 3", "MySQL", "Spring Security 6", "JWT", "Hibernate/JPA", "Tailwind CSS"],
    liveUrl: "https://hr-frontend-one-sepia.vercel.app/login",
    githubUrl: "https://github.com/shelakeemahesh/HR-Frontend",
  },
  {
    id: "02",
    title: "SwiftCart",
    subtitle: "Full-Stack E-Commerce Platform",
    description:
      "Architected an enterprise-grade e-commerce application with 20+ REST APIs across 3 role-based access tiers (Admin, Seller, Customer), featuring Redis caching, Kafka async order streaming, and Razorpay payments.",
    bullets: [
      "Implemented secure authentication with JWT, OAuth 2.0 Google Sign-In, and fine-grained @PreAuthorize role-based access control (RBAC)",
      "Integrated Razorpay payment gateway with webhook-based cryptographic signature verification for automated order confirmation",
      "Optimized API performance with Redis caching (cutting response time by 20%) and Kafka event streaming for asynchronous order workflows",
    ],
    stack: ["React 18", "Spring Boot 3", "MySQL", "Redis", "Kafka", "Razorpay", "Docker", "Tailwind CSS"],
    liveUrl: "https://swift-cart-frontend-gold.vercel.app",
    githubUrl: "https://github.com/shelakeemahesh/SwiftCart-Frontend",
  },
  {
    id: "03",
    title: "CredoWallet",
    subtitle: "Personal Finance Platform",
    description:
      "Full-stack personal wealth and finance management platform with secure REST APIs for expense tracking, customizable category budgeting, Friend Ledger split-expenses, and dual-channel OTP verification.",
    bullets: [
      "Implemented JWT authentication and Spring Security RBAC using method-level @PreAuthorize authorization for User and Admin workflows",
      "Automated two-factor OTP verification using Brevo REST Email API and Twilio SMS across failover delivery channels",
      "Designed high-throughput RESTful APIs with PostgreSQL and Redis caching, cutting average query latency by 30%",
    ],
    stack: ["React 19", "Java 21", "Spring Boot 3", "PostgreSQL", "Redis", "Twilio SMS", "Brevo API", "JWT"],
    liveUrl: "https://money-manager-one-chi.vercel.app/login",
    githubUrl: "https://github.com/shelakeemahesh/Money-Manager",
  },
  {
    id: "04",
    title: "ForexFlow",
    subtitle: "Real-Time Currency Exchange Platform",
    description:
      "A high-speed currency conversion and forex analytics application providing real-time exchange rates across 160+ international currencies with instant live conversion and currency trend insights.",
    bullets: [
      "Integrated real-time exchange rate APIs to fetch and display live currency conversion rates with client-side caching",
      "Implemented instant bidirectional currency conversion with intuitive quick-swap triggers and search filtering",
      "Built a modern, responsive dark interface with efficient API error handling and LocalStorage persistence",
    ],
    stack: ["React 19", "TypeScript", "Vite 6", "Tailwind CSS", "ExchangeRate API", "Axios"],
    liveUrl: "https://currency-converter-pi-drab.vercel.app/",
    githubUrl: "https://github.com/shelakeemahesh/currency-converter",
  },
  {
    id: "05",
    title: "Alpha Urban Solutions",
    subtitle: "Smart Society Management Platform",
    description:
      "Smart residential community operations portal for complaint escalation, visitor entry approvals, automated maintenance dues billing, and community broadcast notices.",
    bullets: [
      "Implemented resident, admin, and service provider modules with secure role-based access control (RBAC)",
      "Developed complaint, maintenance, and visitor management workflows using RESTful APIs and Spring Boot",
      "Built a responsive dashboard for notice board broadcasts, service request tracking, and community directory",
    ],
    stack: ["React.js", "Spring Boot", "PostgreSQL", "JWT", "Spring Security", "Render"],
    liveUrl: "https://github.com/shelakeemahesh",
    githubUrl: "https://github.com/shelakeemahesh",
  },
];
