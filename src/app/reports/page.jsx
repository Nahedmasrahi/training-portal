"use client";

import { useState } from "react";
import { UploadCloud, Home, BarChart2, FileText, Calendar, ClipboardList, Star, User, Settings, LogOut } from "lucide-react";
import Image from "next/image";
import SidebarItem from "@/components/SidebarItem";

export default function ReportsPage() {
  const [file, setFile] = useState(null);

  const handleFileSelect = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7] flex" dir="rtl">

      {/* ================= Sidebar ================= */}
      <aside className="fixed top-0 right-0 h-full w-56 bg-[#083427] text-white flex flex-col z-50">
        
        {/* Logo */}
        <div className="py-8 px-4 flex flex-col items-center space-y-3">
          <Image src="/logo.png" width={60} height={60} alt="logo" />
          <h2 className="text-xl font-bold">بوابة التدريب</h2>
        </div>

        <div className="border-b border-white/20 w-full"></div>

        {/* Menu */}
        <div className="bg-[#0C4A37] flex-1 px-4 py-4 space-y-2 text-[15px]">

          <SidebarItem icon={<Home size={18} />} text="الصفحة الرئيسية" href="/dashboard" />
          <SidebarItem icon={<BarChart2 size={18} />} text="الحضور والغياب" href="/attendance" />
          <SidebarItem icon={<FileText size={18} />} text="رفع التقارير" active href="/reports" />
          <SidebarItem icon={<Calendar size={18} />} text="البرامج والدورات" href="/courses" />
          <SidebarItem icon={<ClipboardList size={18} />} text="الإستبيانات" href="/surveys" />
          <SidebarItem icon={<Star size={18} />} text="التقييمات" href="/evaluations" />
          <SidebarItem icon={<Calendar size={18} />} text="التقويم" href="/calendar" />
          <SidebarItem icon={<User size={18} />} text="الملف الشخصي" href="/profile" />
          <SidebarItem icon={<Settings size={18} />} text="الإعدادات" href="/settings" />

          {/* Logout */}
          <button
            className="
              flex items-center justify-end
              text-white/80 hover:text-white
              text-[15px]
              px-2 py-2 rounded-md
              hover:bg-white/10 transition w-full
            "
          >
            <span>تسجيل الخروج</span>
            <LogOut size={18} />
          </button>

        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 px-10 py-8 mr-56">

        <h1 className="text-3xl font-bold text-center mb-10">
          رفع الدورات و المهام
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* رفع الملف */}
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className="bg-white p-10 rounded-2xl shadow-md border-2 border-dashed border-green-600 text-center"
          >
            <UploadCloud size={90} className="text-green-600 mx-auto" />

            <p className="mt-4 text-lg font-semibold">أسقط الملف هنا</p>
            <p className="text-gray-600 my-2">أو</p>

            <label className="block bg-green-700 text-white py-2 px-6 rounded-lg cursor-pointer hover:bg-green-800 transition w-40 mx-auto">
              إرفاق ملف
              <input type="file" className="hidden" onChange={handleFileSelect} />
            </label>

            {file && (
              <p className="mt-4 text-green-700 font-semibold">
                ✔ تم اختيار الملف: {file.name}
              </p>
            )}
          </div>

          {/* بيانات الملف */}
          <div className="bg-white p-10 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold mb-6">معلومات الملف</h2>

            <label className="block mb-3 font-semibold">العنوان</label>
            <input
              type="text"
              placeholder="عنوان الملف المرفق"
              className="w-full border border-gray-300 rounded-md p-3 mb-5 focus:outline-green-700"
            />

            <label className="block mb-3 font-semibold">وصف</label>
            <textarea
              placeholder="وصف الملف المرفق"
              rows="4"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-green-700"
            ></textarea>
          </div>

        </div>

        <div className="text-center mt-12">
          <button className="bg-green-700 text-white px-16 py-3 rounded-lg text-lg hover:bg-green-800 transition">
            إرسال
          </button>
        </div>

      </main>
    </div>
  );
}
