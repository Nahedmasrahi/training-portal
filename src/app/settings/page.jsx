"use client";

import { useState } from "react";
import {
  User,
  Bell,
  Shield,
  Globe,
  Moon,
  LogOut,
} from "lucide-react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex flex-row-reverse w-full min-h-screen bg-[#F7F7F7] p-8" dir="rtl">

      <div className="w-full max-w-3xl mx-auto space-y-6">

        {/* ===== عنوان الصفحة ===== */}
        <h1 className="text-2xl font-bold text-[#083427]">
          الإعدادات
        </h1>

        {/* ===== إعدادات الحساب ===== */}
        <Card icon={<User />} title="إعدادات الحساب">
          <Input label="الاسم" value="نـاهـد مسرحي" />
          <Input label="البريد الإلكتروني" value="user@email.com" />
          <button className="btn-primary">حفظ التعديلات</button>
        </Card>

        {/* ===== الإشعارات ===== */}
        <Card icon={<Bell />} title="الإشعارات">
          <Toggle
            label="تفعيل إشعارات المنصة"
            checked={notifications}
            onChange={setNotifications}
          />
        </Card>

        {/* ===== الخصوصية ===== */}
        <Card icon={<Shield />} title="الخصوصية">
          <p className="text-gray-600 text-sm">
            يتم استخدام بياناتك فقط لأغراض التدريب والتقييم.
          </p>
        </Card>

        {/* ===== اللغة والمظهر ===== */}
        <Card icon={<Globe />} title="اللغة والمظهر">
          <div className="flex items-center justify-between">
            <span>الوضع الليلي</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`px-4 py-1 rounded-full text-sm ${
                darkMode ? "bg-[#083427] text-white" : "bg-gray-200"
              }`}
            >
              {darkMode ? "مفعل" : "غير مفعل"}
            </button>
          </div>
        </Card>

        {/* ===== معلومات الحساب ===== */}
        <Card icon={<User />} title="معلومات الحساب">
          <Info label="رقم المتدرب" value="TR-2025-114" />
          <Info label="الجهة" value="مستشفى التطوع" />
          <Info label="حالة الحساب" value="نشط" />
        </Card>

        {/* ===== تسجيل الخروج ===== */}
        <button className="w-full flex items-center justify-center gap-2 text-red-600 border border-red-200 py-3 rounded-xl hover:bg-red-50 transition">
          <LogOut size={18} />
          تسجيل الخروج
        </button>

      </div>
    </div>
  );
}

/* ================= Components ================= */

function Card({ icon, title, children }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
      <div className="flex items-center gap-3 text-[#083427] font-semibold">
        {icon}
        {title}
      </div>
      {children}
    </div>
  );
}

function Input({ label, value }) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-gray-600">{label}</label>
      <input
        defaultValue={value}
        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083427]"
      />
    </div>
  );
}

function Toggle({ label, checked, onChange }) {
  return (
    <div className="flex items-center justify-between">
      <span>{label}</span>
      <button
        onClick={() => onChange(!checked)}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
          checked ? "bg-[#083427]" : "bg-gray-300"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full transform transition ${
            checked ? "translate-x-6" : ""
          }`}
        />
      </button>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-600">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
