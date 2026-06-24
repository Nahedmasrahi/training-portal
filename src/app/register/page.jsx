"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { registerUser } from "@/services/authService";
import { ArrowLeft } from "lucide-react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function RegisterPage() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    idNumber: "",
    phoneNumber: "",
    major: "",
    entity: "",
    college: "",
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleRegister = async () => {

    try {

      setLoading(true);
      setErrorMessage("");

      const payload = {
        full_name: form.name,
        email: form.email,
        password: form.password,
        national_id: form.idNumber,
        phone_number: form.phoneNumber,
        major: form.major,
        sponsoring_entity: form.entity,
        college_id: form.college,
      };

      await registerUser(payload);

      alert("تم إنشاء الحساب بنجاح 🎉");

      router.push("/login");

    } catch (err) {

      setErrorMessage(
        err.message ||
        err?.response?.data?.message ||
        "حدث خطأ أثناء إنشاء الحساب"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="flex h-screen bg-[#F2F4F5] overflow-hidden">

      {/* LEFT SECTION */}
      <div className="w-1/2 bg-[#0c604c] flex flex-col items-center justify-center relative text-white overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[url('/bg-lines.png')] bg-cover bg-no-repeat bg-left-top" />
        </div>

        {/* Logo */}
        <div className="relative z-20 flex flex-col items-center">

          <img
            src="/logo.png"
            alt="Logo"
            className="w-40 h-40 mb-4 object-contain"
          />

          <h1 className="text-3xl font-bold">
            بوابة التدريب
          </h1>

        </div>

        {/* Social Icons */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 py-3 px-12 rounded-full z-50">

          <a
            href="https://x.com/ju_hospital?s=11&t=SFEUOKTv6srmDQMpJoLRBA"
            target="_blank"
          >
            <img
              src="/twitter.png"
              className="w-8 h-8 object-contain"
            />
          </a>

          <a
            href="https://wa.me/0173296778"
            target="_blank"
          >
            <img
              src="/whatsapp.png"
              className="w-8 h-8 object-contain"
            />
          </a>

          <a href="mailto:JUH@jazanu.edu.sa">
            <img
              src="/round.png"
              className="w-8 h-8 object-contain"
            />
          </a>

          <a href="tel:0173295700">
            <img
              src="/call.png"
              className="w-8 h-8 object-contain"
            />
          </a>

        </div>

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="group absolute top-6 left-6 z-50 flex items-center h-11 rounded-full overflow-hidden bg-black/60 backdrop-blur-md shadow-xl transition-all hover:bg-black/75 active:scale-95"
        >

          <span className="w-12 h-full flex items-center justify-center group-hover:-translate-x-1">

            <ArrowLeft
              size={26}
              className="text-white"
            />

          </span>

          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium text-white group-hover:max-w-xs group-hover:px-4 transition-all">
            الرجوع للخلف
          </span>

        </button>

      </div>

      {/* RIGHT FORM */}
      <div className="w-[42%] bg-[#F3F5F7] flex flex-col justify-center items-center px-8">

        <h1 className="text-2xl font-bold mb-1">
          إنشاء حساب جديد
        </h1>

        <p className="text-gray-700 mb-5 text-base">
          يرجى إدخال معلوماتك الشخصية
        </p>

        <div className="w-[48%] space-y-2">

          {/* الاسم */}
          <div>

            <label className="font-semibold mb-1 text-sm block text-right">
              الاسم بالكامل
            </label>

            <input
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="الرجاء إدخال اسمك الكامل هنا"
              className="w-full p-2.5 rounded-lg border bg-white text-sm text-right outline-none"
            />

          </div>

          {/* البريد الإلكتروني + كلمة المرور */}
          <div className="grid grid-cols-2 gap-3">

            {/* كلمة المرور */}
            <div>

              <label className="font-semibold mb-1 text-sm block text-right">
                كلمة المرور
              </label>

              <input
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="********"
                className="w-full p-2.5 rounded-lg border bg-white text-sm text-right outline-none"
              />

            </div>

            {/* البريد الإلكتروني */}
            <div>

              <label className="font-semibold mb-1 text-sm block text-right">
                البريد الإلكتروني
              </label>

              <input
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="example@gmail.com"
                className="w-full p-2.5 rounded-lg border bg-white text-sm text-right outline-none"
              />

            </div>

          </div>

          {/* رقم الهوية */}
          <div>

            <label className="font-semibold mb-1 text-sm block text-right">
              رقم الهوية
            </label>

            <input
              name="idNumber"
              onChange={handleChange}
              type="number"
              placeholder="يجب أن تكون القيمة رقمًا"
              className="w-full p-2.5 rounded-lg border bg-white text-sm text-right outline-none"
            />

          </div>

          {/* رقم الهاتف */}
          <div>

            <label className="font-semibold mb-1 text-sm block text-right">
              رقم الهاتف
            </label>

            <input
              name="phoneNumber"
              onChange={handleChange}
              type="tel"
              placeholder="05xxxxxxxx"
              className="w-full p-2.5 rounded-lg border bg-white text-sm text-right outline-none"
            />

          </div>

          {/* التخصص */}
          <div>

            <label className="font-semibold mb-1 text-sm block text-right">
              التخصص
            </label>

            <input
              name="major"
              onChange={handleChange}
              type="text"
              placeholder="الرجاء إدخال تخصصك الجامعي هنا"
              className="w-full p-2.5 rounded-lg border bg-white text-sm text-right outline-none"
            />

          </div>

          {/* الجهة الموفدة */}
          <div>

            <label className="font-semibold mb-1 text-sm block text-right">
              الجهة الموفدة
            </label>

            <input
              name="entity"
              onChange={handleChange}
              type="text"
              placeholder="إدخال الجهة الموفدة"
              className="w-full p-2.5 rounded-lg border bg-white text-sm text-right outline-none"
            />

          </div>

          {/* الكلية */}
          <div>

            <label className="font-semibold mb-1 text-sm block text-right">
              الكلية
            </label>

            <div className="relative">

              <select
                name="college"
                onChange={handleChange}
                className="w-full p-2.5 pr-4 pl-10 rounded-lg border bg-white text-sm text-right appearance-none outline-none"
              >

                <option value="">
                  الرجاء اختيار الكلية
                </option>

                <option value="1">
                  كلية الهندسة
                </option>

                <option value="2">
                  كلية علوم الحاسب
                </option>

                <option value="3">
                  كلية إدارة الأعمال
                </option>

                <option value="4">
                  كلية الطب
                </option>

              </select>

              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">

                <ChevronDownIcon className="w-5 h-5" />

              </span>

            </div>

          </div>

          {/* رسالة الخطأ */}
          {errorMessage && (

            <div className="w-full flex items-center justify-center gap-2 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-xs shadow-sm">

              <span className="text-center">
                {errorMessage}
              </span>

            </div>

          )}

          {/* زر إنشاء الحساب */}
          <button
            onClick={handleRegister}
            disabled={loading}
            className="w-full bg-[#0A4B3B] hover:bg-[#0c604c] text-white py-2.5 rounded-lg text-sm shadow"
          >

            {loading
              ? "جاري إنشاء الحساب..."
              : "إنشاء حساب"}

          </button>

        </div>

      </div>

    </div>

  );
}