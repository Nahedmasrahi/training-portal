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
  Users,
  Plus
} from "lucide-react";



const menuItems = [
  { text:"الصفحة الرئيسية", icon:Home, path:"/admin" },
  { text:"الحضور والغياب", icon:BarChart2, path:"/admin/attendance" },
  { text:"عرض التقارير", icon:FileText, path:"/admin/reports" },
  { text:"البرامج والدورات", icon:CalendarDays, path:"/admin/courses" },
  { text:"الإستبيانات", icon:ClipboardList, path:"/admin/surveys" },
  { text:"التقييمات", icon:Star, path:"/admin/evaluations" },
  { text:"التقويم", icon:CalendarDays, path:"/calendar" },
  { text:"الملف الشخصي", icon:User, path:"/profile" },
  { text:"الإعدادات", icon:Settings, path:"/settings" },
];



const students = [
"عبدالله محمد موسى",
"احمد خالد محمد",
"ناصر ياسر هادي",
"عبدالعزيز جابر صالح",
"فهد ريان عبدالرحمن",
"راكان فهد سالم",
"رائد محمد بسام",
"عبدالرحمن سليمان احمد",
"بندر محمد خالد عيسى",
"عبدالله موسى حسن",
"حسن صالح سالم"
];




export default function CoursesPage(){


const router = useRouter();
const pathname = usePathname();



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
width={55}
height={55}
alt="logo"
/>


<h2 className="font-bold text-xl mt-3">
بوابة التدريب
</h2>


</div>



<div className="bg-[#0C4A37] h-full p-4 space-y-2">


{
menuItems.map((item,i)=>{


const Icon=item.icon;


return(

<button

key={i}

onClick={()=>router.push(item.path)}

className={`w-full flex justify-end items-center gap-3 px-3 py-3 rounded

${
pathname===item.path
?
"bg-white/20 font-bold"
:
"hover:bg-white/10"
}

`}

>


<span>
{item.text}
</span>


<Icon size={18}/>


</button>


)

})

}




<button className="flex justify-end gap-3 w-full px-3 py-3 mt-8">

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
مرحباً ياسر
</h1>


<p className="text-gray-600 mt-2">
كن على اطلاع بكل ما يحدث في جامعتك
</p>


</div>





<div className="flex items-center gap-5">


<User size={35}/>

<Bell size={30}/>


</div>



</div>









{/* Course Card */}


<div className="bg-white rounded-2xl shadow overflow-hidden mb-8">


<div className="flex bg-gradient-to-l from-green-700 to-green-900 text-white">



<Image
src="/blood.jpg"
width={250}
height={140}
alt="blood"
className="w-60 h-36 object-cover"
/>



<div className="p-5 flex-1">


<h2 className="text-2xl font-bold">
برنامج سحب الدم
</h2>


<p className="mt-3">
برنامج تدريبي يهدف إلى تطوير مهارات المتدربين
</p>



<div className="flex gap-5 mt-4 text-sm">

<span>
👥 52 طالب
</span>

<span>
📅 2026/03/16
</span>

<span>
⏱ 3 اسابيع
</span>


</div>


</div>



</div>






<div className="p-5 flex gap-3">


<button
className="bg-green-700 text-white px-6 py-2 rounded-lg flex gap-2 items-center"
>

<Plus size={18}/>

إضافة طالب

</button>



<button

className="border border-green-700 text-green-700 px-6 py-2 rounded-lg flex gap-2 items-center"

>


<Users size={18}/>

إدارة الطلاب


</button>


</div>


</div>








{/* Students Table */}



<div className="bg-white rounded-2xl shadow p-5">


<h2 className="font-bold text-xl mb-5">
قائمة الطلاب
</h2>




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
التخصص
</th>


<th>
الحالة
</th>


</tr>


</thead>




<tbody>


{

students.map((student,i)=>(


<tr 
key={i}
className="border"


>


<td className="p-3">
{i+1}
</td>



<td className="flex items-center justify-center gap-2 p-3">


<div className="w-8 h-8 rounded-full bg-gray-200">

</div>


{student}


</td>



<td>
2023011580
</td>


<td>
العلاج الطبيعي
</td>


<td>
نشط
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