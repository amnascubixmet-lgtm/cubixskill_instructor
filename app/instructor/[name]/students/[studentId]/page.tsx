"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import {
  ArrowLeft,
  Mail,
  Phone,
  Trophy,
  Award,
  BookOpen,
  TrendingUp,
  FileText,
  Eye,
} from "lucide-react";

import {
  instructorStudents,
  getEnrollmentsByStudent,
  courses,
  certificates,
} from "@/data/fake-data";

import { getProgressColor } from "@/lib/utils";

export default function InstructorStudentDetailsPage() {
  const params = useParams();

  const instructorName = params.name as string;
  const studentId = params.studentId as string;

  const student = instructorStudents.find(
    (item) => item.id === studentId
  );

  if (!student) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8fafc]">
        <h1 className="text-4xl font-black text-gray-900">
          Student Not Found
        </h1>
      </div>
    );
  }

  const enrollments = getEnrollmentsByStudent(student.id);

  const studentCourses = enrollments.map((enrollment) => ({
    enrollment,
    course: courses.find((course) => course.id === enrollment.courseId),
  }));

  const studentCertificates = certificates.filter(
    (certificate) => certificate.studentId === student.id
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10">
      <div className="mb-8 flex items-center gap-4">
        <Link
          href={`/instructor/${instructorName}/students`}
          className="rounded-2xl border border-gray-200 bg-white p-3 text-gray-700"
        >
          <ArrowLeft size={18} />
        </Link>

        <div>
          <h1 className="text-5xl font-black tracking-tight text-gray-900">
            Student Profile
          </h1>
          <p className="mt-2 text-gray-500">
            View student learning progress and activity.
          </p>
        </div>
      </div>

      <div className="rounded-[36px] bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <img
              src={student.avatar}
              alt={student.name}
              className="h-32 w-32 rounded-[32px] object-cover"
            />

            <div>
              <h2 className="text-4xl font-black text-gray-900">
                {student.name}
              </h2>

              <p className="mt-3 max-w-2xl text-gray-500">
                {student.bio}
              </p>

              <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <Mail size={16} />
                  {student.email}
                </span>

                <span className="flex items-center gap-2">
                  <Phone size={16} />
                  {student.phone}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {student.interests.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-[#2563eb]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button className="rounded-2xl bg-[#2563eb] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-blue-500/20">
            Message Student
          </button>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          <div className="rounded-3xl bg-blue-50 p-6">
            <BookOpen className="text-[#2563eb]" />
            <p className="mt-4 text-sm text-gray-500">Enrolled</p>
            <h2 className="text-4xl font-black text-gray-900">
              {student.enrolledCourses}
            </h2>
          </div>

          <div className="rounded-3xl bg-green-50 p-6">
            <TrendingUp className="text-green-600" />
            <p className="mt-4 text-sm text-gray-500">Completed</p>
            <h2 className="text-4xl font-black text-gray-900">
              {student.completedCourses}
            </h2>
          </div>

          <div className="rounded-3xl bg-yellow-50 p-6">
            <Trophy className="text-yellow-600" />
            <p className="mt-4 text-sm text-gray-500">Points</p>
            <h2 className="text-4xl font-black text-gray-900">
              {student.points}
            </h2>
          </div>

          <div className="rounded-3xl bg-purple-50 p-6">
            <Award className="text-purple-600" />
            <p className="mt-4 text-sm text-gray-500">Certificates</p>
            <h2 className="text-4xl font-black text-gray-900">
              {student.certificates}
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[32px] bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-black text-gray-900">
            Enrolled Courses
          </h2>

          <div className="mt-6 space-y-5">
            {studentCourses.map(({ enrollment, course }) => {
              if (!course) return null;

              return (
                <div
                  key={enrollment.id}
                  className="rounded-3xl border border-gray-100 p-5"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="h-20 w-28 rounded-2xl object-cover"
                      />

                      <div>
                        <h3 className="font-black text-gray-900">
                          {course.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {course.category}
                        </p>
                      </div>
                    </div>

                    <div className="w-full md:w-64">
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="font-bold text-gray-600">
                          Progress
                        </span>
                        <span className="font-black text-gray-900">
                          {enrollment.progress}%
                        </span>
                      </div>

                      <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className={`h-full rounded-full ${getProgressColor(
                            enrollment.progress
                          )}`}
                          style={{ width: `${enrollment.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[32px] bg-white p-6 shadow-sm">
            <h2 className="text-3xl font-black text-gray-900">
              Quick Links
            </h2>

            <div className="mt-6 space-y-4">
              <Link
                href={`/instructor/${instructorName}/students/${student.id}/progress`}
                className="flex items-center justify-between rounded-2xl border border-gray-100 p-5 font-bold text-gray-700"
              >
                Progress
                <Eye size={18} />
              </Link>

              <Link
                href={`/instructor/${instructorName}/students/${student.id}/submissions`}
                className="flex items-center justify-between rounded-2xl border border-gray-100 p-5 font-bold text-gray-700"
              >
                Submissions
                <FileText size={18} />
              </Link>

              <Link
                href={`/instructor/${instructorName}/students/${student.id}/certificates`}
                className="flex items-center justify-between rounded-2xl border border-gray-100 p-5 font-bold text-gray-700"
              >
                Certificates
                <Award size={18} />
              </Link>
            </div>
          </div>

          <div className="rounded-[32px] bg-white p-6 shadow-sm">
            <h2 className="text-3xl font-black text-gray-900">
              Certificates
            </h2>

            <div className="mt-6 space-y-4">
              {studentCertificates.map((certificate) => (
                <div
                  key={certificate.id}
                  className="rounded-2xl bg-yellow-50 p-5"
                >
                  <p className="text-sm text-gray-500">Certificate ID</p>
                  <h3 className="mt-1 font-black text-gray-900">
                    {certificate.certificateId}
                  </h3>
                </div>
              ))}

              {studentCertificates.length === 0 && (
                <p className="text-sm text-gray-500">
                  No certificates earned yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}