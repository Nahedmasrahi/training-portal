"use client";

import { useMemo, useState } from "react";

import {
  Bell,
  UserCircle,
  ArrowRight,
  Star,
} from "lucide-react";

import { useRouter } from "next/navigation";

/* ===== النجوم ===== */
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
            className="p-1"
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

export default function SurveyStep8Page() {

  const router = useRouter();

  const questions = useMemo(
    () => [
      "ما مدى رضاك عن جودة التدريب مقارنة بتوقعاتك",
      "كيف تقيم تجربتك العامة خلال التدريب",
    ],
    []
  );

  const [rates, setRates] = useState(() =>
    Object.fromEntries(
      questions.map((_, i) => [i, 0])
    )
  );

  const [suggestion, setSuggestion] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const canSubmit = questions.every(
    (_, i) => rates[i] > 0
  );

  const handleSubmitSurvey = async () => {

    try {

      setLoading(true);

      // ================= جمع كل الخطوات =================
      const step1 = JSON.parse(
        localStorage.getItem("survey-step-1")
      );

      const step2 = JSON.parse(
        localStorage.getItem("survey-step-2")
      );

      const step3 = JSON.parse(
        localStorage.getItem("survey-step-3")
      );

      const step4 = JSON.parse(
        localStorage.getItem("survey-step-4")
      );

      const step5 = JSON.parse(
        localStorage.getItem("survey-step-5")
      );

      const step6 = JSON.parse(
        localStorage.getItem("survey-step-6")
      );

      // ================= التوكن =================
      const token =
        localStorage.getItem("token");

      // ================= إرسال للباك اند =================
      const response = await fetch(
        "https://superdivine-stephan-untaciturnly.ngrok-free.dev/api/surveys/1/submit",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({

            step1,

            step2,

            step3,

            step4,

            step5,

            step6,

            finalRates: rates,

            suggestion,

          }),
        }
      );

      const data = await response.json();

      if (response.ok) {

        localStorage.setItem(
          "survey_done",
          "true"
        );

        router.push(
          "/surveys/start/success"
        );

      } else {

        alert(
          data.message || "حدث خطأ"
        );

      }

    } catch (error) {

      console.log(error);

      alert("تعذر الاتصال بالسيرفر");

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="w-full">

      {/* ================= Header ================= */}
      <div className="flex justify-between items-center mb-10">

        <div className="text-right">

          <h2 className="text-3xl font-bold text-gray-900">
            مرحبًا ياسر
          </h2>

          <p className="text-gray-600 text-lg mt-1">
            كن على اطلاع بكل ما يحدث في جامعتك
          </p>

        </div>

        <div className="flex items-center gap-4">

          <UserCircle
            size={32}
            className="text-gray-700 cursor-pointer"
          />

          <Bell
            size={28}
            className="text-gray-700 cursor-pointer"
          />

        </div>

      </div>

      {/* ================= Title ================= */}
      <div className="text-center mb-8">

        <h1 className="text-3xl font-extrabold text-gray-900">
          رضا الطلاب والطالبات عن العملية التدريبية
        </h1>

      </div>

      {/* ================= Steps ================= */}
      <div className="max-w-5xl mx-auto mb-10">

        <div className="relative">

          {/* Track */}
          <div className="h-2 w-full rounded-full bg-gray-200" />

          {/* Progress */}
          <div className="absolute top-0 right-0 h-2 rounded-full bg-green-500 w-full" />

          {/* Dots */}
          <div className="absolute -top-3 left-0 right-0 flex items-start justify-between px-1">

            {/* 1 */}
            <div className="flex flex-col items-center gap-2">

              <div className="w-9 h-9 rounded-full bg-green-500 shadow-md ring-4 ring-green-500/20" />

              <span className="text-sm font-semibold text-gray-800">
                بيئة التدريب
              </span>

            </div>

            {/* 2 */}
            <div className="flex flex-col items-center gap-2">

              <div className="w-9 h-9 rounded-full bg-green-500 shadow-md ring-4 ring-green-500/20" />

              <span className="text-sm font-semibold text-gray-800">
                الدعم والإشراف
              </span>

            </div>

            {/* 3 */}
            <div className="flex flex-col items-center gap-2">

              <div className="w-9 h-9 rounded-full bg-green-500 shadow-md ring-4 ring-green-500/20" />

              <span className="text-sm font-semibold text-gray-800">
                محتوى التدريب
              </span>

            </div>

            {/* 4 */}
            <div className="flex flex-col items-center gap-2">

              <div className="w-9 h-9 rounded-full bg-green-500 shadow-md ring-4 ring-green-500/20" />

              <span className="text-sm font-semibold text-gray-800">
                التقييم العام
              </span>

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

            {questions.map((q, idx) => (

              <div
                key={idx}
                className="text-center"
              >

                <div className="text-xl font-semibold text-gray-900 mb-6">

                  {q}

                </div>

                <Stars
                  value={rates[idx]}
                  onChange={(val) =>
                    setRates((prev) => ({
                      ...prev,
                      [idx]: val,
                    }))
                  }
                />

              </div>

            ))}

            {/* الاقتراحات */}
            <div className="text-right">

              <div className="text-lg font-semibold text-gray-900 mb-3">

                هل لديك اقتراحات لتحسين تجربة التدريب (اختياري)

              </div>

              <textarea
                value={suggestion}
                onChange={(e) =>
                  setSuggestion(e.target.value)
                }
                placeholder="اقتراحات لتحسين تجربة التدريب"
                className="w-full h-36 rounded-xl border border-gray-300 bg-white p-4 outline-none focus:ring-2 focus:ring-green-600/30"
              />

            </div>

          </div>

        </div>

        {/* ================= Buttons ================= */}
        <div className="mt-10 flex items-center justify-center gap-6">

          {/* السابق */}
          <button
            onClick={() =>
              router.push("/surveys/start/step-7")
            }
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-2.5 rounded-lg font-semibold flex items-center gap-2"
          >

            <ArrowRight size={18} />

            السابق

          </button>

          {/* إرسال */}
          <button
            disabled={!canSubmit || loading}
            onClick={handleSubmitSurvey}
            className={`px-10 py-2.5 rounded-lg font-semibold ${
              canSubmit
                ? "bg-green-700 hover:bg-green-800 text-white"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >

            {loading
              ? "جاري الإرسال..."
              : "إرسال"}

          </button>

        </div>

      </div>

    </div>
  );
}