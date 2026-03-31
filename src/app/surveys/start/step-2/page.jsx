"use client";

import { useMemo, useState } from "react";
import { Bell, UserCircle, ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useRouter } from "next/navigation";

function Stars({ value, onChange }) {
  return (
    <div className="flex items-center justify-center gap-10">
      {[1, 2, 3, 4, 5].map((n) => {
        const active = n <= value;

        return (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            className="p-1 transition-transform hover:scale-110"
            aria-label={`تقييم ${n}`}
          >
            <Star
              size={28}
              className={
                active
                  ? "text-green-600 fill-green-600"
                  : "text-gray-400"
              }
            />
          </button>
        );
      })}
    </div>
  );
}


export default function SurveyStep2Page() {
  const router = useRouter();

  const questions = useMemo(
    () => [
      "الى اي مدى شعرت بالراحة و الاستقرار أثناء فترة التدريب في بيئة المستشفى",
      "ما مدى توفر الدعم الفني مثل الاجهزة والنظام المستخدم",
      "ما مدى رضاك عن نظافة وترتيب بيئة العمل",
    ],
    []
  );

  const [rates, setRates] = useState(() =>
    Object.fromEntries(questions.map((_, i) => [i, 0]))
  );

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

      {/* ================= Steps Bar (مثل الصورة بالضبط) ================= */}
      <div className="max-w-5xl mx-auto mb-10">
        <div className="relative">
          {/* Track */}
          <div className="h-2 w-full rounded-full bg-gray-200" />

          {/* Progress: فقط إلى أول نقطة */}
          <div className="absolute top-0 right-0 h-2 rounded-full bg-green-500 w-1/4" />

          {/* Dots */}
          <div className="absolute -top-3 left-0 right-0 flex items-start justify-between px-1">
            {/* Step 1 */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-green-500 shadow-md ring-4 ring-green-500/20" />
              <span className="text-sm font-semibold text-gray-800">
                بيئة التدريب
              </span>
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
            boxShadow:
              "0 10px 30px rgba(0,0,0,0.12) inset, 0 6px 20px rgba(0,0,0,0.12)",
          }}
        >
          <div className="space-y-14">
            {questions.map((q, idx) => (
              <div key={idx} className="text-center">
                <div className="text-xl font-semibold text-gray-900 mb-4">
                  {q}
                </div>

                {/* نجوم */}
                <Stars
                  value={rates[idx]}
                  onChange={(val) =>
                    setRates((prev) => ({ ...prev, [idx]: val }))
                  }
                />
              </div>
            ))}
          </div>
        </div>

        {/* ================= Bottom Buttons ================= */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={() => router.push("/surveys/start/step-1")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-2.5 rounded-lg font-semibold flex items-center gap-2"
          >
            <ArrowRight size={18} />
            السابق
          </button>

          <button
            onClick={() => router.push("/surveys/start/step-3")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-2.5 rounded-lg font-semibold flex items-center gap-2"
          >
            التالي
            <ArrowLeft size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
