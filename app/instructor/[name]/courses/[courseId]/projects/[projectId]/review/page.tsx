"use client";

import { useState } from "react";

export default function ProjectReviewPage() {
  const [status, setStatus] = useState("Pending");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Review Project Submission
          </h1>

          <p className="mt-2 text-gray-600">
            Approve or reject student project work
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="mb-5 text-2xl font-bold text-gray-900">
                Submission Details
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-sm text-gray-500">Student Name</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    Rahul Sharma
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Submission ID</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    SUB-001
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Submitted Date</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    12 May 2026
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Current Status</p>
                  <span className="mt-2 inline-flex rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                    {status}
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="mb-5 text-2xl font-bold text-gray-900">
                Submitted Files
              </h2>

              <div className="rounded-2xl border border-dashed border-gray-300 p-6">
                <p className="font-semibold text-gray-900">
                  ecommerce-project.zip
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Uploaded project source files
                </p>

                <button className="mt-4 rounded-xl bg-black px-5 py-2 text-sm font-semibold text-white hover:bg-gray-800">
                  Download File
                </button>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="mb-5 text-2xl font-bold text-gray-900">
                Student Note
              </h2>

              <p className="leading-8 text-gray-600">
                I have completed the responsive e-commerce website using
                Next.js and Tailwind CSS. The project includes product listing,
                cart UI, checkout page, and dashboard layout.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="mb-5 text-2xl font-bold text-gray-900">
                Review Feedback
              </h2>

              <textarea
                rows={7}
                placeholder="Write feedback for the student..."
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition focus:border-black"
              />

              <div className="mt-6 flex flex-wrap gap-4">
                <button
                  onClick={() => setStatus("Approved")}
                  className="rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
                >
                  Approve Submission
                </button>

                <button
                  onClick={() => setStatus("Rejected")}
                  className="rounded-2xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
                >
                  Reject Submission
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="mb-5 text-xl font-bold text-gray-900">
                Review Checklist
              </h3>

              <div className="space-y-4">
                {[
                  "Project files uploaded",
                  "Code structure checked",
                  "UI design completed",
                  "Responsive layout tested",
                  "Requirements matched",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="mb-5 text-xl font-bold text-gray-900">
                Final Status
              </h3>

              <p className="text-sm text-gray-500">Selected Status</p>

              <p className="mt-2 text-2xl font-bold text-gray-900">
                {status}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}