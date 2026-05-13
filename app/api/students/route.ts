// src/app/api/admin/students/route.ts

import { NextRequest, NextResponse } from "next/server";

import {
  students,
  enrollments,
  courses,
  certificates,
} from "@/data/fake-data";

// ======================================================
// GET ALL STUDENTS
// ======================================================

export async function GET() {
  try {
    const formattedStudents =
      students.map((student) => {
        const studentEnrollments =
          enrollments.filter(
            (enrollment) =>
              enrollment.studentId ===
              student.id
          );

        const studentCourses =
          studentEnrollments.map(
            (enrollment) =>
              courses.find(
                (course) =>
                  course.id ===
                  enrollment.courseId
              )
          );

        const studentCertificates =
          certificates.filter(
            (certificate) =>
              certificate.studentId ===
              student.id
          );

        return {
          ...student,

          enrollments:
            studentEnrollments,

          courses:
            studentCourses,

          certificates:
            studentCertificates,

          totalEnrollments:
            studentEnrollments.length,

          activeCourses:
            studentEnrollments.filter(
              (enrollment) =>
                enrollment.isActive
            ).length,

          completedCourses:
            studentEnrollments.filter(
              (enrollment) =>
                enrollment.progress >=
                100
            ).length,
        };
      });

    return NextResponse.json(
      {
        success: true,

        message:
          "Students fetched successfully",

        count:
          formattedStudents.length,

        data:
          formattedStudents,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "GET STUDENTS ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        message:
          "Failed to fetch students",
      },
      { status: 500 }
    );
  }
}

// ======================================================
// CREATE STUDENT
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
      interests,
    } = body;

    // VALIDATION
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

    // EMAIL EXISTS
    const existingStudent =
      students.find(
        (student) =>
          student.email.toLowerCase() ===
          email.toLowerCase()
      );

    if (existingStudent) {
      return NextResponse.json(
        {
          success: false,

          message:
            "Student already exists",
        },
        { status: 409 }
      );
    }

    // CREATE STUDENT
    const newStudent = {
      id: `stu_${Date.now()}`,

      name,

      email,

      phone:
        phone ||
        "+91 00000 00000",

      role: "student",

      avatar:
        "/images/default-avatar.png",

      bio:
        bio ||
        "New student account",

      status: "active",

      joinedAt:
        new Date().toISOString(),

      lastLogin:
        new Date().toISOString(),

      interests:
        interests || [],

      points: 0,

      level: 1,

      enrolledCourses: 0,

      completedCourses: 0,

      certificates: 0,

      progress: 0,
    };

    students.push(
      newStudent as any
    );

    return NextResponse.json(
      {
        success: true,

        message:
          "Student created successfully",

        data: newStudent,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "CREATE STUDENT ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        message:
          "Failed to create student",
      },
      { status: 500 }
    );
  }
}

// ======================================================
// UPDATE STUDENT
// ======================================================

export async function PUT(
  req: NextRequest
) {
  try {
    const body = await req.json();

    const {
      id,
      name,
      phone,
      bio,
      status,
    } = body;

    // FIND STUDENT
    const studentIndex =
      students.findIndex(
        (student) =>
          student.id === id
      );

    if (studentIndex === -1) {
      return NextResponse.json(
        {
          success: false,

          message:
            "Student not found",
        },
        { status: 404 }
      );
    }

    // UPDATE
    students[studentIndex] = {
      ...students[studentIndex],

      name:
        name ||
        students[studentIndex].name,

      phone:
        phone ||
        students[studentIndex]
          .phone,

      bio:
        bio ||
        students[studentIndex].bio,

      status:
        status ||
        students[studentIndex]
          .status,
    };

    return NextResponse.json(
      {
        success: true,

        message:
          "Student updated successfully",

        data:
          students[studentIndex],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "UPDATE STUDENT ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        message:
          "Failed to update student",
      },
      { status: 500 }
    );
  }
}

// ======================================================
// DELETE STUDENT
// ======================================================

export async function DELETE(
  req: NextRequest
) {
  try {
    const { searchParams } =
      new URL(req.url);

    const id =
      searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        {
          success: false,

          message:
            "Student ID is required",
        },
        { status: 400 }
      );
    }

    const studentIndex =
      students.findIndex(
        (student) =>
          student.id === id
      );

    if (studentIndex === -1) {
      return NextResponse.json(
        {
          success: false,

          message:
            "Student not found",
        },
        { status: 404 }
      );
    }

    const deletedStudent =
      students.splice(
        studentIndex,
        1
      )[0];

    return NextResponse.json(
      {
        success: true,

        message:
          "Student deleted successfully",

        data: deletedStudent,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "DELETE STUDENT ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        message:
          "Failed to delete student",
      },
      { status: 500 }
    );
  }
}