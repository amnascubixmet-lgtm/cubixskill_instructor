// app/instructor/[name]/page.tsx
import { redirect } from "next/navigation";

export default async function InstructorRootPage({ 
  params 
}: { 
  params: Promise<{ name: string }> 
}) {
  const { name } = await params;
  

  // 2. Redirect to the nested dashboard route
  redirect(`/instructor/${name}/dashboard`);
}