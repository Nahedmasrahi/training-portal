"use client";

import {
  ArrowRight,
  CalendarDays,
  Clock3,
  CheckCircle2,
  MessageSquareText,
} from "lucide-react";

import Image from "next/image";

import {
  useRouter,
  useParams,
} from "next/navigation";

import {
  useEffect,
  useState,
} from "react";

export default function ReportDetailsPage() {

  const router = useRouter();

  const params = useParams();

  /* ================= USER IMAGE ================= */

  const [userImage, setUserImage] =
    useState("/avatar.png");

  useEffect(() => {

    const savedImage =
      localStorage.getItem("userImage");

    if (savedImage) {
      setUserImage(savedImage);
    }

  }, []);

  /* ================= REPORT DATA ================= */

  const [report, setReport] =
    useState(null);

  useEffect(() => {

    const reports =
      JSON.parse(localStorage.getItem("reports")) || [];

    const foundReport = reports.find(
      (r) => r.id == params.id
    );

    if (foundReport) {
      setReport(foundReport);
    }

  }, [params.id]);

  if (!report) {

    return (

      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          text-2xl
          font-bold
        "
      >

        جاري تحميل التقرير...

      </div>

    );

  }

  return (

    <div
      className="min-h-screen bg-[#F5F5F5]"
      dir="rtl"
    >

      {/* ================= TOP BAR ================= */}
      <div className="bg-[#13804B] h-16 flex items-center justify-between px-4">

        <div className="w-32"></div>

        {/* زر الرجوع */}
        <button
          onClick={() =>
            router.push("/reports")
          }
          className="
            group
            bg-black
            text-white
            h-11
            rounded-full
            flex items-center
            overflow-hidden
            transition-all duration-300
            hover:pr-4 hover:pl-5
            px-4
          "
        >

          <span
            className="
              max-w-0
              overflow-hidden
              whitespace-nowrap
              text-sm
              font-medium
              transition-all duration-300
              group-hover:max-w-[180px]
              group-hover:ml-3
            "
          >

            الرجوع للخلف

          </span>

          <ArrowRight
            size={18}
            className="flex-shrink-0"
          />

        </button>

      </div>

      {/* ================= CONTENT ================= */}
      <div className="grid grid-cols-12 min-h-[calc(100vh-64px)] [direction:ltr]">

        {/* ================= PDF SIDE ================= */}
        <div className="col-span-9 bg-white border-r min-h-screen">

          {/* ================= HEADER ================= */}
          <div className="border-b px-7 py-5">

            <div className="flex flex-row justify-between items-start">

              {/* التاريخ */}
              <div className="text-right">

                <div className="flex flex-row-reverse gap-2 items-center">

                  <span className="text-[16px] font-bold text-gray-700">
                    التاريخ
                  </span>

                  <span className="text-[16px] font-semibold text-black">
                    {report.date}
                  </span>

                </div>

                <div className="flex flex-row-reverse gap-2 items-center mt-1">

                  <span className="text-[16px] font-bold text-gray-700">
                    الوقت
                  </span>

                  <span className="text-[15px] font-semibold text-black">
                    {report.time}
                  </span>

                </div>

              </div>

              {/* الاسم والصورة */}
              <div className="flex items-center gap-3">

                {/* بيانات الطالب */}
                <div className="text-right mr-2">

                  <h2
                    className="
                      text-[23px]
                      font-bold
                      text-gray-900
                      leading-tight
                    "
                  >
                    عبدالرحمن سليمان
                  </h2>

                  <p
                    className="
                      text-[15px]
                      text-gray-500
                      mt-1
                      font-medium
                    "
                  >
                    2023010458
                  </p>

                </div>

                {/* الصورة */}
                <div
                  className="
                    w-16 h-16
                    rounded-full
                    overflow-hidden
                    border border-gray-200
                    bg-gray-100
                  "
                >

                  <Image
                    src={userImage}
                    alt="avatar"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />

                </div>

              </div>

            </div>

          </div>

          {/* ================= REPORT DETAILS ================= */}
          <div className="p-8">

            {/* عنوان التقرير */}
            <div className="text-right mb-4 mr-2">

              <h1
                className="
                  text-[25px]
                  font-bold
                  text-black
                  mb-3
                "
              >

                {report.title}

              </h1>

              <p
                className="
                  text-[18px]
                  text-gray-600
                  leading-relaxed
                  max-w-4xl
                  ml-auto
                "
              >

                {report.description}

              </p>

            </div>

            {/* ================= PDF VIEWER ================= */}
            <div className="flex justify-center mt-4">

              <div
                className="
                  w-full
                  max-w-[850px]
                  h-[1100px]
                  border
                  border-gray-300
                  bg-white
                  overflow-hidden
                  shadow-sm
                  rounded-md
                "
              >

                <iframe
                  src={report.fileUrl}
                  className="w-full h-full bg-white"
                  title="PDF Viewer"
                />

              </div>

            </div>

          </div>

        </div>

        {/* ================= SIDEBAR ================= */}
        <div className="col-span-3 bg-[#FAFAFA]">

          {/* التاريخ والوقت */}
          <div className="border-b p-6">

            <div className="flex items-start justify-between mb-8">

              <Clock3
                size={22}
                className="text-gray-700"
              />

              <div className="text-right">

                <p className="text-gray-500 text-sm">
                  التاريخ
                </p>

                <p className="text-xl font-bold mt-1">
                  {report.date}
                </p>

              </div>

            </div>

            <div className="flex items-start justify-between">

              <CalendarDays
                size={22}
                className="text-gray-700"
              />

              <div className="text-right">

                <p className="text-gray-500 text-sm">
                  الوقت
                </p>

                <p className="text-xl font-bold mt-1">
                  {report.time}
                </p>

              </div>

            </div>

          </div>

          {/* حالة التقرير */}
          <div className="border-b p-6">

            <div className="flex items-center justify-between">

              <div
                className="
                  flex items-center gap-2
                  bg-yellow-100
                  text-yellow-700
                  px-4 py-1
                  rounded-lg
                  text-sm
                  font-bold
                "
              >

                <CheckCircle2 size={16} />

                قيد المراجعة

              </div>

              <p className="text-xl font-bold">
                حالة التقرير
              </p>

            </div>

          </div>

          {/* ملاحظات المشرف */}
          <div className="p-6">

            <div className="flex items-center justify-end gap-2 mb-6">

              <p className="text-2xl font-bold">
                ملاحظات المشرف
              </p>

              <MessageSquareText size={22} />

            </div>

            

          </div>

        </div>

      </div>

    </div>
  );
}