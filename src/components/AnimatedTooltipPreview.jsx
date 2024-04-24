"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Sharada Chiplunkar",
    designation: "Security Analyst",
    image:
      "https://raw.githubusercontent.com/openarmor/.github/main/profile/team-members/sharada.jpeg",
  },
  {
    id: 2,
    name: "Priyanshu Bhana",
    designation: "DevOps Engineer",
    image:
      "https://raw.githubusercontent.com/openarmor/.github/main/profile/team-members/priyanshu.jpeg",
  },
  {
    id: 3,
    name: "Hriday Sheth",
    designation: "Ai Engineer",
    image:
      "https://raw.githubusercontent.com/openarmor/.github/main/profile/team-members/hriday.jpeg",
  },
  {
    id: 4,
    name: "Anubhav Gain",
    designation: "DevSecOps",
    image:
      "https://raw.githubusercontent.com/openarmor/.github/main/profile/team-members/whiteinblack.png",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
