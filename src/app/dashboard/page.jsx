"use client";
import { Bell, UserCircle } from "lucide-react";

import { useState } from "react";
import Image from "next/image";
import {
  Home,
  Calendar,
  FileText,
  BarChart2,
  User,
  Settings,
  LogOut,
  ClipboardList,
  Star,
 
} from "lucide-react";

export default function Dashboard() {
  
  const user = {
    name: "ياسر",
  };

  const upcomingEvents = [
    { title: "لقاء تعريفي", time: "غداً – 10:00 صباحاً" },
    { title: "ورشة تطوير مهارات", time: "5 ديسمبر – 2:00 ظهراً" },
    { title: "اختبار منتصف البرنامج", time: "10 ديسمبر – 9:00 صباحاً" },
  ];

  const notifications = [
    { text: "لا تنسَ حضور اللقاء التعريفي غداً الساعة 10 صباحاً." },
  ];

  const programs = [
    {
      id: 1,
      title: "أساسيات سحب الدم",
      tasks: 8,
      image: "/blood.jpg",
    },
    {
      id: 2,
      title: "مقدمة في الذكاء الاصطناعي",
      tasks: 3,
      image: "/AI.jpg",
    },
    {
      id: 3,
      title: "إدارة المشاريع",
      tasks: 6,
      image: "/PM.jpg",
    },
  ];

  const attendance = 6; 

  return (
    <div className="flex flex-row-reverse w-full min-h-screen bg-[#F7F7F7]">

      

      
<main className="flex-1 p-10" dir="rtl">

  
  <div className="flex justify-between items-center mb-4">
    <div>
      <h1 className="text-3xl font-bold">مرحباً {user.name}</h1>
      <p className="text-gray-600 mt-1">
        كن على اطلاع بكل ما يحدث في جامعتك
      </p>
    </div>

   <div className="flex items-center gap-4">
  <UserCircle size={32} className="text-gray-700 cursor-pointer" />
  <Bell size={26} className="text-gray-700 cursor-pointer" />
</div>



  </div>


  {/* ================= الصف الأول ================= */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">


{/* الحضور والغياب */}
    <div className="bg-white shadow rounded-xl p-6 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">الحضور والغياب</h2>

      <div className="relative w-32 h-32">
        <svg className="w-full h-full">
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            stroke="#E5E7EB"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            stroke="#0C4A37"
            strokeWidth="10"
            fill="none"
            strokeDasharray={`${attendance * 2.8} 300`}
            strokeLinecap="round"
          />
        </svg>

        <p className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
          {attendance}%
        </p>
      </div>

      <p className="mt-2 text-gray-600">نسبة الغياب</p>

      <button className="mt-3 bg-[#0C4A37] text-white px-4 py-1 rounded-lg">
        عرض السجل
      </button>
    </div>


    {/* اللقاء التعريفي */}
    <div className="bg-white shadow rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">اللقاء التعريفي</h2>

      <div className="flex gap-4">
        

        <div className="text-sm space-y-1">
          <p>انضم إلى اللقاء التعريفي لمعرفة تفاصيل البرنامج</p>
          <p>2026 / 03 / 10</p>
          <p>9:00 صباحاً</p>
          <p>مسرح كلية العلوم أو عبر الزوم</p>

          <button className="mt-2 bg-[#0C4A37] text-white px-6 py-2 rounded-lg">
            الدخول للقاء
          </button>
        </div>
<div className="relative w-48 h-32 rounded-lg overflow-hidden">
          <Image src="/intro.jpeg" alt="intro" fill className="object-cover" />
        </div>




      </div>
    </div>

    



  </div>









{/* ================= الصف الثاني ================= */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

  {/* البرامج المسجلة (يمين – طويلة) */}
  <div className="bg-white shadow rounded-xl p-6">
    <h2 className="text-xl font-bold mb-4">البرامج المسجلة</h2>

    <div className="space-y-4">
      {programs.map((item) => (
        <div
          key={item.id}
          className="flex gap-4 items-center border-b pb-4 last:border-none"
        >
          <div className="relative w-24 h-20 rounded-lg overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 text-sm">
            <p className="font-bold">{item.title}</p>
            <p className="text-gray-600">
              عدد المهام المتبقية: {item.tasks}
            </p>

            <button className="mt-2 bg-[#0C4A37] text-white px-3 py-1 rounded-lg text-xs">
              الانتقال للبرنامج
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* يسار: الأحداث + الإشعارات */}
  <div className="flex flex-col gap-6">

    {/* الأحداث القادمة */}
    <div className="bg-white shadow rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">الأحداث القادمة</h2>

      {upcomingEvents.map((e, i) => (
        <div key={i} className="border-b py-2 last:border-none">
          <p className="font-semibold">{e.title}</p>
          <p className="text-sm text-gray-600">{e.time}</p>
        </div>
      ))}

      <button className="mt-4 bg-[#0C4A37] text-white px-4 py-1 rounded-lg">
        عرض الأحداث
      </button>
    </div>

    {/* الإشعارات (تحت الأحداث مباشرة) */}
    <div className="bg-white shadow rounded-xl p-6">
      <h2 className="text-xl font-bold mb-2">الإشعارات</h2>

      <p className="text-gray-700">
        لا تنسَ حضور اللقاء التعريفي غداً الساعة 10 صباحاً.
      </p>

      <button className="mt-5 bg-[#0C4A37] text-white px-4 py-1 rounded-lg">
        عرض الإشعارات
      </button>
    </div>

  </div>
</div>



</main>

    </div>
  );
}

// ================= Sidebar Item =================
function SidebarItem({ icon, text, active }) {
  return (
    <div
      className={`flex items-center justify-end gap-3 p-2 rounded-lg cursor-pointer
      ${active ? "bg-white/20 font-bold" : "hover:bg-white/10"}
      `}
    >
      <span>{text}</span>
      {icon}
    </div>
  );
}
