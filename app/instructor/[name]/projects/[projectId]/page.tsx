import Link from "next/link";

interface ProjectDetailsPageProps {
  params: Promise<{
    name: string;
    projectId: string;
  }>;
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { projectId } = await params;

  const project = {
    id: projectId,
    title: "Next.js E-Commerce Project",
    course: "Full Stack Development",
    status: "Approved",
    submissions: 42,
    approved: 36,
    pending: 6,
    rejected: 2,
    dueDate: "25 May 2026",
    createdAt: "10 May 2026",
    description:
      "Students must build a modern responsive e-commerce application using Next.js, Tailwind CSS, authentication, cart system, and payment integration.",
    videoUrl:
      "https://youtube.com/watch?v=example",
    tools: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Stripe",
      "MongoDB",
    ],
    resources: [
      "starter-template.zip",
      "ui-assets.fig",
      "requirements.pdf",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="mb-2 text-sm font-medium text-gray-500">
              Project ID #{project.id}
            </p>

            <h1 className="text-3xl font-bold text-gray-900">
              {project.title}
            </h1>

            <p className="mt-2 text-gray-600">
              Course: {project.course}
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
              Review Project
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
              Rejected
            </p>

            <h2 className="mt-2 text-3xl font-bold text-red-600">
              {project.rejected}
            </h2>
          </div>
        </div>

        {/* Main */}
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
                Tutorial Video
              </h2>

              <div className="rounded-2xl border border-dashed border-gray-300 p-8 text-center">
                <p className="mb-3 text-gray-500">
                  Watch project walkthrough
                </p>

                <a
                  href={project.videoUrl}
                  target="_blank"
                  className="font-semibold text-blue-600 underline"
                >
                  {project.videoUrl}
                </a>
              </div>
            </div>

            {/* Resources */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="mb-5 text-2xl font-bold text-gray-900">
                Resources & Files
              </h2>

              <div className="space-y-4">
                {project.resources.map((resource) => (
                  <div
                    key={resource}
                    className="flex items-center justify-between rounded-2xl border border-gray-100 p-4"
                  >
                    <div>
                      <p className="font-semibold text-gray-900">
                        {resource}
                      </p>

                      <p className="text-sm text-gray-500">
                        Downloadable project resource
                      </p>
                    </div>

                    <button className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Info */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="mb-5 text-xl font-bold text-gray-900">
                Project Information
              </h3>

              <div className="space-y-5">
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
                    Status
                  </p>

                  <span className="mt-2 inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                    {project.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="mb-5 text-xl font-bold text-gray-900">
                Required Tools
              </h3>

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

            {/* Actions */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="mb-5 text-xl font-bold text-gray-900">
                Quick Actions
              </h3>

              <div className="space-y-3">
                <button className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-left font-medium text-gray-700 hover:bg-gray-100">
                  Edit Project
                </button>

                <button className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-left font-medium text-gray-700 hover:bg-gray-100">
                  Upload Resources
                </button>

                <button className="w-full rounded-2xl border border-red-200 px-4 py-3 text-left font-medium text-red-600 hover:bg-red-50">
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