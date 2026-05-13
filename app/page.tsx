// app/instructor/[name]/page.tsx
import { redirect } from "next/navigation";

export default function RootPage({ params }: { params: { name: string } }) {
  // 1. Add your authentication check logic here
  const isAuthenticated = false; 

  if (!isAuthenticated) {
    redirect("/login");
  }

  // 2. If authenticated, send them to their specific dashboard
  redirect(`/instructor/${params.name}/dashboard`);
}