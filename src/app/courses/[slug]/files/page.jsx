"use client";
import { Check } from "lucide-react";
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

  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [fileName, setFileName] = useState("");
  
  const [successAssignments, setSuccessAssignments] = useState({});

  const handleSend = (assignmentId) => {
    if (!fileName) return alert("اختر ملف أولاً قبل الإرسال!");
    setSuccessAssignments((prev) => ({
      ...prev,
      [assignmentId]: true,
    }));
  };

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

        {/* ===== الواجب الأول ===== */}
        <div
          onClick={() => {
            setSelectedAssignment(1);
            fileInputRef.current.click();
          }}
          className="flex flex-col gap-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50"
        >
          <div className="flex items-center gap-4">
            <FileText size={32} className="text-gray-500" />
            <div>
              <p className="font-semibold">الواجب الأول</p>
              <p className="text-sm text-gray-500">
                موعد التسليم: 2025/12/31 – 11:59pm
              </p>
            </div>
          </div>

          {selectedAssignment === 1 && fileName && (
            <div className="flex items-center justify-between bg-gray-100 rounded-md px-3 py-2 mt-2">
              <p className="text-sm text-gray-700 truncate">📄 {fileName}</p>
              {successAssignments[1] ? (
                <div className="text-green-700 font-semibold">
  <Check size={20} />
</div>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSend(1);
                  }}
                  className="bg-green-700 text-white px-4 py-1.5 rounded-md hover:bg-green-800"
                >
                  إرسال
                </button>
              )}
            </div>
          )}
        </div>

        {/* ===== الواجب الثاني ===== */}
        <div
          onClick={() => {
            setSelectedAssignment(2);
            fileInputRef.current.click();
          }}
          className="flex flex-col gap-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50"
        >
          <div className="flex items-center gap-4">
            <FileText size={32} className="text-gray-500" />
            <div>
              <p className="font-semibold">الواجب الثاني</p>
              <p className="text-sm text-gray-500">
                موعد التسليم: 2025/12/31 – 10:59pm
              </p>
            </div>
          </div>

          {selectedAssignment === 2 && fileName && (
            <div className="flex items-center justify-between bg-gray-100 rounded-md px-3 py-2 mt-2">
              <p className="text-sm text-gray-700 truncate">📄 {fileName}</p>
              {successAssignments[2] ? (
                <div className="text-green-700 font-semibold">
  <Check size={20} />
</div>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSend(2);
                  }}
                  className="bg-green-700 text-white px-4 py-1.5 rounded-md hover:bg-green-800"
                >
                  إرسال
                </button>
              )}
            </div>
          )}
        </div>

        {/* input مخفي */}
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
      </div>
    </>
  );
}
