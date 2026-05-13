// src/app/api/auth/login/route.ts

import { NextRequest, NextResponse } from "next/server";

import {
  authUsers,
  allUsers,
} from "@/data/fake-data";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const email = body.email?.trim();
    const password = body.password?.trim();

    // =========================
    // VALIDATION
    // =========================

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and password are required",
        },
        { status: 400 }
      );
    }

    // =========================
    // FIND USER
    // =========================

    const authUser = authUsers.find(
      (user) =>
        user.email.toLowerCase() ===
          email.toLowerCase() &&
        user.password === password
    );

    // =========================
    // INVALID LOGIN
    // =========================

    if (!authUser) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password",
        },
        { status: 401 }
      );
    }

    // =========================
    // ACCOUNT STATUS CHECK
    // =========================

    if (authUser.status === "inactive") {
      return NextResponse.json(
        {
          success: false,
          message: "Account inactive",
        },
        { status: 403 }
      );
    }

    if (authUser.status === "blocked") {
      return NextResponse.json(
        {
          success: false,
          message: "Account blocked",
        },
        { status: 403 }
      );
    }

    if (authUser.status === "pending") {
      return NextResponse.json(
        {
          success: false,
          message:
            "Your account approval is pending",
        },
        { status: 403 }
      );
    }

    // =========================
    // USER PROFILE
    // =========================

    const profile = allUsers.find(
      (user) => user.id === authUser.id
    );

    // =========================
    // REDIRECT
    // =========================

    let redirectTo = "/";

    switch (authUser.role) {
      case "admin":
        redirectTo = "/admin/dashboard";
        break;

      case "instructor":
        redirectTo =
          "/instructor/dashboard";
        break;

      case "student":
        redirectTo = "/student/dashboard";
        break;
    }

    // =========================
    // RESPONSE
    // =========================

    const response = NextResponse.json(
      {
        success: true,
        message: "Login successful",
        user: profile,
        role: authUser.role,
        redirectTo,
      },
      { status: 200 }
    );

    // =========================
    // COOKIES
    // =========================

    response.cookies.set(
      "lms-auth",
      "true",
      {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      }
    );

    response.cookies.set(
      "lms-role",
      authUser.role,
      {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      }
    );

    response.cookies.set(
      "lms-user-id",
      authUser.id,
      {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      }
    );

    return response;
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}