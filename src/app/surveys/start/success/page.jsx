"use client";

import { Bell, UserCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";

export default function SurveyStep8Page() {
  const router = useRouter();


  useEffect(() => {
    localStorage.setItem("survey_done", "true");
  }, []);

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

      {/* ================= Success Center ================= */}
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="flex flex-col items-center text-center">
          
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

          {/* النص */}
          <p className="mt-8 text-3xl font-extrabold text-gray-900">
            تم إرسال الاستبيان بنجاح
          </p>

          {/* زر العودة */}
          <button
  onClick={() => router.push("/dashboard")}
  className="mt-6 bg-green-700 hover:bg-green-800 text-white px-7 py-3 rounded-xl text-base font-semibold shadow transition"
>
  العودة إلى الصفحة الرئيسية
</button>


        </div>
      </div>
    </div>
  );
}

