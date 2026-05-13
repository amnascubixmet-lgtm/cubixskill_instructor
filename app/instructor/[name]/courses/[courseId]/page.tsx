"use client";

import Link from "next/link";

import { useParams } from "next/navigation";

import {
  BookOpen,
  Users,
  Star,
  Clock3,
  Wallet,
  Pencil,
  PlayCircle,
  FolderKanban,
  Eye,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

import {
  instructorCourses,
  classLessons,
  projectLessons,
} from "@/data/fake-data";

import { formatCurrency } from "@/lib/utils";

export default function InstructorCourseDetailsPage() {
  const params = useParams();

  const instructorName = params.name as string;

  const courseId = params.courseId as string;

  const course = instructorCourses.find(
    (item) => item.id === courseId
  );

  const lessons = classLessons.filter(
    (lesson) => lesson.courseId === courseId
  );

  const projects = projectLessons.filter(
    (project) => project.courseId === courseId
  );

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8fafc]">
        <div className="rounded-[32px] bg-white p-10 text-center shadow-sm">
          <h1 className="text-4xl font-black text-gray-900">
            Course Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            This course does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10">
      {/* Top */}
      <div className="mb-8 flex flex-wrap items-center gap-4">
        <Link
          href={`/instructor/${instructorName}/courses`}
          className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
        >
          <ArrowLeft size={16} />
          Back
        </Link>

        <Link
          href={`/instructor/${instructorName}/courses/${course.id}/edit`}
          className="flex items-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-bold text-white shadow-xl shadow-blue-500/20"
        >
          <Pencil size={16} />
          Edit Course
        </Link>
      </div>

      {/* Hero */}
      <div className="overflow-hidden rounded-[36px] bg-white shadow-sm">
        <div className="relative">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="h-[360px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="absolute bottom-0 left-0 p-8">
            <div className="mb-5 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/20 px-4 py-2 text-xs font-bold text-white backdrop-blur-sm">
                {course.category}
              </span>

              <span className="rounded-full bg-green-500/20 px-4 py-2 text-xs font-bold text-green-200 backdrop-blur-sm">
                {course.status}
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-white">
              {course.title}
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-200">
              {course.description}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-5 border-t border-gray-100 p-6 md:grid-cols-5">
          <div className="rounded-3xl bg-blue-50 p-5">
            <BookOpen className="text-[#2563eb]" />

            <p className="mt-4 text-sm text-gray-500">
              Lessons
            </p>

            <h2 className="mt-1 text-3xl font-black text-gray-900">
              {course.totalLessons}
            </h2>
          </div>

          <div className="rounded-3xl bg-purple-50 p-5">
            <Users className="text-purple-600" />

            <p className="mt-4 text-sm text-gray-500">
              Students
            </p>

            <h2 className="mt-1 text-3xl font-black text-gray-900">
              {course.enrolledCount}
            </h2>
          </div>

          <div className="rounded-3xl bg-yellow-50 p-5">
            <Star className="text-yellow-600" />

            <p className="mt-4 text-sm text-gray-500">
              Rating
            </p>

            <h2 className="mt-1 text-3xl font-black text-gray-900">
              {course.rating}
            </h2>
          </div>

          <div className="rounded-3xl bg-green-50 p-5">
            <Wallet className="text-green-600" />

            <p className="mt-4 text-sm text-gray-500">
              Revenue
            </p>

            <h2 className="mt-1 text-3xl font-black text-gray-900">
              {formatCurrency(
                course.price * course.enrolledCount
              )}
            </h2>
          </div>

          <div className="rounded-3xl bg-orange-50 p-5">
            <Clock3 className="text-orange-600" />

            <p className="mt-4 text-sm text-gray-500">
              Duration
            </p>

            <h2 className="mt-1 text-3xl font-black text-gray-900">
              {course.duration}
            </h2>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-8 grid gap-8 xl:grid-cols-[1fr_380px]">
        {/* Lessons */}
        <div className="space-y-8">
          <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-black text-gray-900">
                  Course Lessons
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Manage all lesson videos and materials.
                </p>
              </div>

              <Link
                href={`/instructor/${instructorName}/courses/${course.id}/lessons/create`}
                className="rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-bold text-white"
              >
                Add Lesson
              </Link>
            </div>

            <div className="space-y-4">
              {lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="flex flex-col gap-5 rounded-3xl border border-gray-100 p-5 transition hover:border-blue-100 hover:bg-blue-50/20 lg:flex-row lg:items-center lg:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-100 text-[#2563eb]">
                      <PlayCircle size={28} />
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-gray-900">
                        {lesson.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {lesson.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-3">
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600">
                          {lesson.duration}
                        </span>

                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-[#2563eb]">
                          Class {lesson.classNumber}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-700">
                      <Eye size={16} />
                      Preview
                    </button>

                    <button className="flex items-center gap-2 rounded-2xl bg-[#2563eb] px-4 py-3 text-sm font-bold text-white">
                      <Pencil size={16} />
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-black text-gray-900">
                  Projects
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Course practical assignments.
                </p>
              </div>

              <Link
                href={`/instructor/${instructorName}/courses/${course.id}/projects/create`}
                className="rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-bold text-white"
              >
                Add Project
              </Link>
            </div>

            <div className="space-y-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex flex-col gap-5 rounded-3xl border border-gray-100 p-5 lg:flex-row lg:items-center lg:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-purple-100 text-purple-600">
                      <FolderKanban size={28} />
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-gray-900">
                        {project.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {project.description}
                      </p>

                      <div className="mt-3 flex gap-3">
                        <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700">
                          Deadline {project.deadlineDays} Days
                        </span>

                        {project.isRequired && (
                          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-600">
                            Required
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <button className="rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-bold text-white">
                    View Submissions
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-8">
          {/* Publish */}
          <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2563eb] via-blue-500 to-indigo-500 p-7 text-white shadow-2xl shadow-blue-500/20">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-sm">
              <CheckCircle2 size={30} />
            </div>

            <h2 className="text-3xl font-black">
              Course Status
            </h2>

            <p className="mt-3 text-sm leading-7 text-blue-100">
              Your course is currently{" "}
              <span className="font-bold capitalize">
                {course.status}
              </span>
              .
            </p>

            <button className="mt-8 w-full rounded-2xl bg-white px-5 py-4 text-sm font-black text-[#2563eb] transition hover:scale-[1.02]">
              Update Course
            </button>
          </div>

          {/* Details */}
          <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-gray-900">
              Course Details
            </h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-gray-50 p-4">
                <p className="text-xs text-gray-500">
                  Course Level
                </p>

                <h3 className="mt-1 font-black text-gray-900">
                  {course.level}
                </h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <p className="text-xs text-gray-500">
                  Category
                </p>

                <h3 className="mt-1 font-black text-gray-900">
                  {course.category}
                </h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <p className="text-xs text-gray-500">
                  Price
                </p>

                <h3 className="mt-1 font-black text-gray-900">
                  ₹{course.price}
                </h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <p className="text-xs text-gray-500">
                  Created At
                </p>

                <h3 className="mt-1 font-black text-gray-900">
                  {course.createdAt}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}