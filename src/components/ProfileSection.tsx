"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { Button } from "./ui/button";
export default function ProfileSection() {
  return (
    <div className=" mx-auto container ">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="justify-center items-center py-18 px-14">
          <Image
            src="/profileimg3.jpg"
            alt="Rhea Mane"
            width={450}
            height={450}
            className="rounded-full"
            unoptimized
          />
        </div>

        {/* Right: Profile Info */}
        <div className="text-gray-800 gap-2 flex flex-col justify-start items-center">
          <p className="font-serif">Hi I am,</p>
          <h2 className="text-4xl font-bold">Rhea Mane</h2>
          <div className="flex flex-row gap-2">
            <a
              href="https://github.com/rheamane"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/rhea-mane-539431225/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="mailto:rbmane@asu.edu" target="_blank" rel="noreferrer">
              <FaEnvelope className="text-2xl" />
            </a>
          </div>
          <Button
            className=" bg-gray-800 rounded-lg"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/RheaMane_Resume.pdf";
              link.download = "RheaMane_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link); // Clean up
            }}
          >
            Resume
            <FaDownload className="text-2xl" />
          </Button>
        </div>
      </div>
    </div>
  );
}
