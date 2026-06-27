"use client";
import { Users, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import {
  Home,
  BarChart2,
  FileText,
  ClipboardList,
  Star,
  User,
  Settings,
  CalendarDays,
  LogOut,
  Bell,
  Download,
  ChevronLeft
} from "lucide-react";



const menuItems = [
  { text: "الصفحة الرئيسية", icon: Home, path: "/admin" },
  { text: "الحضور والغياب", icon: BarChart2, path: "/admin/attendance" },
  { text: "عرض التقارير", icon: FileText, path: "/admin/reports" },
  { text: "البرامج والدورات", icon: CalendarDays, path: "/admin/courses" },
  { text: "الإستبيانات", icon: ClipboardList, path: "/admin/surveys" },
  { text: "التقييمات", icon: Star, path: "/admin/evaluations" },
  { text: "التقويم", icon: CalendarDays, path: "/calendar" },
  { text: "الملف الشخصي", icon: User, path: "/profile" },
  { text: "الإعدادات", icon: Settings, path: "/settings" },
];



export default function AdminDashboard() {


const router = useRouter();
const pathname = usePathname();
const [showNotifications, setShowNotifications] = useState(false);


const reports = [
"تقرير برنامج سحب الدم",
"تقرير برنامج سحب الدم",
"تقرير برنامج سحب الدم",
"تقرير برنامج سحب الدم",
];


const notifications=[
"تم إضافة متدربين في برنامج سحب الدم",
"تم رفع تقرير جديد",
"تم إضافة استبيان جديد",
];



return (

<div 
className="flex min-h-screen bg-gray-50"
dir="rtl"
>



{/* Sidebar */}

<aside className="fixed top-0 right-0 h-full w-64 bg-[#083427] text-white flex flex-col z-50">


<div className="py-8 px-4 flex flex-col items-center space-y-3">

<Image
src="/logo.png"
width={60}
height={60}
alt="logo"
/>

<h2 className="text-xl font-bold">
بوابة التدريب
</h2>

</div>



<div className="border-b border-white/20"/>



<div className="bg-[#0C4A37] flex-1 px-4 py-4 space-y-2">


{
menuItems.map((item,index)=>{

const Icon=item.icon;

const active=pathname===item.path;


return(

<button
key={index}
onClick={()=>router.push(item.path)}

className={`w-full flex justify-end items-center gap-3 px-3 py-2 rounded-md
${active ? "bg-white/20 font-semibold":"text-white/80 hover:bg-white/10"}
`}
>


<span>{item.text}</span>

<Icon size={18}/>


</button>

)

})
}



<button className="w-full flex justify-end items-center gap-3 px-3 py-2 mt-6">

<span>
تسجيل الخروج
</span>

<LogOut size={18}/>

</button>



</div>



</aside>






{/* Dashboard */}

<main className="flex-1 mr-64 p-8 text-gray-800">


{/* Header */}


<div className="flex justify-between items-center mb-8">


<div>

<h1 className="text-3xl font-bold">
مرحباً ياسر
</h1>


<p className="text-gray-600 text-lg mt-1">
كن على اطلاع بكل ما يحدث في جامعتك
</p>


</div>





<div className="flex items-center gap-5">

<User size={35}/>


<Bell
size={30}
className="cursor-pointer"
onClick={()=>router.push("/admin/notifications")}
/>


</div>



</div>





<div className="grid grid-cols-12 gap-6">





<div className="col-span-5 space-y-8">



<div className="bg-white shadow rounded-xl p-5 w-full flex items-center justify-between">



  {/* المعلومات */}
  <div className="text-right">


    <h3 className="font-bold text-sm">
      الحضور والغياب
    </h3>


    <p className="mt-3 text-xs">
      برنامج سحب الدم
    </p>


    <p className="mt-3 text-xs flex items-center gap-1">
      <Users size={14}/>52 طالب
    </p>


    <button className="bg-green-700 text-white text-xs px-3 py-1 rounded mt-4">
      عرض التفاصيل
    </button>


  </div>




  {/* دائرة النسبة */}
  <div className="flex flex-col items-center">

    <div className="relative w-20 h-20">

      <svg className="w-full h-full rotate-[-90deg]">

        <circle
          cx="50%"
          cy="50%"
          r="35%"
          stroke="#E5E7EB"
          strokeWidth="6"
          fill="none"
        />


        <circle
          cx="50%"
          cy="50%"
          r="35%"
          stroke="#0C8A4A"
          strokeWidth="6"
          fill="none"
          strokeDasharray="87 100"
          strokeLinecap="round"
        />

      </svg>


      <p className="absolute inset-0 flex items-center justify-center text-sm font-bold">
        87%
      </p>


    </div>


    <p className="mt-2 text-xs">
      نسبة الحضور
    </p>


  </div>



</div>





<div className="bg-white rounded-xl shadow w-full">


<h2 className="font-bold text-xl p-5">
آخر التقارير
</h2>



{
reports.map((r,i)=>(


<div key={i} className="flex justify-between items-center p-5 border-t">


<p>
{r}
</p>


<FileText size={18}/>


</div>


))
}




<button className="bg-green-700 text-white text-xs px-3 py-1 rounded mt-3 mb-4 mr-5">
عرض التفاصيل
</button>


</div>




</div>









<div className="col-span-6 space-y-6">


<div className="bg-white rounded-2xl shadow p-5 w-full">


<h2 className="font-bold text-xl mb-5">
التنبيهات
</h2>



{
notifications.map((n,i)=>(

<div 
key={i} 
className="flex justify-between items-center border-b py-5 text-sm"
>


<span>
{n}
</span>


<ChevronLeft size={18}/>


</div>


))
}



<button 
className="bg-green-700 text-white text-xs px-4 py-1 rounded mt-3 mb-3 mr-5"
>
عرض التفاصيل
</button>



</div>





<div className="bg-white rounded-2xl shadow p-5 w-full">


<h2 className="font-bold text-xl mb-5">
البرامج التدريبية
</h2>



<div className="flex gap-4 items-center">





<div className="flex-1 text-right">


<h3 className="font-bold text-sm">
برنامج سحب الدم
</h3>


<div className="flex justify-end gap-2 mt-4 text-xs">


<span className="border rounded-lg px-3 py-2 bg-white flex items-center gap-1">
<Users size={14}/>35 طالب
</span>


<span className="border rounded-lg px-3 py-2 bg-white flex items-center gap-1">
<Clock size={14}/>10:00 صباحاً
</span>


<span className="border rounded-lg px-3 py-2 bg-white flex items-center gap-1">
<MapPin size={14}/> قاعة التدريب
</span>


</div>



<button className="bg-green-700 text-white text-xs px-3 py-1 rounded mt-4">
عرض التفاصيل
</button>


</div>





<Image
  src="/blood.jpg"
  width={150}
  height={150}
  alt="برنامج سحب الدم"
  className="rounded-lg object-cover"
/>




</div>







</div>



{/* المهام القادمة */}

<div className="bg-white rounded-2xl shadow p-5 w-full">


<h2 className="font-bold text-xl mb-5">
المهام القادمة
</h2>



<div className="grid grid-cols-4 gap-3">


<div className="border rounded-lg p-5 text-center">
<p>
Task1
</p>

<span className="text-xs text-gray-400">
11 Dec
</span>

</div>



<div className="border rounded-lg p-5 text-center">
<p>
Task2
</p>

<span className="text-xs text-gray-400">
15 Dec
</span>

</div>



<div className="border rounded-lg p-5 text-center">
<p>
Task3
</p>

<span className="text-xs text-gray-400">
17 Dec
</span>

</div>



<div className="border rounded-lg p-5 text-center">
<p>
Task4
</p>

<span className="text-xs text-gray-400">
28 Dec
</span>

</div>


</div>




<button className="bg-green-700 text-white text-xs px-3 py-1 rounded mt-3">
عرض التفاصيل
</button>



</div>



</div>















</div>



</main>



</div>

)


}