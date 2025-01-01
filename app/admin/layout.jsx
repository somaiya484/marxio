"use client"
import AuthContextProvider, { useAuth } from "@/contexts/AuthContext";
import AdminLayout from "./components/AdminLayout";
import { useEffect } from "react";
import { CircularProgress } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Layout({ children }) {
    return (
        <AuthContextProvider>
            <AdminChecking>{children}</AdminChecking>
        </AuthContextProvider>
    )
}

function AdminChecking({ children }) {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user && !isLoading) {
            router.push("/login");
        }
    }, [user, isLoading]);

    if (isLoading) {
        return (
            <div className="h-screen w-screen flex justify-center items-center">
                <CircularProgress></CircularProgress>
            </div>
        )
    }

    if (!user) {
        return (
            <div className="h-screen w-screen flex justify-center items-center">
                <h1>Please Login First!</h1>
            </div>
        )
    }
    return <AdminLayout>{children}</AdminLayout>
}