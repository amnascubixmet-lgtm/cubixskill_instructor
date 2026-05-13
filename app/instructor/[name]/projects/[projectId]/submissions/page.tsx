import Link from "next/link";

const submissions = [
  {
    id: "SUB-001",
    student: "Rahul Sharma",
    email: "rahul@example.com",
    course: "Full Stack Development",
    submittedAt: "12 May 2026",
    status: "Pending",
    file: "ecommerce-project.zip",
  },
  {
    id: "SUB-002",
    student: "Aisha Khan",
    email: "aisha@example.com",
    course: "Full Stack Development",
    submittedAt: "11 May 2026",
    status: "Approved",
    file: "nextjs-store.zip",
  },
  {
    id: "SUB-003",
    student: "Arjun Nair",
    email: "arjun@example.com",
    course: "Full Stack Development",
    submittedAt: "10 May 2026",
    status: "Rejected",
    file: "project-files.zip",
  },
];

export default function InstructorProjectSubmissionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Project Submissions
          </h1>

          <p className="mt-2 text-gray-600">
            View and manage student submissions for this project
          </p>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Total</p>
            <h2 className="mt-2 text-3xl font-bold">42</h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Approved</p>
            <h2 className="mt-2 text-3xl font-bold text-green-600">36</h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Pending</p>
            <h2 className="mt-2 text-3xl font-bold text-yellow-500">6</h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Rejected</p>
            <h2 className="mt-2 text-3xl font-bold text-red-600">2</h2>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
          <div className="border-b border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900">
              Student Submission List
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[950px] text-left">
              <thead className="bg-gray-50 text-sm text-gray-500">
                <tr>
                  <th className="px-6 py-4 font-semibold">Submission ID</th>
                  <th className="px-6 py-4 font-semibold">Student</th>
                  <th className="px-6 py-4 font-semibold">Course</th>
                  <th className="px-6 py-4 font-semibold">Submitted At</th>
                  <th className="px-6 py-4 font-semibold">File</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 text-right font-semibold">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {submissions.map((submission) => (
                  <tr key={submission.id} className="hover:bg-gray-50">
                    <td className="px-6 py-5 font-semibold text-gray-900">
                      {submission.id}
                    </td>

                    <td className="px-6 py-5">
                      <p className="font-semibold text-gray-900">
                        {submission.student}
                      </p>
                      <p className="text-sm text-gray-500">
                        {submission.email}
                      </p>
                    </td>

                    <td className="px-6 py-5 text-gray-600">
                      {submission.course}
                    </td>

                    <td className="px-6 py-5 text-gray-600">
                      {submission.submittedAt}
                    </td>

                    <td className="px-6 py-5 text-gray-600">
                      {submission.file}
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          submission.status === "Approved"
                            ? "bg-green-100 text-green-700"
                            : submission.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {submission.status}
                      </span>
                    </td>

                    <td className="px-6 py-5 text-right">
                      <Link
                        href="../review"
                        className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
                      >
                        Review
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}