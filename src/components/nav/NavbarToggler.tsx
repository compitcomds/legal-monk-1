"use client";

export default function MobileNavbarToggler({ navId }: { navId: string }) {
  const toggleDisplay = () => {
    const element = document.getElementById(navId);
    if (!element) return;
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
      element.classList.add("flex");
    } else {
      element.classList.remove("flex");
      element.classList.add("hidden");
    }
  };
  return (
    <button
      className="rounded bg-yellow-400 p-2 shadow-md xl:hidden"
      onClick={toggleDisplay}
    >
      <span className="mb-1 block h-0.5 w-6 bg-gray-900"></span>
      <span className="mb-1 block h-0.5 w-6 bg-gray-900"></span>
      <span className="block h-0.5 w-6 bg-gray-900"></span>
    </button>
  );
}
