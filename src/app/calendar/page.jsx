"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Bell, UserCircle } from "lucide-react";


const MONTHS = [
  "يناير","فبراير","مارس","أبريل","مايو","يونيو",
  "يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarPage() {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(today.getDate());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const events = [9, 11, 15, 17, 28]; // أيام فيها أحداث

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(y => y - 1);
    } else {
      setCurrentMonth(m => m - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(y => y + 1);
    } else {
      setCurrentMonth(m => m + 1);
    }
  };

  return (
    <div className="flex flex-row-reverse min-h-screen bg-[#F7F7F7]" dir="rtl">


      {/* ===== Main ===== */}
      <main className="flex-1 p-8">

        {/* ===== Header ===== */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">مرحباً ياسر</h1>
            <p className="text-gray-500 text-sm">
              كن على اطلاع بكل ما يحدث في جامعتك
            </p>
          </div>
          <div className="flex items-center gap-4">
  <UserCircle size={32} className="text-gray-700 cursor-pointer" />
  <Bell size={26} className="text-gray-700 cursor-pointer" />
</div>
        </div>

        <div className="grid grid-cols-12 gap-6">

          {/* ===== جدول اليوم ===== */}
          <div className="col-span-3 bg-white rounded-xl p-5 shadow">
            <h3 className="font-bold mb-4">جدول اليوم</h3>
            <ul className="text-sm space-y-3 text-gray-700">
              <li>8:00 - 9:00 صباحاً</li>
              <li>9:00 - 10:00 صباحاً</li>
              <li>10:00 - 11:00 صباحاً</li>
              <li>11:00 - 12:00 مساءً</li>
              <li>12:00 - 1:00 مساءً</li>
              <li>1:00 - 2:00 مساءً</li>
              <li>2:00 - 3:00 مساءً</li>
            </ul>
          </div>

          {/* ===== التقويم ===== */}
          <div className="col-span-9 bg-white rounded-xl p-6 shadow">

            {/* Month Header */}
            <div className="flex items-center justify-between mb-6">
              <button onClick={prevMonth}>
                <ChevronRight />
              </button>

              <h2 className="text-xl font-bold">
                {MONTHS[currentMonth]} {currentYear}
              </h2>

              <button onClick={nextMonth}>
                <ChevronLeft />
              </button>
            </div>

            {/* Days */}
            <div className="grid grid-cols-7 text-center text-sm mb-3 text-gray-500">
              {DAYS.map(day => (
                <div key={day}>{day}</div>
              ))}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 gap-y-3 text-center">
              {[...Array(firstDay)].map((_, i) => (
                <div key={i}></div>
              ))}

              {[...Array(daysInMonth)].map((_, i) => {
                const day = i + 1;
                const isSelected = day === selectedDate;
                const hasEvent = events.includes(day);

                return (
                  <div
                    key={day}
                    onClick={() => setSelectedDate(day)}
                    className={`relative cursor-pointer mx-auto w-10 h-10 flex items-center justify-center rounded-full
                      ${isSelected ? "bg-green-200 font-bold" : "hover:bg-gray-100"}
                    `}
                  >
                    {day}
                    {hasEvent && (
                      <span className="absolute bottom-1 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex justify-end">
              <button className="bg-green-700 text-white px-5 py-2 rounded-lg text-sm">
                إضافة حدث
              </button>
            </div>
          </div>




        </div>









        {/* ===== المهام القادمة ===== */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow">
          <h3 className="font-bold mb-4">المهام القادمة</h3>

          <div className="grid grid-cols-4 gap-4">
            {[
              { title: "Task1", date: "11 Dec" },
              { title: "Task2", date: "15 Dec" },
              { title: "Task3", date: "17 Dec" },
              { title: "Task4", date: "28 Dec" },
            ].map(task => (
              <div
                key={task.title}
                className="border rounded-lg p-4 text-sm"
              >
                <p className="font-semibold">{task.title}</p>
                <p className="text-gray-500">{task.date}</p>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
