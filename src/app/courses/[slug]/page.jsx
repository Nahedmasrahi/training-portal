"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

import {
  Calendar,
  Clock,
  MapPin,
  Award,
  UserCircle,
  Bell,
} from "lucide-react";

function InfoRow({ icon: Icon, text }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <span className="text-gray-800 text-[18px] md:text-[20px] font-medium text-right">
        {text}
      </span>

      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
        <Icon size={20} />
      </div>
    </div>
  );
}

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

export default function CoursePage() {
  const { slug } = useParams();

  const router = useRouter();



  const [view, setView] = useState("details");
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

     
      {view === "details" && (
        <>
          {/* ===== عنوان الصفحة ===== */}
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-right">
              برنامج سحب الدم
            </h2>
          </div>

          {/* ===== كارد تفاصيل البرنامج ===== */}
          <div className="bg-white rounded-2xl border border-gray-300/40 p-4 md:p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-6">
             
              <div className="md:w-[42%]">
                <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-right mb-4">
                  برنامج سحب الدم
                </h1>

                <div className="divide-y divide-gray-100">
                  <InfoRow icon={Calendar} text="2026/03/06" />
                  <InfoRow icon={Clock} text="10:00 صباحًا" />
                  <InfoRow icon={MapPin} text="المستشفى الجامعي" />
                  <InfoRow icon={Award} text="توجد شهادة حضور" />
                </div>
              </div>

            
              <div className="md:w-[58%]">
                <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden border border-gray-200">
                  <Image
                    src="/blood.jpg"
                    alt="course"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                
                <button
  onClick={() => router.push(`/courses/${slug}/content`)}
  className="mt-3 w-fit bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg text-sm font-medium"
>
  التسجيل الآن
</button>

              </div>
            </div>
          </div>

          {/* ===== وصف البرنامج ===== */}
          <div className="bg-white rounded-2xl border border-gray-300/40 p-5 md:p-6 mb-10">
            <h3 className="text-2xl font-extrabold text-gray-900 text-right mb-3">
              وصف البرنامج
            </h3>

            <p className="text-gray-700 leading-8 text-base md:text-lg text-right">
              يهدف برنامج سحب الدم إلى تزويد المتدربين بالمهارات الأساسية والممارسات
              السليمة لجمع عينات الدم بطريقة آمنة وفعّالة، وفق المعايير الطبية
              المعتمدة. يتعرّف المتدرب على الأدوات المستخدمة، خطوات التحضير، طرق
              التعامل مع المرضى، وإجراءات منع العدوى.
            </p>
          </div>

          {/* ===== أهداف الدورة ===== */}
          <div className="mt-2">
            <h3 className="text-2xl font-extrabold text-gray-900 text-right">
              أهداف الدورة
            </h3>

            <div className="mt-3 bg-white rounded-2xl border border-gray-300/40 p-5 md:p-6">
              <ul className="list-disc pr-6 space-y-3 text-gray-700 text-right leading-7">
                <li>تعلم خطوات التحضير والتعقيم قبل السحب.</li>
                <li>اختيار الوريد المناسب والتعامل الصحيح مع المريض.</li>
                <li>تطبيق عملي لعملية السحب بطريقة آمنة وتقليل الأخطاء.</li>
              </ul>
            </div>
          </div>
        </>
      )}

      {/* =========================
          2) بعد الضغط: نفس تصميم الصورة الثانية
         ========================= */}
      {view === "afterRegister" && (
        <>
          {/* ===== الكارد العلوي مثل الصورة (صورة يسار + نبذة يمين) ===== */}
          <div className="bg-white rounded-2xl border border-gray-300/40 p-4 md:p-6 mb-4">
            <div className="flex flex-col md:flex-row gap-6">
              {/* الصورة (يسار) */}
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

              {/* النبذة (يمين) */}
              <div className="md:w-[58%] text-right">
                <h3 className="text-3xl font-extrabold text-gray-900 mb-3">
                  نبذة عن الدورة
                </h3>
                <p className="text-gray-700 text-lg leading-8">
                  تعرف على أساسيات سحب الدم بشكل صحيح وآمن، مع تدريب عملي على
                  الأدوات والطرق المستخدمة في بيئة العمل الصحية.
                </p>
              </div>
            </div>
          </div>

          {/* ===== Tabs مثل الصورة ===== */}
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

          {/* ===== محتوى التبويب ===== */}
          {activeTab === "content" && (
            <>
              <h3 className="text-3xl font-extrabold text-gray-900 text-right mb-4">
                محتوى البرنامج
              </h3>

              <div className="bg-white rounded-2xl border border-gray-300/40 overflow-hidden">
                {/* عنصر 1 */}
                <div className="p-5 md:p-6 border-b border-gray-200 text-right">
                  <h4 className="text-2xl font-extrabold text-gray-900 mb-2">
                    مقدمة عن سحب الدم
                  </h4>
                  <p className="text-gray-700 text-lg leading-8">
                    مفهوم الفينيبنكشر، الأدوات الأساسية، ومتى يتم استخدام كل نوع.
                  </p>
                </div>

                {/* عنصر 2 */}
                <div className="p-5 md:p-6 border-b border-gray-200 text-right">
                  <h4 className="text-2xl font-extrabold text-gray-900 mb-2">
                    التجهيز قبل السحب
                  </h4>
                  <p className="text-gray-700 text-lg leading-8">
                    خطوات التعقيم، اختيار الوريد المناسب، وطرق التعامل مع المرضى.
                  </p>
                </div>

                {/* عنصر 3 */}
                <div className="p-5 md:p-6 text-right">
                  <h4 className="text-2xl font-extrabold text-gray-900 mb-2">
                    خطوات سحب الدم العملية
                  </h4>
                  <p className="text-gray-700 text-lg leading-8">
                    تطبيق عملي لعملية السحب خطوة بخطوة بطريقة صحيحة وآمنة، مع
                    التعامل مع الأخطاء والمضاعفات.
                  </p>
                </div>
              </div>
            </>
          )}

          {activeTab === "files" && (
            <div className="bg-white rounded-2xl border border-gray-300/40 p-6 text-right">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                إرفاق ملفات
              </h3>
              <p className="text-gray-700 leading-8">
                (هنا حطي واجهة رفع الملفات لاحقًا — وإذا تبينها نفس تصميمكم، قولي لي
                وأركبها لك بنفس ستايل البوكسات)
              </p>
            </div>
          )}

          {/* زر رجوع (اختياري) */}
          <div className="mt-6">
            <button
              onClick={() => setView("details")}
              className="text-gray-600 hover:text-gray-900 underline text-right"
            >
              رجوع لتفاصيل البرنامج
            </button>
          </div>
        </>
      )}
    </div>
  );
}
