"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import {
  ArrowLeft,
  TrendingUp,
  BookOpen,
  CheckCircle2,
  Clock3,
  Award,
  PlayCircle,
} from "lucide-react";

import {
  instructorStudents,
  getEnrollmentsByStudent,
  courses,
} from "@/data/fake-data";

import { getProgressColor } from "@/lib/utils";

export default function StudentProgressPage() {
  const params = useParams();

  const instructorName = params.name as string;
  const studentId = params.studentId as string;

  const student = instructorStudents.find((item) => item.id === studentId);

  if (!student) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8fafc]">
        <h1 className="text-4xl font-black text-gray-900">
          Student Not Found
        </h1>
      </div>
    );
  }

  const enrollments = getEnrollmentsByStudent(student.id).map((enrollment) => ({
    ...enrollment,
    course: courses.find((course) => course.id === enrollment.courseId),
  }));

  const averageProgress =
    enrollments.length > 0
      ? Math.round(
          enrollments.reduce((acc, item) => acc + item.progress, 0) /
            enrollments.length
        )
      : 0;

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
            Learning Progress
          </h1>

          <p className="mt-2 text-gray-500">
            Track {student.name}&apos;s course progress and activity.
          </p>
        </div>
      </div>

      <div className="mb-8 grid gap-5 md:grid-cols-4">
        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <TrendingUp className="text-[#2563eb]" />
          <p className="mt-4 text-sm text-gray-500">Average Progress</p>
          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {averageProgress}%
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <BookOpen className="text-purple-600" />
          <p className="mt-4 text-sm text-gray-500">Enrolled Courses</p>
          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {enrollments.length}
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <CheckCircle2 className="text-green-600" />
          <p className="mt-4 text-sm text-gray-500">Completed</p>
          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {enrollments.filter((item) => item.progress >= 100).length}
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <Award className="text-yellow-500" />
          <p className="mt-4 text-sm text-gray-500">Student Points</p>
          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {student.points}
          </h2>
        </div>
      </div>

      <div className="rounded-[32px] bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-black text-gray-900">
          Course Progress
        </h2>

        <div className="mt-6 space-y-5">
          {enrollments.map((enrollment) => {
            if (!enrollment.course) return null;

            return (
              <div
                key={enrollment.id}
                className="rounded-3xl border border-gray-100 p-5 transition hover:border-blue-100 hover:bg-blue-50/20"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={enrollment.course.thumbnail}
                      alt={enrollment.course.title}
                      className="h-24 w-36 rounded-2xl object-cover"
                    />

                    <div>
                      <h3 className="text-xl font-black text-gray-900">
                        {enrollment.course.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {enrollment.course.category} •{" "}
                        {enrollment.course.duration}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-3">
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-[#2563eb]">
                          {enrollment.paymentStatus}
                        </span>

                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                          {enrollment.isActive ? "Active" : "Inactive"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-[320px]">
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-bold text-gray-600">
                        Progress
                      </span>

                      <span className="font-black text-gray-900">
                        {enrollment.progress}%
                      </span>
                    </div>

                    <div className="h-4 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className={`h-full rounded-full ${getProgressColor(
                          enrollment.progress
                        )}`}
                        style={{
                          width: `${enrollment.progress}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {enrollments.length === 0 && (
            <div className="rounded-[32px] border border-dashed border-gray-300 bg-white p-16 text-center">
              <Clock3 size={48} className="mx-auto text-gray-400" />

              <h2 className="mt-5 text-3xl font-black text-gray-900">
                No Progress Found
              </h2>

              <p className="mt-2 text-gray-500">
                This student has no course activity yet.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 rounded-[32px] bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-black text-gray-900">
          Activity Timeline
        </h2>

        <div className="mt-6 space-y-4">
          {[
            "Watched lesson video",
            "Completed course assessment",
            "Submitted project file",
            "Unlocked next lesson",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-2xl border border-gray-100 p-5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-[#2563eb]">
                <PlayCircle size={22} />
              </div>

              <div>
                <h3 className="font-black text-gray-900">{item}</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {index + 1} day ago
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}