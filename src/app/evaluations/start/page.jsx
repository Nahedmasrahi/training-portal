"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Star, ArrowRight, ArrowLeft } from "lucide-react";

/* ===================== الأسئلة ===================== */
const questions = [
  {
    title: "التواصل مع المشرف",
    desc: "هل كان المشرف متعاونًا وسريع الاستجابة",
  },
  {
    title: "دعم المشرف",
    desc: "مدى قدرة المشرف على تقديم المساعدة والإرشاد عند الحاجة",
  },
  {
    title: "الاحترافية والانضباط",
    desc: "هل تصرف المشرف بشكل مهني وملتزم بمواعيد التدريب",
  },
  {
    title: "إدارة الوقت والجدول",
    desc: "هل كان المشرف منظمًا في إدارة الجلسات والأنشطة",
  },
];

export default function EvaluationStartPage() {
  const router = useRouter();

  /* ===================== States ===================== */
  const [ratings, setRatings] = useState(
    Array(questions.length).fill(0)
  );
  const [step, setStep] = useState(0);

  /* ===================== Handlers ===================== */
  const handleRating = (qIndex, value) => {
    const newRatings = [...ratings];
    newRatings[qIndex] = value;
    setRatings(newRatings);
  };

 const handleNext = () => {
 localStorage.setItem("hasEvaluations", "false");

  // رجوع لصفحة التقييمات
  router.push("/evaluations");
};







  /* ===================== UI ===================== */
  return (
    <div
      className="max-w-4xl mx-auto bg-[#F1F1F1] rounded-2xl p-8"
      dir="rtl"
    >
      {/* ===== العنوان ===== */}
      <h1 className="text-2xl font-bold text-center mb-10">
        تقييم مشرف التدريب
      </h1>

      {/* ===== الأسئلة ===== */}
      <div className="space-y-6">
        {questions.map((q, qIndex) => (
          <div
            key={qIndex}
            className="border-b border-gray-400 pb-6 flex items-center justify-between"
          >
            {/* النص */}
            <div className="text-right">
              <h3 className="text-lg font-bold mb-1">{q.title}</h3>
              <p className="text-gray-600 text-sm">{q.desc}</p>
            </div>

            {/* النجوم */}
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRating(qIndex, star)}
                >
                  <Star
                    size={28}
                    className={
                      ratings[qIndex] >= star
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-yellow-400"
                    }
                  />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ===== الأزرار ===== */}
      <div className="flex justify-between items-center mt-12">
        {/* السابق */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 bg-gray-200 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          <ArrowRight size={18} />
          <span>السابق</span>
        </button>

        {/* التالي */}
        <button
          onClick={handleNext}
          className="flex items-center gap-2 bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition"
        >
          <span>التالي</span>
          <ArrowLeft size={18} />
        </button>
      </div>
    </div>
  );
}
