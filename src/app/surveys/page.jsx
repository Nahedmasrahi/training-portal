"use client";

import { ClipboardCheck, UserCircle, Bell } from "lucide-react";
import { useRouter } from "next/navigation";

const surveys = [
  {
    title: "البرنامج التدريبي",
    desc: "ساعدنا في قياس جودة البرنامج وتحسين التجربة التدريبية",
    duration: "3 دقائق",
  },
  {
    title: "رضا المتدرب عن المشرف",
    desc: "قيّم أسلوب الإشراف والدعم الذي تلقيته خلال التدريب",
    duration: "2 دقائق",
  },
  {
    title: "تجربة المستخدم في البوابة",
    desc: "ساعدنا في قياس جودة البرنامج وتحسين التجربة التدريبية",
    duration: "2 دقائق",
  },
  {
    title: "جودة بيئة التدريب",
    desc: "قيّم بيئة التدريب من حيث التجهيزات، النظام، والسلامة",
    duration: "3 دقائق",
  },
];

export default function SurveysPage() {
  const router = useRouter();

  return (
    <div className="space-y-8">

      {/* ===== Header ===== */}
      <div className="flex justify-between items-center">
        <div className="text-right">
          <h2 className="text-3xl font-bold">مرحبًا ياسر</h2>
          <p className="text-gray-600 text-lg mt-1">
            كن على اطلاع بكل ما يحدث في جامعتك
          </p>
        </div>

        <div className="flex items-center gap-4">
          <UserCircle size={32} className="text-gray-700 cursor-pointer" />
          <Bell size={28} className="text-gray-700 cursor-pointer" />
        </div>
      </div>

      {/* ===== Surveys List ===== */}
      <div className="space-y-5">
        {surveys.map((survey, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300/40 rounded-2xl px-6 py-5 flex items-center justify-between"
          >
            {/* ===== النص (يمين) ===== */}
            <div className="text-right flex-1 ml-4">
              <h2 className="text-xl font-bold mb-1 text-gray-900">
                {survey.title}
              </h2>
              <p className="text-gray-600 mb-1">{survey.desc}</p>
              <p className="text-sm text-gray-500">
                المدة: {survey.duration}
              </p>
            </div>

            {/* ===== الأيقونة + زر (يسار) ===== */}
            <div className="flex items-center gap-3">
              <ClipboardCheck size={46} className="text-gray-900" />

              <button
                onClick={() => router.push("/surveys/start/step-1")}
                className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-xl text-sm font-semibold transition"
              >
                تعبئة الاستبيان
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
