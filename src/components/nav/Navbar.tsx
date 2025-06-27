import Link from "next/link";
import MobileNavbarToggler from "./NavbarToggler";

export default function Navbar() {
  const mobileNavbarId = "mobile-navbar";
  return (
    <nav className="rounded-t-xl bg-[#f9f6f3] p-4 lg:rounded-t-3xl xl:px-20 2xl:px-24">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center font-bold">
          <span className="ml-2 text-2xl font-bold text-blue-500 2xl:text-4xl">
            Legal
          </span>
          <span className="text-2xl text-blue-500 2xl:text-4xl">
            Startup Wala
          </span>
        </Link>

        <div className="hidden items-center space-x-6 font-semibold xl:flex 2xl:text-lg">
          <Link href="/" className="text-black hover:underline">
            Home
          </Link>
          <Link
            href="/courses"
            className="text-black hover:underline 2xl:text-lg"
          >
            Our Courses
          </Link>
          <Link
            href="/support"
            className="rounded-full bg-orange-400 px-4 py-2 text-white shadow-md"
          >
            My Support System
          </Link>
        </div>

        <MobileNavbarToggler navId={mobileNavbarId} />
      </div>

      <div
        id={mobileNavbarId}
        className="mt-4 hidden flex-col space-y-6 xl:hidden"
      >
        <Link href="/" className="text-black hover:underline">
          Home
        </Link>
        <Link
          href="/courses"
          className="text-black hover:underline 2xl:text-lg"
        >
          Our Courses
        </Link>
        <Link
          href="/support"
          className="w-fit rounded-full bg-orange-400 px-4 py-2 text-white shadow-md"
        >
          My Support System
        </Link>
      </div>
    </nav>
  );
}
