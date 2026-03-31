"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { UserCircle, Bell, FileText } from "lucide-react";

function TabButton({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-2 pb-3 text-base font-semibold transition-colors ${
        active
          ? "text-gray-900 border-b-2 border-gray-900"
          : "text-gray-500 hover:text-gray-900"
      }`}
    >
      {children}
    </button>
  );
}

export default function CourseContentPage() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState("content"); // content | files

  return (
    <div className="w-full">
      {/* ===== Header ===== */}
      <div className="flex justify-between items-center mb-8">
        <div className="text-right">
          <h2 className="text-3xl font-bold text-gray-900">مرحبًا ياسر</h2>
          <p className="text-gray-600 text-lg mt-1">
            كن على اطلاع بكل ما يحدث في جامعتك
          </p>
        </div>

        <div className="flex items-center gap-4">
          <UserCircle size={32} className="text-gray-700 cursor-pointer" />
          <Bell size={28} className="text-gray-700 cursor-pointer" />
        </div>
      </div>

      {/* ===== كارد النبذة ===== */}
      <div className="bg-white rounded-2xl border border-gray-300/40 p-4 md:p-6 mb-4">
        <div className="flex flex-col md:flex-row-reverse gap-6">
          {/* الصورة (يمين) */}
          <div className="md:w-[42%]">
            <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden border border-gray-200">
              <Image
                src="/blood.jpg"
                alt="course"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* النص (يسار) */}
          <div className="md:w-[58%] text-right">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-3">
              نبذة عن الدورة
            </h3>
            <p className="text-gray-700 text-lg leading-8">
              تعرف على أساسيات سحب الدم بشكل صحيح وآمن، مع تدريب عملي على الأدوات
              والطرق المستخدمة في بيئة العمل الصحية.
            </p>
          </div>
        </div>
      </div>

      {/* ===== Tabs ===== */}
      <div className="flex gap-10 border-b border-gray-200 mb-6">
        <TabButton
          active={activeTab === "content"}
          onClick={() => setActiveTab("content")}
        >
          محتوى البرنامج
        </TabButton>

        <TabButton
          active={activeTab === "files"}
          onClick={() => setActiveTab("files")}
        >
          إرفاق ملفات
        </TabButton>
      </div>

      {/* ===== تبويب المحتوى ===== */}
      {activeTab === "content" && (
        <>
          <h3 className="text-3xl font-extrabold text-gray-900 text-right mb-4">
            محتوى البرنامج
          </h3>

          <div className="bg-white rounded-2xl border border-gray-300/40 overflow-hidden">
            <div className="p-5 md:p-6 border-b border-gray-200 text-right">
              <h4 className="text-2xl font-extrabold text-gray-900 mb-2">
                مقدمة عن سحب الدم
              </h4>
              <p className="text-gray-700 text-lg leading-8">
                مفهوم الفينيبنكشر، الأدوات الأساسية، ومتى يتم استخدام كل نوع.
              </p>
            </div>

            <div className="p-5 md:p-6 border-b border-gray-200 text-right">
              <h4 className="text-2xl font-extrabold text-gray-900 mb-2">
                التجهيز قبل السحب
              </h4>
              <p className="text-gray-700 text-lg leading-8">
                خطوات التعقيم، اختيار الوريد المناسب، وطرق التعامل مع المرضى.
              </p>
            </div>

            <div className="p-5 md:p-6 text-right">
              <h4 className="text-2xl font-extrabold text-gray-900 mb-2">
                خطوات سحب الدم العملية
              </h4>
              <p className="text-gray-700 text-lg leading-8">
                تطبيق عملي لعملية السحب خطوة بخطوة بطريقة صحيحة وآمنة، مع التعامل
                مع الأخطاء والمضاعفات.
              </p>
            </div>
          </div>
        </>
      )}

      {/* ===== تبويب إرفاق ملفات (ينقلك لصفحة ثابتة) ===== */}
      {activeTab === "files" && (
        <>
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-right mb-4">
            إرفاق الملفات
          </h3>

          <div className="bg-white rounded-2xl border border-gray-300/40 overflow-hidden">
            {[
              { id: 1, title: "الواجب الأول", due: "11:59pm 2025/12/31" },
              { id: 2, title: "الواجب الثاني", due: "10:59pm 2025/12/31" },
              { id: 3, title: "الواجب الثالث", due: "9:30pm 2025/12/31" },
            ].map((a, idx, arr) => (
              <Link
                key={a.id}
                href={`/courses/${slug}/assignment?id=${a.id}`}
                className={`w-full flex items-center gap-4 px-4 md:px-6 py-4 hover:bg-gray-50 transition text-right ${
                  idx !== arr.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-700 shrink-0">
                  <FileText size={22} />
                </div>

                <div className="flex-1">
                  <div className="font-extrabold text-gray-900 text-lg">
                    {a.title}
                  </div>
                  <div className="text-gray-600 text-sm mt-1">
                    موعد التسليم: {a.due}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

