import Link from "next/link";

interface LessonPageProps {
  params: Promise<{
    name: string;
    courseId: string;
    lessonId: string;
  }>;
}

export default async function LessonDetailsPage({
  params,
}: LessonPageProps) {
  const { lessonId } = await params;

  const lesson = {
    id: lessonId,
    number: 1,
    title: "Introduction to Next.js",
    description:
      "Learn the fundamentals of Next.js, routing system, layouts, rendering methods, and modern React development workflow.",
    duration: "28 Minutes",
    videoUrl:
      "https://www.youtube.com/watch?v=example",
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    status: "Published",
    unlockRule:
      "Students must complete assessment before unlocking next lesson.",
    materials: [
      "nextjs-guide.pdf",
      "starter-files.zip",
      "lesson-notes.docx",
    ],
    students: 124,
    completed: 98,
    createdAt: "10 May 2026",
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="mb-2 text-sm font-medium text-gray-500">
              Lesson #{lesson.number}
            </p>

            <h1 className="text-3xl font-bold text-gray-900">
              {lesson.title}
            </h1>

            <p className="mt-2 text-gray-600">
              Complete lesson overview and content management
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={`./${lesson.id}/edit`}
              className="rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Edit Lesson
            </Link>

            <button className="rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800">
              Publish Lesson
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Students Enrolled
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {lesson.students}
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Lesson Completed
            </p>

            <h2 className="mt-2 text-3xl font-bold text-green-600">
              {lesson.completed}
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Duration
            </p>

            <h2 className="mt-2 text-2xl font-bold text-blue-600">
              {lesson.duration}
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Status
            </p>

            <h2 className="mt-2 text-2xl font-bold text-yellow-500">
              {lesson.status}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left */}
          <div className="space-y-8 lg:col-span-2">
            {/* Video */}
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="aspect-video bg-black">
                <img
                  src={lesson.thumbnail}
                  alt={lesson.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Lesson Video
                </h2>

                <a
                  href={lesson.videoUrl}
                  target="_blank"
                  className="mt-4 inline-block font-semibold text-blue-600 underline"
                >
                  Watch Video
                </a>
              </div>
            </div>

            {/* Description */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="mb-5 text-2xl font-bold text-gray-900">
                Lesson Description
              </h2>

              <p className="leading-8 text-gray-600">
                {lesson.description}
              </p>
            </div>

            {/* Materials */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="mb-5 text-2xl font-bold text-gray-900">
                Supporting Materials
              </h2>

              <div className="space-y-4">
                {lesson.materials.map((material) => (
                  <div
                    key={material}
                    className="flex items-center justify-between rounded-2xl border border-gray-100 p-4"
                  >
                    <div>
                      <p className="font-semibold text-gray-900">
                        {material}
                      </p>

                      <p className="text-sm text-gray-500">
                        Downloadable lesson resource
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
                Lesson Information
              </h3>

              <div className="space-y-5">
                <div>
                  <p className="text-sm text-gray-500">
                    Lesson Number
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    #{lesson.number}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Created At
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    {lesson.createdAt}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Unlock Logic
                  </p>

                  <p className="mt-1 leading-7 text-gray-700">
                    {lesson.unlockRule}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="mb-5 text-xl font-bold text-gray-900">
                Quick Actions
              </h3>

              <div className="space-y-3">
                <button className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-left font-medium text-gray-700 transition hover:bg-gray-100">
                  Upload New Video
                </button>

                <button className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-left font-medium text-gray-700 transition hover:bg-gray-100">
                  Add Assessment
                </button>

                <button className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-left font-medium text-gray-700 transition hover:bg-gray-100">
                  Manage Materials
                </button>

                <button className="w-full rounded-2xl border border-red-200 px-4 py-3 text-left font-medium text-red-600 transition hover:bg-red-50">
                  Delete Lesson
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}