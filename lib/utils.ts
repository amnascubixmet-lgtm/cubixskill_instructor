// src/lib/utils.ts

export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatCurrency(
  amount: number,
  currency: string = "INR",
  locale: string = "en-IN"
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat("en-IN").format(value);
}

export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
  }).format(new Date(date));
}

export function formatDateTime(date: string | Date) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));
}

export function timeAgo(date: string | Date) {
  const seconds = Math.floor(
    (Date.now() - new Date(date).getTime()) / 1000
  );

  const intervals = [
    { label: "year", value: 31536000 },
    { label: "month", value: 2592000 },
    { label: "day", value: 86400 },
    { label: "hour", value: 3600 },
    { label: "minute", value: 60 },
  ];

  for (const item of intervals) {
    const count = Math.floor(seconds / item.value);

    if (count >= 1) {
      return `${count} ${item.label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-");
}

export function generateId(prefix: string = "id") {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

export function calculatePercentage(current: number, total: number) {
  if (!total) return 0;
  return Math.round((current / total) * 100);
}

export function getProgressColor(progress: number) {
  if (progress < 30) return "bg-red-500";
  if (progress < 70) return "bg-yellow-500";
  return "bg-green-500";
}

export function getStatusColor(status: string) {
  switch (status.toLowerCase()) {
    case "active":
    case "approved":
    case "success":
    case "published":
    case "completed":
      return "bg-green-100 text-green-700 border-green-200";

    case "pending":
    case "revision":
      return "bg-yellow-100 text-yellow-700 border-yellow-200";

    case "rejected":
    case "failed":
    case "blocked":
      return "bg-red-100 text-red-700 border-red-200";

    case "inactive":
    case "draft":
      return "bg-gray-100 text-gray-700 border-gray-200";

    default:
      return "bg-blue-100 text-blue-700 border-blue-200";
  }
}

export function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function avatarFallback(name: string) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=random`;
}

export function formatFileSize(bytes: number) {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

export function formatDuration(seconds: number) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  if (hrs > 0) {
    return `${hrs}:${String(mins).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  }

  return `${mins}:${String(secs).padStart(2, "0")}`;
}

export function chunkArray<T>(array: T[], size: number) {
  const chunks: T[][] = [];

  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }

  return chunks;
}

export function sortByLatest<T extends { createdAt: string }>(items: T[]) {
  return [...items].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function searchFilter<T>(
  items: T[],
  search: string,
  keys: (keyof T)[]
) {
  const value = search.toLowerCase();

  return items.filter((item) =>
    keys.some((key) => String(item[key]).toLowerCase().includes(value))
  );
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function copyToClipboard(text: string) {
  if (typeof navigator === "undefined") return;
  await navigator.clipboard.writeText(text);
}

export const storage = {
  get(key: string) {
    if (typeof window === "undefined") return null;

    const value = localStorage.getItem(key);

    try {
      return value ? JSON.parse(value) : null;
    } catch {
      return value;
    }
  },

  set(key: string, value: unknown) {
    if (typeof window === "undefined") return;
    localStorage.setItem(key, JSON.stringify(value));
  },

  remove(key: string) {
    if (typeof window === "undefined") return;
    localStorage.removeItem(key);
  },

  clear() {
    if (typeof window === "undefined") return;
    localStorage.clear();
  },
};

export function calculateCourseCompletion(
  completedLessons: number,
  totalLessons: number
) {
  if (!totalLessons) return 0;
  return Math.floor((completedLessons / totalLessons) * 100);
}

export function calculateRevenue(enrollments: number, coursePrice: number) {
  return enrollments * coursePrice;
}

export function calculateAverageRating(ratings: number[]) {
  if (!ratings.length) return 0;

  const total = ratings.reduce((acc, rating) => acc + rating, 0);

  return Number((total / ratings.length).toFixed(1));
}

export function setThemeColor(color: string) {
  if (typeof document === "undefined") return;
  document.documentElement.style.setProperty("--primary-color", color);
}

export function hexToRgba(hex: string, opacity: number) {
  let c = hex.replace("#", "");

  if (c.length === 3) {
    c = c
      .split("")
      .map((char) => char + char)
      .join("");
  }

  const bigint = parseInt(c, 16);

  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export function randomItem<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

export function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const routes = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    forgotPassword: "/auth/forgot-password",
  },

  admin: {
    dashboard: "/admin/dashboard",
    instructors: "/admin/instructors",
    students: "/admin/students",
    courses: "/admin/courses",
    approvals: "/admin/course-approval",
    reports: "/admin/reports",
    transactions: "/admin/transactions",
    settings: "/admin/settings",
  },

  instructor: {
    dashboard: "/instructor/dashboard",
    courses: "/instructor/courses",
    createCourse: "/instructor/courses/create",
    submissions: "/instructor/submissions",
    students: "/instructor/students",
    messages: "/instructor/messages",
    themeSettings: "/instructor/theme-settings",
  },

  student: {
    dashboard: "/student/dashboard",
    courses: "/student/courses",
    projects: "/student/projects",
    certificates: "/student/certificates",
    messages: "/student/messages",
  },
};