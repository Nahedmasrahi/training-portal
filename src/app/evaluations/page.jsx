"use client";

import { ClipboardCheck, Bell, UserCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const evaluations = [
  {
    title: "تقييم مشرف التدريب",
    desc: "قيّم تجربتك مع المشرف خلال فترة التدريب، وساعدنا في تحسين جودة الإشراف والتدريب",
    duration: "2 دقائق",
    href: "/evaluations/start",
  },
  {
    title: "تقييم برنامج سحب الدم",
    desc: "قيّم برنامج سحب الدم وكيف كانت تجربتك",
    duration: "3 دقائق",
    href: "/evaluations/start", // تقدرين تغيرينه لمسار ثاني لاحقًا
  },
];

export default function EvaluationsPage() {
  const router = useRouter();
  const [showEvaluations, setShowEvaluations] = useState(true);

  useEffect(() => {
    // ✅ الافتراضي: فيه تقييمات (إذا ما فيه قيمة مخزنة)
    const hasEvaluations = localStorage.getItem("hasEvaluations");
    if (hasEvaluations === "false") setShowEvaluations(false);
  }, []);

  // ❌ ما فيه تقييمات
  if (!showEvaluations) {
    return (
      <div className="w-full">
        {/* نفس هيدر الاستبيان */}
        <div className="flex justify-between items-center mb-12">
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

        <div className="flex items-center justify-center h-[60vh]" dir="rtl">
          <p className="text-red-600 text-xl font-bold">
            لا يوجد تقييمات متاحة حالياً
          </p>
        </div>

        {/* للتجربة فقط */}
        {/* <button
          onClick={() => {
            localStorage.setItem("hasEvaluations", "true");
            setShowEvaluations(true);
          }}
          className="mx-auto block text-sm text-gray-500 underline"
        >
          إعادة فتح التقييمات (للتجربة)
        </button> */}
      </div>
    );
  }

  // ✅ فيه تقييمات
  return (
    <div className="w-full">
      {/* نفس هيدر الاستبيان */}
      <div className="flex justify-between items-center mb-12">
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

      <div className="space-y-5" dir="rtl">
        {evaluations.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl px-6 py-6 flex items-center justify-between shadow-sm"
          >
            <div className="text-right flex-1 mr-2">
              <h2 className="text-xl font-extrabold mb-1">{item.title}</h2>
              <p className="text-gray-600">{item.desc}</p>
              <p className="text-sm text-gray-500 mt-2">
                المدة: {item.duration}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <ClipboardCheck size={40} className="text-gray-800" />
              <button
                onClick={() => router.push(item.href)}
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-2.5 rounded-xl font-semibold transition"
              >
                التقييم
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
