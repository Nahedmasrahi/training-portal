"use client";

import { ClipboardCheck } from "lucide-react";
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
    <div className="space-y-5">

      {surveys.map((survey, index) => (
        <div
          key={index}
          className="bg-white border rounded-xl px-6 py-5 flex items-center justify-between"
        >


            {/* ===== النص ===== */}
          <div className="text-right flex-1 mr-2">
            <h2 className="text-xl font-bold mb-1">{survey.title}</h2>
            <p className="text-gray-600 mb-1">{survey.desc}</p>
            <p className="text-sm text-gray-500">المدة: {survey.duration}</p>
          </div>
          {/* ===== اليسار: الأيقونة + زر ===== */}
          <div className="flex items-center  mr-2 gap-2">
            <ClipboardCheck size={48} className="text-black" />

            <button
              onClick={() => router.push("/surveys/start")}
              className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-800 transition"
            >
              تعبئة الاستبيان
            </button>
          </div>

        
        </div>
      ))}
    </div>
  );
}
