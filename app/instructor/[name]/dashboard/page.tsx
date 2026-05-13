
"use client";

import {
  BookOpen,
  Users,
  Wallet,
  Star,
  TrendingUp,
  Eye,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";

import Link from "next/link";
import { useParams } from "next/navigation";

import {
  instructorCourses,
  instructorStudents,
  instructorTransactions,
} from "@/data/fake-data";

import { formatCurrency } from "@/lib/utils";

export default function InstructorDashboardPage() {
  const params = useParams();

  const instructorName = params.name as string;

  const totalRevenue = instructorTransactions.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-5xl font-black tracking-tight text-gray-900 capitalize">
            Welcome,
            <span className="bg-gradient-to-r from-[#2563eb] to-blue-500 bg-clip-text text-transparent">
              {" "}
              {instructorName.replace(/-/g, " ")}
            </span>
          </h1>

          <p className="mt-3 text-gray-500">
            Monitor your courses, students, analytics and revenue.
          </p>
        </div>

        <Link
          href={`/instructor/${instructorName}/courses/create`}
          className="rounded-2xl bg-[#2563eb] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-blue-500/20 transition hover:scale-[1.02]"
        >
          Create New Course
        </Link>
      </div>

      {/* Stats */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="rounded-2xl bg-blue-100 p-3 text-[#2563eb]">
              <BookOpen size={24} />
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-600">
              +12%
            </span>
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Total Courses
          </p>

          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {instructorCourses.length}
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="rounded-2xl bg-purple-100 p-3 text-purple-600">
              <Users size={24} />
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-600">
              +18%
            </span>
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Total Students
          </p>

          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {instructorStudents.length}
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="rounded-2xl bg-green-100 p-3 text-green-600">
              <Wallet size={24} />
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-600">
              +24%
            </span>
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Total Revenue
          </p>

          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {formatCurrency(totalRevenue)}
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="rounded-2xl bg-orange-100 p-3 text-orange-600">
              <Star size={24} />
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-600">
              +8%
            </span>
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Average Rating
          </p>

          <h2 className="mt-2 text-4xl font-black text-gray-900">
            4.9
          </h2>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="mt-8 rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-gray-900">
              Revenue Analytics
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Monthly instructor revenue performance.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-2xl bg-green-100 px-4 py-2 text-sm font-bold text-green-600">
            <TrendingUp size={16} />
            +34% Growth
          </div>
        </div>

        <div className="flex h-[320px] items-end gap-5">
          {[24, 42, 52, 38, 70, 90, 75].map((item, index) => (
            <div
              key={index}
              className="flex flex-1 flex-col items-center"
            >
              <div className="mb-4 text-xs font-bold text-gray-500">
                ₹{item}k
              </div>

              <div
                className="w-full rounded-t-[24px] bg-gradient-to-t from-[#2563eb] to-blue-400 transition-all hover:opacity-80"
                style={{
                  height: `${item * 2.5}px`,
                }}
              />

              <p className="mt-4 text-sm font-bold text-gray-700">
                {
                  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"][
                    index
                  ]
                }
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 grid gap-8 xl:grid-cols-[1fr_0.9fr]">
        {/* Courses */}
        <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black text-gray-900">
                My Courses
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Recently updated courses.
              </p>
            </div>

            <Link
              href={`/instructor/${instructorName}/courses`}
              className="text-sm font-bold text-[#2563eb]"
            >
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {instructorCourses.slice(0, 4).map((course) => (
              <div
                key={course.id}
                className="flex items-center justify-between rounded-3xl border border-gray-100 p-4 transition hover:border-blue-100 hover:bg-blue-50/20"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="h-16 w-24 rounded-2xl object-cover"
                  />

                  <div>
                    <h3 className="font-black text-gray-900">
                      {course.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {course.enrolledCount} Students
                    </p>
                  </div>
                </div>

                <Link
                  href={`/instructor/${instructorName}/courses/${course.id}`}
                  className="flex items-center gap-2 rounded-2xl bg-[#2563eb] px-4 py-2 text-sm font-semibold text-white"
                >
                  <Eye size={16} />
                  View
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Students */}
        <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black text-gray-900">
                Top Students
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Most active students in your courses.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {instructorStudents.slice(0, 5).map((student) => (
              <div
                key={student.id}
                className="flex items-center justify-between rounded-3xl border border-gray-100 p-4 transition hover:border-blue-100 hover:bg-blue-50/20"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="h-14 w-14 rounded-2xl object-cover"
                  />

                  <div>
                    <h3 className="font-black text-gray-900">
                      {student.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {student.email}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <h4 className="font-black text-gray-900">
                    {student.points} XP
                  </h4>

                  <div className="mt-1 flex items-center justify-end gap-1 text-sm font-semibold text-green-600">
                    <ArrowUpRight size={14} />
                    Active
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity */}
      <div className="mt-8 rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-2xl bg-blue-100 p-3 text-[#2563eb]">
            <GraduationCap size={22} />
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900">
              Teaching Activity
            </h2>

            <p className="text-sm text-gray-500">
              Recent instructor platform activity.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {[
            "New student enrolled in React Masterclass",
            "Project submission approved successfully",
            "Course rating increased to 4.9",
            "New payout processed successfully",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-2xl border border-gray-100 p-5"
            >
              <div className="h-3 w-3 rounded-full bg-[#2563eb]" />

              <p className="font-medium text-gray-700">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}