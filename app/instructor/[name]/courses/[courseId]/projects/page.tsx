import Link from "next/link";

const projects = [
  {
    id: "1",
    title: "E-Commerce UI Project",
    status: "Approved",
    submissions: 24,
    dueDate: "15 May 2026",
  },
  {
    id: "2",
    title: "Dashboard Design Project",
    status: "Pending",
    submissions: 18,
    dueDate: "20 May 2026",
  },
  {
    id: "3",
    title: "API Integration Project",
    status: "Rejected",
    submissions: 9,
    dueDate: "28 May 2026",
  },
];

export default function CourseProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Course Projects
            </h1>

            <p className="mt-2 text-gray-600">
              Manage all course projects and submissions
            </p>
          </div>

          <Link
            href="./projects/create"
            className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Create Project
          </Link>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-sm text-gray-500">
              Total Projects
            </h3>

            <p className="mt-2 text-3xl font-bold">
              12
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-sm text-gray-500">
              Pending Reviews
            </h3>

            <p className="mt-2 text-3xl font-bold text-yellow-500">
              18
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-sm text-gray-500">
              Approved Projects
            </h3>

            <p className="mt-2 text-3xl font-bold text-green-600">
              42
            </p>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Due Date: {project.dueDate}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    project.status === "Approved"
                      ? "bg-green-100 text-green-700"
                      : project.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="mb-5">
                <p className="text-sm text-gray-600">
                  Student Submissions
                </p>

                <p className="mt-1 text-2xl font-bold">
                  {project.submissions}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={`./projects/${project.id}`}
                  className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  View
                </Link>

                <Link
                  href={`./projects/${project.id}/submissions`}
                  className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  Submissions
                </Link>

                <Link
                  href={`./projects/${project.id}/review`}
                  className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
                >
                  Review
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}