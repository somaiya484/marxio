import Link from "next/link"

export default function Header () {

    const menuList = [
        {
            name:"Home",
            link:"/"
        },
        {
            name:"About Us",
            link:"/about-us"
        },
        {
            name:"Contact Us",
            link:"/contact-us"
        },
    ]

    return (
        <nav className="py-4 px-14 border-b flex items-center justify-between ">
            <img className="h-9" src="/images.png" alt="" />

            <div className="flex gap-4 items-center font-semibold">
                {
                    menuList?.map((item, key) =>{
                        return (
                            <Link key={key} href={item?.link}>
                            <button>{item.name}</button>
                            </Link>
                        )
                    })
                }
            </div>

            <Link href={"/login"}>
            <button className="bg-blue-600 font-bold px-5 py-2 rounded-full text-white">Login</button>
            </Link>


        </nav>
    )
}