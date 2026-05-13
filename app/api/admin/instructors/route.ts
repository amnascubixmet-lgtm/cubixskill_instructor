// src/app/api/admin/instructors/route.ts

import { NextRequest, NextResponse } from "next/server";

import {
  instructors,
  courses,
  getCoursesByInstructor,
} from "@/data/fake-data";

// ======================================================
// GET ALL INSTRUCTORS
// ======================================================

export async function GET() {
  try {
    const formattedInstructors =
      instructors.map((instructor) => {
        const instructorCourses =
          getCoursesByInstructor(
            instructor.id
          );

        return {
          ...instructor,

          courses:
            instructorCourses,

          analytics: {
            totalCourses:
              instructorCourses.length,

            publishedCourses:
              instructorCourses.filter(
                (course) =>
                  course.status ===
                  "published"
              ).length,

            pendingCourses:
              instructorCourses.filter(
                (course) =>
                  course.status ===
                  "pending"
              ).length,

            rejectedCourses:
              instructorCourses.filter(
                (course) =>
                  course.status ===
                  "rejected"
              ).length,

            draftCourses:
              instructorCourses.filter(
                (course) =>
                  course.status ===
                  "draft"
              ).length,

            totalEnrollments:
              instructorCourses.reduce(
                (acc, current) =>
                  acc +
                  current.enrolledCount,
                0
              ),

            totalRevenue:
              instructor.totalRevenue,
          },
        };
      });

    return NextResponse.json(
      {
        success: true,

        message:
          "Instructors fetched successfully",

        count:
          formattedInstructors.length,

        data:
          formattedInstructors,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "GET INSTRUCTORS ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        message:
          "Failed to fetch instructors",
      },
      { status: 500 }
    );
  }
}

// ======================================================
// CREATE INSTRUCTOR
// ======================================================

export async function POST(
  req: NextRequest
) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      bio,
      expertise,
      avatar,
      themeColor,
      logo,
    } = body;

    // ======================================================
    // VALIDATION
    // ======================================================

    if (!name || !email) {
      return NextResponse.json(
        {
          success: false,

          message:
            "Name and email are required",
        },
        { status: 400 }
      );
    }

    // ======================================================
    // CHECK EXISTING
    // ======================================================

    const existingInstructor =
      instructors.find(
        (instructor) =>
          instructor.email.toLowerCase() ===
          email.toLowerCase()
      );

    if (existingInstructor) {
      return NextResponse.json(
        {
          success: false,

          message:
            "Instructor already exists",
        },
        { status: 409 }
      );
    }

    // ======================================================
    // CREATE NEW INSTRUCTOR
    // ======================================================

    const newInstructor = {
      id: `ins_${Date.now()}`,

      name,

      email,

      phone:
        phone ||
        "+91 00000 00000",

      role: "instructor" as const,

      avatar:
        avatar ||
        "/images/default-avatar.png",

      bio:
        bio ||
        "New instructor profile",

      status: "pending" as const,

      joinedAt:
        new Date().toISOString(),

      lastLogin:
        new Date().toISOString(),

      verified: false,

      rating: 0,

      totalCourses: 0,

      totalStudents: 0,

      totalRevenue: 0,

      walletBalance: 0,

      themeColor:
        themeColor || "#2563eb",

      logo:
        logo ||
        "/images/default-logo.png",

      expertise:
        expertise || [],
    };

    instructors.push(
      newInstructor
    );

    return NextResponse.json(
      {
        success: true,

        message:
          "Instructor created successfully",

        data:
          newInstructor,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "CREATE INSTRUCTOR ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        message:
          "Failed to create instructor",
      },
      { status: 500 }
    );
  }
}