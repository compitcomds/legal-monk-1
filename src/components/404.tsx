import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex min-h-screen items-center justify-center rounded-2xl bg-[#f9f6f3] px-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-8">
          <h1 className="mb-2 text-9xl font-bold text-yellow-600">404</h1>
          <div className="mx-auto h-1 w-24 rounded-full bg-yellow-600"></div>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Oops! Page Not Found
          </h2>
          <p className="leading-relaxed text-gray-600">
            The page you're looking for seems to have wandered off. Don't worry,
            we'll get you back on track!
          </p>
        </div>
        <div className="space-y-4">
          <Link
            href="/courses"
            className="block w-full transform rounded-lg bg-yellow-600 px-8 py-4 font-bold text-white shadow-lg ring-4 ring-yellow-300 ring-opacity-50 transition-all duration-200 hover:scale-105 hover:bg-yellow-700 hover:shadow-xl"
          >
            🎓 Browse Our Courses
          </Link>

          <Link
            href="/"
            className="block w-full rounded-lg border-2 border-yellow-400 px-6 py-3 font-semibold text-yellow-700 transition-colors duration-200 hover:bg-yellow-50"
          >
            🏠 Return Home
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center space-x-2">
          <div className="h-2 w-2 animate-bounce rounded-full bg-yellow-600"></div>
          <div
            className="h-2 w-2 animate-bounce rounded-full bg-yellow-600"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="h-2 w-2 animate-bounce rounded-full bg-yellow-600"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
