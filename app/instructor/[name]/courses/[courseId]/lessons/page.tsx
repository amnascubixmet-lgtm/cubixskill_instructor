"use client";

import Link from "next/link";

import { useParams } from "next/navigation";

import {
  PlayCircle,
  Clock3,
  Eye,
  Pencil,
  Trash2,
  Plus,
  Search,
  BookOpen,
  MoreVertical,
} from "lucide-react";

import {
  instructorCourses,
  classLessons,
} from "@/data/fake-data";

export default function CourseLessonsPage() {
  const params = useParams();

  const instructorName = params.name as string;

  const courseId = params.courseId as string;

  const course = instructorCourses.find(
    (item) => item.id === courseId
  );

  const lessons = classLessons.filter(
    (lesson) => lesson.courseId === courseId
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
      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
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
            Course Lessons
          </h1>

          <p className="mt-3 text-gray-500">
            Manage all lessons and video content.
          </p>
        </div>

        <Link
          href={`/instructor/${instructorName}/courses/${course.id}/lessons/create`}
          className="flex items-center gap-2 rounded-2xl bg-[#2563eb] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-blue-500/20"
        >
          <Plus size={18} />
          Add Lesson
        </Link>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-5 md:grid-cols-3">
        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <BookOpen className="text-[#2563eb]" />

          <p className="mt-4 text-sm text-gray-500">
            Total Lessons
          </p>

          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {lessons.length}
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <PlayCircle className="text-purple-600" />

          <p className="mt-4 text-sm text-gray-500">
            Video Lessons
          </p>

          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {lessons.length}
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <Clock3 className="text-green-600" />

          <p className="mt-4 text-sm text-gray-500">
            Total Duration
          </p>

          <h2 className="mt-2 text-3xl font-black text-gray-900">
            {course.duration}
          </h2>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
        <Search size={18} className="text-gray-400" />

        <input
          placeholder="Search lessons..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
      </div>

      {/* Lessons */}
      <div className="space-y-5">
        {lessons.map((lesson, index) => (
          <div
            key={lesson.id}
            className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
              {/* Left */}
              <div className="flex items-start gap-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-[28px] bg-blue-100 text-[#2563eb]">
                  <PlayCircle size={34} />
                </div>

                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-[#2563eb]">
                      Lesson {index + 1}
                    </span>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600">
                      {lesson.duration}
                    </span>
                  </div>

                  <h2 className="text-2xl font-black text-gray-900">
                    {lesson.title}
                  </h2>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-500">
                    {lesson.description}
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50">
                  <Eye size={16} />
                  Preview
                </button>

                <Link
                  href={`/instructor/${instructorName}/courses/${course.id}/lessons/${lesson.id}`}
                  className="flex items-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-bold text-white"
                >
                  <Pencil size={16} />
                  Edit Lesson
                </Link>

                <button className="rounded-2xl border border-red-200 bg-red-50 p-3 text-red-500 transition hover:bg-red-100">
                  <Trash2 size={18} />
                </button>

                <button className="rounded-2xl border border-gray-200 bg-white p-3 text-gray-600 transition hover:bg-gray-50">
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty */}
      {lessons.length === 0 && (
        <div className="rounded-[32px] border border-dashed border-gray-300 bg-white p-16 text-center shadow-sm">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-[#2563eb]">
            <BookOpen size={34} />
          </div>

          <h2 className="mt-6 text-3xl font-black text-gray-900">
            No Lessons Yet
          </h2>

          <p className="mt-3 text-gray-500">
            Start adding lessons to this course.
          </p>

          <Link
            href={`/instructor/${instructorName}/courses/${course.id}/lessons/create`}
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#2563eb] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-blue-500/20"
          >
            <Plus size={18} />
            Create Lesson
          </Link>
        </div>
      )}
    </div>
  );
}