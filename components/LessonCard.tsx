"use client";

import Image from "next/image";
import Link from "next/link";
import {
  PlayCircle,
  Clock3,
  FileText,
  Lock,
  CheckCircle2,
  Pencil,
  MoreVertical,
} from "lucide-react";

interface LessonCardProps {
  courseId: string;
  lessonId: string;
  lessonNumber: number;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  materials: number;
  isLocked?: boolean;
  isCompleted?: boolean;
  hasAssessment?: boolean;
}

export default function LessonCard({
  courseId,
  lessonId,
  lessonNumber,
  title,
  description,
  thumbnail,
  duration,
  materials,
  isLocked = false,
  isCompleted = false,
  hasAssessment = true,
}: LessonCardProps) {
  return (
    <div className="group overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      
      {/* THUMBNAIL */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* TOP BADGES */}
        <div className="absolute left-4 top-4 flex items-center gap-2">
          
          <div className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-black backdrop-blur">
            Lesson {lessonNumber}
          </div>

          {isCompleted && (
            <div className="flex items-center gap-1 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">
              <CheckCircle2 size={13} />
              Completed
            </div>
          )}

          {isLocked && (
            <div className="flex items-center gap-1 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
              <Lock size={13} />
              Locked
            </div>
          )}
        </div>

        {/* ACTION */}
        <div className="absolute right-4 top-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-gray-700 backdrop-blur transition hover:bg-white">
            <MoreVertical size={18} />
          </button>
        </div>

        {/* PLAY BUTTON */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-black shadow-xl backdrop-blur transition hover:scale-110">
            <PlayCircle size={34} fill="currentColor" />
          </button>
        </div>

        {/* DURATION */}
        <div className="absolute bottom-4 right-4 rounded-xl bg-black/70 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
          {duration}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        
        {/* TITLE */}
        <Link
          href={`/instructor/amnas/courses/${courseId}/lessons/${lessonId}`}
        >
          <h3 className="line-clamp-2 text-xl font-bold text-gray-900 transition hover:text-blue-600">
            {title}
          </h3>
        </Link>

        {/* DESCRIPTION */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
          {description}
        </p>

        {/* STATS */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          
          <div className="flex items-center gap-2 rounded-2xl bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
            <Clock3 size={16} />
            {duration}
          </div>

          <div className="flex items-center gap-2 rounded-2xl bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
            <FileText size={16} />
            {materials} Materials
          </div>

          {hasAssessment && (
            <div className="rounded-2xl bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Assessment
            </div>
          )}
        </div>

        {/* PROGRESS */}
        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Lesson Progress
            </span>

            <span className="text-xs font-bold text-gray-700">
              {isCompleted ? "100%" : "45%"}
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-gray-100">
            <div
              className={`h-full rounded-full ${
                isCompleted
                  ? "w-full bg-green-500"
                  : "w-[45%] bg-blue-600"
              }`}
            />
          </div>
        </div>

        {/* BUTTONS */}
        <div className="mt-6 flex items-center gap-3">
          
          <Link
            href={`/instructor/amnas/courses/${courseId}/lessons/${lessonId}`}
            className="flex flex-1 items-center justify-center rounded-2xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            View Lesson
          </Link>

          <Link
            href={`/instructor/amnas/courses/${courseId}/lessons/${lessonId}/edit`}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-100"
          >
            <Pencil size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}