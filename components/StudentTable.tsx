"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Eye,
  Mail,
  MoreVertical,
  Award,
  BookOpen,
} from "lucide-react";

interface Student {
  id: string;
  name: string;
  email: string;
  avatar: string;
  course: string;
  progress: number;
  submissions: number;
  certificates: number;
  status: "Active" | "Inactive" | "Completed";
}

interface StudentTableProps {
  students: Student[];
}

export default function StudentTable({ students }: StudentTableProps) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Students</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage enrolled students and progress
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                Student
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                Course
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                Progress
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                Submissions
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                Certificates
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                Status
              </th>
              <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-gray-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {students.map((student) => (
              <tr
                key={student.id}
                className="transition hover:bg-gray-50"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-gray-100">
                      <Image
                        src={student.avatar}
                        alt={student.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {student.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {student.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <BookOpen size={16} />
                    {student.course}
                  </div>
                </td>

                <td className="px-6 py-5">
                  <div className="w-44">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs font-semibold text-gray-500">
                        Completed
                      </span>
                      <span className="text-xs font-bold text-gray-800">
                        {student.progress}%
                      </span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className="h-full rounded-full bg-blue-600"
                        style={{ width: `${student.progress}%` }}
                      />
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                    {student.submissions}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Award size={16} className="text-yellow-500" />
                    {student.certificates}
                  </div>
                </td>

                <td className="px-6 py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      student.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : student.status === "Completed"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/instructor/amnas/students/${student.id}`}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-100"
                    >
                      <Eye size={16} />
                    </Link>

                    <Link
                      href={`/instructor/amnas/messages?student=${student.id}`}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-100"
                    >
                      <Mail size={16} />
                    </Link>

                    <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-100">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}