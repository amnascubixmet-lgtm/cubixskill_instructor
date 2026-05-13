

export type UserRole = "admin" | "instructor" | "student";
export type UserStatus = "active" | "inactive" | "blocked" | "pending";
export type CourseStatus = "draft" | "pending" | "approved" | "rejected" | "published";
export type PaymentStatus = "success" | "pending" | "failed" | "refunded";
export type SubmissionStatus = "pending" | "approved" | "rejected" | "revision";
export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced";
export type LessonType = "video" | "project" | "quiz";
export type NotificationType = "info" | "success" | "warning" | "error";

export interface Permission {
  id: string;
  name: string;
  title: string;
  feature: string;
}

export interface Role {
  id: string;
  name: UserRole;
  title: string;
  permissions: string[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  avatar: string;
  bio: string;
  status: UserStatus;
  joinedAt: string;
  lastLogin: string;
}

export interface InstructorProfile extends UserProfile {
  role: "instructor";
  verified: boolean;
  rating: number;
  totalCourses: number;
  totalStudents: number;
  totalRevenue: number;
  walletBalance: number;
  themeColor: string;
  logo: string;
  expertise: string[];
}

export interface StudentProfile extends UserProfile {
  role: "student";
  interests: string[];
  points: number;
  level: number;
  enrolledCourses: number;
  completedCourses: number;
  certificates: number;
  progress?: number;
}

export interface AuthUser {
  id: string;
  email: string;
  password: string;
  role: UserRole;
  status: UserStatus;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  user: UserProfile | null;
  role?: UserRole;
  redirectTo?: string;
}

export interface CourseCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface Course {
  id: string;
  instructorId: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  price: number;
  category: string;
  level: DifficultyLevel;
  status: CourseStatus;
  isFeatured: boolean;
  userLimit: number;
  enrolledCount: number;
  rating: number;
  totalReviews: number;
  totalLessons: number;
  duration: string;
  createdAt: string;
  updatedAt: string;
  approvedAt?: string;
  rejectionReason?: string;
}

export interface LessonMaterial {
  id: string;
  lessonId: string;
  name: string;
  type: "pdf" | "zip" | "link" | "image" | "doc";
  url: string;
  size: string;
}

export interface ClassLesson {
  id: string;
  courseId: string;
  classNumber: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  duration: string;
  isLocked: boolean;
  materials: LessonMaterial[];
}

export interface ProjectLesson {
  id: string;
  courseId: string;
  projectNumber: number;
  title: string;
  description: string;
  mediaUrl: string;
  deadlineDays: number;
  isRequired: boolean;
  materials: LessonMaterial[];
}

export interface Enrollment {
  id: string;
  studentId: string;
  courseId: string;
  progress: number;
  paymentStatus: PaymentStatus;
  isActive: boolean;
  joinedAt: string;
  completedAt?: string;
}

export interface AssessmentQuestion {
  id: string;
  lessonId: string;
  question: string;
  options: string[];
  correctAnswer: string;
  points: number;
}

export interface ProjectSubmission {
  id: string;
  projectId: string;
  studentId: string;
  courseId: string;
  title: string;
  fileUrl: string;
  note: string;
  status: SubmissionStatus;
  instructorFeedback?: string;
  submittedAt: string;
  reviewedAt?: string;
}

export interface Transaction {
  id: string;
  userId: string;
  courseId: string;
  amount: number;
  transactionType: "course_purchase" | "refund" | "payout";
  gatewayOrderId: string;
  gatewayPaymentId: string;
  status: PaymentStatus;
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  courseId: string;
  senderId: string;
  receiverId: string;
  message: string;
  isAnnouncement: boolean;
  createdAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  isRead: boolean;
  createdAt: string;
}

export interface Certificate {
  id: string;
  studentId: string;
  courseId: string;
  certificateId: string;
  issuedDate: string;
  fileUrl: string;
}

export interface Badge {
  id: string;
  name: string;
  title: string;
  description: string;
  pointsRequired: number;
  icon: string;
}

export interface DashboardStats {
  totalRevenue: number;
  totalInstructors: number;
  totalStudents: number;
  totalCourses: number;
  pendingApprovals: number;
  activeEnrollments: number;
  monthlyGrowth: number;
  completionRate: number;
}

/* =====================================================
   PERMISSIONS
===================================================== */

export const permissions: Permission[] = [
  { id: "perm_001", name: "view_dashboard", title: "View Dashboard", feature: "Dashboard" },
  { id: "perm_002", name: "manage_users", title: "Manage Users", feature: "Users" },
  { id: "perm_003", name: "manage_instructors", title: "Manage Instructors", feature: "Instructors" },
  { id: "perm_004", name: "manage_students", title: "Manage Students", feature: "Students" },
  { id: "perm_005", name: "approve_courses", title: "Approve Courses", feature: "Courses" },
  { id: "perm_006", name: "manage_transactions", title: "Manage Transactions", feature: "Finance" },
  { id: "perm_007", name: "view_reports", title: "View Reports", feature: "Reports" },
  { id: "perm_008", name: "manage_settings", title: "Manage Settings", feature: "Settings" },
  { id: "perm_009", name: "create_course", title: "Create Course", feature: "Course Builder" },
  { id: "perm_010", name: "manage_own_course", title: "Manage Own Course", feature: "Course Builder" },
  { id: "perm_011", name: "review_projects", title: "Review Projects", feature: "Projects" },
  { id: "perm_012", name: "send_messages", title: "Send Messages", feature: "Messages" },
  { id: "perm_013", name: "view_analytics", title: "View Analytics", feature: "Analytics" },
  { id: "perm_014", name: "manage_branding", title: "Manage Branding", feature: "Branding" },
  { id: "perm_015", name: "download_certificate", title: "Download Certificate", feature: "Certificates" },
];

export const roles: Role[] = [
  {
    id: "role_admin",
    name: "admin",
    title: "Platform Admin",
    permissions: permissions.map((permission) => permission.id),
  },
  {
    id: "role_instructor",
    name: "instructor",
    title: "Course Instructor",
    permissions: [
      "perm_001",
      "perm_009",
      "perm_010",
      "perm_011",
      "perm_012",
      "perm_013",
      "perm_014",
    ],
  },
  {
    id: "role_student",
    name: "student",
    title: "Student",
    permissions: ["perm_001", "perm_012", "perm_015"],
  },
];

export const dashboardStats: DashboardStats = {
  totalRevenue: 1284500,
  totalInstructors: 42,
  totalStudents: 8420,
  totalCourses: 186,
  pendingApprovals: 14,
  activeEnrollments: 6120,
  monthlyGrowth: 18.6,
  completionRate: 72,
};

/* =====================================================
   CATEGORIES
===================================================== */

export const courseCategories: CourseCategory[] = [
  { id: "cat_001", name: "Web Development", slug: "web-development", description: "Frontend, backend, and full-stack courses", icon: "Code" },
  { id: "cat_002", name: "UI/UX Design", slug: "ui-ux-design", description: "Design systems, product design, and prototyping", icon: "Palette" },
  { id: "cat_003", name: "Data Science", slug: "data-science", description: "Python, ML, AI, and data analytics", icon: "BarChart" },
  { id: "cat_004", name: "Mobile Development", slug: "mobile-development", description: "React Native, Flutter, and Android", icon: "Smartphone" },
  { id: "cat_005", name: "Digital Marketing", slug: "digital-marketing", description: "SEO, ads, social media, and growth", icon: "Megaphone" },
  { id: "cat_006", name: "Business", slug: "business", description: "Startup, finance, sales, and management", icon: "Briefcase" },
  { id: "cat_007", name: "Cyber Security", slug: "cyber-security", description: "Security, ethical hacking basics, and protection", icon: "Shield" },
  { id: "cat_008", name: "Cloud Computing", slug: "cloud-computing", description: "AWS, Docker, DevOps, and deployment", icon: "Cloud" },
];

/* =====================================================
   USERS
===================================================== */

export const admins: UserProfile[] = [
  {
    id: "admin_001",
    name: "Amnas Ali",
    email: "admin@skylora.com",
    phone: "+91 98765 43210",
    role: "admin",
    avatar: "/images/users/admin-1.png",
    bio: "Platform owner and LMS administrator.",
    status: "active",
    joinedAt: "2025-01-10",
    lastLogin: "2026-05-08T08:30:00",
  },
];

export const instructors: InstructorProfile[] = [
  {
    id: "ins_001",
    name: "Rahul Menon",
    email: "rahul@lms.com",
    phone: "+91 90000 11111",
    role: "instructor",
    avatar: "/images/instructors/rahul.png",
    bio: "Full-stack developer with 8 years of teaching experience.",
    status: "active",
    joinedAt: "2025-02-14",
    lastLogin: "2026-05-08T07:40:00",
    verified: true,
    rating: 4.8,
    totalCourses: 8,
    totalStudents: 1240,
    totalRevenue: 420000,
    walletBalance: 68000,
    themeColor: "#2563eb",
    logo: "/images/logos/rahul-academy.png",
    expertise: ["Next.js", "Django", "PostgreSQL", "AWS"],
  },
  {
    id: "ins_002",
    name: "Aisha Fathima",
    email: "aisha@lms.com",
    phone: "+91 90000 22222",
    role: "instructor",
    avatar: "/images/instructors/aisha.png",
    bio: "UI/UX mentor focused on clean product experiences.",
    status: "active",
    joinedAt: "2025-03-21",
    lastLogin: "2026-05-07T21:10:00",
    verified: true,
    rating: 4.9,
    totalCourses: 6,
    totalStudents: 980,
    totalRevenue: 365000,
    walletBalance: 52000,
    themeColor: "#7c3aed",
    logo: "/images/logos/aisha-design.png",
    expertise: ["Figma", "Design Systems", "Prototyping", "UX Research"],
  },
  {
    id: "ins_003",
    name: "Nikhil Varma",
    email: "nikhil@lms.com",
    phone: "+91 90000 33333",
    role: "instructor",
    avatar: "/images/instructors/nikhil.png",
    bio: "Python and AI instructor helping students build real projects.",
    status: "active",
    joinedAt: "2025-04-02",
    lastLogin: "2026-05-08T06:18:00",
    verified: true,
    rating: 4.7,
    totalCourses: 5,
    totalStudents: 860,
    totalRevenue: 288000,
    walletBalance: 39000,
    themeColor: "#059669",
    logo: "/images/logos/ai-lab.png",
    expertise: ["Python", "Machine Learning", "Pandas", "AI"],
  },
  {
    id: "ins_004",
    name: "Sara Joseph",
    email: "sara@lms.com",
    phone: "+91 90000 44444",
    role: "instructor",
    avatar: "/images/instructors/sara.png",
    bio: "Digital marketing strategist and growth consultant.",
    status: "pending",
    joinedAt: "2026-04-22",
    lastLogin: "2026-05-06T12:00:00",
    verified: false,
    rating: 4.4,
    totalCourses: 2,
    totalStudents: 120,
    totalRevenue: 45000,
    walletBalance: 6000,
    themeColor: "#f97316",
    logo: "/images/logos/growth-school.png",
    expertise: ["SEO", "Meta Ads", "Google Ads", "Content Marketing"],
  },
  {
    id: "ins_005",
    name: "Mohammed Rafi",
    email: "rafi@lms.com",
    phone: "+91 90000 55555",
    role: "instructor",
    avatar: "/images/instructors/rafi.png",
    bio: "Mobile app developer specializing in Flutter and React Native.",
    status: "active",
    joinedAt: "2025-06-11",
    lastLogin: "2026-05-05T16:25:00",
    verified: true,
    rating: 4.6,
    totalCourses: 4,
    totalStudents: 640,
    totalRevenue: 192000,
    walletBalance: 27000,
    themeColor: "#0891b2",
    logo: "/images/logos/mobile-master.png",
    expertise: ["Flutter", "React Native", "Firebase", "App UI"],
  },
  {
    id: "ins_006",
    name: "Devika Nair",
    email: "devika@lms.com",
    phone: "+91 90000 66666",
    role: "instructor",
    avatar: "/images/instructors/devika.png",
    bio: "Cloud and DevOps trainer teaching deployment workflows.",
    status: "active",
    joinedAt: "2025-07-09",
    lastLogin: "2026-05-08T10:10:00",
    verified: true,
    rating: 4.8,
    totalCourses: 3,
    totalStudents: 520,
    totalRevenue: 172000,
    walletBalance: 24000,
    themeColor: "#0f172a",
    logo: "/images/logos/cloud-campus.png",
    expertise: ["AWS", "Docker", "CI/CD", "Linux"],
  },
];

export const students: StudentProfile[] = [
  {
    id: "stu_001",
    name: "Fasil Rahman",
    email: "fasil@example.com",
    phone: "+91 81111 10001",
    role: "student",
    avatar: "/images/students/fasil.png",
    bio: "Learning full-stack development.",
    status: "active",
    joinedAt: "2025-07-01",
    lastLogin: "2026-05-08T09:01:00",
    interests: ["Next.js", "Backend", "Projects"],
    points: 2450,
    level: 6,
    enrolledCourses: 4,
    completedCourses: 2,
    certificates: 2,
    progress: 78,
  },
  {
    id: "stu_002",
    name: "Nahla Shirin",
    email: "nahla@example.com",
    phone: "+91 81111 10002",
    role: "student",
    avatar: "/images/students/nahla.png",
    bio: "UI design student and creative learner.",
    status: "active",
    joinedAt: "2025-08-13",
    lastLogin: "2026-05-07T20:45:00",
    interests: ["Figma", "Branding", "UX"],
    points: 3180,
    level: 8,
    enrolledCourses: 5,
    completedCourses: 3,
    certificates: 3,
    progress: 85,
  },
  {
    id: "stu_003",
    name: "Arjun K",
    email: "arjun@example.com",
    phone: "+91 81111 10003",
    role: "student",
    avatar: "/images/students/arjun.png",
    bio: "Python beginner interested in AI.",
    status: "active",
    joinedAt: "2025-09-19",
    lastLogin: "2026-05-08T05:50:00",
    interests: ["Python", "AI", "Data"],
    points: 1890,
    level: 5,
    enrolledCourses: 3,
    completedCourses: 1,
    certificates: 1,
    progress: 78,
  },
  {
    id: "stu_004",
    name: "Hiba Mariyam",
    email: "hiba@example.com",
    phone: "+91 81111 10004",
    role: "student",
    avatar: "/images/students/hiba.png",
    bio: "Digital marketing learner.",
    status: "inactive",
    joinedAt: "2025-10-04",
    lastLogin: "2026-04-28T11:12:00",
    interests: ["Marketing", "SEO", "Content"],
    points: 980,
    level: 3,
    enrolledCourses: 2,
    completedCourses: 0,
    certificates: 0,
    progress: 35,
  },
  {
    id: "stu_005",
    name: "Jithin S",
    email: "jithin@example.com",
    phone: "+91 81111 10005",
    role: "student",
    avatar: "/images/students/jithin.png",
    bio: "Building mobile apps.",
    status: "active",
    joinedAt: "2025-11-22",
    lastLogin: "2026-05-08T04:10:00",
    interests: ["Flutter", "Firebase", "Mobile Apps"],
    points: 2210,
    level: 6,
    enrolledCourses: 3,
    completedCourses: 2,
    certificates: 2,
    progress: 74,
  },
  {
    id: "stu_006",
    name: "Meera Nair",
    email: "meera@example.com",
    phone: "+91 81111 10006",
    role: "student",
    avatar: "/images/students/meera.png",
    bio: "Interested in business and startup learning.",
    status: "active",
    joinedAt: "2026-01-05",
    lastLogin: "2026-05-07T18:33:00",
    interests: ["Business", "Sales", "Finance"],
    points: 1350,
    level: 4,
    enrolledCourses: 2,
    completedCourses: 1,
    certificates: 1,
    progress: 70,
  },
  {
    id: "stu_007",
    name: "Rayan Basheer",
    email: "rayan@example.com",
    phone: "+91 81111 10007",
    role: "student",
    avatar: "/images/students/rayan.png",
    bio: "Learning cloud deployment and backend APIs.",
    status: "active",
    joinedAt: "2026-02-11",
    lastLogin: "2026-05-08T07:22:00",
    interests: ["AWS", "Django", "Docker"],
    points: 1560,
    level: 4,
    enrolledCourses: 2,
    completedCourses: 1,
    certificates: 1,
    progress: 64,
  },
  {
    id: "stu_008",
    name: "Ananya P",
    email: "ananya@example.com",
    phone: "+91 81111 10008",
    role: "student",
    avatar: "/images/students/ananya.png",
    bio: "Frontend developer focused on React and UI.",
    status: "active",
    joinedAt: "2026-02-28",
    lastLogin: "2026-05-08T08:15:00",
    interests: ["React", "Tailwind", "Animation"],
    points: 2780,
    level: 7,
    enrolledCourses: 4,
    completedCourses: 2,
    certificates: 2,
    progress: 88,
  },
];

/* =====================================================
   AUTH USERS
===================================================== */

export const authUsers: AuthUser[] = [
  { id: "admin_001", email: "admin@cubixskill.com", password: "admin123", role: "admin", status: "active" },

  { id: "ins_001", email: "rahul@cubixskill.com", password: "instructor123", role: "instructor", status: "active" },
  { id: "ins_002", email: "aisha@cubixskill.com", password: "instructor123", role: "instructor", status: "active" },
  { id: "ins_003", email: "nikhil@cubixskill.com", password: "instructor123", role: "instructor", status: "active" },
  { id: "ins_004", email: "sara@cubixskill.com", password: "instructor123", role: "instructor", status: "pending" },
  { id: "ins_005", email: "rafi@cubixskill.com", password: "instructor123", role: "instructor", status: "active" },
  { id: "ins_006", email: "devika@cubixskill.com", password: "instructor123", role: "instructor", status: "active" },

  { id: "stu_001", email: "fasil@cubixskill.com", password: "student123", role: "student", status: "active" },
  { id: "stu_002", email: "nahla@cubixskill.com", password: "student123", role: "student", status: "active" },
  { id: "stu_003", email: "arjun@cubixskill.com", password: "student123", role: "student", status: "active" },
  { id: "stu_004", email: "hiba@cubixskill.com", password: "student123", role: "student", status: "inactive" },
  { id: "stu_005", email: "jithin@cubixskill.com", password: "student123", role: "student", status: "active" },
  { id: "stu_006", email: "meera@cubixskill.com", password: "student123", role: "student", status: "active" },
  { id: "stu_007", email: "rayan@cubixskill.com", password: "student123", role: "student", status: "active" },
  { id: "stu_008", email: "ananya@cubixskill.com", password: "student123", role: "student", status: "active" },
];

/* =====================================================
   COURSES
===================================================== */

export const courses: Course[] = [
  {
    id: "course_001",
    instructorId: "ins_001",
    title: "Next.js Masterclass 2026",
    slug: "nextjs-masterclass-2026",
    description: "Build production-ready full-stack apps using Next.js App Router, TypeScript, Tailwind CSS, and API routes.",
    thumbnail: "/images/courses/nextjs-masterclass.png",
    price: 2999,
    category: "Web Development",
    level: "Intermediate",
    status: "published",
    isFeatured: true,
    userLimit: 500,
    enrolledCount: 420,
    rating: 4.9,
    totalReviews: 186,
    totalLessons: 42,
    duration: "28h 40m",
    createdAt: "2025-10-15",
    updatedAt: "2026-05-01",
    approvedAt: "2025-10-18",
  },
  {
    id: "course_002",
    instructorId: "ins_001",
    title: "Django Backend API Development",
    slug: "django-backend-api-development",
    description: "Learn Django REST Framework, authentication, permissions, payments, and deployment.",
    thumbnail: "/images/courses/django-api.png",
    price: 3499,
    category: "Web Development",
    level: "Intermediate",
    status: "approved",
    isFeatured: false,
    userLimit: 350,
    enrolledCount: 270,
    rating: 4.7,
    totalReviews: 98,
    totalLessons: 36,
    duration: "24h 15m",
    createdAt: "2025-11-20",
    updatedAt: "2026-04-26",
    approvedAt: "2025-11-24",
  },
  {
    id: "course_003",
    instructorId: "ins_002",
    title: "Complete UI/UX Design Bootcamp",
    slug: "complete-ui-ux-design-bootcamp",
    description: "Master user flows, wireframes, design systems, prototypes, and portfolio case studies.",
    thumbnail: "/images/courses/uiux-bootcamp.png",
    price: 2499,
    category: "UI/UX Design",
    level: "Beginner",
    status: "published",
    isFeatured: true,
    userLimit: 600,
    enrolledCount: 530,
    rating: 4.9,
    totalReviews: 240,
    totalLessons: 48,
    duration: "32h 20m",
    createdAt: "2025-09-10",
    updatedAt: "2026-04-15",
    approvedAt: "2025-09-12",
  },
  {
    id: "course_004",
    instructorId: "ins_003",
    title: "Python AI Projects for Beginners",
    slug: "python-ai-projects-for-beginners",
    description: "Learn Python, data handling, machine learning basics, and build AI mini projects.",
    thumbnail: "/images/courses/python-ai.png",
    price: 1999,
    category: "Data Science",
    level: "Beginner",
    status: "pending",
    isFeatured: false,
    userLimit: 450,
    enrolledCount: 0,
    rating: 0,
    totalReviews: 0,
    totalLessons: 30,
    duration: "20h 10m",
    createdAt: "2026-05-04",
    updatedAt: "2026-05-05",
  },
  {
    id: "course_005",
    instructorId: "ins_005",
    title: "Flutter App Development Complete Course",
    slug: "flutter-app-development-complete-course",
    description: "Build Android and iOS apps with Flutter, Firebase, animations, and clean UI.",
    thumbnail: "/images/courses/flutter.png",
    price: 2799,
    category: "Mobile Development",
    level: "Intermediate",
    status: "published",
    isFeatured: true,
    userLimit: 400,
    enrolledCount: 310,
    rating: 4.6,
    totalReviews: 112,
    totalLessons: 40,
    duration: "30h 00m",
    createdAt: "2025-12-01",
    updatedAt: "2026-04-30",
    approvedAt: "2025-12-03",
  },
  {
    id: "course_006",
    instructorId: "ins_004",
    title: "SEO and Social Media Growth",
    slug: "seo-and-social-media-growth",
    description: "Learn SEO, Instagram growth, content planning, and ad basics for small businesses.",
    thumbnail: "/images/courses/seo-growth.png",
    price: 1499,
    category: "Digital Marketing",
    level: "Beginner",
    status: "pending",
    isFeatured: false,
    userLimit: 300,
    enrolledCount: 0,
    rating: 0,
    totalReviews: 0,
    totalLessons: 22,
    duration: "14h 35m",
    createdAt: "2026-05-02",
    updatedAt: "2026-05-06",
  },
  {
    id: "course_007",
    instructorId: "ins_002",
    title: "Figma Design System Pro",
    slug: "figma-design-system-pro",
    description: "Create scalable Figma components, tokens, variants, layouts, and handoff files.",
    thumbnail: "/images/courses/figma-system.png",
    price: 2199,
    category: "UI/UX Design",
    level: "Advanced",
    status: "rejected",
    isFeatured: false,
    userLimit: 250,
    enrolledCount: 0,
    rating: 0,
    totalReviews: 0,
    totalLessons: 28,
    duration: "18h 00m",
    createdAt: "2026-04-25",
    updatedAt: "2026-04-29",
    rejectionReason: "Please add more project explanation videos before resubmitting.",
  },
  {
    id: "course_008",
    instructorId: "ins_003",
    title: "Data Analysis with Pandas",
    slug: "data-analysis-with-pandas",
    description: "Analyze real datasets using Pandas, NumPy, Matplotlib, and Jupyter notebooks.",
    thumbnail: "/images/courses/pandas.png",
    price: 1899,
    category: "Data Science",
    level: "Beginner",
    status: "published",
    isFeatured: false,
    userLimit: 350,
    enrolledCount: 220,
    rating: 4.5,
    totalReviews: 84,
    totalLessons: 26,
    duration: "17h 25m",
    createdAt: "2025-12-20",
    updatedAt: "2026-03-18",
    approvedAt: "2025-12-22",
  },
  {
    id: "course_009",
    instructorId: "ins_006",
    title: "AWS Deployment for Beginners",
    slug: "aws-deployment-for-beginners",
    description: "Deploy Next.js and Django projects using AWS EC2, S3, Route 53, and Nginx.",
    thumbnail: "/images/courses/aws-deployment.png",
    price: 3299,
    category: "Cloud Computing",
    level: "Beginner",
    status: "published",
    isFeatured: true,
    userLimit: 300,
    enrolledCount: 190,
    rating: 4.8,
    totalReviews: 76,
    totalLessons: 34,
    duration: "21h 45m",
    createdAt: "2026-01-14",
    updatedAt: "2026-04-20",
    approvedAt: "2026-01-16",
  },
  {
    id: "course_010",
    instructorId: "ins_001",
    title: "Advanced PostgreSQL for Apps",
    slug: "advanced-postgresql-for-apps",
    description: "Learn schema design, indexing, relations, transactions, and performance tuning.",
    thumbnail: "/images/courses/postgresql.png",
    price: 2599,
    category: "Web Development",
    level: "Advanced",
    status: "draft",
    isFeatured: false,
    userLimit: 250,
    enrolledCount: 0,
    rating: 0,
    totalReviews: 0,
    totalLessons: 24,
    duration: "16h 10m",
    createdAt: "2026-05-07",
    updatedAt: "2026-05-07",
  },
];

/* =====================================================
   CLASS LESSONS
===================================================== */

export const classLessons: ClassLesson[] = [
  {
    id: "lesson_001",
    courseId: "course_001",
    classNumber: 1,
    title: "Introduction to Next.js App Router",
    description: "Understand the project structure, layouts, pages, and routing system.",
    videoUrl: "https://cdn.example.com/videos/nextjs-intro.mp4",
    thumbnail: "/images/lessons/nextjs-1.png",
    duration: "18:25",
    isLocked: false,
    materials: [
      { id: "mat_001", lessonId: "lesson_001", name: "Starter Project ZIP", type: "zip", url: "/materials/nextjs-starter.zip", size: "4.8 MB" },
      { id: "mat_002", lessonId: "lesson_001", name: "Routing Cheat Sheet", type: "pdf", url: "/materials/routing.pdf", size: "850 KB" },
    ],
  },
  {
    id: "lesson_002",
    courseId: "course_001",
    classNumber: 2,
    title: "Layouts and Nested Routes",
    description: "Build reusable layouts for admin, instructor, and student panels.",
    videoUrl: "https://cdn.example.com/videos/nextjs-layouts.mp4",
    thumbnail: "/images/lessons/nextjs-2.png",
    duration: "24:10",
    isLocked: true,
    materials: [
      { id: "mat_003", lessonId: "lesson_002", name: "Layout Examples", type: "doc", url: "/materials/layout-examples.docx", size: "1.2 MB" },
    ],
  },
  {
    id: "lesson_003",
    courseId: "course_001",
    classNumber: 3,
    title: "Dashboard Cards and Tables",
    description: "Create analytics cards, recent approvals table, and instructor ranking UI.",
    videoUrl: "https://cdn.example.com/videos/dashboard-ui.mp4",
    thumbnail: "/images/lessons/dashboard-ui.png",
    duration: "29:40",
    isLocked: true,
    materials: [
      { id: "mat_004", lessonId: "lesson_003", name: "Dashboard UI Assets", type: "zip", url: "/materials/dashboard-assets.zip", size: "7.4 MB" },
    ],
  },
  {
    id: "lesson_004",
    courseId: "course_003",
    classNumber: 1,
    title: "UX Fundamentals",
    description: "Learn what UX means and how to understand users before designing screens.",
    videoUrl: "https://cdn.example.com/videos/ux-fundamentals.mp4",
    thumbnail: "/images/lessons/ux-1.png",
    duration: "21:35",
    isLocked: false,
    materials: [
      { id: "mat_005", lessonId: "lesson_004", name: "UX Notes", type: "pdf", url: "/materials/ux-notes.pdf", size: "1.1 MB" },
    ],
  },
  {
    id: "lesson_005",
    courseId: "course_004",
    classNumber: 1,
    title: "Python Setup for AI",
    description: "Install Python, VS Code, and required libraries for AI projects.",
    videoUrl: "https://cdn.example.com/videos/python-setup.mp4",
    thumbnail: "/images/lessons/python-setup.png",
    duration: "15:50",
    isLocked: false,
    materials: [
      { id: "mat_006", lessonId: "lesson_005", name: "Installation Guide", type: "pdf", url: "/materials/python-install.pdf", size: "720 KB" },
    ],
  },
  {
    id: "lesson_006",
    courseId: "course_009",
    classNumber: 1,
    title: "AWS Account and Server Setup",
    description: "Create an AWS account and prepare your first EC2 instance.",
    videoUrl: "https://cdn.example.com/videos/aws-setup.mp4",
    thumbnail: "/images/lessons/aws-setup.png",
    duration: "26:20",
    isLocked: false,
    materials: [
      { id: "mat_007", lessonId: "lesson_006", name: "AWS Setup Checklist", type: "pdf", url: "/materials/aws-checklist.pdf", size: "900 KB" },
    ],
  },
];

/* =====================================================
   PROJECT LESSONS
===================================================== */

export const projectLessons: ProjectLesson[] = [
  {
    id: "project_001",
    courseId: "course_001",
    projectNumber: 1,
    title: "Build Admin Dashboard UI",
    description: "Create a responsive LMS admin dashboard using Tailwind CSS and reusable components.",
    mediaUrl: "https://cdn.example.com/projects/admin-dashboard-guide.mp4",
    deadlineDays: 7,
    isRequired: true,
    materials: [
      { id: "pmat_001", lessonId: "project_001", name: "Design Reference", type: "image", url: "/materials/admin-reference.png", size: "2.1 MB" },
      { id: "pmat_002", lessonId: "project_001", name: "Component Checklist", type: "pdf", url: "/materials/component-checklist.pdf", size: "540 KB" },
    ],
  },
  {
    id: "project_002",
    courseId: "course_003",
    projectNumber: 1,
    title: "Create Mobile App Wireframe",
    description: "Design a clean onboarding and dashboard wireframe for a student learning app.",
    mediaUrl: "https://cdn.example.com/projects/wireframe-guide.mp4",
    deadlineDays: 5,
    isRequired: true,
    materials: [
      { id: "pmat_003", lessonId: "project_002", name: "Wireframe Template", type: "link", url: "https://figma.com/example-template", size: "External" },
    ],
  },
  {
    id: "project_003",
    courseId: "course_005",
    projectNumber: 1,
    title: "Build Login Screen in Flutter",
    description: "Create a clean login screen with validation and Firebase-ready structure.",
    mediaUrl: "https://cdn.example.com/projects/flutter-login.mp4",
    deadlineDays: 6,
    isRequired: true,
    materials: [
      { id: "pmat_004", lessonId: "project_003", name: "Flutter Starter Files", type: "zip", url: "/materials/flutter-login.zip", size: "3.6 MB" },
    ],
  },
  {
    id: "project_004",
    courseId: "course_009",
    projectNumber: 1,
    title: "Deploy Portfolio Website",
    description: "Deploy a static portfolio site using EC2, Nginx, and custom domain setup.",
    mediaUrl: "https://cdn.example.com/projects/aws-portfolio.mp4",
    deadlineDays: 8,
    isRequired: true,
    materials: [
      { id: "pmat_005", lessonId: "project_004", name: "Nginx Config Sample", type: "doc", url: "/materials/nginx-config.docx", size: "560 KB" },
    ],
  },
];

/* =====================================================
   ENROLLMENTS
===================================================== */

export const enrollments: Enrollment[] = [
  { id: "enr_001", studentId: "stu_001", courseId: "course_001", progress: 82, paymentStatus: "success", isActive: true, joinedAt: "2026-01-10" },
  { id: "enr_002", studentId: "stu_001", courseId: "course_002", progress: 45, paymentStatus: "success", isActive: true, joinedAt: "2026-02-14" },
  { id: "enr_003", studentId: "stu_002", courseId: "course_003", progress: 96, paymentStatus: "success", isActive: true, joinedAt: "2026-01-20", completedAt: "2026-04-22" },
  { id: "enr_004", studentId: "stu_003", courseId: "course_004", progress: 12, paymentStatus: "pending", isActive: false, joinedAt: "2026-05-05" },
  { id: "enr_005", studentId: "stu_004", courseId: "course_006", progress: 8, paymentStatus: "failed", isActive: false, joinedAt: "2026-05-06" },
  { id: "enr_006", studentId: "stu_005", courseId: "course_005", progress: 74, paymentStatus: "success", isActive: true, joinedAt: "2026-03-01" },
  { id: "enr_007", studentId: "stu_006", courseId: "course_008", progress: 58, paymentStatus: "success", isActive: true, joinedAt: "2026-03-18" },
  { id: "enr_008", studentId: "stu_007", courseId: "course_009", progress: 64, paymentStatus: "success", isActive: true, joinedAt: "2026-04-01" },
  { id: "enr_009", studentId: "stu_008", courseId: "course_001", progress: 88, paymentStatus: "success", isActive: true, joinedAt: "2026-02-21" },
];

/* =====================================================
   ASSESSMENTS
===================================================== */

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: "q_001",
    lessonId: "lesson_001",
    question: "Which folder is mainly used for App Router pages in Next.js?",
    options: ["pages", "app", "routes", "views"],
    correctAnswer: "app",
    points: 10,
  },
  {
    id: "q_002",
    lessonId: "lesson_001",
    question: "Which file is commonly used for shared page layout in App Router?",
    options: ["layout.tsx", "page.tsx", "route.ts", "view.tsx"],
    correctAnswer: "layout.tsx",
    points: 10,
  },
  {
    id: "q_003",
    lessonId: "lesson_004",
    question: "What is the main goal of UX design?",
    options: ["Only colors", "User experience", "Only animation", "Backend speed"],
    correctAnswer: "User experience",
    points: 10,
  },
  {
    id: "q_004",
    lessonId: "lesson_006",
    question: "Which AWS service is commonly used for virtual servers?",
    options: ["S3", "EC2", "Route 53", "CloudFront"],
    correctAnswer: "EC2",
    points: 10,
  },
];

/* =====================================================
   SUBMISSIONS
===================================================== */

export const projectSubmissions: ProjectSubmission[] = [
  {
    id: "sub_001",
    projectId: "project_001",
    studentId: "stu_001",
    courseId: "course_001",
    title: "Admin Dashboard Project",
    fileUrl: "/submissions/fasil-admin-dashboard.zip",
    note: "Completed dashboard with cards, tables, and responsive layout.",
    status: "pending",
    submittedAt: "2026-05-07T18:20:00",
  },
  {
    id: "sub_002",
    projectId: "project_002",
    studentId: "stu_002",
    courseId: "course_003",
    title: "Mobile Wireframe Figma Link",
    fileUrl: "https://figma.com/file/student-wireframe",
    note: "Added onboarding, home, and course details screens.",
    status: "approved",
    instructorFeedback: "Excellent structure and clean spacing.",
    submittedAt: "2026-04-15T10:00:00",
    reviewedAt: "2026-04-16T09:30:00",
  },
  {
    id: "sub_003",
    projectId: "project_003",
    studentId: "stu_005",
    courseId: "course_005",
    title: "Flutter Login UI",
    fileUrl: "/submissions/flutter-login-jithin.zip",
    note: "Firebase setup pending, UI completed.",
    status: "revision",
    instructorFeedback: "Good UI. Please add input validation before approval.",
    submittedAt: "2026-05-03T14:45:00",
    reviewedAt: "2026-05-04T11:20:00",
  },
  {
    id: "sub_004",
    projectId: "project_004",
    studentId: "stu_007",
    courseId: "course_009",
    title: "AWS Portfolio Deployment",
    fileUrl: "/submissions/rayan-aws-portfolio.zip",
    note: "EC2 deployed, domain setup completed.",
    status: "approved",
    instructorFeedback: "Good work. SSL setup is also clean.",
    submittedAt: "2026-05-02T15:30:00",
    reviewedAt: "2026-05-03T09:00:00",
  },
];

/* =====================================================
   TRANSACTIONS
===================================================== */

export const transactions: Transaction[] = [
  {
    id: "txn_001",
    userId: "stu_001",
    courseId: "course_001",
    amount: 2999,
    transactionType: "course_purchase",
    gatewayOrderId: "order_NX001",
    gatewayPaymentId: "pay_NX001",
    status: "success",
    createdAt: "2026-01-10T10:15:00",
  },
  {
    id: "txn_002",
    userId: "stu_002",
    courseId: "course_003",
    amount: 2499,
    transactionType: "course_purchase",
    gatewayOrderId: "order_UX002",
    gatewayPaymentId: "pay_UX002",
    status: "success",
    createdAt: "2026-01-20T12:40:00",
  },
  {
    id: "txn_003",
    userId: "stu_004",
    courseId: "course_006",
    amount: 1499,
    transactionType: "course_purchase",
    gatewayOrderId: "order_SEO003",
    gatewayPaymentId: "pay_failed_003",
    status: "failed",
    createdAt: "2026-05-06T09:00:00",
  },
  {
    id: "txn_004",
    userId: "ins_001",
    courseId: "course_001",
    amount: 48000,
    transactionType: "payout",
    gatewayOrderId: "payout_001",
    gatewayPaymentId: "bank_ref_001",
    status: "success",
    createdAt: "2026-05-01T15:30:00",
  },
  {
    id: "txn_005",
    userId: "stu_005",
    courseId: "course_005",
    amount: 2799,
    transactionType: "course_purchase",
    gatewayOrderId: "order_FL005",
    gatewayPaymentId: "pay_FL005",
    status: "success",
    createdAt: "2026-03-01T08:45:00",
  },
  {
    id: "txn_006",
    userId: "stu_007",
    courseId: "course_009",
    amount: 3299,
    transactionType: "course_purchase",
    gatewayOrderId: "order_AWS006",
    gatewayPaymentId: "pay_AWS006",
    status: "success",
    createdAt: "2026-04-01T11:25:00",
  },
  {
    id: "txn_007",
    userId: "stu_008",
    courseId: "course_001",
    amount: 2999,
    transactionType: "course_purchase",
    gatewayOrderId: "order_NX007",
    gatewayPaymentId: "pay_NX007",
    status: "success",
    createdAt: "2026-02-21T13:10:00",
  },
];

/* =====================================================
   COMMUNICATION
===================================================== */

export const chatMessages: ChatMessage[] = [
  {
    id: "msg_001",
    courseId: "course_001",
    senderId: "stu_001",
    receiverId: "ins_001",
    message: "Sir, nested layout and group routes difference explain cheyyamo?",
    isAnnouncement: false,
    createdAt: "2026-05-08T07:20:00",
  },
  {
    id: "msg_002",
    courseId: "course_001",
    senderId: "ins_001",
    receiverId: "stu_001",
    message: "Sure. Group routes URL path change cheyyilla, layout organization vendi use cheyyunnathanu.",
    isAnnouncement: false,
    createdAt: "2026-05-08T07:35:00",
  },
  {
    id: "msg_003",
    courseId: "course_003",
    senderId: "ins_002",
    receiverId: "stu_002",
    message: "New design challenge uploaded. Submit your Figma link before Friday.",
    isAnnouncement: true,
    createdAt: "2026-05-06T10:10:00",
  },
  {
    id: "msg_004",
    courseId: "course_009",
    senderId: "stu_007",
    receiverId: "ins_006",
    message: "My EC2 server works, but Nginx reload fails.",
    isAnnouncement: false,
    createdAt: "2026-05-07T17:05:00",
  },
];

export const notifications: Notification[] = [
  {
    id: "not_001",
    userId: "admin_001",
    title: "New Course Approval Required",
    message: "Python AI Projects for Beginners is waiting for approval.",
    type: "warning",
    isRead: false,
    createdAt: "2026-05-05T09:00:00",
  },
  {
    id: "not_002",
    userId: "ins_001",
    title: "New Project Submission",
    message: "Fasil submitted Admin Dashboard Project.",
    type: "info",
    isRead: false,
    createdAt: "2026-05-07T18:22:00",
  },
  {
    id: "not_003",
    userId: "stu_002",
    title: "Project Approved",
    message: "Your Mobile Wireframe project has been approved.",
    type: "success",
    isRead: true,
    createdAt: "2026-04-16T09:35:00",
  },
  {
    id: "not_004",
    userId: "stu_007",
    title: "Project Approved",
    message: "Your AWS Portfolio Deployment project has been approved.",
    type: "success",
    isRead: false,
    createdAt: "2026-05-03T09:10:00",
  },
];

/* =====================================================
   CERTIFICATES / BADGES
===================================================== */

export const certificates: Certificate[] = [
  {
    id: "cert_001",
    studentId: "stu_002",
    courseId: "course_003",
    certificateId: "LMS-UX-2026-0001",
    issuedDate: "2026-04-22",
    fileUrl: "/certificates/lms-ux-2026-0001.pdf",
  },
  {
    id: "cert_002",
    studentId: "stu_005",
    courseId: "course_005",
    certificateId: "LMS-FL-2026-0002",
    issuedDate: "2026-04-30",
    fileUrl: "/certificates/lms-fl-2026-0002.pdf",
  },
  {
    id: "cert_003",
    studentId: "stu_007",
    courseId: "course_009",
    certificateId: "LMS-AWS-2026-0003",
    issuedDate: "2026-05-03",
    fileUrl: "/certificates/lms-aws-2026-0003.pdf",
  },
];

export const badges: Badge[] = [
  {
    id: "badge_001",
    name: "fast_learner",
    title: "Fast Learner",
    description: "Completed 5 lessons in one day.",
    pointsRequired: 500,
    icon: "Zap",
  },
  {
    id: "badge_002",
    name: "project_master",
    title: "Project Master",
    description: "Submitted and approved 3 projects.",
    pointsRequired: 1500,
    icon: "Trophy",
  },
  {
    id: "badge_003",
    name: "course_finisher",
    title: "Course Finisher",
    description: "Completed a full course successfully.",
    pointsRequired: 2000,
    icon: "Award",
  },
  {
    id: "badge_004",
    name: "top_performer",
    title: "Top Performer",
    description: "Scored above 90% in assessments.",
    pointsRequired: 3000,
    icon: "Star",
  },
];

/* =====================================================
   ANALYTICS
===================================================== */

export const allUsers: UserProfile[] = [...admins, ...instructors, ...students];

export const recentCourseApprovals = courses
  .filter((course) => course.status === "pending" || course.status === "rejected")
  .map((course) => ({
    ...course,
    instructor: instructors.find((instructor) => instructor.id === course.instructorId),
  }));

export const topInstructors = [...instructors]
  .sort((a, b) => b.totalRevenue - a.totalRevenue)
  .slice(0, 5);

export const recentTransactions = [...transactions]
  .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  .map((transaction) => ({
    ...transaction,
    user: allUsers.find((user) => user.id === transaction.userId),
    course: courses.find((course) => course.id === transaction.courseId),
  }));

export const platformSettings = {
  appName: "Skylora LMS",
  appLogo: "/images/logo.png",
  supportEmail: "support@skylora.com",
  commissionPercentage: 20,
  currency: "INR",
  allowInstructorRegistration: true,
  requireCourseApproval: true,
  enableCertificates: true,
  enableMessaging: true,
  enableProjectApproval: true,
  defaultThemeColor: "#2563eb",
};

export const monthlyRevenue = [
  { month: "Jan", revenue: 82000, students: 420, courses: 18 },
  { month: "Feb", revenue: 96000, students: 510, courses: 24 },
  { month: "Mar", revenue: 118000, students: 680, courses: 31 },
  { month: "Apr", revenue: 135000, students: 740, courses: 36 },
  { month: "May", revenue: 162000, students: 890, courses: 42 },
  { month: "Jun", revenue: 188000, students: 980, courses: 50 },
  { month: "Jul", revenue: 205000, students: 1140, courses: 62 },
  { month: "Aug", revenue: 232000, students: 1280, courses: 78 },
  { month: "Sep", revenue: 268000, students: 1450, courses: 96 },
  { month: "Oct", revenue: 295000, students: 1620, courses: 124 },
  { month: "Nov", revenue: 318000, students: 1780, courses: 146 },
  { month: "Dec", revenue: 356000, students: 1940, courses: 186 },
];

export const coursePerformance = [
  { name: "Next.js", enrollments: 420, revenue: 1259580, completion: 78 },
  { name: "UI/UX", enrollments: 530, revenue: 1324470, completion: 84 },
  { name: "Flutter", enrollments: 310, revenue: 867690, completion: 69 },
  { name: "Django", enrollments: 270, revenue: 944730, completion: 65 },
  { name: "Pandas", enrollments: 220, revenue: 417780, completion: 72 },
  { name: "AWS", enrollments: 190, revenue: 626810, completion: 64 },
];

/* =====================================================
   AUTH LOGIC
===================================================== */

export async function loginUser(
  email: string,
  password: string
): Promise<LoginResponse> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const authUser = authUsers.find(
    (user) =>
      user.email.toLowerCase() === email.toLowerCase() &&
      user.password === password
  );

  if (!authUser) {
    return {
      success: false,
      message: "Invalid email or password",
      user: null,
    };
  }

  if (authUser.status === "inactive") {
    return {
      success: false,
      message: "Your account is inactive. Please contact support.",
      user: null,
    };
  }

  if (authUser.status === "blocked") {
    return {
      success: false,
      message: "Your account is blocked. Please contact admin.",
      user: null,
    };
  }

  if (authUser.status === "pending") {
    return {
      success: false,
      message: "Your account approval is pending.",
      user: null,
    };
  }

  const profile = allUsers.find((user) => user.id === authUser.id) || null;

  const redirectTo =
    authUser.role === "admin"
      ? "/admin/dashboard"
      : authUser.role === "instructor"
      ? "/instructor/dashboard"
      : "/student/dashboard";

  if (typeof window !== "undefined") {
    localStorage.setItem("lms-auth", "true");
    localStorage.setItem("lms-role", authUser.role);
    localStorage.setItem("lms-user", JSON.stringify(profile));
  }

  return {
    success: true,
    message: "Login successful",
    user: profile,
    role: authUser.role,
    redirectTo,
  };
}

export function logoutUser() {
  if (typeof window === "undefined") return;

  localStorage.removeItem("lms-auth");
  localStorage.removeItem("lms-role");
  localStorage.removeItem("lms-user");
}

export function isAuthenticated() {
  if (typeof window === "undefined") return false;

  return localStorage.getItem("lms-auth") === "true";
}

export function getCurrentUser(): UserProfile | null {
  if (typeof window === "undefined") return null;

  const user = localStorage.getItem("lms-user");

  if (!user) return null;

  try {
    return JSON.parse(user) as UserProfile;
  } catch {
    return null;
  }
}

export function getCurrentRole(): UserRole | null {
  if (typeof window === "undefined") return null;

  return localStorage.getItem("lms-role") as UserRole | null;
}

export function hasRole(role: UserRole) {
  return getCurrentRole() === role;
}

export function getRedirectPath(role: UserRole) {
  if (role === "admin") return "/admin/dashboard";
  if (role === "instructor") return "/instructor/dashboard";
  return "/student/dashboard";
}

/* =====================================================
   GETTERS
===================================================== */

export const getInstructorById = (id: string) =>
  instructors.find((instructor) => instructor.id === id);

export const getStudentById = (id: string) =>
  students.find((student) => student.id === id);

export const getAdminById = (id: string) =>
  admins.find((admin) => admin.id === id);

export const getUserById = (id: string) =>
  allUsers.find((user) => user.id === id);

export const getCourseById = (id: string) =>
  courses.find((course) => course.id === id);

export const getCoursesByInstructor = (instructorId: string) =>
  courses.filter((course) => course.instructorId === instructorId);

export const getEnrollmentsByCourse = (courseId: string) =>
  enrollments.filter((enrollment) => enrollment.courseId === courseId);

export const getEnrollmentsByStudent = (studentId: string) =>
  enrollments.filter((enrollment) => enrollment.studentId === studentId);

export const getLessonsByCourse = (courseId: string) =>
  classLessons.filter((lesson) => lesson.courseId === courseId);

export const getProjectsByCourse = (courseId: string) =>
  projectLessons.filter((project) => project.courseId === courseId);

export const getSubmissionsByCourse = (courseId: string) =>
  projectSubmissions.filter((submission) => submission.courseId === courseId);

export const getSubmissionsByStudent = (studentId: string) =>
  projectSubmissions.filter((submission) => submission.studentId === studentId);

export const getTransactionsByUser = (userId: string) =>
  transactions.filter((transaction) => transaction.userId === userId);

export const getUnreadNotifications = (userId: string) =>
  notifications.filter((notification) => notification.userId === userId && !notification.isRead);

export const getMessagesByUser = (userId: string) =>
  chatMessages.filter((message) => message.senderId === userId || message.receiverId === userId);

export const getCertificatesByStudent = (studentId: string) =>
  certificates.filter((certificate) => certificate.studentId === studentId);

/* =====================================================
   PAGE ALIASES
===================================================== */

export const instructorCourses = courses;

export const instructorStudents = students;

export const instructorTransactions = transactions.filter(
  (transaction) => transaction.transactionType !== "refund"
);

export const studentCourses = courses.filter((course) => course.status === "published");

export const pendingCourses = courses.filter((course) => course.status === "pending");

export const publishedCourses = courses.filter((course) => course.status === "published");

/* =====================================================
   EXPORT ALL
===================================================== */

export const fakeData = {
  permissions,
  roles,
  dashboardStats,
  courseCategories,
  admins,
  instructors,
  students,
  authUsers,
  courses,
  classLessons,
  projectLessons,
  enrollments,
  assessmentQuestions,
  projectSubmissions,
  transactions,
  chatMessages,
  notifications,
  certificates,
  badges,
  recentCourseApprovals,
  topInstructors,
  recentTransactions,
  allUsers,
  platformSettings,
  monthlyRevenue,
  coursePerformance,
  instructorCourses,
  instructorStudents,
  instructorTransactions,
  studentCourses,
  pendingCourses,
  publishedCourses,
};

export default fakeData;