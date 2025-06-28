import Link from "next/link";
import MobileNavbarToggler from "./NavbarToggler";
import { cn } from "@/lib/utils";

export default function Navbar({ className }: { className?: string }) {
  const mobileNavbarId = "mobile-navbar";
  return (
    <nav
      className={cn(
        "rounded-t-xl bg-[#f9f6f3] p-4 lg:rounded-t-3xl xl:px-20 2xl:px-24",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="block pl-2 font-bold text-blue-500 lg:text-2xl"
        >
          Legal Startup Wala
        </Link>

        <div className="hidden items-center gap-x-6 font-semibold xl:flex">
          <Link href="/" className="text-black hover:underline">
            Home
          </Link>
          <Link href="/courses" className="text-black hover:underline">
            Our Courses
          </Link>
          <Link
            href="/support"
            className="rounded-full bg-orange-400 px-4 py-2 text-sm text-white shadow-md"
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
