"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Star,
  MoreVertical,
  Pencil,
  Eye,
  Trash2,
  BarChart3,
} from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  price: number;
  students: number;
  rating: number;
  lessons: number;
  status?: "Draft" | "Published" | "Pending";
  approval?: "Approved" | "Rejected" | "Pending";
}

export default function CourseCard({
  id,
  title,
  category,
  thumbnail,
  price,
  students,
  rating,
  lessons,
  status = "Published",
  approval = "Approved",
}: CourseCardProps) {
  return (
    <div className="group overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      
      {/* IMAGE */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* STATUS */}
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              status === "Published"
                ? "bg-green-100 text-green-700"
                : status === "Pending"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {status}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              approval === "Approved"
                ? "bg-blue-100 text-blue-700"
                : approval === "Rejected"
                ? "bg-red-100 text-red-700"
                : "bg-orange-100 text-orange-700"
            }`}
          >
            {approval}
          </span>
        </div>

        {/* ACTIONS */}
        <div className="absolute right-4 top-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-gray-700 backdrop-blur transition hover:bg-white">
            <MoreVertical size={18} />
          </button>
        </div>

        {/* PRICE */}
        <div className="absolute bottom-4 left-4 rounded-2xl bg-black/70 px-4 py-2 backdrop-blur">
          <span className="text-sm font-semibold text-white">
            ₹ {price}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        
        {/* CATEGORY */}
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
          {category}
        </span>

        {/* TITLE */}
        <Link href={`/instructor/amnas/courses/${id}`}>
          <h3 className="mt-2 line-clamp-2 text-xl font-bold text-gray-900 transition hover:text-blue-600">
            {title}
          </h3>
        </Link>

        {/* STATS */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          
          <div className="rounded-2xl bg-gray-50 p-3 text-center">
            <div className="flex items-center justify-center gap-1 text-gray-700">
              <Users size={16} />
              <span className="text-sm font-semibold">
                {students}
              </span>
            </div>

            <p className="mt-1 text-xs text-gray-500">
              Students
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-3 text-center">
            <div className="flex items-center justify-center gap-1 text-yellow-500">
              <Star size={16} fill="currentColor" />
              <span className="text-sm font-semibold text-gray-700">
                {rating}
              </span>
            </div>

            <p className="mt-1 text-xs text-gray-500">
              Rating
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-3 text-center">
            <div className="flex items-center justify-center gap-1 text-gray-700">
              <BarChart3 size={16} />
              <span className="text-sm font-semibold">
                {lessons}
              </span>
            </div>

            <p className="mt-1 text-xs text-gray-500">
              Lessons
            </p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="mt-6 flex items-center gap-3">
          
          <Link
            href={`/instructor/amnas/courses/${id}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            <Eye size={16} />
            View
          </Link>

          <Link
            href={`/instructor/amnas/courses/${id}/edit`}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-100"
          >
            <Pencil size={16} />
          </Link>

          <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-200 bg-red-50 text-red-500 transition hover:bg-red-100">
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}