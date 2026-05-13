import Link from "next/link";

const approvedProjects = [
  {
    id: "1",
    title: "Next.js E-Commerce Project",
    course: "Full Stack Development",
    submissions: 42,
    approvedDate: "10 May 2026",
    completionRate: "94%",
  },
  {
    id: "2",
    title: "React Admin Dashboard",
    course: "React Masterclass",
    submissions: 28,
    approvedDate: "08 May 2026",
    completionRate: "88%",
  },
  {
    id: "3",
    title: "Portfolio UI Project",
    course: "Frontend Development",
    submissions: 19,
    approvedDate: "05 May 2026",
    completionRate: "91%",
  },
];

export default function ApprovedProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Approved Projects
            </h1>

            <p className="mt-2 text-gray-600">
              View all approved and published projects
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
              Total Approved
            </p>

            <h2 className="mt-2 text-3xl font-bold text-green-600">
              28
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Active Students
            </p>

            <h2 className="mt-2 text-3xl font-bold text-blue-600">
              540
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Submissions
            </p>

            <h2 className="mt-2 text-3xl font-bold text-purple-600">
              89
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Avg Completion
            </p>

            <h2 className="mt-2 text-3xl font-bold text-orange-500">
              91%
            </h2>
          </div>
        </div>

        {/* Approved Projects */}
        <div className="grid gap-6 lg:grid-cols-2">
          {approvedProjects.map((project) => (
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

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  Approved
                </span>
              </div>

              {/* Stats */}
              <div className="mb-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">
                    Submissions
                  </p>

                  <p className="mt-1 text-2xl font-bold">
                    {project.submissions}
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">
                    Approved Date
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    {project.approvedDate}
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">
                    Completion
                  </p>

                  <p className="mt-1 text-xl font-bold text-green-600">
                    {project.completionRate}
                  </p>
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
                  href={`./${project.id}/submissions`}
                  className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                >
                  Submissions
                </Link>

                <Link
                  href={`./${project.id}/review`}
                  className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  Manage
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}