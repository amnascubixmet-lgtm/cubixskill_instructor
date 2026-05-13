"use client";

import { useState } from "react";

export default function EditLessonPage() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Lesson updated successfully!");
    }, 1200);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Edit Lesson
          </h1>

          <p className="mt-2 text-gray-600">
            Update lesson video, materials, and unlock settings
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white p-8 shadow-sm"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Lesson Number
              </label>

              <input
                type="number"
                defaultValue={1}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Lesson Title
              </label>

              <input
                type="text"
                defaultValue="Introduction to Next.js"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Duration
              </label>

              <input
                type="text"
                defaultValue="28 Minutes"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Lesson Status
              </label>

              <select
                defaultValue="Published"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
              >
                <option>Published</option>
                <option>Draft</option>
                <option>Pending</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Video URL
              </label>

              <input
                type="url"
                defaultValue="https://www.youtube.com/watch?v=example"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Upload New Video
              </label>

              <input
                type="file"
                accept="video/*"
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Lesson Thumbnail
              </label>

              <input
                type="file"
                accept="image/*"
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Supporting Materials
              </label>

              <input
                type="file"
                multiple
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Unlock Logic
              </label>

              <select
                defaultValue="assessment"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
              >
                <option value="video">
                  Unlock after video completion
                </option>
                <option value="assessment">
                  Unlock after assessment pass
                </option>
                <option value="project">
                  Unlock after project approval
                </option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Lesson Description
              </label>

              <textarea
                rows={8}
                defaultValue="Learn the fundamentals of Next.js, routing system, layouts, rendering methods, and modern React development workflow."
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
                required
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-4">
            <button
              type="button"
              className="rounded-2xl border border-gray-200 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-2xl bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800 disabled:opacity-50"
            >
              {loading ? "Updating..." : "Update Lesson"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}