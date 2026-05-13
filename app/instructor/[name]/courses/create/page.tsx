"use client";

import { useState } from "react";

import { useParams } from "next/navigation";

import {
  BookOpen,
  Upload,
  IndianRupee,
  Layers3,
  FileText,
  ImageIcon,
  Sparkles,
  Save,
  Eye,
  Plus,
} from "lucide-react";

export default function CreateCoursePage() {
  const params = useParams();

  const instructorName = params.name as string;

  const [thumbnail, setThumbnail] = useState(
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-5xl font-black tracking-tight text-gray-900">
            Create Course
          </h1>

          <p className="mt-3 text-gray-500">
            Build and publish your next premium course.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50">
            <Eye size={16} />
            Preview
          </button>

          <button className="flex items-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-bold text-white shadow-xl shadow-blue-500/20">
            <Save size={16} />
            Save Draft
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
                  Course title and overview.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="mb-3 block text-sm font-bold text-gray-700">
                  Course Title
                </label>

                <input
                  type="text"
                  placeholder="Complete Next.js Masterclass"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 text-sm outline-none transition focus:border-[#2563eb]"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-bold text-gray-700">
                  Short Description
                </label>

                <textarea
                  rows={5}
                  placeholder="Write short course description..."
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
                  Category & Pricing
                </h2>

                <p className="text-sm text-gray-500">
                  Configure course type and pricing.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-3 block text-sm font-bold text-gray-700">
                  Category
                </label>

                <select className="w-full rounded-2xl border border-gray-200 px-5 py-4 text-sm outline-none transition focus:border-[#2563eb]">
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Mobile Development</option>
                  <option>Data Science</option>
                </select>
              </div>

              <div>
                <label className="mb-3 block text-sm font-bold text-gray-700">
                  Level
                </label>

                <select className="w-full rounded-2xl border border-gray-200 px-5 py-4 text-sm outline-none transition focus:border-[#2563eb]">
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
                    type="number"
                    placeholder="2999"
                    className="w-full bg-transparent px-2 py-4 text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-bold text-gray-700">
                  Student Limit
                </label>

                <input
                  type="number"
                  placeholder="500"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 text-sm outline-none transition focus:border-[#2563eb]"
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
                  Thumbnail
                </h2>

                <p className="text-sm text-gray-500">
                  Upload attractive course thumbnail.
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
                  Upload Image
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

          {/* Curriculum */}
          <div className="rounded-[32px] border border-gray-100 bg-white p-7 shadow-sm">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-orange-100 p-3 text-orange-600">
                  <FileText size={22} />
                </div>

                <div>
                  <h2 className="text-2xl font-black text-gray-900">
                    Curriculum
                  </h2>

                  <p className="text-sm text-gray-500">
                    Add lessons and projects.
                  </p>
                </div>
              </div>

              <button className="flex items-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-bold text-white">
                <Plus size={16} />
                Add Lesson
              </button>
            </div>

            <div className="space-y-4">
              {[1, 2, 3].map((lesson) => (
                <div
                  key={lesson}
                  className="flex items-center justify-between rounded-3xl border border-gray-100 p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 font-black text-[#2563eb]">
                      {lesson}
                    </div>

                    <div>
                      <h3 className="font-black text-gray-900">
                        Lesson {lesson}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Introduction lesson content.
                      </p>
                    </div>
                  </div>

                  <button className="rounded-2xl border border-gray-200 px-4 py-2 text-sm font-bold text-gray-700">
                    Edit
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
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-sm">
              <Sparkles size={30} />
            </div>

            <h2 className="text-3xl font-black">
              Publish Course
            </h2>

            <p className="mt-3 text-sm leading-7 text-blue-100">
              Submit your course for admin review and start
              teaching students worldwide.
            </p>

            <button className="mt-8 w-full rounded-2xl bg-white px-5 py-4 text-sm font-black text-[#2563eb] transition hover:scale-[1.02]">
              Submit For Approval
            </button>
          </div>

          {/* Instructor */}
          <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-gray-900">
              Instructor
            </h2>

            <div className="mt-6 flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/100?img=22"
                alt="Instructor"
                className="h-16 w-16 rounded-3xl object-cover"
              />

              <div>
                <h3 className="text-lg font-black capitalize text-gray-900">
                  {instructorName.replace(/-/g, " ")}
                </h3>

                <p className="text-sm text-gray-500">
                  Senior Instructor
                </p>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-gray-900">
              Course Tips
            </h2>

            <div className="mt-6 space-y-4">
              {[
                "Use high quality thumbnail image.",
                "Add clear learning outcomes.",
                "Include practical projects.",
                "Keep lesson videos short and engaging.",
              ].map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-2xl bg-blue-50 p-4"
                >
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#2563eb]" />

                  <p className="text-sm font-medium text-gray-700">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}