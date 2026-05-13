"use client";

import {
  BarChart3,
  BookOpen,
  Users,
  Wallet,
  Star,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

import { instructorCourses } from "@/data/fake-data";
import { formatCurrency } from "@/lib/utils";

export default function CourseAnalyticsPage() {
  const totalStudents = instructorCourses.reduce(
    (acc, course) => acc + course.enrolledCount,
    0
  );

  const totalRevenue = instructorCourses.reduce(
    (acc, course) => acc + course.price * course.enrolledCount,
    0
  );

  const averageRating =
    instructorCourses.reduce((acc, course) => acc + course.rating, 0) /
      instructorCourses.length || 0;

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10">
      <div className="mb-8">
        <h1 className="text-5xl font-black tracking-tight text-gray-900">
          Course Analytics
        </h1>

        <p className="mt-3 text-gray-500">
          Track your course performance, revenue and student growth.
        </p>
      </div>

      <div className="mb-8 grid gap-5 md:grid-cols-4">
        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <BookOpen className="text-[#2563eb]" />
          <p className="mt-4 text-sm text-gray-500">Total Courses</p>
          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {instructorCourses.length}
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <Users className="text-purple-500" />
          <p className="mt-4 text-sm text-gray-500">Total Students</p>
          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {totalStudents}
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <Wallet className="text-green-500" />
          <p className="mt-4 text-sm text-gray-500">Course Revenue</p>
          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {formatCurrency(totalRevenue)}
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <Star className="text-yellow-500" />
          <p className="mt-4 text-sm text-gray-500">Average Rating</p>
          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {averageRating.toFixed(1)}
          </h2>
        </div>
      </div>

      <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-gray-900">
              Enrollment Growth
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Monthly course enrollment analytics.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-2xl bg-green-100 px-4 py-2 text-sm font-bold text-green-600">
            <TrendingUp size={16} />
            +28% Growth
          </div>
        </div>

        <div className="flex h-[320px] items-end gap-5">
          {[40, 65, 48, 90, 72, 110, 96].map((value, index) => (
            <div key={index} className="flex flex-1 flex-col items-center">
              <div className="mb-4 text-xs font-bold text-gray-500">
                {value}
              </div>

              <div
                className="w-full rounded-t-[24px] bg-gradient-to-t from-[#2563eb] to-blue-400"
                style={{ height: `${value * 2}px` }}
              />

              <p className="mt-4 text-sm font-bold text-gray-700">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"][index]}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-2xl bg-blue-100 p-3 text-[#2563eb]">
            <BarChart3 size={22} />
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900">
              Course Performance
            </h2>
            <p className="text-sm text-gray-500">
              Compare each course performance.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {instructorCourses.map((course) => (
            <div
              key={course.id}
              className="rounded-3xl border border-gray-100 p-5"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-black text-gray-900">
                    {course.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {course.enrolledCount} students • {course.rating} rating
                  </p>
                </div>

                <div className="flex items-center gap-1 text-sm font-bold text-green-600">
                  <ArrowUpRight size={16} />
                  {formatCurrency(course.price * course.enrolledCount)}
                </div>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-[#2563eb]"
                  style={{
                    width: `${Math.min(
                      (course.enrolledCount / totalStudents) * 100,
                      100
                    )}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}