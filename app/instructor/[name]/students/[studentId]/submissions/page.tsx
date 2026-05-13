"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import {
  ArrowLeft,
  FileText,
  CheckCircle2,
  Clock3,
  XCircle,
  Eye,
  MessageSquare,
} from "lucide-react";

import {
  instructorStudents,
  projectSubmissions,
  courses,
} from "@/data/fake-data";

import { getStatusColor } from "@/lib/utils";

export default function StudentSubmissionsPage() {
  const params = useParams();

  const instructorName = params.name as string;
  const studentId = params.studentId as string;

  const student = instructorStudents.find((item) => item.id === studentId);

  const submissions = projectSubmissions
    .filter((item) => item.studentId === studentId)
    .map((item) => ({
      ...item,
      course: courses.find((course) => course.id === item.courseId),
    }));

  if (!student) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8fafc]">
        <h1 className="text-4xl font-black text-gray-900">
          Student Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10">
      <div className="mb-8 flex items-center gap-4">
        <Link
          href={`/instructor/${instructorName}/students/${student.id}`}
          className="rounded-2xl border border-gray-200 bg-white p-3 text-gray-700"
        >
          <ArrowLeft size={18} />
        </Link>

        <div>
          <h1 className="text-5xl font-black tracking-tight text-gray-900">
            Project Submissions
          </h1>
          <p className="mt-2 text-gray-500">
            Review all submissions from {student.name}.
          </p>
        </div>
      </div>

      <div className="mb-8 grid gap-5 md:grid-cols-4">
        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <FileText className="text-[#2563eb]" />
          <p className="mt-4 text-sm text-gray-500">Total Submissions</p>
          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {submissions.length}
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <Clock3 className="text-yellow-500" />
          <p className="mt-4 text-sm text-gray-500">Pending</p>
          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {submissions.filter((s) => s.status === "pending").length}
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <CheckCircle2 className="text-green-600" />
          <p className="mt-4 text-sm text-gray-500">Approved</p>
          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {submissions.filter((s) => s.status === "approved").length}
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <XCircle className="text-red-500" />
          <p className="mt-4 text-sm text-gray-500">Needs Revision</p>
          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {submissions.filter((s) => s.status === "revision").length}
          </h2>
        </div>
      </div>

      <div className="space-y-5">
        {submissions.map((submission) => (
          <div
            key={submission.id}
            className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-bold capitalize ${getStatusColor(
                      submission.status
                    )}`}
                  >
                    {submission.status}
                  </span>

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-[#2563eb]">
                    {submission.course?.title}
                  </span>
                </div>

                <h2 className="text-2xl font-black text-gray-900">
                  {submission.title}
                </h2>

                <p className="mt-3 max-w-4xl text-sm leading-7 text-gray-500">
                  {submission.note}
                </p>

                {submission.instructorFeedback && (
                  <div className="mt-5 rounded-2xl bg-blue-50 p-4">
                    <p className="text-sm font-bold text-[#2563eb]">
                      Instructor Feedback
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      {submission.instructorFeedback}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={submission.fileUrl}
                  className="flex items-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-bold text-white"
                >
                  <Eye size={16} />
                  View File
                </a>

                <button className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700">
                  <MessageSquare size={16} />
                  Feedback
                </button>
              </div>
            </div>
          </div>
        ))}

        {submissions.length === 0 && (
          <div className="rounded-[32px] border border-dashed border-gray-300 bg-white p-16 text-center shadow-sm">
            <FileText size={42} className="mx-auto text-gray-400" />
            <h2 className="mt-5 text-3xl font-black text-gray-900">
              No Submissions
            </h2>
            <p className="mt-2 text-gray-500">
              This student has not submitted any projects yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}