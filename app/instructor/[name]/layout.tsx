// src/app/instructor/[name]/layout.tsx

"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

import {
  LayoutDashboard,
  BookOpen,
  FolderKanban,
  Users,
  MessageCircle,
  Bell,
  Wallet,
  Settings,
  ChevronRight,
  Sparkles,
  LogOut,
  BarChart3,
  Star,
  ShieldCheck,
} from "lucide-react";

import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Dashboard",
    href: "dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Courses",
    href: "courses",
    icon: BookOpen,
  },
  {
    title: "Projects",
    href: "projects",
    icon: FolderKanban,
  },
  {
    title: "Students",
    href: "students",
    icon: Users,
  },
  {
    title: "Messages",
    href: "messages",
    icon: MessageCircle,
  },
  {
    title: "Notifications",
    href: "notifications",
    icon: Bell,
  },
  {
    title: "Analytics",
    href: "analytics",
    icon: BarChart3,
  },
  {
    title: "Earnings",
    href: "earnings",
    icon: Wallet,
  },
  {
    title: "Reviews",
    href: "reviews",
    icon: Star,
  },
  {
    title: "Certificates",
    href: "certificates",
    icon: ShieldCheck,
  },
  {
    title: "Settings",
    href: "settings",
    icon: Settings,
  },
];

export default function InstructorDynamicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const params = useParams();

  const instructorName = params.name as string;

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen w-[310px] overflow-hidden border-r border-gray-100 bg-white lg:block">
        {/* Top */}
        <div className="border-b border-gray-100 px-8 py-8">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-[26px] bg-gradient-to-br from-[#2563eb] to-blue-500 text-white shadow-xl shadow-blue-500/30">
              <Sparkles size={28} />
            </div>

            <div>
              <h1 className="bg-gradient-to-r from-[#2563eb] to-blue-500 bg-clip-text text-3xl font-black tracking-tight text-transparent">
                CubixSkill
              </h1>

              <p className="mt-1 text-sm font-medium capitalize text-gray-500">
                {instructorName.replace(/-/g, " ")}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="sidebar-scroll flex h-[calc(100vh-190px)] flex-col justify-between overflow-y-auto px-5 py-6">
          <nav className="space-y-2">
            {navItems.map((item) => {
              const fullHref = `/instructor/${instructorName}/${item.href}`;

              const isActive =
                pathname === fullHref ||
                pathname.startsWith(`${fullHref}/`);

              return (
                <Link
                  key={item.href}
                  href={fullHref}
                  className={cn(
                    "group relative flex items-center justify-between overflow-hidden rounded-2xl px-5 py-4 transition-all duration-300",
                    isActive
                      ? "bg-gradient-to-r from-[#2563eb] to-blue-500 text-white shadow-xl shadow-blue-500/30"
                      : "text-gray-600 hover:bg-blue-50 hover:text-[#2563eb]"
                  )}
                >
                  {/* Glow */}
                  {isActive && (
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute -right-10 top-0 h-24 w-24 rounded-full bg-white blur-2xl" />
                    </div>
                  )}

                  {/* Left */}
                  <div className="relative z-10 flex items-center gap-4">
                    <div
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300",
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-[#2563eb]"
                      )}
                    >
                      <item.icon size={20} />
                    </div>

                    <div>
                      <p className="text-sm font-bold tracking-wide">
                        {item.title}
                      </p>

                      <p
                        className={cn(
                          "text-xs",
                          isActive
                            ? "text-blue-100"
                            : "text-gray-400"
                        )}
                      >
                        Manage {item.title.toLowerCase()}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ChevronRight
                    size={18}
                    className={cn(
                      "relative z-10 transition-all duration-300",
                      isActive
                        ? "translate-x-0 text-white"
                        : "-translate-x-1 text-gray-300 group-hover:translate-x-0 group-hover:text-[#2563eb]"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Bottom */}
          <div className="mt-10">
            {/* Analytics Card */}
            <div className="overflow-hidden rounded-[30px] bg-gradient-to-br from-[#2563eb] via-blue-500 to-indigo-500 p-6 text-white shadow-2xl shadow-blue-500/30">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                <BarChart3 size={24} />
              </div>

              <h3 className="text-2xl font-black">
                Instructor Analytics
              </h3>

              <p className="mt-3 text-sm leading-7 text-blue-100">
                Track students, revenue, engagement,
                projects and performance metrics.
              </p>

              <button className="mt-6 w-full rounded-2xl bg-white px-5 py-3 text-sm font-black text-[#2563eb] transition-all hover:scale-[1.02]">
                Open Analytics
              </button>
            </div>

            {/* Profile */}
            <div className="mt-5 rounded-[28px] border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/100?img=22"
                  alt="Instructor"
                  className="h-14 w-14 rounded-2xl object-cover"
                />

                <div className="flex-1">
                  <h4 className="font-black capitalize text-gray-900">
                    {instructorName.replace(/-/g, " ")}
                  </h4>

                  <p className="text-sm text-gray-500">
                    Senior Instructor
                  </p>
                </div>

                <button className="rounded-xl bg-red-50 p-3 text-red-500 transition hover:bg-red-100">
                  <LogOut size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="w-full lg:pl-[310px]">
        {children}
      </main>
    </div>
  );
}