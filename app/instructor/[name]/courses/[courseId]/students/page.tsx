"use client";

import Link from "next/link";

import { useParams } from "next/navigation";

import {
  Users,
  Search,
  Mail,
  Eye,
  TrendingUp,
  Award,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

import {
  instructorCourses,
  instructorStudents,
} from "@/data/fake-data";

export default function CourseStudentsPage() {
  const params = useParams();

  const instructorName = params.name as string;

  const courseId = params.courseId as string;

  const course = instructorCourses.find(
    (item) => item.id === courseId
  );

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8fafc]">
        <h1 className="text-4xl font-black text-gray-900">
          Course Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-3">
          <Link
            href={`/instructor/${instructorName}/courses/${course.id}`}
            className="rounded-2xl border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700"
          >
            Back
          </Link>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-[#2563eb]">
            {course.category}
          </span>
        </div>

        <h1 className="max-w-4xl text-5xl font-black tracking-tight text-gray-900">
          Course Students
        </h1>

        <p className="mt-3 text-gray-500">
          Monitor enrolled students and learning progress.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-5 md:grid-cols-4">
        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <Users className="text-[#2563eb]" />

          <p className="mt-4 text-sm text-gray-500">
            Enrolled Students
          </p>

          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {course.enrolledCount}
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <TrendingUp className="text-green-600" />

          <p className="mt-4 text-sm text-gray-500">
            Active Learners
          </p>

          <h2 className="mt-2 text-4xl font-black text-gray-900">
            84%
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <Award className="text-yellow-500" />

          <p className="mt-4 text-sm text-gray-500">
            Completed
          </p>

          <h2 className="mt-2 text-4xl font-black text-gray-900">
            430
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <Clock3 className="text-purple-600" />

          <p className="mt-4 text-sm text-gray-500">
            Avg. Watch Time
          </p>

          <h2 className="mt-2 text-3xl font-black text-gray-900">
            18h
          </h2>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
        <Search size={18} className="text-gray-400" />

        <input
          placeholder="Search students..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
      </div>

      {/* Students */}
      <div className="space-y-5">
        {instructorStudents.map((student) => (
          <div
            key={student.id}
            className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
              {/* Left */}
              <div className="flex items-center gap-5">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="h-24 w-24 rounded-[28px] object-cover"
                />

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-black text-gray-900">
                      {student.name}
                    </h2>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                      Active
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-5">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Mail size={16} />
                      {student.email}
                    </div>

                    <div className="flex items-center gap-2 text-sm font-bold text-[#2563eb]">
                      <TrendingUp size={16} />
                      {student.progress || 78}% Progress
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-[#2563eb]">
                      {student.points} XP
                    </span>

                    <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700">
                      Premium Student
                    </span>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/instructor/${instructorName}/students/${student.id}`}
                  className="flex items-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-bold text-white"
                >
                  <Eye size={16} />
                  View Profile
                </Link>

                <button className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50">
                  <ArrowUpRight size={16} />
                  Message
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}