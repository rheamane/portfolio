"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaBars } from "react-icons/fa";
function handleOnclick(section: string) {
  document.getElementById(section)?.scrollIntoView({
    behavior: "smooth",
  });
}
export default function Navbar() {
  return (
    <div>
      <Button
        variant="outline"
        className="block md:hidden"
        onClick={() => {
          document.getElementById("navbar")?.classList.toggle("hidden");
        }}
      >
        <FaBars />
      </Button>
      <nav
        id="navbar"
        className="hidden p-4 md:p-2 md:flex flex-col md:flex-row md:justify-end items-center gap-2 md:gap-4"
      >
        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <Link
            href="#about"
            className="text-md font-bold text-gray-800 hover:underline"
            onClick={() => handleOnclick("about")}
          >
            About
          </Link>

          <Link
            href="#work"
            className="text-md font-bold text-gray-800 hover:underline"
            onClick={() => handleOnclick("work")}
          >
            Work
          </Link>

          <Link
            href="#projects"
            className="text-md font-bold text-gray-800 hover:underline"
            onClick={() => handleOnclick("projects")}
          >
            Projects
          </Link>

          <Link
            href="#research"
            className="text-md font-bold text-gray-800 hover:underline"
            onClick={() => handleOnclick("research")}
          >
            Research
          </Link>

          <Link
            href="#achievements"
            className="text-md font-bold text-gray-800 hover:underline"
            onClick={() => handleOnclick("achievements")}
          >
            Achievements
          </Link>
        </div>
      </nav>
    </div>
  );
}
