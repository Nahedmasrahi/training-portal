"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function EvaluationSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // ✅ هنا نقفل التقييمات بعد ما انتهى
    localStorage.setItem("hasEvaluations", "false");
  }, []);

  return (
    <div className="min-h-[70vh] flex items-center justify-center" dir="rtl">
      <div className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-2xl shadow-sm p-10">
        <div className="w-44 h-44 flex items-center justify-center">
          <Image
            src="/check.png"
            alt="تم بنجاح"
            width={220}
            height={220}
            priority
            className="drop-shadow-md"
          />
        </div>

        <p className="mt-8 text-3xl font-extrabold text-gray-900">
          تم إرسال التقييم بنجاح
        </p>

        <button
          onClick={() => router.push("/evaluations")}
          className="mt-7 bg-green-700 hover:bg-green-800 text-white px-7 py-3 rounded-xl text-base font-semibold shadow transition"
        >
          العودة إلى صفحة التقييمات
        </button>
      </div>
    </div>
  );
}
