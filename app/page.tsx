import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="flex items-center justify-center h-screen text-2xl">
      Welcome to Home Page 🚀
    </div>
  );
}