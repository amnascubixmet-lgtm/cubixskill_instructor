"use client";

import { useState } from "react";

export default function InstructorProjectReviewPage() {
  const [status, setStatus] = useState("Pending");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Review Submission
          </h1>

          <p className="mt-2 text-gray-600">
            Approve, reject, or give feedback for this project
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="mb-5 text-2xl font-bold text-gray-900">
                Student Details
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
                  <p className="text-sm text-gray-500">Course</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    Full Stack Development
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
                Submitted File
              </h2>

              <div className="rounded-2xl border border-dashed border-gray-300 p-6">
                <p className="font-semibold text-gray-900">
                  ecommerce-project.zip
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Source code and project files uploaded by student
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
                I completed the project using Next.js, Tailwind CSS,
                authentication, cart page, checkout page, and dashboard UI.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="mb-5 text-2xl font-bold text-gray-900">
                Instructor Feedback
              </h2>

              <textarea
                rows={7}
                placeholder="Write feedback for student..."
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
              />

              <div className="mt-6 flex flex-wrap gap-4">
                <button
                  onClick={() => setStatus("Approved")}
                  className="rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
                >
                  Approve
                </button>

                <button
                  onClick={() => setStatus("Rejected")}
                  className="rounded-2xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
                >
                  Reject
                </button>

                <button
                  onClick={() => setStatus("Revision Requested")}
                  className="rounded-2xl bg-yellow-500 px-6 py-3 font-semibold text-white hover:bg-yellow-600"
                >
                  Request Revision
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
                  "Files downloaded",
                  "Requirements checked",
                  "Responsive design tested",
                  "Code quality reviewed",
                  "Final feedback written",
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

              <button className="mt-5 w-full rounded-2xl bg-black px-5 py-3 font-semibold text-white hover:bg-gray-800">
                Save Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}