"use client";

import { useState } from "react";

import Link from "next/link";

import { useParams } from "next/navigation";

import {
  ArrowLeft,
  PlayCircle,
  Upload,
  Save,
  Video,
  FileText,
  Clock3,
  Eye,
  Plus,
} from "lucide-react";

import { instructorCourses } from "@/data/fake-data";

export default function CreateLessonPage() {
  const params = useParams();

  const instructorName = params.name as string;

  const courseId = params.courseId as string;

  const course = instructorCourses.find(
    (item) => item.id === courseId
  );

  const [thumbnail, setThumbnail] = useState(
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  );

  const [videoUrl, setVideoUrl] = useState("");

  const [selectedVideo, setSelectedVideo] =
    useState<File | null>(null);

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
            href={`/instructor/${instructorName}/courses/${course.id}/lessons`}
            className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
          >
            <ArrowLeft size={16} />
            Back
          </Link>

          <div>
            <h1 className="text-5xl font-black tracking-tight text-gray-900">
              Create Lesson
            </h1>

            <p className="mt-2 text-gray-500">
              Add a new lesson to your course.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700">
            <Eye size={16} />
            Preview
          </button>

          <button className="flex items-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-bold text-white shadow-xl shadow-blue-500/20">
            <Save size={16} />
            Save Lesson
          </button>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1fr_380px]">
        {/* Left */}
        <div className="space-y-8">
          {/* Lesson Information */}
          <div className="rounded-[32px] border border-gray-100 bg-white p-7 shadow-sm">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-blue-100 p-3 text-[#2563eb]">
                <PlayCircle size={22} />
              </div>

              <div>
                <h2 className="text-2xl font-black text-gray-900">
                  Lesson Information
                </h2>

                <p className="text-sm text-gray-500">
                  Add lesson title and details.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="mb-3 block text-sm font-bold text-gray-700">
                  Lesson Title
                </label>

                <input
                  type="text"
                  placeholder="Introduction to Next.js"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 text-sm outline-none transition focus:border-[#2563eb]"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-bold text-gray-700">
                  Lesson Description
                </label>

                <textarea
                  rows={6}
                  placeholder="Write lesson description..."
                  className="w-full resize-none rounded-2xl border border-gray-200 px-5 py-4 text-sm outline-none transition focus:border-[#2563eb]"
                />
              </div>
            </div>
          </div>

          {/* Lesson Video */}
          <div className="rounded-[32px] border border-gray-100 bg-white p-7 shadow-sm">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-purple-100 p-3 text-purple-600">
                <Video size={22} />
              </div>

              <div>
                <h2 className="text-2xl font-black text-gray-900">
                  Lesson Video
                </h2>

                <p className="text-sm text-gray-500">
                  Upload lesson video or add external URL.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Video URL */}
              <div>
                <label className="mb-3 block text-sm font-bold text-gray-700">
                  Video URL
                </label>

                <input
                  type="text"
                  value={videoUrl}
                  onChange={(e) =>
                    setVideoUrl(e.target.value)
                  }
                  placeholder="https://youtube.com/watch?v=..."
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 text-sm outline-none transition focus:border-[#2563eb]"
                />

                <p className="mt-2 text-xs text-gray-500">
                  Supports YouTube, Vimeo,
                  Cloudinary, AWS S3 links.
                </p>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>

                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-xs font-bold uppercase text-gray-400">
                    OR
                  </span>
                </div>
              </div>

              {/* Upload Area */}
              <div className="rounded-[28px] border border-dashed border-gray-300 p-10 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-[#2563eb]">
                  <Upload size={34} />
                </div>

                <h3 className="mt-6 text-2xl font-black text-gray-900">
                  Upload Video
                </h3>

                <p className="mt-3 text-sm text-gray-500">
                  Drag & drop lesson video or upload
                  manually.
                </p>

                <input
                  type="file"
                  accept="video/*"
                  className="hidden"
                  id="videoUpload"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      setSelectedVideo(
                        e.target.files[0]
                      );
                    }
                  }}
                />

                <label
                  htmlFor="videoUpload"
                  className="mt-8 inline-flex cursor-pointer rounded-2xl bg-[#2563eb] px-6 py-4 text-sm font-bold text-white"
                >
                  Select Video
                </label>

                {selectedVideo && (
                  <div className="mt-6 rounded-2xl bg-gray-100 p-4 text-sm font-semibold text-gray-700">
                    Selected File:{" "}
                    {selectedVideo.name}
                  </div>
                )}
              </div>

              {/* Video Preview */}
              {videoUrl && (
                <div className="overflow-hidden rounded-[28px] border border-gray-200">
                  <iframe
                    src={videoUrl.replace(
                      "watch?v=",
                      "embed/"
                    )}
                    className="h-[400px] w-full"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>

          {/* Thumbnail */}
          <div className="rounded-[32px] border border-gray-100 bg-white p-7 shadow-sm">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-green-100 p-3 text-green-600">
                <FileText size={22} />
              </div>

              <div>
                <h2 className="text-2xl font-black text-gray-900">
                  Lesson Thumbnail
                </h2>

                <p className="text-sm text-gray-500">
                  Upload lesson preview image.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-dashed border-gray-300">
              <img
                src={thumbnail}
                alt="Thumbnail"
                className="h-[300px] w-full object-cover"
              />

              <div className="flex flex-wrap gap-3 border-t border-gray-100 p-5">
                <button className="flex items-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-bold text-white">
                  <Upload size={16} />
                  Upload Thumbnail
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

        {/* Right Sidebar */}
        <div className="space-y-8">
          {/* Meta */}
          <div className="rounded-[32px] border border-gray-100 bg-white p-7 shadow-sm">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-orange-100 p-3 text-orange-600">
                <Clock3 size={22} />
              </div>

              <div>
                <h2 className="text-2xl font-black text-gray-900">
                  Lesson Meta
                </h2>

                <p className="text-sm text-gray-500">
                  Configure lesson settings.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="mb-3 block text-sm font-bold text-gray-700">
                  Duration
                </label>

                <input
                  type="text"
                  placeholder="20m 30s"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 text-sm outline-none"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-bold text-gray-700">
                  Lesson Order
                </label>

                <input
                  type="number"
                  placeholder="1"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 text-sm outline-none"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-bold text-gray-700">
                  Access Type
                </label>

                <select className="w-full rounded-2xl border border-gray-200 px-5 py-4 text-sm outline-none">
                  <option>Free Preview</option>
                  <option>Premium Only</option>
                </select>
              </div>
            </div>
          </div>

          {/* Publish */}
          <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2563eb] via-blue-500 to-indigo-500 p-7 text-white shadow-2xl shadow-blue-500/20">
            <h2 className="text-3xl font-black">
              Publish Lesson
            </h2>

            <p className="mt-3 text-sm leading-7 text-blue-100">
              Save and publish this lesson to students.
            </p>

            <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-black text-[#2563eb] transition hover:scale-[1.02]">
              <Plus size={18} />
              Publish Lesson
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}