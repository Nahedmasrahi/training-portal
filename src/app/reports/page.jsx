"use client";

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import {
  UploadCloud,
  Home,
  BarChart2,
  FileText,
  Calendar,
  ClipboardList,
  Star,
  User,
  Settings,
  LogOut,
  File,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import Image from "next/image";

import SidebarItem from "@/components/SidebarItem";

export default function ReportsPage() {

  const router = useRouter();

  const [file, setFile] = useState(null);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [reports, setReports] = useState([]);

  useEffect(() => {

    const savedReports =
      JSON.parse(localStorage.getItem("reports")) || [];

    setReports(savedReports);

  }, []);

  const handleFileSelect = (e) => {

    setFile(e.target.files[0]);

  };

  const handleDrop = (e) => {

    e.preventDefault();

    setFile(e.dataTransfer.files[0]);

  };

  const handleSubmit = () => {

    if (!file || !title || !description) {
      return;
    }

    const now = new Date();

    const newReport = {

      id: Date.now(),

      title,

      description,

      fileName: file.name,

      fileUrl: URL.createObjectURL(file),

      status: "pending",

      date: now.toLocaleDateString("en-GB"),

      time: now.toLocaleTimeString("en-US"),

    };

    const updatedReports = [...reports, newReport];

    setReports(updatedReports);

    localStorage.setItem(
      "reports",
      JSON.stringify(updatedReports)
    );

    setTitle("");

    setDescription("");

    setFile(null);

  };

  const getStatus = (status) => {

    switch (status) {

      case "accepted":
        return {
          text: "معتمد",
          className:
            "bg-green-100 text-green-700",
          icon: <CheckCircle2 size={15} />,
        };

      case "rejected":
        return {
          text: "مرفوض",
          className:
            "bg-red-100 text-red-700",
          icon: <XCircle size={15} />,
        };

      default:
        return {
          text: "قيد المراجعة",
          className:
            "bg-yellow-100 text-yellow-700",
          icon: <Clock3 size={15} />,
        };
    }
  };

  return (

    <div
      className="min-h-screen bg-[#F7F7F7] flex"
      dir="rtl"
    >

      {/* ================= Sidebar ================= */}
      <aside className="fixed top-0 right-0 h-full w-56 bg-[#083427] text-white flex flex-col z-50">

        {/* Logo */}
        <div className="py-8 px-4 flex flex-col items-center space-y-3">

          <Image
            src="/logo.png"
            width={60}
            height={60}
            alt="logo"
          />

          <h2 className="text-xl font-bold">
            بوابة التدريب
          </h2>

        </div>

        <div className="border-b border-white/20 w-full"></div>

        {/* Menu */}
        <div className="bg-[#0C4A37] flex-1 px-4 py-4 space-y-2 text-[15px]">

          <SidebarItem
            icon={<Home size={18} />}
            text="الصفحة الرئيسية"
            href="/dashboard"
          />

          <SidebarItem
            icon={<BarChart2 size={18} />}
            text="الحضور والغياب"
            href="/attendance"
          />

          <SidebarItem
            icon={<FileText size={18} />}
            text="رفع التقارير"
            active
            href="/reports"
          />

          <SidebarItem
            icon={<Calendar size={18} />}
            text="البرامج والدورات"
            href="/courses"
          />

          <SidebarItem
            icon={<ClipboardList size={18} />}
            text="الإستبيانات"
            href="/surveys"
          />

          <SidebarItem
            icon={<Star size={18} />}
            text="التقييمات"
            href="/evaluations"
          />

          <SidebarItem
            icon={<Calendar size={18} />}
            text="التقويم"
            href="/calendar"
          />

          <SidebarItem
            icon={<User size={18} />}
            text="الملف الشخصي"
            href="/profile"
          />

          <SidebarItem
            icon={<Settings size={18} />}
            text="الإعدادات"
            href="/settings"
          />

          {/* Logout */}
          <button
  onClick={() => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    router.push("/login");

  }}
  className="w-full flex justify-end items-center gap-3 px-3 py-2 rounded-md transition text-white/80 hover:text-white hover:bg-white/10 mt-6"
>

  <span>تسجيل الخروج</span>

  <LogOut size={18} />

</button>

        </div>

      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 px-10 py-8 mr-56">

        <h1 className="text-4xl font-extrabold text-center mb-12">

          رفع التقارير

        </h1>

        {/* ================= Upload Section ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* رفع الملف */}
          <div
            onDrop={handleDrop}
            onDragOver={(e) =>
              e.preventDefault()
            }
            className="
              bg-white
              p-10
              rounded-3xl
              shadow-lg
              border
            "
          >

            <div className="border-2 border-dashed border-green-600 rounded-2xl p-12 text-center">

              <UploadCloud
                size={95}
                className="text-green-500 mx-auto"
              />

              <p className="mt-5 text-3xl font-bold text-gray-900">

                أنزل الملف هنا

              </p>

              <p className="text-2xl font-bold my-3">
                أو
              </p>

              <label className="inline-block bg-green-700 text-white py-3 px-16 rounded-xl cursor-pointer hover:bg-green-800 transition text-lg font-semibold">

                إرفاق ملف

                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileSelect}
                />

              </label>

              {file && (

                <p className="mt-5 text-green-700 font-semibold text-lg">

                  ✔ {file.name}

                </p>

              )}

            </div>

          </div>

          {/* معلومات الملف */}
          <div className="bg-white p-10 rounded-3xl shadow-lg">

            <div className="space-y-6">

              <div>

                <label className="block mb-3 text-xl font-bold">

                  عنوان الملف المرفق

                </label>

                <input
                  type="text"
                  value={title}
                  onChange={(e) =>
                    setTitle(e.target.value)
                  }
                  placeholder="عنوان الملف المرفق"
                  className="
                    w-full
                    border
                    border-gray-300
                    rounded-xl
                    p-4
                    text-lg
                    focus:outline-none
                    focus:ring-2
                    focus:ring-green-700/30
                  "
                />

              </div>

              <div>

                <label className="block mb-3 text-xl font-bold">

                  وصف

                </label>

                <textarea
                  value={description}
                  onChange={(e) =>
                    setDescription(e.target.value)
                  }
                  placeholder="وصف الملف المرفق"
                  rows="7"
                  className="
                    w-full
                    border
                    border-gray-300
                    rounded-xl
                    p-4
                    text-lg
                    resize-none
                    focus:outline-none
                    focus:ring-2
                    focus:ring-green-700/30
                  "
                ></textarea>

              </div>

            </div>

          </div>

        </div>

        {/* زر الإرسال */}
        <div className="text-center mt-10">

          <button
            onClick={handleSubmit}
            className="
              bg-green-700
              text-white
              px-24
              py-3
              rounded-xl
              text-xl
              font-bold
              hover:bg-green-800
              transition
              shadow-md
            "
          >

            إرسال

          </button>

        </div>

        {/* ================= Reports ================= */}
        <div className="max-w-4xl mx-auto mt-16">

          <h2 className="text-5xl font-extrabold mb-8 text-right">

            تقاريري

          </h2>

          <div className="space-y-5">

            {reports.map((report) => {

              const status =
                getStatus(report.status);

              return (

                <div
                  key={report.id}
                  className="
                    bg-white
                    rounded-2xl
                    border
                    shadow-sm
                    p-5
                    flex
                    items-center
                    justify-between
                  "
                >

                  {/* Right */}
                  <div className="flex items-center gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center shadow-inner">

                      <File
                        size={30}
                        className="text-gray-800"
                      />

                    </div>

                    <div className="text-right">

                      <h3 className="text-2xl font-bold text-gray-900">

                        {report.title}

                      </h3>

                      <p className="text-gray-500 mt-1">

                        {report.description}

                      </p>

                      <div className="flex items-center gap-3 text-sm text-gray-500 mt-2 justify-end">

                        <span>
                          {report.date}
                        </span>

                        <span>
                          •
                        </span>

                        <span>
                          {report.time}
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* Left */}
                  <div className="flex flex-col items-start gap-4">

                    <div
                      className={`
                        flex items-center gap-2
                        px-4 py-1 rounded-lg text-sm font-bold
                        ${status.className}
                      `}
                    >

                      {status.icon}

                      {status.text}

                    </div>

                    <button
                      onClick={() =>
                        router.push(`/reports/${report.id}`)
                      }
                      className="
                        bg-green-700
                        hover:bg-green-800
                        text-white
                        px-8 py-2
                        rounded-lg
                        text-sm
                        font-semibold
                        transition
                      "
                    >

                      عرض التقرير

                    </button>

                  </div>

                </div>

              );
            })}

          </div>

        </div>

      </main>

    </div>
  );
}