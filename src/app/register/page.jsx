"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";




export default function RegisterPage() {
  const router = useRouter();

  return (
    <div className="flex h-screen">

      {/* LEFT SIDE – GREEN AREA */}
      <div className="w-1/2 bg-[#0A4B3B] relative flex flex-col items-center justify-center text-white overflow-hidden">

        {/* خطوط الخلفية */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/bg-lines.png"
            className="w-full h-full object-cover opacity-90"
          />
        </div>

           {/* زر الرجوع */}
      <button
  onClick={() => router.back()}
  className="
    absolute top-6 left-6 flex items-center h-10 rounded-full overflow-hidden 
    shadow-lg z-50
    cursor-pointer 
     transition-all duration-200
     hover:scale-105
     active:scale-95 
     "
>

  {/* الجزء الأسود الدائري الشفاف */}
  <div className="bg-black/70 backdrop-blur-md w-14 h-full flex items-center justify-center rounded-l-full">
    <ArrowLeft size={38} strokeWidth={2} className="text-white" />
  </div>

  {/* الجزء الأبيض النصي */}
  <div className="bg-white/90 px-2 h-full flex items-center text-base font-semibold text-black rounded-r-full">
    الرجوع للخلف
  </div>

</button>









        {/* اللوجو */}
        <div className="relative z-20 text-center mt-10">
          <img src="/logo.png" className="w-52 mx-auto" />
          <h1 className="text-3xl font-bold mt-4">بوابة التدريب</h1>
        </div>
      </div>

    {/* RIGHT SIDE – FORM */}
<div className="w-1/2 bg-[#F3F5F7] flex flex-col items-center py-14">

  {/* العنوان */}
  <h1 className="text-3xl font-bold mb-1">إنشاء حساب جديد</h1>
  <p className="text-gray-700 mb-10 text-lg">يرجى إدخال معلوماتك الشخصية</p>

  <div className="w-[55%]"> 
  {/* الاسم بالكامل */}
<div className="w-[115%] flex justify-end">
  <label className="font-semibold mb-1 text-base text-right">
    الاسم بالكامل
  </label>
</div>

<input
  type="text"
  placeholder="الرجاء إدخال اسمك الكامل هنا"
  className="w-[115%] p-2.5 rounded-lg border bg-white mb-4 text-sm text-right"
/>

{/* التخصص */}
<div className="w-[115%] flex justify-end">
  <label className="font-semibold mb-1 text-base text-right">
    التخصص
  </label>
</div>

<input
  type="text"
  placeholder="الرجاء إدخال تخصصك الجامعي هنا"
  className="w-[115%] p-2.5 rounded-lg border bg-white mb-4 text-sm text-right"
/>

{/* الكلية */}
<div className="w-[115%] flex justify-end">
  <label className="font-semibold mb-1 text-base text-right">
    الكلية
  </label>
</div>

<div className="relative w-[115%]">
  <select
    className="w-full p-2.5 rounded-lg border bg-white mb-4 text-sm text-right appearance-none"
  >
    <option>الرجاء اختيار الكلية</option>
    <option>كلية الهندسة</option>
    <option>كلية علوم الحاسب</option>
    <option>كلية إدارة الأعمال</option>
    <option>كلية الطب</option>
  </select>

  {/* السهم الجديد على اليسار */}
  <span className="absolute left-3 top-1/3 -translate-y-1/2 text-gray-500 pointer-events-none">
    ▼
  </span>
</div>




<style jsx>{`
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`}</style>


{/* رقم الهوية */}
<div className="w-[115%] flex justify-end">
  <label className="font-semibold mb-1 text-base text-right">
    رقم الهوية
  </label>
</div>

<input
  type="number"
  placeholder="يجب أن تكون القيمة رقمًا"
  className="w-[115%] p-2.5 rounded-lg border bg-white mb-4 text-sm text-right"
/>

{/* الجهة الموفدة */}
<div className="w-[115%] flex justify-end">
  <label className="font-semibold mb-1 text-base text-right">
    الجهة الموفدة
  </label>
</div>

<input
  type="text"
  placeholder="إدخال الجهة الموفدة"
  className="w-[115%] p-2.5 rounded-lg border bg-white mb-6 text-sm text-right"
/>

{/* زر إنشاء الحساب */}
<button
 onClick={() => router.push("/dashboard")}
  className="w-[115%] bg-[#0A4B3B] hover:bg-[#0c604c] text-white py-2 rounded-lg text-base shadow"
>
  إنشاء حساب
</button>

</div>
</div>
</div>
  );
}
