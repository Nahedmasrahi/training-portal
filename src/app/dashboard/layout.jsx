"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import {
  Home,
  BarChart2,
  FileText,
  ClipboardList,
  Star,
  User,
  Settings,
  CalendarDays,
  LogOut,
} from "lucide-react";

/* ===================== بيانات القائمة ===================== */
const menuItems = [
  { text: "الصفحة الرئيسية", icon: Home, path: "/dashboard" },
  { text: "الحضور والغياب", icon: BarChart2, path: "/attendance" },
  { text: "رفع التقارير", icon: FileText, path: "/reports" },
  { text: "البرامج والدورات", icon: CalendarDays, path: "/courses" },
  { text: "الإستبيانات", icon: ClipboardList, path: "/surveys" },
  { text: "التقييمات", icon: Star, path: "/evaluations" },
  { text: "التقويم", icon: CalendarDays, path: "/calendar" },
  { text: "الملف الشخصي", icon: User, path: "/profile" },
  { text: "الإعدادات", icon: Settings, path: "/settings" },
];

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#F7F7F7]" dir="rtl">

      {/* ===================== Sidebar ===================== */}
      <aside className="fixed top-0 right-0 h-full w-64 bg-[#083427] text-white flex flex-col z-50">
        {/* Logo */}
        <div className="py-8 px-4 flex flex-col items-center space-y-3">
          <Image src="/logo.png" width={60} height={60} alt="logo" />
          <h2 className="text-xl font-bold">بوابة التدريب</h2>
        </div>

        <div className="border-b border-white/20 w-full" />

        {/* Menu */}
        <div className="bg-[#0C4A37] flex-1 px-4 py-4 space-y-2 text-[15px]">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;

            return (
              <button
                key={index}
                onClick={() => router.push(item.path)}
                className={`w-full flex justify-end items-center gap-3 px-3 py-2 rounded-md transition
                  ${
                    isActive
                      ? "bg-white/20 text-white font-semibold"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                <span>{item.text}</span>
                <Icon size={18} />
              </button>
            );
          })}

          {/* Logout */}
          <button className="w-full flex justify-end items-center gap-3 px-3 py-2 rounded-md transition text-white/80 hover:text-white hover:bg-white/10 mt-6">
            <span>تسجيل الخروج</span>
            <LogOut size={18} />
          </button>
        </div>
      </aside>

      {/* ===================== Content ===================== */}
      <main className="flex-1 mr-64 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
