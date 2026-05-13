"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FolderKanban,
  CheckCircle2,
  Clock3,
  Users,
  FileText,
  Pencil,
  Eye,
  MoreVertical,
  XCircle,
} from "lucide-react";

interface ProjectCardProps {
  courseId: string;
  projectId: string;
  projectNumber: number;
  title: string;
  description: string;
  thumbnail: string;
  submissions: number;
  pendingReviews: number;
  resources: number;
  status?: "Published" | "Draft" | "Pending";
  approval?: "Approved" | "Rejected" | "Pending";
}

export default function ProjectCard({
  courseId,
  projectId,
  projectNumber,
  title,
  description,
  thumbnail,
  submissions,
  pendingReviews,
  resources,
  status = "Published",
  approval = "Approved",
}: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      
      {/* IMAGE */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* TOP */}
        <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
          
          <div className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-black backdrop-blur">
            Project {projectNumber}
          </div>

          <div
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              status === "Published"
                ? "bg-green-500 text-white"
                : status === "Pending"
                ? "bg-yellow-500 text-white"
                : "bg-gray-500 text-white"
            }`}
          >
            {status}
          </div>

          <div
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              approval === "Approved"
                ? "bg-blue-500 text-white"
                : approval === "Rejected"
                ? "bg-red-500 text-white"
                : "bg-orange-500 text-white"
            }`}
          >
            {approval}
          </div>
        </div>

        {/* ACTIONS */}
        <div className="absolute right-4 top-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-gray-700 backdrop-blur transition hover:bg-white">
            <MoreVertical size={18} />
          </button>
        </div>

        {/* CENTER ICON */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-2xl backdrop-blur">
            <FolderKanban size={38} className="text-black" />
          </div>
        </div>

        {/* BOTTOM */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-2xl bg-black/70 px-4 py-2 text-sm font-medium text-white backdrop-blur">
          <Clock3 size={15} />
          Active Project
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        
        {/* TITLE */}
        <Link
          href={`/instructor/amnas/projects/${projectId}`}
        >
          <h3 className="line-clamp-2 text-2xl font-bold text-gray-900 transition hover:text-blue-600">
            {title}
          </h3>
        </Link>

        {/* DESCRIPTION */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
          {description}
        </p>

        {/* STATS */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          
          <div className="rounded-2xl bg-gray-50 p-4 text-center">
            <div className="flex items-center justify-center gap-1 text-gray-800">
              <Users size={17} />
              <span className="text-sm font-bold">
                {submissions}
              </span>
            </div>

            <p className="mt-1 text-xs text-gray-500">
              Submissions
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-4 text-center">
            <div className="flex items-center justify-center gap-1 text-orange-500">
              <Clock3 size={17} />
              <span className="text-sm font-bold text-gray-800">
                {pendingReviews}
              </span>
            </div>

            <p className="mt-1 text-xs text-gray-500">
              Pending
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-4 text-center">
            <div className="flex items-center justify-center gap-1 text-gray-800">
              <FileText size={17} />
              <span className="text-sm font-bold">
                {resources}
              </span>
            </div>

            <p className="mt-1 text-xs text-gray-500">
              Resources
            </p>
          </div>
        </div>

        {/* REVIEW STATUS */}
        <div className="mt-6 rounded-3xl border border-gray-100 bg-gray-50 p-4">
          
          <div className="flex items-center justify-between">
            
            <div>
              <h4 className="text-sm font-semibold text-gray-900">
                Review Status
              </h4>

              <p className="mt-1 text-xs text-gray-500">
                Instructor approval required
              </p>
            </div>

            {approval === "Approved" ? (
              <div className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-2 text-sm font-semibold text-green-700">
                <CheckCircle2 size={16} />
                Approved
              </div>
            ) : approval === "Rejected" ? (
              <div className="flex items-center gap-2 rounded-full bg-red-100 px-3 py-2 text-sm font-semibold text-red-700">
                <XCircle size={16} />
                Rejected
              </div>
            ) : (
              <div className="flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-2 text-sm font-semibold text-yellow-700">
                <Clock3 size={16} />
                Pending
              </div>
            )}
          </div>
        </div>

        {/* ACTIONS */}
        <div className="mt-6 flex items-center gap-3">
          
          <Link
            href={`/instructor/amnas/projects/${projectId}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            <Eye size={16} />
            View Project
          </Link>

          <Link
            href={`/instructor/amnas/projects/${projectId}/review`}
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            <CheckCircle2 size={16} />
            Review
          </Link>

          <Link
            href={`/instructor/amnas/projects/${projectId}/edit`}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-100"
          >
            <Pencil size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}