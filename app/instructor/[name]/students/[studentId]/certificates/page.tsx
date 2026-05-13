"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import {
  ArrowLeft,
  Award,
  Download,
  Eye,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

import {
  instructorStudents,
  certificates,
  courses,
} from "@/data/fake-data";

import { formatDate } from "@/lib/utils";

export default function StudentCertificatesPage() {
  const params = useParams();

  const instructorName = params.name as string;
  const studentId = params.studentId as string;

  const student = instructorStudents.find((item) => item.id === studentId);

  const studentCertificates = certificates
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
            Certificates
          </h1>

          <p className="mt-2 text-gray-500">
            Certificates earned by {student.name}.
          </p>
        </div>
      </div>

      <div className="mb-8 grid gap-5 md:grid-cols-3">
        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <Award className="text-yellow-500" />
          <p className="mt-4 text-sm text-gray-500">
            Total Certificates
          </p>
          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {studentCertificates.length}
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <CheckCircle2 className="text-green-600" />
          <p className="mt-4 text-sm text-gray-500">
            Verified
          </p>
          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {studentCertificates.length}
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <CalendarDays className="text-[#2563eb]" />
          <p className="mt-4 text-sm text-gray-500">
            Latest Issued
          </p>
          <h2 className="mt-2 text-2xl font-black text-gray-900">
            {studentCertificates[0]
              ? formatDate(studentCertificates[0].issuedDate)
              : "No Data"}
          </h2>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {studentCertificates.map((certificate) => (
          <div
            key={certificate.id}
            className="overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-sm"
          >
            <div className="bg-gradient-to-br from-[#2563eb] via-blue-500 to-indigo-500 p-8 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-blue-100">
                    Certificate of Completion
                  </p>

                  <h2 className="mt-4 text-3xl font-black">
                    {certificate.course?.title}
                  </h2>
                </div>

                <div className="rounded-2xl bg-white/20 p-4">
                  <Award size={34} />
                </div>
              </div>

              <div className="mt-10 rounded-2xl bg-white/15 p-5 backdrop-blur-sm">
                <p className="text-xs text-blue-100">
                  Certificate ID
                </p>

                <h3 className="mt-1 font-mono text-lg font-black">
                  {certificate.certificateId}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-500">
                    Issued Date
                  </p>

                  <h3 className="mt-1 font-black text-gray-900">
                    {formatDate(certificate.issuedDate)}
                  </h3>
                </div>

                <div className="flex gap-3">
                  <a
                    href={certificate.fileUrl}
                    className="flex items-center gap-2 rounded-2xl border border-gray-200 px-5 py-3 text-sm font-bold text-gray-700"
                  >
                    <Eye size={16} />
                    View
                  </a>

                  <a
                    href={certificate.fileUrl}
                    download
                    className="flex items-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-bold text-white"
                  >
                    <Download size={16} />
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {studentCertificates.length === 0 && (
          <div className="rounded-[32px] border border-dashed border-gray-300 bg-white p-16 text-center shadow-sm xl:col-span-2">
            <Award size={48} className="mx-auto text-gray-400" />
            <h2 className="mt-5 text-3xl font-black text-gray-900">
              No Certificates
            </h2>
            <p className="mt-2 text-gray-500">
              This student has not earned any certificates yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}