"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Users,
  Search,
  Eye,
  Mail,
  Trophy,
  BookOpen,
  Award,
  TrendingUp,
} from "lucide-react";

import { instructorStudents } from "@/data/fake-data";

export default function InstructorStudentsPage() {
  const params = useParams();
  const instructorName = params.name as string;

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10">
      <div className="mb-8">
        <h1 className="text-5xl font-black tracking-tight text-gray-900">
          Students
        </h1>
        <p className="mt-3 text-gray-500">
          Manage students enrolled in your courses.
        </p>
      </div>

      <div className="mb-8 grid gap-5 md:grid-cols-4">
        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <Users className="text-[#2563eb]" />
          <p className="mt-4 text-sm text-gray-500">Total Students</p>
          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {instructorStudents.length}
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <TrendingUp className="text-green-600" />
          <p className="mt-4 text-sm text-gray-500">Active Learners</p>
          <h2 className="mt-2 text-4xl font-black text-gray-900">84%</h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <BookOpen className="text-purple-600" />
          <p className="mt-4 text-sm text-gray-500">Course Enrollments</p>
          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {instructorStudents.reduce((a, s) => a + s.enrolledCourses, 0)}
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <Award className="text-yellow-500" />
          <p className="mt-4 text-sm text-gray-500">Certificates</p>
          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {instructorStudents.reduce((a, s) => a + s.certificates, 0)}
          </h2>
        </div>
      </div>

      <div className="mb-6 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
        <Search size={18} className="text-gray-400" />
        <input
          placeholder="Search students..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
      </div>

      <div className="space-y-5">
        {instructorStudents.map((student) => (
          <div
            key={student.id}
            className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-center gap-5">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="h-24 w-24 rounded-[28px] object-cover"
                />

                <div>
                  <h2 className="text-2xl font-black text-gray-900">
                    {student.name}
                  </h2>

                  <div className="mt-3 flex flex-wrap items-center gap-5">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Mail size={16} />
                      {student.email}
                    </div>

                    <div className="flex items-center gap-2 text-sm font-bold text-[#2563eb]">
                      <Trophy size={16} />
                      {student.points} XP
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {student.interests.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-[#2563eb]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href={`/instructor/${instructorName}/students/${student.id}`}
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-bold text-white"
              >
                <Eye size={16} />
                View Student
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}