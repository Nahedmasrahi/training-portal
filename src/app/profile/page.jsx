"use client";
import { Camera } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";
import {
  Home,
  BarChart2,
  FileText,
  Calendar,
  ClipboardList,
  Star,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import SidebarItem from "@/components/SidebarItem";

export default function ProfilePage() {
  const [profileImage, setProfileImage] = useState("/user.png");
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setProfileImage(URL.createObjectURL(file));
  };

  return (
    <div className="flex flex-row-reverse w-full min-h-screen bg-[#F7F7F7]" dir="rtl">

      {/* ================= Sidebar ================= */}
      <aside className="fixed top-0 right-0 h-full w-56 bg-[#083427] text-white flex flex-col z-50">
        <div className="py-8 px-4 flex flex-col items-center space-y-3">
          <Image src="/logo.png" width={60} height={60} alt="logo" />
          <h2 className="text-xl font-bold">بوابة التدريب</h2>
        </div>

        <div className="border-b border-white/20 w-full"></div>

        <div className="bg-[#0C4A37] flex-1 px-4 py-4 space-y-2 text-[15px]">
          <SidebarItem icon={<Home size={18} />} text="الصفحة الرئيسية" href="/dashboard" />
          <SidebarItem icon={<BarChart2 size={18} />} text="الحضور والغياب" href="/attendance" />
          <SidebarItem icon={<FileText size={18} />} text="رفع التقارير" href="/reports" />
          <SidebarItem icon={<Calendar size={18} />} text="البرامج والدورات" href="/courses" />
          <SidebarItem icon={<ClipboardList size={18} />} text="الإستبيانات" href="/surveys" />
          <SidebarItem icon={<Star size={18} />} text="التقييمات" href="/evaluations" />
          <SidebarItem icon={<Calendar size={18} />} text="التقويم" href="/calendar" />
          <SidebarItem
  icon={<User size={18} />}
  text="الملف الشخصي"
  href="/profile"
  active={true}
/>

          <SidebarItem icon={<Settings size={18} />} text="الإعدادات" href="/settings" />

          <button className="flex items-center justify-end text-white/80 hover:text-white px-2 py-2 rounded-md hover:bg-white/10 transition w-full">
            <span>تسجيل الخروج</span>
            <LogOut size={18} />
          </button>
        </div>
      </aside>

      {/* ================= PROFILE CONTENT ================= */}
      <div className="min-h-screen flex-1 bg-[#F7F7F7] px-10 py-8 mr-64">

        {/* ===== العنوان والتحية ===== */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold"> </h1>
          <p className="text-gray-600"></p>

         {/* ====== صورة البروفايل مع زر التغيير ====== */}
<div className="flex justify-center mt-6 relative">
  <Image
    src={profileImage}
    width={120}
    height={120}
    alt="profile image"
    className="w-32 h-32 rounded-full border shadow object-cover"
  />


            {/* زر الكاميرا */}
            <button
              onClick={() => fileInputRef.current.click()}
              className="absolute bottom-0 right-[42%] bg-gray-200 p-2 rounded-full shadow cursor-pointer hover:bg-gray-300 transition"
            >
              <Camera size={18} className="text-gray-700" />
            </button>

            {/* input مخفي */}
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        </div>

        {/* ====== جدول المعلومات ====== */}
        <div className="bg-white rounded-xl shadow border overflow-hidden max-w-3xl mx-auto">

          <div className="bg-gray-200 p-4 font-bold text-lg">
            المعلومات الأساسية
          </div>

          <div className="p-4 border-b">
            <p className="text-gray-600 text-sm">الاسم الكامل</p>
            <p className="text-black text-md mt-1">ياسر عبدالعزيز علي الموسى</p>
          </div>

          <div className="p-4 border-b">
            <p className="text-gray-600 text-sm">الرقم الجامعي</p>
            <p className="text-black text-md mt-1">202201227</p>
          </div>

          <div className="p-4 border-b">
            <p className="text-gray-600 text-sm">البريد الجامعي</p>
            <p className="text-black text-md mt-1">202201227@stu.jazanu.edu.sa</p>
          </div>

          <div className="bg-gray-200 p-4 font-bold text-lg">
            معلومات التواصل
          </div>

          <div className="p-4">
            <p className="text-gray-600 text-sm">رقم الهاتف</p>
            <p className="text-black text-md mt-1">+966 55 714 9951</p>
          </div>

        </div>
      </div>
    </div>
  );
}
