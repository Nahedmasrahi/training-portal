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
  Bell
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





const notifications = [


{
text:"الطالب ياسر محمد وصل إلى 4 أيام غياب متتالية",
time:"قبل 2 دقيقة",
icon:Bell
},



{
text:"قام الطالب ياسر محمد برفع التقرير الأسبوعي",
time:"قبل 16 دقيقة",
icon:ClipboardList
},



{
text:"تم استلام 12 استبيان من المتدربين على استبيان التدريب الميداني",
time:"قبل 3 ساعات",
icon:ClipboardList
},



{
text:"تقدم 3 طلاب للتسجيل في برنامج أساسيات سحب الدم",
time:"قبل 5 ساعات",
icon:FileText
},



{
text:"5 طلاب لم يرفعوا المهمة المطلوبة حتى الآن",
time:"قبل 13 ساعة",
icon:FileText
}


];







export default function AdminDashboard(){



const router = useRouter();

const pathname = usePathname();





return (



<div

className="flex min-h-screen bg-gray-50"

dir="rtl"

>





{/* Sidebar */}



<aside className="fixed top-0 right-0 h-full w-64 bg-[#083427] text-white flex flex-col z-50">





<div className="py-8 px-4 flex flex-col items-center">



<Image

src="/logo.png"

width={60}

height={60}

alt="logo"

/>



<h2 className="text-xl font-bold mt-3">

بوابة التدريب

</h2>



</div>







<div className="bg-[#0C4A37] flex-1 px-4 py-4 space-y-2">





{

menuItems.map((item,index)=>{


const Icon = item.icon;

const active = pathname === item.path;



return(



<button


key={index}


onClick={()=>router.push(item.path)}


className={`w-full flex justify-end items-center gap-3 px-3 py-2 rounded-md
${active ? "bg-white/20 font-semibold":"text-white/80 hover:bg-white/10"}
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





<div className="text-right">



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










<h1 className="text-2xl font-bold mb-8">

التنبيهات

</h1>






<div className="flex justify-start gap-3 mb-6">





<button className="bg-green-700 text-white px-5 py-2 rounded-lg text-sm">

الكل


<span className="mr-2 bg-white text-green-700 rounded-full px-2">

3

</span>


</button>






<button className="bg-white shadow px-5 py-2 rounded-lg text-sm">

الحضور


<span className="mr-2 bg-green-100 text-green-700 rounded-full px-2">

3

</span>


</button>





<button className="bg-white shadow px-5 py-2 rounded-lg text-sm">

التقارير

</button>






<button className="bg-white shadow px-5 py-2 rounded-lg text-sm">

الاستبيانات

</button>






<button className="bg-white shadow px-5 py-2 rounded-lg text-sm">

المهام

</button>






<button className="bg-white shadow px-5 py-2 rounded-lg text-sm">

التقييمات

</button>





</div>










<div className="space-y-4">





{

notifications.map((n,i)=>{


const Icon = n.icon;



return(




<div


key={i}


className="bg-white rounded-xl shadow p-5 flex items-center justify-between border-r-4 border-green-600"



>




<div className="flex items-center gap-4">



<div className="bg-green-100 p-3 rounded-lg">


<Icon size={25}/>


</div>




<p className="text-sm">

{n.text}

</p>



</div>







<span className="text-xs text-gray-400">

{n.time}

</span>






</div>





)


})

}



</div>









</main>






</div>




)

}