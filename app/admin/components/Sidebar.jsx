"use client"
import Link from "next/link"

export default function Sidebar() {
    const menuList = [
        {
            name:"Dashboard",
            link: "/admin",
        },
        {
            name:"Products",
            link: "/admin/products",
        },
        {
            name:"Categories",
            link: "/admin/categories",
        },
        {
            name:"Brands",
            link: "/admin/brands",
        },
        {
            name:"Orders",
            link: "/admin/orders",
        },
        {
            name:"Customers",
            link: "/admin/customers",
        },
        {
            name:"Reviews",
            link: "/admin/reviews",
        },
        {
            name:"Collections",
            link: "/admin/collections",
        },
    ]
    return(
        <section className="flex flex-col gap-3 items-center justify-center  bg-white border-r px-5 py-3 h-screen overflow-hidden md:w-[260px]">
            <img className="h-10" src="/images.png" alt="" />

            <div className="flex-1 flex-col gap-3">
                {
                    menuList?.map((item)=>{
                        return (
                            <Link href={item?.link}>
                                <li>{item?.name}</li>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    )
}