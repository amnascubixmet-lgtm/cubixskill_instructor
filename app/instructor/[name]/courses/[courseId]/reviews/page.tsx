"use client";

import Link from "next/link";

import { useParams } from "next/navigation";

import {
  ArrowLeft,
  Star,
  Search,
  MessageSquare,
  TrendingUp,
  ThumbsUp,
  Users,
} from "lucide-react";

import { instructorCourses } from "@/data/fake-data";

export default function CourseReviewsPage() {
  const params = useParams();

  const instructorName = params.name as string;

  const courseId = params.courseId as string;

  const course = instructorCourses.find(
    (item) => item.id === courseId
  );

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8fafc]">
        <h1 className="text-4xl font-black text-gray-900">
          Course Not Found
        </h1>
      </div>
    );
  }

  const reviews = [
    {
      id: 1,
      name: "Arjun Nair",
      avatar: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      review:
        "Excellent course with real-world projects and clean explanations.",
      date: "2 days ago",
    },

    {
      id: 2,
      name: "Aisha Rahman",
      avatar: "https://i.pravatar.cc/150?img=32",
      rating: 4,
      review:
        "Loved the practical examples and UI design workflow.",
      date: "5 days ago",
    },

    {
      id: 3,
      name: "Nikhil Raj",
      avatar: "https://i.pravatar.cc/150?img=15",
      rating: 5,
      review:
        "One of the best premium courses available online.",
      date: "1 week ago",
    },

    {
      id: 4,
      name: "Meera Joseph",
      avatar: "https://i.pravatar.cc/150?img=25",
      rating: 5,
      review:
        "Production-level architecture explanations were amazing.",
      date: "2 weeks ago",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-3">
          <Link
            href={`/instructor/${instructorName}/courses/${course.id}`}
            className="rounded-2xl border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700"
          >
            <ArrowLeft size={16} />
          </Link>

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-xs font-bold text-yellow-700">
            Reviews
          </span>
        </div>

        <h1 className="max-w-4xl text-5xl font-black tracking-tight text-gray-900">
          Course Reviews
        </h1>

        <p className="mt-3 text-gray-500">
          Student ratings and learning feedback.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-5 md:grid-cols-4">
        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <Star className="text-yellow-500" />

          <p className="mt-4 text-sm text-gray-500">
            Average Rating
          </p>

          <h2 className="mt-2 text-4xl font-black text-gray-900">
            4.9
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <MessageSquare className="text-[#2563eb]" />

          <p className="mt-4 text-sm text-gray-500">
            Total Reviews
          </p>

          <h2 className="mt-2 text-4xl font-black text-gray-900">
            842
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <TrendingUp className="text-green-600" />

          <p className="mt-4 text-sm text-gray-500">
            Positive Feedback
          </p>

          <h2 className="mt-2 text-4xl font-black text-gray-900">
            96%
          </h2>
        </div>

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <Users className="text-purple-600" />

          <p className="mt-4 text-sm text-gray-500">
            Active Students
          </p>

          <h2 className="mt-2 text-4xl font-black text-gray-900">
            {course.enrolledCount}
          </h2>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
        <Search size={18} className="text-gray-400" />

        <input
          placeholder="Search reviews..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
      </div>

      {/* Reviews */}
      <div className="space-y-5">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
              {/* Left */}
              <div className="flex items-start gap-5">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="h-20 w-20 rounded-[28px] object-cover"
                />

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-black text-gray-900">
                      {review.name}
                    </h2>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                      Verified Student
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={18}
                        className={
                          star <= review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>

                  <p className="mt-4 max-w-4xl text-sm leading-8 text-gray-600">
                    {review.review}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-5">
                    <p className="text-sm text-gray-400">
                      {review.date}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-bold text-green-600">
                      <ThumbsUp size={16} />
                      Helpful Review
                    </div>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="rounded-3xl bg-gray-50 px-6 py-5 text-center">
                <Star className="mx-auto fill-yellow-400 text-yellow-400" />

                <h3 className="mt-4 text-3xl font-black text-gray-900">
                  {review.rating}.0
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Student Rating
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Rating Breakdown */}
      <div className="mt-8 rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-black text-gray-900">
          Rating Breakdown
        </h2>

        <div className="mt-8 space-y-5">
          {[
            { star: 5, value: 91 },
            { star: 4, value: 7 },
            { star: 3, value: 1 },
            { star: 2, value: 0.5 },
            { star: 1, value: 0.5 },
          ].map((item) => (
            <div
              key={item.star}
              className="flex items-center gap-5"
            >
              <div className="flex w-20 items-center gap-2">
                <Star
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />

                <span className="font-bold text-gray-700">
                  {item.star}
                </span>
              </div>

              <div className="h-4 flex-1 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-[#2563eb]"
                  style={{
                    width: `${item.value}%`,
                  }}
                />
              </div>

              <p className="w-16 text-right text-sm font-bold text-gray-700">
                {item.value}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}