"use client";

import Link from "next/link";

export default function SidebarItem({ icon, text, href, active }) {
  return (
    <Link
      href={href || "#"}
      className={`w-full flex justify-end items-center gap-3 px-3 py-2 rounded-md transition
        ${
          active
            ? "bg-white/20 text-white"
            : "text-white/80 hover:bg-white/10 hover:text-white"
        }`}
    >
      <span>{text}</span>
      {icon}
    </Link>
  );
}
