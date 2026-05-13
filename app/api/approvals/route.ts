import { NextRequest, NextResponse } from "next/server";

import {
  courses,
  instructors,
} from "@/data/fake-data";

// GET APPROVAL COURSES
export async function GET() {
  try {
    const approvalCourses = courses
      .filter(
        (course) =>
          course.status === "pending" ||
          course.status === "rejected"
      )
      .map((course) => ({
        ...course,
        instructor: instructors.find(
          (instructor) =>
            instructor.id === course.instructorId
        ),
      }));

    return NextResponse.json(
      {
        success: true,
        message: "Approval courses fetched successfully",
        count: approvalCourses.length,
        data: approvalCourses,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET APPROVALS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch approval courses",
      },
      { status: 500 }
    );
  }
}

// UPDATE COURSE APPROVAL STATUS
export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      courseId,
      action,
      rejectionReason,
    } = body;

    if (!courseId || !action) {
      return NextResponse.json(
        {
          success: false,
          message: "Course ID and action are required",
        },
        { status: 400 }
      );
    }

    const courseIndex = courses.findIndex(
      (course) => course.id === courseId
    );

    if (courseIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          message: "Course not found",
        },
        { status: 404 }
      );
    }

    if (!["approve", "reject", "pending"].includes(action)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid approval action",
        },
        { status: 400 }
      );
    }

    if (action === "approve") {
      courses[courseIndex] = {
        ...courses[courseIndex],
        status: "published",
        approvedAt: new Date().toISOString(),
        rejectionReason: undefined,
        updatedAt: new Date().toISOString(),
      };
    }

    if (action === "reject") {
      courses[courseIndex] = {
        ...courses[courseIndex],
        status: "rejected",
        rejectionReason:
          rejectionReason || "Course rejected by admin.",
        updatedAt: new Date().toISOString(),
      };
    }

    if (action === "pending") {
      courses[courseIndex] = {
        ...courses[courseIndex],
        status: "pending",
        rejectionReason: undefined,
        updatedAt: new Date().toISOString(),
      };
    }

    return NextResponse.json(
      {
        success: true,
        message: "Course approval status updated successfully",
        data: courses[courseIndex],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("UPDATE APPROVAL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update approval status",
      },
      { status: 500 }
    );
  }
}