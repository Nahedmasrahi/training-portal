"use client";

import { Bell, UserCircle } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  Home,
  ClipboardList,
  FileText,
  BarChart2,
  Star,
  Calendar,
  
  User,
  Settings,
  LogOut,
} from "lucide-react";

export default function AttendancePage() {
  const [activeTab, setActiveTab] = useState("checkin");
  const router = useRouter();

  // ======================= MENU ITEMS =======================
  const menuItems = [
    {
      icon: <Home size={18} />,
      text: "الصفحة الرئيسية",
      active: false,
      onClick: () => router.push("/dashboard"),
    },
    {
      icon: <BarChart2 size={18} />,
      text: "الحضور والغياب",
      active: true,
      onClick: () => router.push("/attendance"),
    },
    {
      icon: <FileText size={18} />,
      text: "رفع التقارير",
      onClick: () => router.push("/reports"),
    },
    {
      icon: <Calendar size={18} />,
      text: "البرامج والدورات",
      onClick: () => router.push("/courses"),
    },
    {
      icon: <ClipboardList size={18} />,
      text: "الإستبيانات",
      onClick: () => router.push("/surveys"),
    },
    {
      icon: <Star size={18} />,
      text: "التقييمات",
      onClick: () => router.push("/evaluations"),
    },
    {
      icon: <Calendar size={18} />,
      text: "التقويم",
      onClick: () => router.push("/calendar"),
    },
    {
      icon: <User size={18} />,
      text: "الملف الشخصي",
      onClick: () => router.push("/profile"),
    },
    {
      icon: <Settings size={18} />,
      text: "الإعدادات",
      onClick: () => router.push("/settings"),
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F8] font-[Cairo] flex" dir="rtl">

      {/* ===================== SIDEBAR ===================== */}
      <aside className="fixed top-0 right-0 h-full w-64 bg-[#083427] text-white flex flex-col z-50">

        {/* Logo */}
        <div className="py-8 px-4 flex flex-col items-center space-y-3">
          <Image src="/logo.png" width={60} height={60} alt="logo" />
          <h2 className="text-xl font-bold">بوابة التدريب</h2>
        </div>

        <div className="border-b border-white/20 w-full"></div>

        {/* MENU */}
        <div className="bg-[#0C4A37] flex-1 px-4 py-4 space-y-2 text-[15px]">

          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className={`w-full flex justify-end items-center gap-3 px-3 py-2 rounded-md transition 
                ${
                  item.active
                    ? "bg-white/20 text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
            >
              <span>{item.text}</span>
              {item.icon}
            </button>
          ))}

          {/* Logout */}
          <button className="w-full flex justify-end items-center gap-3 px-3 py-2 rounded-md transition text-white/80 hover:text-white hover:bg-white/10 mt-5">
            <span>تسجيل الخروج</span>
            <LogOut size={18} />
          </button>
        </div>
      </aside>

      {/* ===================== MAIN CONTENT ===================== */}
      <main className="flex-1 px-10 py-6 mr-64">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">مرحبًا ياسر</h2>
            <p className="text-gray-600 text-lg mt-1">
              كن على اطلاع بكل ما يحدث في جامعتك
            </p>
          </div>

          <div className="flex items-center gap-4">
  <UserCircle size={32} className="text-gray-700 cursor-pointer" />
  <Bell size={28} className="text-gray-700 cursor-pointer" />
</div>

        </div>

        {/* Title */}
        <h3 className="text-3xl font-bold text-center mt-12">الحضور و الإنصراف</h3>

        {/* Action Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            className={`px-10 py-3 rounded-lg border text-lg 
              ${
                activeTab === "checkin"
                  ? "bg-[#0C8A4A] text-white"
                  : "border-[#0C8A4A] text-[#0C8A4A]"
              }`}
            onClick={() => setActiveTab("checkin")}
          >
            تسجيل الحضور
          </button>

          <button
            className={`px-10 py-3 rounded-lg border text-lg 
              ${
                activeTab === "checkout"
                  ? "bg-[#0C8A4A] text-white"
                  : "border-[#0C8A4A] text-[#0C8A4A]"
              }`}
            onClick={() => setActiveTab("checkout")}
          >
            تسجيل الإنصراف
          </button>
        </div>

        {/* Student Card */}
        <div className="bg-white shadow-md rounded-2xl p-10 mx-auto mt-10 max-w-3xl">
          <div className="text-center">
            <p className="text-xl font-semibold">ياسر عبدالعزيز علي الموسى</p>
            <p className="text-lg mt-1">202201227</p>
            <p className="text-lg mt-3 font-medium">جهة التدريب</p>
            <p className="text-lg mt-1">مشرف التدريب: فهد خالد</p>
          </div>

          {/* Pie Chart */}
          <div className="flex justify-center mt-8">
            <div className="relative">
              <svg width="160" height="160">
                <circle cx="80" cy="80" r="70" stroke="#F4D7B5" strokeWidth="14" fill="none" />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="#F79E1B"
                  strokeWidth="14"
                  fill="none"
                  strokeDasharray="440"
                  strokeDashoffset={440 - (440 * 14) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute top-1/2 left-1/2 text-3xl font-bold -translate-x-1/2 -translate-y-1/2">
                14%
              </span>
            </div>
          </div>

          <p className="text-center text-lg mt-3 font-semibold">نسبة الغياب</p>
        </div>

        {/* Attendance Table */}
        <h3 className="text-3xl font-bold text-center mt-16">سجل الحضور و الغياب</h3>

        <div className="bg-white shadow-md rounded-xl p-8 mt-6">
          <table className="w-full text-lg">
            <thead>
              <tr className="border-b">
                <th className="py-3">التاريخ</th>
                <th className="py-3">اليوم</th>
                <th className="py-3">الحالة</th>
              </tr>
            </thead>

            <tbody>
              <tr className="text-center border-b">
                <td className="py-4">2025-01-01</td>
                <td>الأحد</td>
                <td className="text-green-700 font-bold">حضور</td>
              </tr>

              <tr className="text-center border-b">
                <td className="py-4">2025-01-02</td>
                <td>الاثنين</td>
                <td className="text-red-600 font-bold">غياب</td>
              </tr>

              <tr className="text-center">
                <td className="py-4">2025-01-03</td>
                <td>الثلاثاء</td>
                <td className="text-green-700 font-bold">حضور</td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}
