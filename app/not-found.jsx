"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 text-center">
      <div className="max-w-xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 text-lg mb-6">
          This page is under review and will be live <span className="font-medium text-black">very soon</span>.
        </p>

        <div className="mb-6">
          <Image
            src="/404.jpg"
            alt="404 Page"
            width={500}
            height={250}
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>

        <Link href="/">
          <button className="px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition shadow-md">
            Go Back Home
          </button>
        </Link>
      </div>
    </main>
  );
}
