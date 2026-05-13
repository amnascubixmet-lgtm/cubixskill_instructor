import Link from "next/link";

const rejectedProjects = [
  {
    id: "1",
    title: "Crypto Trading Dashboard",
    course: "Advanced React",
    reason: "Incomplete project requirements",
    rejectedDate: "11 May 2026",
    submissions: 6,
  },
  {
    id: "2",
    title: "Social Media UI Clone",
    course: "Frontend Development",
    reason: "Poor responsive design",
    rejectedDate: "08 May 2026",
    submissions: 4,
  },
  {
    id: "3",
    title: "AI Chat Application",
    course: "Full Stack Bootcamp",
    reason: "Project files missing",
    rejectedDate: "05 May 2026",
    submissions: 2,
  },
];

export default function RejectedProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Rejected Projects
            </h1>

            <p className="mt-2 text-gray-600">
              Review rejected projects and resubmission status
            </p>
          </div>

          <Link
            href="../create"
            className="rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Create Project
          </Link>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Rejected
            </p>

            <h2 className="mt-2 text-3xl font-bold text-red-600">
              4
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Pending Fixes
            </p>

            <h2 className="mt-2 text-3xl font-bold text-yellow-500">
              3
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Resubmitted
            </p>

            <h2 className="mt-2 text-3xl font-bold text-blue-600">
              1
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Student Impact
            </p>

            <h2 className="mt-2 text-3xl font-bold text-purple-600">
              12
            </h2>
          </div>
        </div>

        {/* Rejected Projects */}
        <div className="grid gap-6 lg:grid-cols-2">
          {rejectedProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Course: {project.course}
                  </p>
                </div>

                <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                  Rejected
                </span>
              </div>

              {/* Info */}
              <div className="mb-6 space-y-4">
                <div className="rounded-2xl bg-red-50 p-4">
                  <p className="text-sm font-semibold text-red-700">
                    Rejection Reason
                  </p>

                  <p className="mt-1 text-sm text-red-600">
                    {project.reason}
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">
                      Rejected Date
                    </p>

                    <p className="mt-1 font-semibold text-gray-900">
                      {project.rejectedDate}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">
                      Submissions
                    </p>

                    <p className="mt-1 text-2xl font-bold">
                      {project.submissions}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`./${project.id}`}
                  className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                >
                  View
                </Link>

                <Link
                  href={`./${project.id}/review`}
                  className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                >
                  Review
                </Link>

                <button className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800">
                  Request Fix
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}