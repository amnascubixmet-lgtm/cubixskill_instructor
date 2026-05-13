import Link from "next/link";

const pendingProjects = [
  {
    id: "1",
    title: "E-Commerce Dashboard Project",
    course: "React Masterclass",
    submissions: 18,
    dueDate: "22 May 2026",
  },
  {
    id: "2",
    title: "Portfolio Website Project",
    course: "Frontend Development",
    submissions: 11,
    dueDate: "26 May 2026",
  },
  {
    id: "3",
    title: "API Integration Project",
    course: "Full Stack Bootcamp",
    submissions: 7,
    dueDate: "30 May 2026",
  },
];

export default function PendingProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Pending Projects
          </h1>

          <p className="mt-2 text-gray-600">
            Review projects waiting for approval or feedback
          </p>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Pending
            </p>

            <h2 className="mt-2 text-3xl font-bold text-yellow-500">
              10
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Awaiting Review
            </p>

            <h2 className="mt-2 text-3xl font-bold text-blue-600">
              6
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Student Submissions
            </p>

            <h2 className="mt-2 text-3xl font-bold text-green-600">
              36
            </h2>
          </div>
        </div>

        {/* Pending List */}
        <div className="grid gap-6 lg:grid-cols-2">
          {pendingProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Course: {project.course}
                  </p>
                </div>

                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                  Pending
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
                  href={`./${project.id}`}
                  className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                >
                  View
                </Link>

                <Link
                  href={`./${project.id}/submissions`}
                  className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                >
                  Submissions
                </Link>

                <Link
                  href={`./${project.id}/review`}
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