"use client";

import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  XCircle,
  Download,
  FileText,
  MessageSquare,
  Clock3,
  User,
} from "lucide-react";

interface SubmissionReviewProps {
  submissionId: string;
  studentName: string;
  studentAvatar: string;
  projectTitle: string;
  courseTitle: string;
  submittedAt: string;
  status?: "Pending" | "Approved" | "Rejected";
  files: {
    id: string;
    name: string;
    url: string;
    size: string;
  }[];
}

export default function SubmissionReview({
  submissionId,
  studentName,
  studentAvatar,
  projectTitle,
  courseTitle,
  submittedAt,
  status = "Pending",
  files,
}: SubmissionReviewProps) {
  return (
    <div className="rounded-[30px] border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col justify-between gap-6 border-b border-gray-100 pb-6 lg:flex-row lg:items-center">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src={studentAvatar}
              alt={studentName}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <User size={15} />
              Student Submission
            </div>

            <h2 className="mt-1 text-2xl font-bold text-gray-900">
              {studentName}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {courseTitle}
            </p>
          </div>
        </div>

        <span
          className={`w-fit rounded-full px-4 py-2 text-sm font-bold ${
            status === "Approved"
              ? "bg-green-100 text-green-700"
              : status === "Rejected"
              ? "bg-red-100 text-red-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl bg-gray-50 p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Project
          </p>
          <h3 className="mt-2 text-lg font-bold text-gray-900">
            {projectTitle}
          </h3>
        </div>

        <div className="rounded-3xl bg-gray-50 p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Submitted At
          </p>
          <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-gray-800">
            <Clock3 size={16} />
            {submittedAt}
          </div>
        </div>

        <div className="rounded-3xl bg-gray-50 p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Submission ID
          </p>
          <h3 className="mt-2 text-sm font-bold text-gray-900">
            #{submissionId}
          </h3>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-lg font-bold text-gray-900">
          Submitted Files
        </h3>

        <div className="space-y-3">
          {files.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between rounded-3xl border border-gray-200 bg-white p-4 transition hover:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <FileText size={20} />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    {file.name}
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    {file.size}
                  </p>
                </div>
              </div>

              <Link
                href={file.url}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white transition hover:bg-gray-800"
              >
                <Download size={17} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <label className="mb-3 block text-sm font-bold text-gray-900">
          Instructor Feedback
        </label>

        <div className="relative">
          <MessageSquare
            size={18}
            className="absolute left-4 top-4 text-gray-400"
          />

          <textarea
            rows={5}
            placeholder="Write feedback for this student..."
            className="w-full resize-none rounded-3xl border border-gray-200 bg-gray-50 px-12 py-4 text-sm outline-none transition focus:border-black focus:bg-white"
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button className="flex items-center justify-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-6 py-3 text-sm font-bold text-red-600 transition hover:bg-red-100">
          <XCircle size={18} />
          Reject Submission
        </button>

        <button className="flex items-center justify-center gap-2 rounded-2xl bg-green-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-700">
          <CheckCircle2 size={18} />
          Approve Submission
        </button>
      </div>
    </div>
  );
}