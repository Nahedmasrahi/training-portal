"use client";

import { useMemo, useState } from "react";
import { Bell, UserCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const OPTIONS = [
  { label: "نعم", value: "yes" },
  { label: "لا", value: "no" },
  { label: "جزئيًا", value: "partial" },
];

export default function SurveyStep1Page() {
  const router = useRouter();

  const questions = useMemo(
    () => [
      "هل كانت الموارد مثل الأدوات والتجهيزات الطبية متوفرة؟",
      "هل كانت قاعات التدريب والاستراحات مجهزة بشكل مناسب؟",
      "هل كانت بيئة العمل مشجعة على التعاون بين أعضاء الفريق؟",
      "هل ساهمت بيئة التدريب في تحسين تعلمك؟",
    ],
    []
  );

  const [answers, setAnswers] = useState(() =>
    Object.fromEntries(questions.map((_, i) => [i, ""]))
  );

  const canNext = questions.every((_, i) => answers[i]);

  return (
    <div className="w-full">
      {/* ================= Header ================= */}
      <div className="flex justify-between items-center mb-10">
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

      {/* ================= Title ================= */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">
          رضا الطلاب والطالبات عن العملية التدريبية
        </h1>
      </div>

     {/* ================= Steps Bar (Professional) ================= */}
<div className="max-w-5xl mx-auto mb-10">
  <div className="relative">
    {/* Track */}
    <div className="h-2 w-full rounded-full bg-gray-200" />

    {/* Progress (Step 1 من 4 => 25%) */}
    <div className="absolute top-0 right-0 h-2 rounded-full bg-green-500 w-1/4" />

    {/* Steps */}
    <div className="absolute -top-3 left-0 right-0 flex items-start justify-between px-1">
      {/* Step 1 (Active) */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-9 h-9 rounded-full bg-green-500 shadow-md ring-4 ring-green-500/20" />
        <span className="text-sm font-semibold text-gray-800">بيئة التدريب</span>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gray-300" />
        <span className="text-sm font-medium text-gray-500"> </span>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gray-300" />
        <span className="text-sm font-medium text-gray-500"> </span>
      </div>

      {/* Step 4 */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gray-300" />
        <span className="text-sm font-medium text-gray-500"> </span>
      </div>
    </div>
  </div>
</div>


      {/* ================= Card Questions ================= */}
      <div className="max-w-5xl mx-auto">
        <div
          className="rounded-2xl border border-gray-200 p-10"
          style={{
            background: "#F3F4F6",
            boxShadow: "0 10px 30px rgba(0,0,0,0.12) inset, 0 6px 20px rgba(0,0,0,0.12)",
          }}
        >
          <div className="space-y-10">
            {questions.map((q, idx) => (
              <div key={idx} className="text-right">
                <div className="text-xl font-semibold text-gray-900 mb-4">
                  {q}
                </div>

                {/* خيارات نعم/لا/جزئياً */}
                <div className="flex items-center justify-between max-w-lg ml-auto">
                  {OPTIONS.map((opt) => (
                    <label
                      key={opt.value}
                      className="flex items-center gap-3 cursor-pointer select-none"
                    >
                      <span className="text-lg text-gray-900">{opt.label}</span>
                      <input
                        type="radio"
                        name={`q-${idx}`}
                        value={opt.value}
                        checked={answers[idx] === opt.value}
                        onChange={() =>
                          setAnswers((prev) => ({ ...prev, [idx]: opt.value }))
                        }
                        className="w-5 h-5 accent-green-600"
                      />
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= Bottom Buttons ================= */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={() => router.back()}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-2.5 rounded-lg font-semibold flex items-center gap-2"
          >
            <ArrowRight size={18} />
            السابق
          </button>

          <button
            disabled={!canNext}
            onClick={() => router.push("/surveys/start/step-2")}
            className={`px-8 py-2.5 rounded-lg font-semibold flex items-center gap-2 ${
              canNext
                ? "bg-gray-200 hover:bg-gray-300 text-gray-800"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            التالي
            <ArrowLeft size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
