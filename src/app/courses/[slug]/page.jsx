"use client";

import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { Calendar, Clock, MapPin, Award } from "lucide-react";


export default function CoursePage() {
  const router = useRouter();
  const { slug } = useParams();

  return (
    <>
      {/* ===== تفاصيل البرنامج ===== */}
      <div className="bg-white rounded-xl shadow p-6 flex gap-6 mb-8">
        <div className="w-1/3 relative h-48">
          <Image
            src="/blood.jpg"
            alt="course"
            fill
            className="rounded-lg object-cover"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">برنامج سحب الدم</h1>

          <div className="space-y-2 text-gray-700">
            <p className="flex items-center gap-2">
              <Calendar size={18} /> 2026/03/06
            </p>
            <p className="flex items-center gap-2">
              <Clock size={18} /> 10:00 صباحًا
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={18} /> المستشفى الجامعي
            </p>
            <p className="flex items-center gap-2">
              <Award size={18} /> توجد شهادة حضور
            </p>
          </div>

          <button className="mt-4 bg-green-700 text-white px-6 py-2 rounded-lg">
            التسجيل الآن
          </button>
        </div>
      </div>

      {/* ===== Tabs ===== */}
      <div className="flex gap-8 border-b mb-6">
        <button
          onClick={() => router.push(`/courses/${slug}`)}
          className="pb-3 border-b-2 border-green-700 text-green-700 font-semibold"
        >
          محتوى البرنامج
        </button>

        <button
          onClick={() => router.push(`/courses/${slug}/files`)}
          className="pb-3 text-gray-500 hover:text-green-700"
        >
          إرفاق ملفات
        </button>
      </div>

      {/* ===== محتوى البرنامج ===== */}
      <div className="bg-white rounded-xl shadow p-6 space-y-6">
        <div>
          <h3 className="font-bold text-lg mb-1">مقدمة عن سحب الدم</h3>
          <p className="text-gray-600 text-sm">
            مفهوم الفينيبنكشر، الأدوات الأساسية، ومتى يتم استخدام كل نوع.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-1">التجهيز قبل السحب</h3>
          <p className="text-gray-600 text-sm">
            خطوات التعقيم، اختيار الوريد المناسب، وطرق التعامل مع المرضى.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-1">خطوات سحب الدم العملية</h3>
          <p className="text-gray-600 text-sm">
            تطبيق عملي لعملية السحب خطوة بخطوة بطريقة صحيحة وآمنة.
          </p>
        </div>
      </div>
    </>
  );
}
