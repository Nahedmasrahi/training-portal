"use client";

import Image from "next/image";
import { useRouter, useParams, usePathname } from "next/navigation";
import { Calendar, Clock, MapPin, Award, FileText } from "lucide-react";
import { useRef, useState } from "react";

export default function CourseFilesPage() {
  const router = useRouter();
  const { slug } = useParams();
  const pathname = usePathname();

  const isContent = pathname === `/courses/${slug}`;
  const isFiles = pathname === `/courses/${slug}/files`;

  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  return (
    <>
      {/* ===== كارد تفاصيل البرنامج ===== */}
      <div className="bg-white rounded-xl shadow p-6 flex gap-6 mb-8">
        <div className="w-1/3 relative h-48">
          <Image
            src="/blood.jpg"
            alt="course"
            fill
            className="rounded-lg object-cover"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">برنامج سحب الدم</h1>

          <div className="space-y-2 text-gray-700">
            <p className="flex items-center gap-2">
              <Calendar size={18} /> 2026/03/06
            </p>
            <p className="flex items-center gap-2">
              <Clock size={18} /> 10:00 صباحًا
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={18} /> المستشفى الجامعي
            </p>
            <p className="flex items-center gap-2">
              <Award size={18} /> توجد شهادة حضور
            </p>
          </div>

          <button className="mt-4 bg-green-700 text-white px-6 py-2 rounded-lg">
            التسجيل الآن
          </button>
        </div>
      </div>

      {/* ===== Tabs ===== */}
      <div className="flex gap-8 border-b mb-8">
        <button
          onClick={() => router.push(`/courses/${slug}`)}
          className={`pb-3 font-semibold ${
            isContent
              ? "border-b-2 border-green-700 text-green-700"
              : "text-gray-500 hover:text-green-700"
          }`}
        >
          محتوى البرنامج
        </button>

        <button
          onClick={() => router.push(`/courses/${slug}/files`)}
          className={`pb-3 font-semibold ${
            isFiles
              ? "border-b-2 border-green-700 text-green-700"
              : "text-gray-500 hover:text-green-700"
          }`}
        >
          إرفاق ملفات
        </button>
      </div>

      {/* ===== كارد إرفاق الملفات ===== */}
      <div className="bg-white rounded-xl shadow p-6 space-y-6">
        <h2 className="text-xl font-bold">إرفاق الملفات</h2>

        {/* واجبات */}
        <div className="flex items-center gap-4 border rounded-lg p-4">
          <FileText size={32} className="text-gray-500" />
          <div>
            <p className="font-semibold">الواجب الأول</p>
            <p className="text-sm text-gray-500">
              موعد التسليم: 2025/12/31 – 11:59pm
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 border rounded-lg p-4">
          <FileText size={32} className="text-gray-500" />
          <div>
            <p className="font-semibold">الواجب الثاني</p>
            <p className="text-sm text-gray-500">
              موعد التسليم: 2025/12/31 – 10:59pm
            </p>
          </div>
        </div>

        {/* ===== رفع ملف فعلي ===== */}
        <div className="border-dashed border-2 rounded-lg p-8 text-center">
          <p className="mb-4 text-gray-500">
            {fileName ? `📄 ${fileName}` : "أنزل الملف هنا أو اختره من جهازك"}
          </p>

          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={(e) => {
              if (e.target.files.length > 0) {
                setFileName(e.target.files[0].name);
              }
            }}
          />

          <button
            onClick={() => fileInputRef.current.click()}
            className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800"
          >
            إرفاق ملف
          </button>
        </div>

        {/* زر الإرسال بالوسط */}
        <div className="flex justify-center">
          <button
            disabled={!fileName}
            className={`px-10 py-2 rounded-lg text-white
              ${
                fileName
                  ? "bg-green-700 hover:bg-green-800"
                  : "bg-gray-400 cursor-not-allowed"
              }
            `}
          >
            إرسال
          </button>
        </div>
      </div>
    </>
  );
}

