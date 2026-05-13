import Link from "next/link";

interface ProjectPageProps {
  params: Promise<{
    name: string;
    courseId: string;
    projectId: string;
  }>;
}

export default async function ProjectDetailsPage({
  params,
}: ProjectPageProps) {
  const { projectId } = await params;

  const project = {
    id: projectId,
    title: "E-Commerce Website Project",
    status: "Active",
    submissions: 24,
    approved: 18,
    pending: 6,
    dueDate: "25 May 2026",
    createdAt: "10 May 2026",
    video:
      "https://youtube.com/watch?v=example",
    description:
      "Students must build a complete responsive e-commerce website using Next.js, Tailwind CSS, and API integration.",
    tools: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "REST API",
      "Vercel",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {project.title}
            </h1>

            <p className="mt-2 text-gray-600">
              Project ID: #{project.id}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={`./${project.id}/submissions`}
              className="rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              View Submissions
            </Link>

            <Link
              href={`./${project.id}/review`}
              className="rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Review Projects
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Submissions
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {project.submissions}
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Approved
            </p>

            <h2 className="mt-2 text-3xl font-bold text-green-600">
              {project.approved}
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Pending
            </p>

            <h2 className="mt-2 text-3xl font-bold text-yellow-500">
              {project.pending}
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Status
            </p>

            <h2 className="mt-2 text-xl font-bold text-blue-600">
              {project.status}
            </h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left */}
          <div className="space-y-8 lg:col-span-2">
            {/* Description */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="mb-5 text-2xl font-bold text-gray-900">
                Project Description
              </h2>

              <p className="leading-8 text-gray-600">
                {project.description}
              </p>
            </div>

            {/* Video */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="mb-5 text-2xl font-bold text-gray-900">
                Project Video
              </h2>

              <div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center">
                <p className="mb-4 text-gray-500">
                  Video Tutorial Link
                </p>

                <a
                  href={project.video}
                  target="_blank"
                  className="font-semibold text-blue-600 underline"
                >
                  {project.video}
                </a>
              </div>
            </div>

            {/* Resources */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="mb-5 text-2xl font-bold text-gray-900">
                Tools & Resources
              </h2>

              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Info Card */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="mb-5 text-xl font-bold text-gray-900">
                Project Information
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">
                    Due Date
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    {project.dueDate}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Created At
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    {project.createdAt}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Project Status
                  </p>

                  <span className="mt-2 inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                    {project.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="mb-5 text-xl font-bold text-gray-900">
                Quick Actions
              </h3>

              <div className="space-y-3">
                <button className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-left font-medium text-gray-700 transition hover:bg-gray-100">
                  Edit Project
                </button>

                <button className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-left font-medium text-gray-700 transition hover:bg-gray-100">
                  Upload Resources
                </button>

                <button className="w-full rounded-2xl border border-red-200 px-4 py-3 text-left font-medium text-red-600 transition hover:bg-red-50">
                  Delete Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}