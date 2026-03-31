"use client";

import { Bell, UserCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SurveyStartPage() {
  const router = useRouter();
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDone(localStorage.getItem("survey_done") === "true");
  }, []);

 
  if (done) {
    return (
      <div className="w-full">
        {/* ================= Header ================= */}
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

        {/* ================= Done Message ================= */}
        <div className="min-h-[55vh] flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-600 text-xl font-semibold">
              لايوجد استبيان متاح حاليا
            </p>

            

            {/* اختياري للتجربة فقط */}
            {/* <button
              onClick={() => {
                localStorage.removeItem("survey_done");
                setDone(false);
              }}
              className="mt-4 block mx-auto text-sm text-gray-500 underline"
            >
              إعادة فتح الاستبيان (للتجربة)
            </button> */}
          </div>
        </div>
      </div>
    );
  }

 
  return (
    <div className="w-full">
      {/* ================= Header ================= */}
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

      {/* ================= Card ================= */}
      <div className="max-w-5xl mx-auto bg-white border border-gray-300 rounded-2xl shadow-sm p-10">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          {/* ========= Right Content ========= */}
          <div className="flex-1 text-right">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5">
              استبيان رضا الطلاب والطالبات عن العملية التدريبية
            </h1>

            <p className="text-gray-700 leading-8 mb-6">
              حرصًا منا على رفع جودة العملية التدريبية وتطويرها، تم إعداد هذا
              الاستبيان لقياس مستوى رضاكم عن البرامج التدريبية المقدمة.
              <br />
              نأمل منكم التكرم بتعبئة الاستبيان بكل دقة وموضوعية، علمًا بأن جميع
              البيانات تُستخدم لأغراض التحسين فقط وتُعامل بسرية تامة.
              <br />
              <br />
              شاكرين ومقدّرين حسن تعاونكم.
            </p>

            <div className="text-gray-900 font-semibold mb-6">
              المدة المتوقعة للإنهاء:
              <span className="font-bold"> 5 دقائق</span>
            </div>

            <button
              onClick={() => router.push("/surveys/start/step-1")}
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-xl font-semibold shadow"
            >
              بدأ الاستبيان
            </button>
          </div>

          {/* ========= Left Icon ========= */}
          <div className="w-[220px] h-[220px] border border-gray-300 rounded-2xl flex items-center justify-center bg-gray-50">
            <svg
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-black"
            >
              <path
                d="M9 3h6a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2V5a2 2 0 0 1 2-2Z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path d="M9 6h6" stroke="currentColor" strokeWidth="1.8" />
              <path d="M8 11h8" stroke="currentColor" strokeWidth="1.6" />
              <path d="M8 15h8" stroke="currentColor" strokeWidth="1.6" />
              <path d="M9 19h6" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

