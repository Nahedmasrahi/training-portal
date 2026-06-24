"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  Bell,
  UserCircle,
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
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("checkin");
  const [showModal, setShowModal] = useState(false);

  const [attendanceList, setAttendanceList] = useState([]);
  const [userData, setUserData] = useState(null);

  // ================== LOAD USER + ATTENDANCE ==================
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUserData(user);

    getAttendance();
  }, []);

  const getAttendance = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "https://superdivine-stephan-untaciturnly.ngrok-free.dev/api/attendance/history",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setAttendanceList(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ======================= MENU =======================
  const menuItems = [
    {
      icon: <Home size={18} />,
      text: "الصفحة الرئيسية",
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
        <div className="py-8 px-4 flex flex-col items-center space-y-3">
          <Image src="/logo.png" width={60} height={60} alt="logo" />
          <h2 className="text-xl font-bold">بوابة التدريب</h2>
        </div>

        <div className="border-b border-white/20 w-full" />

        <div className="bg-[#0C4A37] flex-1 px-4 py-4 space-y-2 text-[15px]">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className={`w-full flex justify-end items-center gap-3 px-3 py-2 rounded-md transition ${
                item.active
                  ? "bg-white/20"
                  : "hover:bg-white/10 text-white/80 hover:text-white"
              }`}
            >
              <span>{item.text}</span>
              {item.icon}
            </button>
          ))}
        </div>
      </aside>

      {/* ===================== MAIN ===================== */}
      <main className="flex-1 px-10 py-6 mr-64">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">
              مرحبًا {userData?.full_name}
            </h2>
            <p className="text-gray-600 text-lg mt-1">
              كن على اطلاع بكل ما يحدث في جامعتك
            </p>
          </div>

          <div className="flex items-center gap-4">
            <UserCircle size={32} className="text-gray-700" />
            <Bell size={28} className="text-gray-700" />
          </div>
        </div>

        {/* TITLE */}
        <h3 className="text-3xl font-bold text-center mt-12">
          الحضور و الإنصراف
        </h3>

        {/* BUTTONS */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            className={`px-10 py-3 rounded-lg border text-lg ${
              activeTab === "checkin"
                ? "bg-[#0C8A4A] text-white"
                : "border-[#0C8A4A] text-[#0C8A4A]"
            }`}
            onClick={() => {
              setActiveTab("checkin");
              setShowModal(true);
            }}
          >
            تسجيل الحضور
          </button>

          <button
            className={`px-10 py-3 rounded-lg border text-lg ${
              activeTab === "checkout"
                ? "bg-[#0C8A4A] text-white"
                : "border-[#0C8A4A] text-[#0C8A4A]"
            }`}
            onClick={() => {
              setActiveTab("checkout");
              setShowModal(true);
            }}
          >
            تسجيل الإنصراف
          </button>
        </div>

        {/* CARD */}
        <div className="bg-white shadow-md rounded-2xl p-10 mx-auto mt-10 max-w-3xl text-center">
          <p className="text-xl font-semibold">
            ياسر عبدالعزيز علي الموسى
          </p>
          <p className="text-lg mt-1">202201227</p>

          <p className="text-lg mt-3 font-medium">جهة التدريب</p>
          <p className="text-lg mt-1">مشرف التدريب: فهد خالد</p>

          {/* CHART */}
          <div className="flex justify-center mt-8">
            <svg width="160" height="160">
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="#F4D7B5"
                strokeWidth="14"
                fill="none"
              />
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

            <span className="absolute mt-16 text-3xl font-bold">
              14%
            </span>
          </div>

          <p className="text-center text-lg mt-3 font-semibold">
            نسبة الغياب
          </p>
        </div>

        {/* TABLE */}
        <h3 className="text-3xl font-bold text-center mt-16">
          سجل الحضور و الغياب
        </h3>

        <div className="bg-white shadow-md rounded-xl p-8 mt-6">
          <table className="w-full text-lg">
            <thead>
              <tr className="border-b">
                <th className="py-4">التاريخ</th>
                <th>الحالة</th>
                <th>الإنصراف</th>
              </tr>
            </thead>

            <tbody>
              {attendanceList.map((item) => (
                <tr key={item.id} className="text-center border-b">
                  <td className="py-4">{item.date}</td>

                  <td>
                    {item.check_in_time ? (
                      <span className="text-green-700 font-bold">حضور</span>
                    ) : (
                      <span className="text-red-600 font-bold">غياب</span>
                    )}
                  </td>

                  <td>{item.check_out_time || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MODAL (بدون تغيير) */}
        {showModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[999]">
            <div className="bg-white w-[470px] rounded-2xl p-8 relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-5 left-5 text-3xl"
              >
                ×
              </button>

              <h2 className="text-3xl font-bold text-center mt-6">
                {activeTab === "checkin"
                  ? "تأكيد تسجيل الحضور"
                  : "تأكيد تسجيل الإنصراف"}
              </h2>

              <div className="flex gap-4 mt-10">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 border border-red-300 text-red-500 py-3 rounded-xl"
                >
                  إلغاء
                </button>

                <button
                  onClick={async () => {
                    try {
                      const token = localStorage.getItem("token");

                      const endpoint =
                        activeTab === "checkin"
                          ? "check-in"
                          : "check-out";

                      const response = await fetch(
                        `https://superdivine-stephan-untaciturnly.ngrok-free.dev/api/attendance/${endpoint}`,
                        {
                          method: "POST",
                          headers: {
                            Authorization: `Bearer ${token}`,
                            Accept: "application/json",
                          },
                        }
                      );

                      const data = await response.json();

                      if (response.ok) {
                        setShowModal(false);
                        getAttendance();
                      } else {
                        alert(data.message);
                      }
                    } catch (error) {
                      alert("تعذر الاتصال بالسيرفر");
                    }
                  }}
                  className="flex-1 bg-[#0C8A4A] text-white py-3 rounded-xl"
                >
                  تأكيد
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}