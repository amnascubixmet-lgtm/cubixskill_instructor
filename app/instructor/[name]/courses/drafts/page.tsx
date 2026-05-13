"use client";

import Link from "next/link";

import { useParams } from "next/navigation";

import {
  FileText,
  Pencil,
  Eye,
  Search,
  Clock3,
  Plus,
  MoreVertical,
} from "lucide-react";

import { instructorCourses } from "@/data/fake-data";

export default function DraftCoursesPage() {
  const params = useParams();

  const instructorName = params.name as string;

  const draftCourses = instructorCourses.filter(
    (course) => course.status === "draft"
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-5xl font-black tracking-tight text-gray-900">
            Draft Courses
          </h1>

          <p className="mt-3 text-gray-500">
            Continue editing your unpublished draft courses.
          </p>
        </div>

        <Link
          href={`/instructor/${instructorName}/courses/create`}
          className="flex items-center gap-2 rounded-2xl bg-[#2563eb] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-blue-500/20 transition hover:scale-[1.02]"
        >
          <Plus size={18} />
          Create Draft
        </Link>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-5 md:grid-cols-3">
        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <FileText className="text-[#2563eb]" />

          <p className="mt-4 text-sm text-gray-500">
            Total Drafts
          </p>

          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {draftCourses.length}
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <Clock3 className="text-yellow-500" />

          <p className="mt-4 text-sm text-gray-500">
            Last Updated
          </p>

          <h2 className="mt-2 text-2xl font-black text-gray-900">
            Today
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <Pencil className="text-green-500" />

          <p className="mt-4 text-sm text-gray-500">
            Editable Courses
          </p>

          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {draftCourses.length}
          </h2>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
        <Search size={18} className="text-gray-400" />

        <input
          placeholder="Search draft courses..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
      </div>

      {/* Draft List */}
      <div className="grid gap-6 xl:grid-cols-2">
        {draftCourses.map((course) => (
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
                <span className="rounded-full border border-yellow-200 bg-yellow-100 px-4 py-2 text-xs font-bold text-yellow-700 backdrop-blur-sm">
                  Draft
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-black text-gray-900">
                {course.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                {course.description}
              </p>

              {/* Meta */}
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="rounded-2xl bg-blue-50 px-4 py-3">
                  <p className="text-xs text-gray-500">
                    Duration
                  </p>

                  <h3 className="mt-1 font-black text-[#2563eb]">
                    {course.duration}
                  </h3>
                </div>

                <div className="rounded-2xl bg-purple-50 px-4 py-3">
                  <p className="text-xs text-gray-500">
                    Lessons
                  </p>

                  <h3 className="mt-1 font-black text-purple-600">
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
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/instructor/${instructorName}/courses/${course.id}`}
                  className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
                >
                  <Eye size={16} />
                  Preview
                </Link>

                <Link
                  href={`/instructor/${instructorName}/courses/${course.id}/edit`}
                  className="flex items-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-bold text-white"
                >
                  <Pencil size={16} />
                  Continue Editing
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty */}
      {draftCourses.length === 0 && (
        <div className="rounded-[32px] border border-dashed border-gray-300 bg-white p-16 text-center shadow-sm">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-[#2563eb]">
            <FileText size={34} />
          </div>

          <h2 className="mt-6 text-3xl font-black text-gray-900">
            No Draft Courses
          </h2>

          <p className="mt-3 text-gray-500">
            Start creating your first course draft.
          </p>

          <Link
            href={`/instructor/${instructorName}/courses/create`}
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#2563eb] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-blue-500/20"
          >
            <Plus size={18} />
            Create Course
          </Link>
        </div>
      )}
    </div>
  );
}