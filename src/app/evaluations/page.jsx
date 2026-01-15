"use client";

import { ClipboardCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const evaluations = [
  {
    title: "تقييم مشرف التدريب",
    desc: "قيّم تجربتك مع المشرف خلال فترة التدريب، وساعدنا في تحسين جودة الإشراف والتدريب",
    duration: "2 دقائق",
  },
  {
    title: "تقييم برنامج سحب الدم",
    desc: "قيّم برنامج سحب الدم وكيف كانت تجربتك",
    duration: "3 دقائق",
  },
];

export default function EvaluationsPage() {
  const router = useRouter();
  const [showEvaluations, setShowEvaluations] = useState(true);

  useEffect(() => {
    const hasEvaluations = localStorage.getItem("hasEvaluations");
    if (hasEvaluations === "false") {
      setShowEvaluations(false);
    }
  }, []);

  // ❌ ما فيه تقييمات
  if (!showEvaluations) {
    return (
      <div className="flex items-center justify-center h-[60vh]" dir="rtl">
        <p className="text-red-600 text-xl font-bold">
          لا يوجد تقييمات متاحة حالياً
        </p>
      </div>
    );
  }

  // ✅ فيه تقييمات
  return (
    <div className="space-y-5" dir="rtl">
      {evaluations.map((item, index) => (
        <div
          key={index}
          className="bg-white border rounded-xl px-6 py-5 flex items-center justify-between"
        >
          <div className="text-right flex-1 mr-2">
            <h2 className="text-xl font-bold mb-1">{item.title}</h2>
            <p className="text-gray-600">{item.desc}</p>
            <p className="text-sm text-gray-500">المدة: {item.duration}</p>
          </div>

          <div className="flex items-center gap-3">
            <ClipboardCheck size={40} />
            <button
              onClick={() => router.push("/evaluations/start")}
              className="bg-green-700 text-white px-5 py-2 rounded-lg"
            >
              التقييم
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
