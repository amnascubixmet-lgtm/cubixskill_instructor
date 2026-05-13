import { NextResponse } from "next/server";

import {
  dashboardStats,
  recentCourseApprovals,
  topInstructors,
  recentTransactions,
  courses,
  instructors,
  students,
  transactions,
  monthlyRevenue,
  coursePerformance,
  notifications,
} from "@/data/fake-data";

export async function GET() {
  try {
    const pendingCourses = courses.filter(
      (course) => course.status === "pending"
    );

    const publishedCourses = courses.filter(
      (course) => course.status === "published"
    );

    const activeInstructors = instructors.filter(
      (instructor) => instructor.status === "active"
    );

    const activeStudents = students.filter(
      (student) => student.status === "active"
    );

    const totalRevenue = transactions
      .filter((transaction) => transaction.status === "success")
      .reduce((total, transaction) => total + transaction.amount, 0);

    return NextResponse.json({
      success: true,
      message: "Admin dashboard data fetched successfully",
      data: {
        stats: {
          ...dashboardStats,
          totalRevenue,
          totalInstructors: instructors.length,
          totalStudents: students.length,
          totalCourses: courses.length,
          pendingApprovals: pendingCourses.length,
          activeInstructors: activeInstructors.length,
          activeStudents: activeStudents.length,
          publishedCourses: publishedCourses.length,
        },

        recentCourseApprovals,
        topInstructors,
        recentTransactions,
        monthlyRevenue,
        coursePerformance,

        notifications: notifications.filter(
          (notification) => notification.userId === "admin_001"
        ),
      },
    });
  } catch (error) {
    console.error("ADMIN DASHBOARD API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch admin dashboard data",
      },
      { status: 500 }
    );
  }
}