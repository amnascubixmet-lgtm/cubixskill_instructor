"use client";

import Link from "next/link";

import { useParams } from "next/navigation";

import {
  Clock3,
  Search,
  Eye,
  AlertCircle,
  MoreVertical,
  CheckCircle2,
  FileWarning,
} from "lucide-react";

import { instructorCourses } from "@/data/fake-data";

export default function PendingCoursesPage() {
  const params = useParams();

  const instructorName = params.name as string;

  const pendingCourses = instructorCourses.filter(
    (course) => course.status === "pending"
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-black tracking-tight text-gray-900">
          Pending Courses
        </h1>

        <p className="mt-3 text-gray-500">
          Courses waiting for admin approval.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-5 md:grid-cols-3">
        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <Clock3 className="text-yellow-500" />

          <p className="mt-4 text-sm text-gray-500">
            Pending Approval
          </p>

          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {pendingCourses.length}
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <CheckCircle2 className="text-green-500" />

          <p className="mt-4 text-sm text-gray-500">
            Submitted Successfully
          </p>

          <h2 className="mt-2 text-2xl font-black text-gray-900">
            Yes
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <FileWarning className="text-red-500" />

          <p className="mt-4 text-sm text-gray-500">
            Requires Update
          </p>

          <h2 className="mt-2 text-4xl font-black text-gray-900">
            0
          </h2>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
        <Search size={18} className="text-gray-400" />

        <input
          placeholder="Search pending courses..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
      </div>

      {/* Courses */}
      <div className="grid gap-6 xl:grid-cols-2">
        {pendingCourses.map((course) => (
          <div
            key={course.id}
            className="overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Image */}
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
                <span className="rounded-full border border-yellow-200 bg-yellow-100 px-4 py-2 text-xs font-bold text-yellow-700 backdrop-blur-sm">
                  Pending Review
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-gray-900">
                    {course.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {course.description}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="rounded-2xl bg-yellow-50 px-4 py-3">
                  <p className="text-xs text-gray-500">
                    Status
                  </p>

                  <h3 className="mt-1 font-black text-yellow-700">
                    Pending
                  </h3>
                </div>

                <div className="rounded-2xl bg-blue-50 px-4 py-3">
                  <p className="text-xs text-gray-500">
                    Lessons
                  </p>

                  <h3 className="mt-1 font-black text-[#2563eb]">
                    {course.totalLessons}
                  </h3>
                </div>

                <div className="rounded-2xl bg-green-50 px-4 py-3">
                  <p className="text-xs text-gray-500">
                    Price
                  </p>

                  <h3 className="mt-1 font-black text-green-600">
                    ₹{course.price}
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

              {/* Alert */}
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-yellow-200 bg-yellow-50 p-4">
                <AlertCircle
                  size={18}
                  className="mt-0.5 text-yellow-600"
                />

                <div>
                  <h4 className="font-bold text-yellow-800">
                    Waiting for Admin Review
                  </h4>

                  <p className="mt-1 text-sm text-yellow-700">
                    Your course has been submitted successfully.
                    Approval may take up to 24 hours.
                  </p>
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
                  className="rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
                >
                  Edit Course
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty */}
      {pendingCourses.length === 0 && (
        <div className="rounded-[32px] border border-dashed border-gray-300 bg-white p-16 text-center shadow-sm">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
            <Clock3 size={34} />
          </div>

          <h2 className="mt-6 text-3xl font-black text-gray-900">
            No Pending Courses
          </h2>

          <p className="mt-3 text-gray-500">
            You currently have no courses waiting for approval.
          </p>
        </div>
      )}
    </div>
  );
}