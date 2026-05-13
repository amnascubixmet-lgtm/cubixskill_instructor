// src/app/instructor/[name]/courses/page.tsx

"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import {
  BookOpen,
  Plus,
  Search,
  Users,
  Star,
  Eye,
  Pencil,
  MoreVertical,
  Clock3,
  CheckCircle2,
} from "lucide-react";

import { instructorCourses } from "@/data/fake-data";

import {
  formatCurrency,
  getStatusColor,
} from "@/lib/utils";

export default function InstructorCoursesPage() {
  const params = useParams();

  const instructorName = params.name as string;

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-5xl font-black tracking-tight text-gray-900">
            My Courses
          </h1>

          <p className="mt-3 text-gray-500">
            Manage all your published and draft courses.
          </p>
        </div>

        <Link
          href={`/instructor/${instructorName}/courses/create`}
          className="flex items-center gap-2 rounded-2xl bg-[#2563eb] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-blue-500/20 transition hover:scale-[1.02]"
        >
          <Plus size={18} />
          Create Course
        </Link>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-5 md:grid-cols-4">
        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <BookOpen className="text-[#2563eb]" />

          <p className="mt-4 text-sm text-gray-500">
            Total Courses
          </p>

          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {instructorCourses.length}
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <CheckCircle2 className="text-green-500" />

          <p className="mt-4 text-sm text-gray-500">
            Published
          </p>

          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {
              instructorCourses.filter(
                (course) => course.status === "published"
              ).length
            }
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <Clock3 className="text-yellow-500" />

          <p className="mt-4 text-sm text-gray-500">
            Pending
          </p>

          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {
              instructorCourses.filter(
                (course) => course.status === "pending"
              ).length
            }
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <Users className="text-purple-500" />

          <p className="mt-4 text-sm text-gray-500">
            Total Students
          </p>

          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {instructorCourses.reduce(
              (acc, item) => acc + item.enrolledCount,
              0
            )}
          </h2>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
        <Search size={18} className="text-gray-400" />

        <input
          placeholder="Search courses..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
      </div>

      {/* Courses */}
      <div className="grid gap-6 xl:grid-cols-2">
        {instructorCourses.map((course) => (
          <div
            key={course.id}
            className="overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Thumbnail */}
            <div className="relative">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="h-[240px] w-full object-cover"
              />

              <div className="absolute right-5 top-5">
                <button className="rounded-2xl bg-white/90 p-3 backdrop-blur-sm">
                  <MoreVertical size={18} />
                </button>
              </div>

              <div className="absolute bottom-5 left-5">
                <span
                  className={`rounded-full border px-4 py-2 text-xs font-bold capitalize backdrop-blur-sm ${getStatusColor(
                    course.status
                  )}`}
                >
                  {course.status}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-gray-900">
                    {course.title}
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-gray-500">
                    {course.description}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="rounded-2xl bg-blue-50 px-4 py-3">
                  <p className="text-xs text-gray-500">
                    Students
                  </p>

                  <h3 className="mt-1 font-black text-[#2563eb]">
                    {course.enrolledCount}
                  </h3>
                </div>

                <div className="rounded-2xl bg-yellow-50 px-4 py-3">
                  <p className="text-xs text-gray-500">
                    Rating
                  </p>

                  <h3 className="mt-1 flex items-center gap-1 font-black text-yellow-600">
                    <Star size={14} />
                    {course.rating}
                  </h3>
                </div>

                <div className="rounded-2xl bg-green-50 px-4 py-3">
                  <p className="text-xs text-gray-500">
                    Revenue
                  </p>

                  <h3 className="mt-1 font-black text-green-600">
                    {formatCurrency(course.price * course.enrolledCount)}
                  </h3>
                </div>

                <div className="rounded-2xl bg-purple-50 px-4 py-3">
                  <p className="text-xs text-gray-500">
                    Duration
                  </p>

                  <h3 className="mt-1 font-black text-purple-600">
                    {course.duration}
                  </h3>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/instructor/${instructorName}/courses/${course.id}`}
                  className="flex items-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-bold text-white"
                >
                  <Eye size={16} />
                  View Course
                </Link>

                <Link
                  href={`/instructor/${instructorName}/courses/${course.id}/edit`}
                  className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
                >
                  <Pencil size={16} />
                  Edit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}