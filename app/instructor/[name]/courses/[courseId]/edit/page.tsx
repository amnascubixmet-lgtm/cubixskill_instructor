"use client";

import { useState } from "react";

import Link from "next/link";

import { useParams } from "next/navigation";

import {
  ArrowLeft,
  Save,
  Upload,
  Trash2,
  Eye,
  BookOpen,
  ImageIcon,
  IndianRupee,
  Layers3,
} from "lucide-react";

import { instructorCourses } from "@/data/fake-data";

export default function EditCoursePage() {
  const params = useParams();

  const instructorName = params.name as string;

  const courseId = params.courseId as string;

  const course = instructorCourses.find(
    (item) => item.id === courseId
  );

  const [thumbnail, setThumbnail] = useState(
    course?.thumbnail || ""
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
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link
            href={`/instructor/${instructorName}/courses/${course.id}`}
            className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
          >
            <ArrowLeft size={16} />
            Back
          </Link>

          <div>
            <h1 className="text-5xl font-black tracking-tight text-gray-900">
              Edit Course
            </h1>

            <p className="mt-2 text-gray-500">
              Update your course details and lessons.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700">
            <Eye size={16} />
            Preview
          </button>

          <button className="flex items-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-bold text-white shadow-xl shadow-blue-500/20">
            <Save size={16} />
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1fr_380px]">
        {/* Left */}
        <div className="space-y-8">
          {/* Basic Info */}
          <div className="rounded-[32px] border border-gray-100 bg-white p-7 shadow-sm">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-blue-100 p-3 text-[#2563eb]">
                <BookOpen size={22} />
              </div>

              <div>
                <h2 className="text-2xl font-black text-gray-900">
                  Basic Information
                </h2>

                <p className="text-sm text-gray-500">
                  Edit course title and description.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="mb-3 block text-sm font-bold text-gray-700">
                  Course Title
                </label>

                <input
                  defaultValue={course.title}
                  type="text"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 text-sm outline-none transition focus:border-[#2563eb]"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-bold text-gray-700">
                  Description
                </label>

                <textarea
                  rows={6}
                  defaultValue={course.description}
                  className="w-full resize-none rounded-2xl border border-gray-200 px-5 py-4 text-sm outline-none transition focus:border-[#2563eb]"
                />
              </div>
            </div>
          </div>

          {/* Category */}
          <div className="rounded-[32px] border border-gray-100 bg-white p-7 shadow-sm">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-purple-100 p-3 text-purple-600">
                <Layers3 size={22} />
              </div>

              <div>
                <h2 className="text-2xl font-black text-gray-900">
                  Course Details
                </h2>

                <p className="text-sm text-gray-500">
                  Manage category, level and pricing.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-3 block text-sm font-bold text-gray-700">
                  Category
                </label>

                <select
                  defaultValue={course.category}
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 text-sm outline-none"
                >
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Data Science</option>
                  <option>Marketing</option>
                </select>
              </div>

              <div>
                <label className="mb-3 block text-sm font-bold text-gray-700">
                  Level
                </label>

                <select
                  defaultValue={course.level}
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 text-sm outline-none"
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>

              <div>
                <label className="mb-3 block text-sm font-bold text-gray-700">
                  Price
                </label>

                <div className="flex items-center rounded-2xl border border-gray-200 px-5">
                  <IndianRupee
                    size={18}
                    className="text-gray-400"
                  />

                  <input
                    defaultValue={course.price}
                    type="number"
                    className="w-full bg-transparent px-2 py-4 text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-bold text-gray-700">
                  Duration
                </label>

                <input
                  defaultValue={course.duration}
                  type="text"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 text-sm outline-none"
                />
              </div>
            </div>
          </div>

          {/* Thumbnail */}
          <div className="rounded-[32px] border border-gray-100 bg-white p-7 shadow-sm">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-green-100 p-3 text-green-600">
                <ImageIcon size={22} />
              </div>

              <div>
                <h2 className="text-2xl font-black text-gray-900">
                  Course Thumbnail
                </h2>

                <p className="text-sm text-gray-500">
                  Upload or replace course image.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-dashed border-gray-300">
              <img
                src={thumbnail}
                alt="Thumbnail"
                className="h-[320px] w-full object-cover"
              />

              <div className="flex flex-wrap gap-3 border-t border-gray-100 p-5">
                <button className="flex items-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-bold text-white">
                  <Upload size={16} />
                  Upload New Image
                </button>

                <button
                  onClick={() =>
                    setThumbnail(
                      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
                    )
                  }
                  className="rounded-2xl border border-gray-200 px-5 py-3 text-sm font-bold text-gray-700"
                >
                  Change Preview
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-8">
          {/* Status */}
          <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2563eb] via-blue-500 to-indigo-500 p-7 text-white shadow-2xl shadow-blue-500/20">
            <h2 className="text-3xl font-black">
              Course Status
            </h2>

            <p className="mt-3 text-sm leading-7 text-blue-100">
              This course is currently{" "}
              <span className="font-bold capitalize">
                {course.status}
              </span>
              .
            </p>

            <button className="mt-8 w-full rounded-2xl bg-white px-5 py-4 text-sm font-black text-[#2563eb] transition hover:scale-[1.02]">
              Submit Update
            </button>
          </div>

          {/* Danger Zone */}
          <div className="rounded-[32px] border border-red-100 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-red-600">
              Danger Zone
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              Deleting this course will permanently remove
              lessons, projects and enrolled students data.
            </p>

            <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-red-500 px-5 py-4 text-sm font-bold text-white">
              <Trash2 size={16} />
              Delete Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}