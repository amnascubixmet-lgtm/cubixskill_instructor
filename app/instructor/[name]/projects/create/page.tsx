"use client";

import { useState } from "react";

export default function CreateInstructorProjectPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      alert("Project created successfully!");
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Project
          </h1>

          <p className="mt-2 text-gray-600">
            Create a new project assignment for students
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white p-8 shadow-sm"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {/* Project Title */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Project Title
              </label>

              <input
                type="text"
                placeholder="Enter project title"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition focus:border-black"
                required
              />
            </div>

            {/* Course */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Select Course
              </label>

              <select
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition focus:border-black"
                required
              >
                <option value="">
                  Choose course
                </option>

                <option>
                  Frontend Development
                </option>

                <option>
                  React Masterclass
                </option>

                <option>
                  Full Stack Development
                </option>
              </select>
            </div>

            {/* Project Number */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Project Number
              </label>

              <input
                type="number"
                placeholder="1"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition focus:border-black"
                required
              />
            </div>

            {/* Due Date */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Due Date
              </label>

              <input
                type="date"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition focus:border-black"
              />
            </div>

            {/* Status */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Project Status
              </label>

              <select className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition focus:border-black">
                <option>Draft</option>
                <option>Published</option>
                <option>Pending</option>
              </select>
            </div>

            {/* Video Link */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Video Tutorial Link
              </label>

              <input
                type="url"
                placeholder="https://youtube.com/..."
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition focus:border-black"
              />
            </div>

            {/* Thumbnail */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Project Thumbnail
              </label>

              <input
                type="file"
                accept="image/*"
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm"
              />
            </div>

            {/* Supporting Files */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Supporting Files
              </label>

              <input
                type="file"
                multiple
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm"
              />
            </div>

            {/* Resources */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Tools / Resources
              </label>

              <input
                type="text"
                placeholder="React, Next.js, Tailwind CSS..."
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition focus:border-black"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Project Description
              </label>

              <textarea
                rows={8}
                placeholder="Write detailed project instructions..."
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition focus:border-black"
                required
              />
            </div>

            {/* Unlock Rule */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Unlock Rule
              </label>

              <select className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition focus:border-black">
                <option>
                  Unlock next lesson after approval
                </option>

                <option>
                  Unlock immediately after submission
                </option>

                <option>
                  Manual instructor unlock
                </option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex items-center justify-end gap-4">
            <button
              type="button"
              className="rounded-2xl border border-gray-200 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-2xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800 disabled:opacity-50"
            >
              {loading
                ? "Creating..."
                : "Create Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}