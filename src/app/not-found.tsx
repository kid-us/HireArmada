import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#fbeee6] via-[#fbe3e3] to-[#fbeee6] px-4">
      <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#EC1699] to-[#FF4B2B] mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-gradient-to-r from-[#EC1699] to-[#FF4B2B] text-white font-semibold shadow-lg hover:from-[#FF4B2B] hover:to-[#EC1699] transition-all"
      >
        Back to Home
      </Link>
    </main>
  );
}
