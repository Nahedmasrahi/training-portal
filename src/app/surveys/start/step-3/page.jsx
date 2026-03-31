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



export default function SurveyStep3Page() {
  const router = useRouter();

  const starQuestions = useMemo(
    () => [
      "كيف تقيم مدى تلقيك للملاحظات البنّاءة من المدربين بشأن أدائك",
      "كيف تقيم حرص الموظفين على تطوير مهاراتك العلمية والعملية واهتمامهم بجودة التعليم الذي تتلقاه",
    ],
    []
  );

  const [radioAnswer, setRadioAnswer] = useState(""); // "yes" | "no"
  const [rates, setRates] = useState(() =>
    Object.fromEntries(starQuestions.map((_, i) => [i, 0]))
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

      {/* ================= Steps Bar (مثل الصورة: الأخضر للثانية) ================= */}
      <div className="max-w-5xl mx-auto mb-10">
        <div className="relative">
          {/* Track */}
          <div className="h-2 w-full rounded-full bg-gray-200" />

          {/* Progress: واصل للنقطة الثانية (50%) */}
          <div className="absolute top-0 right-0 h-2 rounded-full bg-green-500 w-1/2" />

          {/* Dots */}
          <div className="absolute -top-3 left-0 right-0 flex items-start justify-between px-1">
            {/* Step 1 */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-green-500 shadow-md ring-4 ring-green-500/20" />
              <span className="text-sm font-semibold text-gray-800">
                بيئة التدريب
              </span>
            </div>

            {/* Step 2 (Active) */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-green-500 shadow-md ring-4 ring-green-500/20" />
              <span className="text-sm font-semibold text-gray-800">
                الدعم والإشراف
              </span>
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

      {/* ================= Card ================= */}
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
            {/* سؤال نعم/لا */}
            <div className="text-center">
              <div className="text-xl font-semibold text-gray-900 mb-6">
                هل كانت مواعيد المدربين منتظمة أثناء فترة التدريب؟
              </div>

              <div className="flex items-center justify-center gap-20">
                {/* نعم */}
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <span className="text-lg text-gray-900">نعم</span>
                  <input
                    type="radio"
                    name="trainers-regular"
                    value="yes"
                    checked={radioAnswer === "yes"}
                    onChange={() => setRadioAnswer("yes")}
                    className="w-5 h-5 accent-green-600"
                  />
                </label>

                {/* لا */}
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <span className="text-lg text-gray-900">لا</span>
                  <input
                    type="radio"
                    name="trainers-regular"
                    value="no"
                    checked={radioAnswer === "no"}
                    onChange={() => setRadioAnswer("no")}
                    className="w-5 h-5 accent-green-600"
                  />
                </label>
              </div>
            </div>

            {/* أسئلة النجوم */}
            {starQuestions.map((q, idx) => (
              <div key={idx} className="text-center">
                <div className="text-xl font-semibold text-gray-900 mb-4">
                  {q}
                </div>

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
            onClick={() => router.push("/surveys/start/step-2")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-2.5 rounded-lg font-semibold flex items-center gap-2"
          >
            <ArrowRight size={18} />
            السابق
          </button>

          <button
            onClick={() => router.push("/surveys/start/step-4")}
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
