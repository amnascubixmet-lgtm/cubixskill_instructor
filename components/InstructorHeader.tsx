"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Bell,
  Mail,
  ChevronDown,
  Menu,
} from "lucide-react";

interface InstructorHeaderProps {
  instructorName?: string;
  instructorRole?: string;
  instructorAvatar?: string;
  onMenuClick?: () => void;
}

export default function InstructorHeader({
  instructorName = "Amnas Ali",
  instructorRole = "Instructor",
  instructorAvatar = "/images/avatar.png",
  onMenuClick,
}: InstructorHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur-xl">
      <div className="flex h-20 items-center justify-between px-4 lg:px-8">
        
        {/* LEFT */}
        <div className="flex items-center gap-4">
          
          {/* MOBILE MENU */}
          <button
            onClick={onMenuClick}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-100 lg:hidden"
          >
            <Menu size={20} />
          </button>

          {/* SEARCH */}
          <div className="relative hidden md:block">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search courses, students..."
              className="h-12 w-[320px] rounded-2xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition focus:border-black focus:bg-white"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 lg:gap-5">
          
          {/* MESSAGE */}
          <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-100">
            <Mail size={19} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-600" />
          </button>

          {/* NOTIFICATION */}
          <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-100">
            <Bell size={19} />

            <span className="absolute right-2 top-2 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
              3
            </span>
          </button>

          {/* PROFILE */}
          <div className="group relative">
            <button className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-3 py-2 transition hover:bg-gray-50">
              
              <div className="relative h-11 w-11 overflow-hidden rounded-xl">
                <Image
                  src={instructorAvatar}
                  alt={instructorName}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="hidden text-left lg:block">
                <h4 className="text-sm font-semibold text-gray-900">
                  {instructorName}
                </h4>

                <p className="text-xs text-gray-500">
                  {instructorRole}
                </p>
              </div>

              <ChevronDown
                size={18}
                className="hidden text-gray-500 lg:block"
              />
            </button>

            {/* DROPDOWN */}
            <div className="invisible absolute right-0 top-[72px] w-64 translate-y-3 rounded-3xl border border-gray-200 bg-white p-3 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              
              <div className="border-b border-gray-100 pb-3">
                <p className="text-sm font-semibold text-gray-900">
                  {instructorName}
                </p>

                <p className="text-xs text-gray-500">
                  instructor@example.com
                </p>
              </div>

              <div className="mt-3 flex flex-col">
                <Link
                  href="/instructor/amnas/profile"
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                >
                  Profile
                </Link>

                <Link
                  href="/instructor/amnas/settings"
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                >
                  Settings
                </Link>

                <Link
                  href="/instructor/amnas/wallet"
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                >
                  Wallet
                </Link>

                <button className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-red-500 transition hover:bg-red-50">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}