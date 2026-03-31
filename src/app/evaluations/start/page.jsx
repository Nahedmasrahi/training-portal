"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Star, ArrowRight, ArrowLeft, Bell, UserCircle } from "lucide-react";

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

  const [ratings, setRatings] = useState(Array(questions.length).fill(0));

  const handleRating = (qIndex, value) => {
    const newRatings = [...ratings];
    newRatings[qIndex] = value;
    setRatings(newRatings);
  };

  // ✅ بعد الإرسال الحقيقي نروح لصفحة success
  const handleSubmit = () => {
    router.push("/evaluations/success");
  };

  return (
    <div className="w-full" dir="rtl">
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

      {/* Card */}
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-10">
        <h1 className="text-2xl font-bold text-center mb-10">
          تقييم مشرف التدريب
        </h1>

        <div className="space-y-6">
          {questions.map((q, qIndex) => (
            <div
              key={qIndex}
              className="border-b border-gray-200 pb-6 flex items-center justify-between"
            >
              <div className="text-right">
                <h3 className="text-lg font-bold mb-1">{q.title}</h3>
                <p className="text-gray-600 text-sm">{q.desc}</p>
              </div>

              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} onClick={() => handleRating(qIndex, star)}>
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

        <div className="flex justify-between items-center mt-12">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 bg-gray-100 px-6 py-2.5 rounded-xl hover:bg-gray-200 transition"
          >
            <ArrowRight size={18} />
            <span>السابق</span>
          </button>

          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 bg-green-700 text-white px-7 py-2.5 rounded-xl hover:bg-green-800 transition font-semibold"
          >
            <span>إرسال</span>
            <ArrowLeft size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
