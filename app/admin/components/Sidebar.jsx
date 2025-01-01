"use client"
import { auth } from "@/lib/firebase"
import { signOut } from "firebase/auth"
import { Airplay, ChartColumnStacked, Diamond, LayoutDashboard, LibraryBig, LogOut, PackageOpen, PackageSearch, Shield, Star, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import toast from "react-hot-toast"

export default function Sidebar() {
    const menuList = [
        {
            name: "Dashboard",
            link: "/admin",
            icon: <LayoutDashboard />
        },
        {
            name: "Products",
            link: "/admin/products",
            icon: <PackageOpen />,
        },
        {
            name: "Categories",
            link: "/admin/categories",
            icon: <ChartColumnStacked />,
        },
        {
            name: "Brands",
            link: "/admin/brands",
            icon: <Airplay />,
        },
        {
            name: "Orders",
            link: "/admin/orders",
            icon: <PackageSearch />
        },
        {
            name: "Customers",
            link: "/admin/customers",
            icon: <User />,
        },
        {
            name: "Reviews",
            link: "/admin/reviews",
            icon: <Star />,
        },
        {
            name: "Collections",
            link: "/admin/collections",
            icon: <LibraryBig />,
        },
        {
            name: "Admins",
            link: "/admin/admins",
            icon: <Shield />,
        },
    ]

    return (
        <section className="flex flex-col gap-10 bg-white border-r px-5 py-3 h-screen w-[260px] mb-20">
            <div className="flex justify-center py-4">
                <img className="h-10" src="/images.png" alt="" />
            </div>
            <ul className="flex-1 flex flex-col gap-4">
                {
                    menuList?.map((item, key) => {
                        return (
                            <Tab item={item} key={key}></Tab>
                        )
                    })
                }
            </ul>

            <div className="flex justify-center w-full">
                <button
                    onClick={async () => {
                        try {
                            await toast.promise(signOut(auth), {
                                error: (e) => e?.message,
                                loading: "Loading.....",
                                success: " Successfully Logged out"
                            });
                        } catch (error) {
                            toast.error(error?.message);
                        }
                    }}
                    className="flex items-center justify-center gap-2 px-3 py-1 hover:bg-amber-100 w-full rounded-md transition-all ease-soft-spring duration-300 "><LogOut></LogOut> Logout</button>

            </div>
        </section>
    )
}


function Tab({ item }) {
    const pathname = usePathname();
    const isSelected = pathname === item?.link;

    return (
        <Link href={item?.link}>
            <li className={`flex items-center gap-2 px-4 py-2  font-semibold rounded-md ease-soft-spring transition-all duration-300 ${isSelected ? "bg-orange-300  text-white" : "bg-white text-black"}`}
            >{item?.icon} {item?.name}</li>
        </Link>
    )
} 