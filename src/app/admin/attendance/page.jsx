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
  Download,
  Calendar
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




export default function AttendancePage(){


const router = useRouter();
const pathname = usePathname();



const students = Array(12).fill(0);



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

className={`w-full flex justify-end gap-3 items-center p-3 rounded
${pathname===item.path ? "bg-white/20":"hover:bg-white/10"}
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






{/* Page */}

<main className="mr-64 flex-1 p-8">





{/* Header */}

<div className="flex justify-between items-center mb-8">


<div>

<h1 className="text-4xl font-bold">
الحضور و الغياب
</h1>


<p className="text-xl mt-3">
طلاب تخصص العلاج الطبيعي
</p>


</div>




<div className="flex items-center gap-5">


<User size={35}/>

<Bell size={30}/>


</div>


</div>






{/* Cards */}


<div className="grid grid-cols-4 gap-5 mb-8">


{
[
["إجمالي الطلاب","35 طالب"],
["طلاب إنذار أول","15 طالب"],
["طلاب إنذار ثاني","11 طالب"],
["طلاب حرمان","12 طالب"]

].map((x,i)=>(


<div 
key={i}
className="bg-white shadow rounded-xl p-5 flex justify-between items-center"
>


<div>

<p className="text-gray-500">
{x[0]}
</p>


<h2 className="text-xl font-bold">
{x[1]}
</h2>


</div>


<div className="bg-gray-100 p-3 rounded">

👥

</div>


</div>


))


}


</div>








{/* Table */}


<div className="bg-white rounded-xl shadow p-5">



<div className="flex justify-between mb-5">


<div className="flex gap-3">


<button className="border px-5 py-2 rounded flex gap-2">

<Calendar/>

2026 / 04 / 26

</button>



<button className="bg-green-700 text-white px-6 rounded flex gap-2 items-center">

<Download/>

تصدير

</button>


</div>



<div className="flex gap-5">

<span>
قائمة الطالب
</span>


<span className="text-orange-500">
طلبات الحضور
</span>


</div>


</div>







<table className="w-full border text-center">


<thead className="bg-[#1F2937] text-white">


<tr>

<th className="p-3">
التسلسل
</th>


<th>
اسم الطالب
</th>


<th>
الرقم الجامعي
</th>


<th>
وقت الحضور
</th>


<th>
وقت الانصراف
</th>


<th>
ساعات الدوام
</th>


<th>
التاريخ
</th>


<th>
الحالة
</th>


</tr>


</thead>



<tbody>


{
students.map((_,i)=>(


<tr key={i} className="border">


<td className="p-3">
{i+1}
</td>


<td>
عبدالله محمد موسى
</td>


<td>
2023011580
</td>


<td>
8:00 AM
</td>


<td>
2:00 PM
</td>


<td>
6:00:20
</td>


<td>
2026 / 04 / 13
</td>


<td>
ممتاز
</td>



</tr>


))


}



</tbody>



</table>




</div>






</main>





</div>


)

}