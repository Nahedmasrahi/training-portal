"use client";

import { useMemo, useRef, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { FileText, ChevronDown, CloudUpload, ArrowLeft } from "lucide-react";

export default function AssignmentUploadPage() {
  const router = useRouter();
  const { slug } = useParams();
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "1";

  const fileInputRef = useRef(null);
  const [pickedFile, setPickedFile] = useState(null);
  const [desc, setDesc] = useState("");

  const info = useMemo(() => {
    const map = {
      "1": { title: "الواجب الأول", due: "2025/12/12 11:59 PM", attempts: "2 محاولتان" },
      "2": { title: "الواجب الثاني", due: "2025/12/12 10:59 PM", attempts: "2 محاولتان" },
      "3": { title: "الواجب الثالث", due: "2025/12/12 9:30 PM", attempts: "2 محاولتان" },
    };
    return map[id] || { title: `الواجب رقم ${id}`, due: "—", attempts: "—" };
  }, [id]);

  return (
    <div className="w-full">
     
     <div className="flex items-center justify-between mb-8">
  {/* العنوان (يمين) */}
  <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-right">
    {info.title}
  </h1>

  {/* زر الرجوع (يسار) */}
  <button
  onClick={() => router.push(`/courses/${slug}/content`)}
  className="flex flex-row-reverse items-center gap-2 text-gray-700 hover:text-gray-900"
>
  <ArrowLeft size={18} />
  رجوع
</button>

</div>


     
      <div className="flex flex-col md:flex-row-reverse gap-10">

        {/* يسار: المعلومات والتفاصيل */}
        <div className="md:w-[24%]">
          <div className="text-right">
            <h3 className="font-extrabold text-gray-900 mb-4">
              المعلومات والتفاصيل
            </h3>

            <div className="border-r border-gray-300 pr-6 space-y-12">
              <div>
                <div className="text-gray-700 font-semibold mb-2">موعد التسليم:</div>
                <div className="text-gray-900">{info.due}</div>
              </div>

              <div>
                <div className="text-gray-700 font-semibold mb-2">عدد المحاولات</div>
                <div className="text-gray-900">{info.attempts}</div>
              </div>
            </div>
          </div>
        </div>

        {/* يمين: الرفع */}
        <div className="md:w-[76%]">
          {/* ملف التكليف */}
          <div className="border border-gray-300 rounded-none p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="text-gray-700" />
              <span className="font-semibold text-gray-900">Assignment.pdf</span>
            </div>
            <ChevronDown className="text-gray-700" />
          </div>

         {/* صندوق الرفع */}
<div className="border border-gray-300 rounded-none mt-6 p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* دروب زون (يمين) */}
    <div className="text-right md:order-1">
      <div className="border-2 border-dashed border-gray-400 rounded-none p-6 flex flex-col items-center justify-center gap-3 h-44">
        <CloudUpload size={44} className="text-gray-400" />
        <div className="text-gray-800 font-semibold">انزل الملف هنا</div>
        <div className="text-gray-500 text-sm">أو</div>

        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={(e) => setPickedFile(e.target.files?.[0] || null)}
        />

        <button
          onClick={() => fileInputRef.current?.click()}
          className="bg-green-700 hover:bg-green-800 text-white px-10 py-2 rounded-md text-sm font-semibold"
        >
          إرفاق ملف
        </button>
      </div>

      {pickedFile && (
        <div className="mt-3 text-sm text-gray-700">
          ✅ تم اختيار: <span className="font-semibold">{pickedFile.name}</span>
        </div>
      )}
    </div>

    {/* الوصف (يسار) */}
    <div className="text-right md:order-2 h-full flex flex-col">
  <label className="block text-gray-700 mb-2">إضافة وصف</label>
  <textarea
    value={desc}
    onChange={(e) => setDesc(e.target.value)}
    className="w-full border border-gray-300 rounded-none p-3 flex-1 outline-none resize-none"
  />
</div>


  </div>

          </div>

          
          <div className="mt-12 flex justify-end">
            <button
              onClick={() => alert("تم الإرسال (محاكاة)")}
              className="bg-green-700 hover:bg-green-800 text-white px-24 py-3 rounded-md text-sm font-bold"
            >
              إرسال
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
