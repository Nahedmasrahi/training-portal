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
  ClipboardCheck
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



const surveys = [

{
title:"رضا الطلاب والطالبات عن العملية التدريبية",
desc:"ساعدنا في قياس جودة البرنامج وتحسين التجربة التدريبية",
duration:"3 دقائق",
students:"12 طالب"
},

{
title:"رضا الطلاب والطالبات عن العملية التدريبية",
desc:"قيّم تجربتك التدريبية والخدمات المقدمة خلال فترة التدريب",
duration:"4 دقائق",
students:"12 طالب"
},

{
title:"رضا الطلاب والطالبات عن العملية التدريبية",
desc:"ساعدنا في تطوير وتحسين بيئة التدريب",
duration:"3 دقائق",
students:"12 طالب"
},

{
title:"رضا الطلاب والطالبات عن العملية التدريبية",
desc:"شاركنا رأيك حول جودة التدريب",
duration:"5 دقائق",
students:"12 طالب"
},


];




export default function SurveysPage(){


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

<LogOut size={18}/>

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


<p className="text-gray-600 text-lg mt-1">
كن على اطلاع بكل ما يحدث في جامعتك
</p>


</div>





<div className="flex items-center gap-5">


<User size={35}/>

<Bell size={30}/>


</div>



</div>







{/* Surveys */}



<div className="space-y-5">



{

surveys.map((survey,index)=>(


<div

key={index}

className="bg-white border border-gray-300/40 rounded-2xl px-6 py-5 flex items-center justify-between shadow-sm"

>




{/* Text */}

<div className="text-right flex-1">


<h2 className="text-xl font-bold text-gray-900">

{survey.title}

</h2>



<p className="text-gray-600 mt-1">

{survey.desc}

</p>



<div className="flex gap-4 text-sm text-gray-500 mt-2">

<span>
⏱ {survey.duration}
</span>


<span>
👥 {survey.students}
</span>


</div>



</div>







{/* Icon + Button */}


<div className="flex items-center gap-4">


<ClipboardCheck
size={45}
/>



<button

onClick={()=>router.push("/surveys/start/step-1")}

className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-xl text-sm font-semibold"

>

تعبئة الاستبيان

</button>



</div>



</div>



))

}




</div>






</main>




</div>



)

}