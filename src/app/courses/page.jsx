"use client";

import Link from "next/link";
import Image from "next/image";


import { useState } from "react";
import {
  ArrowLeft,
  Calendar,
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
import { useRouter } from "next/navigation";

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
    active: true,
  },
  {
    text: "الإستبيانات",
    icon: <ClipboardList size={18} />,
    onClick: () => router.push("/surveys"),
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

/* ===================== بيانات البرامج ===================== */

const suggestedCourses = [
  {
    title: "الإسعافات الأولية",
    desc: "أساسيات التعامل مع الإصابات وإرشادات وقائية.",
    slug: "first-aid",
    type: "حضوري",
    hours: 3,
    date: "2026/02/04",
    image: "/firstaid.jpg",
  },
  {
    title: "أساليب مكافحة العدوى",
    slug: "infection-control",
    desc: "تعلم أحدث الإرشادات الوقائية والطرق لتقليل انتشار العدوى.",
    type: "عن بعد",
    hours: 5,
    date: "2026/03/21",
    image: "/infection.jpg",
  },
  {
    title: "مقدمة في الذكاء الاصطناعي",
    slug: "ai",
    desc: "تعرف على أساسيات الذكاء الاصطناعي وتطبيقاته الحديثة.",
    type: "حضوري",
    hours: 10,
    date: "2026/03/03",
    image: "/AI.jpg",
  },
  {
    title: "أساسيات سحب الدم",
     slug: "blood",
    desc: "برنامج تدريبي يشمل الأساليب الصحية لإجراءات سحب الدم.",
    type: "حضوري",
    hours: 7,
    date: "2026/01/12",
    image: "/blood.jpg",
  },
];

const latestCourses = [
  {
    title: "ريادة الأعمال",
    type: "عن بعد",
    hours: 6,
    date: "2026/05/10",
    image: "/business.jpg",
  },
  {
    title: "اسم البرنامج",
    type: "حضوري",
    hours: 4,
    date: "2026/03/02",
    image: "/program.jpg",
  },
  {
    title: "أساسيات الرسم الهندسي",
    type: "حضوري",
    hours: 8,
    date: "2026/08/19",
    image: "/design.jpg",
  },
  {
    title: "إدارة المشاريع",
    type: "عن بعد",
    hours: 5,
    date: "2026/06/29",
    image: "/PM.jpg",
  },
];

/* ===================== كرت البرنامج ===================== */

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-72 border hover:shadow-lg transition">

      <div className="relative w-full h-40">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
        <span className="absolute top-2 right-2 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
          {course.type}
        </span>
      </div>

      <div className="p-4 text-right">
        <h3 className="font-bold text-lg mb-1">{course.title}</h3>

        {course.desc && (
          <p className="text-gray-600 text-sm mb-3">
            {course.desc}
          </p>
        )}

        <div className="flex justify-between text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Calendar size={16} /> {course.date}
          </span>
          <span>{course.hours} ساعات تدريبية</span>
        </div>

        <Link
          href={`/courses/${course.slug}`}
          className="block mt-4 bg-green-700 text-white text-center py-2 rounded-lg hover:bg-green-800 transition"
        >
          انضم الآن
        </Link>
      </div>
    </div>
  );
}

/* ===================== الصفحة الأساسية ===================== */

export default function CoursesPage() {
  const router = useRouter();

  return (
    <div className="flex" dir="rtl">
      {/* ============== Sidebar ============== */}
      <aside className="fixed top-0 right-0 h-full w-64 bg-[#083427] text-white flex flex-col z-50">
        <div className="py-8 px-4 flex flex-col items-center space-y-3">
          <Image src="/logo.png" width={60} height={60} alt="logo" />
          <h2 className="text-xl font-bold">بوابة التدريب</h2>
        </div>

        <div className="border-b border-white/20 w-full"></div>

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
              }`}
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

      {/* ============== محتوى الصفحة ============== */}
      <main className="min-h-screen bg-[#F7F7F7] px-10 py-8 mr-64 w-full">

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">البرامج المقترحة</h1>

          <button className="flex items-center gap-2 text-green-700 font-semibold hover:underline">
            عرض المزيد
            <ArrowLeft size={20} />
          </button>
        </div>

        <div className="flex flex-wrap gap-6">
          {suggestedCourses.map((c, i) => (
            <CourseCard key={i} course={c} />
          ))}
        </div>

        <h2 className="text-3xl font-bold mt-20 mb-6">أحدث البرامج</h2>

        <div className="flex flex-wrap gap-6">
          {latestCourses.map((c, i) => (
            <CourseCard key={i} course={c} />
          ))}
        </div>
        
      </main>
    </div>
  );
}
