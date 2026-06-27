"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

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
  Download
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




export default function ReportsPage(){


const router = useRouter();
const pathname = usePathname();



const students=[
"عبدالله محمد موسى",
"أحمد خالد محمد",
"ناصر ياسر هادي",
"عبدالعزيز جابر صالح",
"فهد ريان عبدالرحمن",
"راكان فهد سالم",
"رائد محمد بسام",
"عبدالرحمن سليمان أحمد",
"بندر محمد خالد عيسى",
"عبدالله موسى حسن"
];



return(


<div 
dir="rtl"
className="flex min-h-screen bg-gray-50"
>



{/* Sidebar */}


<aside className="fixed right-0 top-0 h-full w-64 bg-[#083427] text-white">


<div className="py-8 flex flex-col items-center">


<Image
src="/logo.png"
width={60}
height={60}
alt="logo"
/>


<h2 className="font-bold text-xl mt-3">
بوابة التدريب
</h2>


</div>



<div className="bg-[#0C4A37] h-full p-4 space-y-3">


{
menuItems.map((item,i)=>{


const Icon=item.icon;


return(


<button
key={i}
onClick={()=>router.push(item.path)}

className={`w-full flex justify-end items-center gap-3 p-3 rounded
${pathname===item.path ? 
"bg-white/20 font-bold":
"hover:bg-white/10"}
`}

>


<span>
{item.text}
</span>


<Icon size={20}/>


</button>


)


})
}



<button className="flex justify-end gap-3 w-full p-3 mt-8">

تسجيل الخروج

<LogOut/>

</button>



</div>


</aside>








{/* Content */}


<main className="mr-64 flex-1 p-8">



{/* Header */}


<div className="flex justify-between items-center mb-8">


<div>

<h1 className="text-3xl font-bold">
عرض التقارير
</h1>


<p className="text-gray-600 text-lg mt-1">

</p>


</div>





<div className="flex items-center gap-5">


<User size={35}/>

<Bell size={30}/>


</div>



</div>






<div className="grid grid-cols-12 gap-6">





{/* قائمة الطلاب */}


<div className="col-span-3 bg-white shadow rounded-xl">


<div className="p-4 border-b">

البحث باسم الطالب

</div>



{

students.map((s,i)=>(


<div
key={i}
className="flex justify-between items-center p-3 border-b text-sm"
>


<div>

<p>
{s}
</p>

<small>
2023004711
</small>


</div>


<div className="w-10 h-10 rounded-full bg-gray-200">

</div>


</div>


))


}


</div>







{/* التقرير */}


<div className="col-span-7 bg-white shadow rounded-xl p-5">


<div className="flex justify-between">


<div>


<h2 className="font-bold text-lg">
محمد محمد محمد محمد
</h2>


<p>
2023010458
</p>


</div>



<div>


<p>
التاريخ: 2026/03/16
</p>


<p>
الوقت:10:36 م
</p>


</div>



</div>







<hr className="my-5"/>




<h2 className="font-bold text-xl">
تقرير مهمة تدريبية
</h2>


<p className="mt-3">
شرح المهمة التي عملتها، والخطوات التي اتبعتها، والنتيجة النهائية
</p>





<div className="mt-5 border h-[450px] flex items-center justify-center bg-gray-100">


<div className="text-center">


<FileText size={80} className="mx-auto text-gray-400"/>


<p className="mt-3">
file.pdf
</p>


</div>



</div>







<div className="border mt-5 p-5 text-center">


<h2 className="font-bold">
حالة التقرير
</h2>


<div className="flex justify-center gap-5 mt-5">


<button className="border px-8 py-2 rounded">
مقبول
</button>


<button className="border px-8 py-2 rounded">
مرفوض
</button>



</div>


</div>






</div>








</div>






</main>




</div>


)

}