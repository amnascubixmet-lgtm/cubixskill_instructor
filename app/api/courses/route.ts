import { NextRequest, NextResponse } from "next/server";

import {
  courses,
  instructors,
} from "@/data/fake-data";

// GET ALL COURSES
export async function GET() {
  try {
    const formattedCourses = courses.map((course) => ({
      ...course,
      instructor: instructors.find(
        (instructor) => instructor.id === course.instructorId
      ),
    }));

    return NextResponse.json(
      {
        success: true,
        message: "Courses fetched successfully",
        count: formattedCourses.length,
        data: formattedCourses,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET COURSES ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch courses",
      },
      { status: 500 }
    );
  }
}

// CREATE COURSE
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      instructorId,
      title,
      slug,
      description,
      thumbnail,
      price,
      category,
      level,
    } = body;

    if (!instructorId || !title || !description || !price || !category || !level) {
      return NextResponse.json(
        {
          success: false,
          message: "Required fields are missing",
        },
        { status: 400 }
      );
    }

    const instructor = instructors.find(
      (item) => item.id === instructorId
    );

    if (!instructor) {
      return NextResponse.json(
        {
          success: false,
          message: "Instructor not found",
        },
        { status: 404 }
      );
    }

    const newCourse = {
      id: `course_${Date.now()}`,
      instructorId,
      title,
      slug:
        slug ||
        title
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/--+/g, "-"),
      description,
      thumbnail: thumbnail || "/images/courses/default-course.png",
      price: Number(price),
      category,
      level,
      status: "pending",
      isFeatured: false,
      userLimit: 300,
      enrolledCount: 0,
      rating: 0,
      totalReviews: 0,
      totalLessons: 0,
      duration: "0h 00m",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    courses.push(newCourse as any);

    return NextResponse.json(
      {
        success: true,
        message: "Course created successfully",
        data: newCourse,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("CREATE COURSE ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create course",
      },
      { status: 500 }
    );
  }
}

// UPDATE COURSE
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();

    const { id } = body;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Course ID is required",
        },
        { status: 400 }
      );
    }

    const courseIndex = courses.findIndex(
      (course) => course.id === id
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

    courses[courseIndex] = {
      ...courses[courseIndex],
      ...body,
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        message: "Course updated successfully",
        data: courses[courseIndex],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("UPDATE COURSE ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update course",
      },
      { status: 500 }
    );
  }
}

// DELETE COURSE
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Course ID is required",
        },
        { status: 400 }
      );
    }

    const courseIndex = courses.findIndex(
      (course) => course.id === id
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

    const deletedCourse = courses.splice(courseIndex, 1)[0];

    return NextResponse.json(
      {
        success: true,
        message: "Course deleted successfully",
        data: deletedCourse,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE COURSE ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete course",
      },
      { status: 500 }
    );
  }
}