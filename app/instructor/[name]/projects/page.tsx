import Link from "next/link";

const projects = [
  {
    id: "1",
    title: "Portfolio Website Project",
    course: "Frontend Development",
    submissions: 34,
    status: "Approved",
    dueDate: "20 May 2026",
  },
  {
    id: "2",
    title: "React Dashboard Project",
    course: "React Masterclass",
    submissions: 18,
    status: "Pending",
    dueDate: "25 May 2026",
  },
  {
    id: "3",
    title: "API Integration Project",
    course: "Full Stack Development",
    submissions: 12,
    status: "Rejected",
    dueDate: "30 May 2026",
  },
];

export default function InstructorProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              All Projects
            </h1>

            <p className="mt-2 text-gray-600">
              Manage projects across all your courses
            </p>
          </div>

          <Link
            href="./projects/create"
            className="rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Create Project
          </Link>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Total Projects</p>
            <h2 className="mt-2 text-3xl font-bold">42</h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Approved</p>
            <h2 className="mt-2 text-3xl font-bold text-green-600">28</h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Pending</p>
            <h2 className="mt-2 text-3xl font-bold text-yellow-500">10</h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Rejected</p>
            <h2 className="mt-2 text-3xl font-bold text-red-600">4</h2>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
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

              <div className="mb-6 grid gap-4 md:grid-cols-2">
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
                    Due Date
                  </p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {project.dueDate}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={`./projects/${project.id}`}
                  className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                >
                  View
                </Link>

                <Link
                  href={`./projects/${project.id}/submissions`}
                  className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                >
                  Submissions
                </Link>

                <Link
                  href={`./projects/${project.id}/review`}
                  className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
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