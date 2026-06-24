"use client";

import AdminSidebar from "@/components/AdminSidebar";

export default function AttendancePage() {

  const students = [
    {
      id: "1001",
      name: "أحمد محمد",
      studentId: "ST-7781",
      checkIn: "08:00 ص",
      checkOut: "02:00 م",
      hours: 6,
      date: "2026-06-24",
      status: "حاضر"
    },
    {
      id: "1002",
      name: "سارة علي",
      studentId: "ST-7782",
      checkIn: "08:10 ص",
      checkOut: "02:05 م",
      hours: 5.9,
      date: "2026-06-24",
      status: "متأخر"
    },
    {
      id: "1003",
      name: "خالد عبدالله",
      studentId: "ST-7783",
      checkIn: "-",
      checkOut: "-",
      hours: 0,
      date: "2026-06-24",
      status: "غائب"
    }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">

      <AdminSidebar />

      <main className="mr-72 p-10">

        {/* العنوان */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            الحضور والغياب
          </h1>
          <p className="text-gray-500 mt-2">
            متابعة حضور المتدربين بشكل يومي
          </p>
        </div>

        {/* الجدول */}
        <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">

          <table className="w-full text-sm text-right">

            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-4">#</th>
                <th className="p-4">اسم الطالب</th>
                <th className="p-4">ID الطالب</th>
                <th className="p-4">الرقم الجامعي</th>
                <th className="p-4">الحضور</th>
                <th className="p-4">الانصراف</th>
                <th className="p-4">ساعات الدوام</th>
                <th className="p-4">التاريخ</th>
                <th className="p-4">الحالة</th>
              </tr>
            </thead>

            <tbody>

              {students.map((s, index) => {

                const statusColor =
                  s.status === "حاضر"
                    ? "text-green-600 bg-green-100"
                    : s.status === "متأخر"
                    ? "text-yellow-600 bg-yellow-100"
                    : "text-red-600 bg-red-100";

                return (
                  <tr key={s.id} className="border-b hover:bg-gray-50">

                    <td className="p-4">{index + 1}</td>
                    <td className="p-4 font-medium">{s.name}</td>
                    <td className="p-4">{s.id}</td>
                    <td className="p-4">{s.studentId}</td>
                    <td className="p-4">{s.checkIn}</td>
                    <td className="p-4">{s.checkOut}</td>
                    <td className="p-4">{s.hours}</td>
                    <td className="p-4">{s.date}</td>

                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs ${statusColor}`}>
                        {s.status}
                      </span>
                    </td>

                  </tr>
                );

              })}

            </tbody>

          </table>

        </div>

      </main>

    </div>
  );
}