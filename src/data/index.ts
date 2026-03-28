import type { Skill, Experience, Certificate } from '../types';

export const config = {
  name: 'Michael Billan',
  title: 'Software Engineering Student',
  tagline: 'Building real-world software — one commit at a time.',
  bio: "I'm a software engineering student passionate about building clean, scalable applications. I love turning complex problems into elegant solutions, and I'm always exploring new technologies to level up my craft.",
  github: 'https://github.com/MichaelBillan',
  githubUsername: 'MichaelBillan',
  linkedin: 'http://www.linkedin.com/in/michael-billan',
  email: 'michael7billan@email.com',

  pinnedRepos: [
  'Constrack',
  'Bpark_PublicRepo',
  'Cloud-Computing',
  'matalgo',
  ],

  repoDescriptions: {
    'Constrack': 'Built a full-stack system for analyzing 3D construction scans and tracking volume changes with <1 cm accuracy, processing point clouds up to 1 GB in under 3 minutes.',
    'Bpark_PublicRepo': 'Implemented a client-server system for reserving and managing parking spaces through a centralized platform.',
    'Cloud-Computing': 'Developed an AI-powered IoT monitoring system with real-time dashboard, plant disease detection, article-based search engine, big data analytics, and chatbot assistant.',
    'matalgo': 'Implements core linear algebra operations (rank, determinant, inverse) from scratch in Python using only basic NumPy, closely following textbook algorithms without relying on built-in matrix functions. Demonstrates manual Gaussian elimination, LU-like decomposition, and Gauss–Jordan methods with performance benchmarking to ensure correctness, transparency, and efficiency.',
  } as Record<string, string>,
};

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Java', 'Python', 'C', 'TypeScript', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Node.js', 'Express', 'Spring Boot', 'Mongoose', 'NumPy', 'Pandas', 'Open3D'],
  },
  {
  category: 'Databases',
  items: ['MySQL', 'MongoDB', 'Firebase'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'VS Code', 'Linux'],
  },
  {
    category: 'Concepts',
    items: ['RAG', 'AI Integration', 'REST APIs', 'WebSockets', 'Data Structures', 'Algorithms', 'OOP', 'Agile', 'CI/CD', 'Unit Testing', 'System Design', 'Microservices', 'Cloud Computing', 'IoT', 'Computer Vision'],
  },
  {
    category: 'Soft Skills',
    items: ['Problem Solving', 'Team Collaboration', 'Effective Communication', 'Adaptability', 'Time Management'],
  },
];

export const experience: Experience[] = [
  {
    role: 'R&D Associate Backend Developer',
    company: 'Braude College of Engineering',
    period: 'Sep 2025 — Nov 2025',
    description: [
      'Integrated software with hardware components for real-time IoT communication.',
      'Reduced communication latency from 7 seconds to 1 second by optimizing protocol logic.',
      'Refactored the codebase and prepared the system for the final Proof of Concept.',
    ],
    tags: ['MQTT', 'IoT', 'Software Infrastructure', 'Software & Hardware Integration', 'Performance Optimization'],
  },
  {
    role: 'Software Engineering Student',
    company: 'Braude College of Engineering',
    period: 'Oct 2022 — Present',
    description: [
      'Studying core CS fundamentals: algorithms, data structures, operating systems, and software engineering.',
      'Built multiple full-stack projects as part of coursework and personal learning.',
      'Collaborated in team projects using Git, agile workflows, and code reviews.',
    ],
    tags: ['Algorithms', 'Data Structures', 'Software Engineering', 'OOP'],
  },
];

// Certificates array — ready to populate when you earn certifications
export const certificates: Certificate[] = [
  // Example structure (uncomment and fill when you have real certs):
  // {
  //   title: 'AWS Certified Developer – Associate',
  //   issuer: 'Amazon Web Services',
  //   date: 'Jan 2025',
  //   credentialUrl: 'https://...',
  //   badgeUrl: 'https://...',
  // },
];
