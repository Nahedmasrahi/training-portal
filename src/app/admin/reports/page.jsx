"use client";

import AdminSidebar from "@/components/AdminSidebar";

export default function ReportsPage() {

  const reports = [
    {
      title: "تقرير الحضور",
      desc: "عرض شامل لحضور وغياب المتدربين",
      status: "جاهز",
      date: "2026-06-24"
    },
    {
      title: "تقرير الدورات",
      desc: "إحصائيات الدورات وعدد المسجلين",
      status: "محدث",
      date: "2026-06-23"
    },
    {
      title: "تقرير المتدربين",
      desc: "تفاصيل جميع المتدربين المسجلين",
      status: "جاهز",
      date: "2026-06-22"
    }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">

      <AdminSidebar />

      <main className="mr-72 p-10">

        {/* العنوان */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            التقارير
          </h1>
          <p className="text-gray-500 mt-2">
            متابعة وتحليل جميع بيانات النظام
          </p>
        </div>

        {/* الكروت */}
        <div className="grid grid-cols-3 gap-6">

          {reports.map((r, index) => (

            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition"
            >

              <h2 className="text-xl font-bold text-gray-800">
                {r.title}
              </h2>

              <p className="text-gray-500 mt-2">
                {r.desc}
              </p>

              <div className="mt-4 flex justify-between items-center">

                <span className="
                  text-sm px-3 py-1 rounded-full bg-green-100 text-green-600
                ">
                  {r.status}
                </span>

                <span className="text-xs text-gray-400">
                  {r.date}
                </span>

              </div>

              <button className="
                mt-5 w-full py-2 border border-[#0C8A4A]
                text-[#0C8A4A] rounded-lg hover:bg-[#0C8A4A] hover:text-white
              ">
                عرض التقرير
              </button>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}