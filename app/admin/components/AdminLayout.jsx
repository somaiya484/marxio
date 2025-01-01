"use client"
import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {

    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        toggleSidebar();
    }, [pathname]);

    useEffect(() => {
        function handleClickOutsideEvent(event) {

            if (sidebarRef.current && !sidebarRef?.current?.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutsideEvent);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideEvent);
        };

    }, [])

    return (
        <main className="relative flex">
            <div className="hidden md:block">
                <Sidebar></Sidebar>
            </div>

            <div
                ref={sidebarRef}
                className={`fixed md:hidden ease-in-out transition-all duration-300 z-50
                ${isOpen ? "translate-x-0" : "-translate-x-[260px] "}
                `}>
                <Sidebar></Sidebar>
            </div>

            <section className="flex-1 flex flex-col min-h-screen">
                <Header toggleSidebar={toggleSidebar}></Header>
                <section className="flex-1 bg-gray-200 ">{children}</section>
            </section>
        </main>
    )
}