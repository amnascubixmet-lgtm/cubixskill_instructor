// src/app/(auth)/login/page.tsx

"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    setError("");

    try {
      const response = await fetch(
        "/api/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            formData
          ),
        }
      );

      const data =
        await response.json();

      if (!data.success) {
        setError(data.message);

        return;
      }

      localStorage.setItem(
        "cubixskill-user",
        JSON.stringify(data.user)
      );

      localStorage.setItem(
        "cubixskill-role",
        data.role
      );

      router.push(
        data.redirectTo
      );
    } catch (error) {
      setError(
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-white rounded-[40px] overflow-hidden shadow-2xl border border-gray-100">
        {/* LEFT SIDE */}
        <div className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#2563eb] text-white p-14 flex-col justify-between">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#60a5fa,transparent_30%)] opacity-30" />

          {/* BRAND */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-4">
              <div className="w-16 h-16 rounded-3xl bg-white/10 backdrop-blur flex items-center justify-center">
                <GraduationCap className="w-8 h-8" />
              </div>

              <div>
                <h1 className="text-4xl font-black tracking-tight">
                  CubixSkill
                </h1>

                <p className="text-white/70">
                  Future Skills Platform
                </p>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="relative z-10 space-y-8">
            <div className="inline-flex px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur text-sm">
              Multi Vendor Learning Platform
            </div>

            <h2 className="text-6xl font-black leading-tight tracking-tight">
              Learn
              <br />
              Build
              <br />
              Grow
            </h2>

            <p className="text-lg text-white/75 leading-relaxed max-w-lg">
              Join thousands of students,
              instructors, and creators
              building the future with
              CubixSkill.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-5 pt-6">
              <div className="rounded-3xl bg-white/10 backdrop-blur border border-white/10 p-5">
                <h3 className="text-3xl font-black">
                  8K+
                </h3>

                <p className="text-white/70 text-sm mt-2">
                  Students
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 backdrop-blur border border-white/10 p-5">
                <h3 className="text-3xl font-black">
                  180+
                </h3>

                <p className="text-white/70 text-sm mt-2">
                  Courses
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 backdrop-blur border border-white/10 p-5">
                <h3 className="text-3xl font-black">
                  40+
                </h3>

                <p className="text-white/70 text-sm mt-2">
                  Mentors
                </p>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="relative z-10 text-sm text-white/50">
            © 2026 CubixSkill.
            All rights reserved.
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 lg:p-14 flex items-center">
          <div className="w-full">
            {/* HEADER */}
            <div className="space-y-3 mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold">
                Welcome Back
              </div>

              <h1 className="text-5xl font-black tracking-tight text-[#0f172a]">
                Login
              </h1>

              <p className="text-gray-500 text-lg">
                Access your dashboard
              </p>
            </div>

            {/* ERROR */}
            {error && (
              <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-red-600 text-sm">
                {error}
              </div>
            )}

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* EMAIL */}
              <div>
                <label className="block mb-3 text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={
                      formData.email
                    }
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email:
                          e.target
                            .value,
                      })
                    }
                    className="w-full h-16 rounded-2xl border text-gray-800 border-gray-200 bg-[#f8fafc] pl-14 pr-5 outline-none focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-700">
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-sm font-semibold text-blue-600"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <div className="relative">
                  <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    required
                    placeholder="Enter password"
                    value={
                      formData.password
                    }
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        password:
                          e.target
                            .value,
                      })
                    }
                    className="w-full h-16 rounded-2xl border text-gray-800 border-gray-200 bg-[#f8fafc] pl-14 pr-14 outline-none focus:border-blue-500 transition-all"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* BUTTON */}
              <button
                disabled={loading}
                className="w-full h-16 rounded-2xl bg-[#2563eb] hover:bg-[#1d4ed8] transition-all text-white font-bold text-lg flex items-center justify-center gap-3"
              >
                {loading ? (
                  "Please wait..."
                ) : (
                  <>
                    Login
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {/* DEMO USERS */}
            <div className="mt-10 rounded-3xl border border-gray-100 bg-[#f8fafc] p-6">
              <h3 className="font-bold text-[#0f172a] mb-5">
                Demo Accounts
              </h3>

              <div className="space-y-5 text-sm">

                <div>
                  <p className="font-bold text-violet-600">
                    Instructor
                  </p>

                  <p className="text-gray-700">
                    rahul@cubixskill.com
                  </p>

                  <p className="text-gray-700">
                    instructor123
                  </p>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-8 text-center text-gray-500">
              Don&apos;t have an
              account?{" "}
              <Link
                href="/register"
                className="font-semibold text-blue-600"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}