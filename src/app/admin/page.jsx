"use client";
import AdminSidebar from "@/components/AdminSidebar";

import {
  Users,
  GraduationCap,
  BookOpen,
  CalendarCheck,
  FileText
} from "lucide-react";

export default function AdminPage() {

  const cards = [
    {
      title: "المتدربون",
      number: "1248",
      icon: Users
    },
    {
      title: "المدربون",
      number: "86",
      icon: GraduationCap
    },
    {
      title: "الدورات",
      number: "45",
      icon: BookOpen
    },
    {
      title: "نسبة الحضور",
      number: "87%",
      icon: CalendarCheck
    }
  ];

  return (
    <div
      dir="rtl"
      className="
      min-h-screen
      bg-gray-50
      "
    >

      <AdminSidebar />

      <main
        className="
        mr-72
        p-10
        h-screen
        overflow-y-auto
        "
      >

        {/* الهيدر */}

        <div
          className="
          flex justify-between
          items-center
          mb-10
          "
        >

          <div>

            <h1 className="
            text-3xl
            font-bold
            text-gray-800
            ">
              مرحباً مشرف
            </h1>

            <p className="
            text-gray-500
            mt-2
            ">
              كن على اطلاع بكل ما يحدث في بوابة التدريب
            </p>

          </div>

          <div
            className="
            w-12 h-12
            rounded-full
            bg-[#064B35]
            text-white
            flex items-center justify-center
            font-bold
            "
          >
            AD
          </div>

        </div>

        {/* الكروت */}

        <div
          className="
          grid
          grid-cols-4
          gap-6
          "
        >

          {cards.map((card) => {

            const Icon = card.icon;

            return (

              <div
                key={card.title}
                className="
                bg-white
                rounded-2xl
                shadow-sm
                p-6
                border
                "
              >

                <div className="flex justify-between">

                  <div>

                    <p className="text-gray-500">
                      {card.title}
                    </p>

                    <h2 className="
                    text-3xl
                    font-bold
                    mt-3
                    ">
                      {card.number}
                    </h2>

                  </div>

                  <Icon
                    className="text-[#0C8A4A]"
                    size={35}
                  />

                </div>

                <button
                  className="
                  mt-6
                  border
                  border-[#0C8A4A]
                  text-[#0C8A4A]
                  px-4
                  py-2
                  rounded-lg
                  text-sm
                  "
                >
                  عرض التفاصيل
                </button>

              </div>

            )

          })}

        </div>

        {/* التنبيهات + التقارير */}

        <div
          className="
          grid
          grid-cols-2
          gap-6
          mt-8
          "
        >

          {/* التنبيهات */}

          <div
            className="
            bg-white
            rounded-2xl
            p-6
            shadow-sm
            "
          >

            <h2 className="font-bold mb-5">
              التنبيهات
            </h2>

            {[
              "تم إضافة متدرب جديد",
              "تم تسجيل دورة جديدة",
              "تم تحديث الحضور"
            ].map(x => (
              <div
                key={x}
                className="
                border-b
                py-3
                text-gray-600
                "
              >
                {x}
              </div>
            ))}

          </div>

          {/* التقارير */}

          <div
            className="
            bg-white
            rounded-2xl
            p-6
            shadow-sm
            "
          >

            <h2 className="font-bold mb-5">
              آخر التقارير
            </h2>

            {[
              "تقرير الحضور",
              "تقرير الدورات",
              "تقرير المتدربين"
            ].map(x => (
              <div
                key={x}
                className="
                border
                rounded-lg
                p-3
                mb-3
                "
              >
                📄 {x}
              </div>
            ))}

          </div>

        </div>

      </main>

    </div>
  );
}