"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";




export default function RegisterPage() {
  const router = useRouter();

  return (
   <div className="flex h-screen bg-[#F2F4F5]">

      {/* LEFT SECTION */}
      <div className="w-1/2 bg-[#0c604c]
 flex flex-col items-center justify-center relative text-white overflow-hidden">

        {/* Background Lines */}
<div className="absolute inset-0 pointer-events-none z-0">
  <div className="absolute inset-0 bg-[url('/bg-lines.png')] bg-cover bg-no-repeat bg-left-top" />
</div>


        {/* Logo */}
        <div className="relative z-20 flex flex-col items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-40 h-40 mb-4 object-contain bg-transparent select-none"
          />
          <h1 className="text-3xl font-bold">بوابة التدريب</h1>
        </div>

        
        

       {/* Social Icons Bar */}
<div
  className="
    absolute bottom-6 left-1/2 -translate-x-1/2
    flex items-center gap-6
   
    py-3 px-12 rounded-full
    z-50
  "
>
  {/* X Icon – رابط تويتر المستشفى */}
<a href="https://x.com/ju_hospital?s=11&t=SFEUOKTv6srmDQMpJoLRBA" target="_blank">
  <img src="/twitter.png" alt="X" className="w-8 h-8 object-contain cursor-pointer" />
</a>

{/* WhatsApp – رقم الواتساب */}
<a href="https://wa.me/0173296778" target="_blank">
  <img src="/whatsapp.png" alt="WhatsApp" className="w-8 h-8 object-contain cursor-pointer" />
</a>

{/* Mail – البريد الإلكتروني */}
<a href="mailto:JUH@jazanu.edu.sa">
  <img src="/round.png" alt="Mail" className="w-8 h-8 object-contain cursor-pointer" />
</a>

{/* Phone – الاتصال المباشر */}
<a href="tel:0173295700">
  <img src="/call.png" alt="Call" className="w-8 h-8 object-contain cursor-pointer" />
</a>

</div>

          {/* زر الرجوع */}
<button
  onClick={() => router.back()}
  aria-label="الرجوع للصفحة السابقة"
  className="
    group
    absolute top-6 left-6 z-50
    flex items-center h-11
    rounded-full overflow-hidden
    bg-black/60 backdrop-blur-md
    shadow-xl
    transition-all duration-300 ease-out
    hover:bg-black/75
    hover:shadow-2xl
    active:scale-95
  "
>

  {/* الأيقونة */}
  <span
    className="
      w-12 h-full
      flex items-center justify-center
      transition-transform duration-300
      group-hover:-translate-x-1
    "
  >
    <ArrowLeft size={26} strokeWidth={2.2} className="text-white" />
  </span>

  {/* النص */}
  <span
    className="
      max-w-0 overflow-hidden
      whitespace-nowrap
      text-sm font-medium text-white
      transition-all duration-300
      group-hover:max-w-xs
      group-hover:px-4
    "
  >
    الرجوع للخلف
  </span>

</button>










        
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

<div className="relative w-[115%] group">
      <select
      onChange={(e) => e.target.blur()}
        className="w-full p-2.5 pr-4 pl-10 rounded-lg border bg-white mb-4 text-sm text-right appearance-none focus:outline-none peer transition-all"
      >
        <option>الرجاء اختيار الكلية</option>
        <option>كلية الهندسة</option>
        <option>كلية علوم الحاسب</option>
        <option>كلية إدارة الأعمال</option>
        <option>كلية الطب</option>
      </select>

      {/* السهم */}
      <span className="absolute left-3 top-[35%] -translate-y-1/2 text-gray-400   duration-300 peer-focus:rotate-180 ">
        <ChevronDownIcon className="w-5 h-5" />
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
