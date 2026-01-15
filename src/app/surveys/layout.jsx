"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Home,
  BarChart2,
  FileText,
  CalendarDays,
  ClipboardList,
  Star,
  User,
  Settings,
  LogOut,
} from "lucide-react";

/* ===================== بيانات القائمة ===================== */
const menuItems = (router) => [
  {
    text: "الصفحة الرئيسية",
    icon: <Home size={18} />,
    onClick: () => router.push("/dashboard"),
  },
  {
    text: "الحضور والغياب",
    icon: <BarChart2 size={18} />,
    onClick: () => router.push("/attendance"),
  },
  {
    text: "رفع التقارير",
    icon: <FileText size={18} />,
    onClick: () => router.push("/reports"),
  },
  {
    text: "البرامج والدورات",
    icon: <CalendarDays size={18} />,
    onClick: () => router.push("/courses"),
  },
  {
    text: "الإستبيانات",
    icon: <ClipboardList size={18} />,
    onClick: () => router.push("/surveys"),
    active: true,
  },
  {
    text: "التقييمات",
    icon: <Star size={18} />,
    onClick: () => router.push("/evaluations"),
  },
  {
    text: "التقويم",
    icon: <CalendarDays size={18} />,
    onClick: () => router.push("/calendar"),
  },
  {
    text: "الملف الشخصي",
    icon: <User size={18} />,
    onClick: () => router.push("/profile"),
  },
  {
    text: "الإعدادات",
    icon: <Settings size={18} />,
    onClick: () => router.push("/settings"),
  },
];

export default function SurveysLayout({ children }) {
  const router = useRouter();

  return (
    <div className="flex" dir="rtl">
      {/* ===================== Sidebar ===================== */}
      <aside className="fixed top-0 right-0 h-full w-64 bg-[#083427] text-white flex flex-col z-50">
        <div className="py-8 px-4 flex flex-col items-center space-y-3">
          <Image src="/logo.png" width={60} height={60} alt="logo" />
          <h2 className="text-xl font-bold">بوابة التدريب</h2>
        </div>

        <div className="border-b border-white/20 w-full" />

        <div className="bg-[#0C4A37] flex-1 px-4 py-4 space-y-2 text-[15px]">
          {menuItems(router).map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className={`w-full flex justify-end items-center gap-3 px-3 py-2 rounded-md transition
                ${
                  item.active
                    ? "bg-white/20 text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              <span>{item.text}</span>
              {item.icon}
            </button>
          ))}

          <button className="w-full flex justify-end items-center gap-3 px-3 py-2 rounded-md transition text-white/80 hover:text-white hover:bg-white/10 mt-5">
            <span>تسجيل الخروج</span>
            <LogOut size={18} />
          </button>
        </div>
      </aside>

      {/* ===================== المحتوى ===================== */}
      <main className="mr-64 w-full min-h-screen bg-[#F7F7F7] px-10 py-8">
        {children}
      </main>
    </div>
  );
}
