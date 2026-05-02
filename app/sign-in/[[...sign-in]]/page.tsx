"use client";

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <SignIn
        forceRedirectUrl="/"  
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-blue-600 hover:bg-blue-700 text-white",
          },
        }}
      />
    </div>
  );
}