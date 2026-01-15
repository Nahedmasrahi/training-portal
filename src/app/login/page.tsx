"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  User,
  Lock,
  X,
  Phone,
  Mail,
  MessageCircle
} from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
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




      </div>

      {/* RIGHT SECTION - FORM */}
      <div className="w-1/2 flex items-center justify-center px-6">
        <div className="bg-white rounded-xl shadow-lg p-10 w-[420px]">

          <h2 className="text-3xl font-bold mb-2 text-center">تسجيل الدخول</h2>
          <p className="text-gray-600 text-center mb-8">
            أدخل بياناتك للدخول إلى بوابة التدريب
          </p>



{/* USERNAME */}
<label className="block font-semibold mb-2 text-right">اسم المستخدم</label>

<div className="relative">
  <Input
    type="text"
    placeholder="أدخل اسم المستخدم"
    className="w-full py-3 pl-12 pr-10 rounded-lg text-right"
  />

  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
    <UserIcon className="w-5 h-5" />
  </span>
</div>


          {/* PASSWORD */}
          <label className="block font-semibold mb-2 text-right">كلمة المرور</label>
          <div className="relative mb-2">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="أدخل كلمة المرور"
              className="w-full py-3 pl-12 pr-9 rounded-lg text-right"

              autoComplete="new-password"
            />

            {/* Lock Icon */}
            <Lock
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={20}
            />

            {/* Eye Toggle */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
          </div>

          <p className="text-sm text-gray-600 mb-6 cursor-pointer">
            هل نسيت اسم المستخدم أو كلمة السر ؟
          </p>

          {/* LOGIN BUTTON */}
          <Button
           onClick={() => router.push("/dashboard")}
           className="w-full bg-[#0A4B3B] hover:bg-[#0c604c] text-white py-3 text-lg rounded-lg">
            تسجيل الدخول
          </Button>

         <p className="text-center text-gray-700 mt-4">
  ليس لديك حساب؟{" "}
  <a
    href="/register"
    className="text-[#0A4B3B] font-bold cursor-pointer hover:underline"
  >
    إنشاء حساب
  </a>
</p>

        </div>
      </div>

    </div>
  );
}
