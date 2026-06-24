"use client";

import AdminSidebar from "@/components/AdminSidebar";

export default function CoursesPage() {

  const courses = [
    {
      name: "أساسيات البرمجة",
      trainer: "أحمد علي",
      students: 45,
      duration: "4 أسابيع",
      status: "نشطة"
    },
    {
      name: "تطوير الويب",
      trainer: "سارة محمد",
      students: 32,
      duration: "6 أسابيع",
      status: "مكتملة"
    },
    {
      name: "قواعد البيانات",
      trainer: "خالد عبدالله",
      students: 28,
      duration: "5 أسابيع",
      status: "نشطة"
    }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">

      <AdminSidebar />

      <main className="mr-72 p-10">

        {/* العنوان */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            البرامج والدورات
          </h1>
          <p className="text-gray-500 mt-2">
            إدارة ومتابعة جميع الدورات التدريبية
          </p>
        </div>

        {/* الكروت */}
        <div className="grid grid-cols-3 gap-6">

          {courses.map((c, index) => (

            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition"
            >

              <h2 className="text-xl font-bold text-gray-800">
                {c.name}
              </h2>

              <p className="text-gray-500 mt-2">
                المدرب: {c.trainer}
              </p>

              <p className="text-gray-500 mt-1">
                عدد المتدربين: {c.students}
              </p>

              <p className="text-gray-500 mt-1">
                المدة: {c.duration}
              </p>

              <div className="mt-4 flex justify-between items-center">

                <span className={`
                  text-sm px-3 py-1 rounded-full
                  ${c.status === "نشطة"
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-100 text-gray-600"}
                `}>
                  {c.status}
                </span>

              </div>

              <button className="
                mt-5 w-full py-2 border border-[#0C8A4A]
                text-[#0C8A4A] rounded-lg hover:bg-[#0C8A4A] hover:text-white
              ">
                عرض التفاصيل
              </button>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}