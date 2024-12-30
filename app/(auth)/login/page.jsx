"use client"
import { useAuth } from "@/contexts/AuthContext";
import { auth } from "@/lib/firebase";
import { Button } from "@nextui-org/react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Page() {
    const {user} = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user){
            router.push("/dashboard")
        }
    }, [user])

    return (

        <main className="w-full flex justify-center items-center bg-gray-300 p-10 md:p-24 min-h-screen">
            <section className="flex flex-col gap-3">
                <div className="flex justify-center">
                    <img className="h-12" src="/images.png" alt="Logo" />
                </div>

                <div className="bg-white p-5 md:p-10 rounded-xl w-full md:min-w-[440px] flex flex-col gap-3">
                    <h1>Login With Email</h1>
                    <form className="flex flex-col gap-3">

                        <input type="email" name="user-email"
                            id="user-email"
                            placeholder="Enter Your Email"
                            className="px-3 py-2 rounded-xl border focus:outline-none w-full"
                        />

                        <input type="password" name="user-password"
                            id="user-password"
                            placeholder="Enter Your Password"
                            className="px-3 py-2 rounded-xl border focus:outline-none w-full"
                        />

                        <Button color="primary">
                            Login
                        </Button>
                    </form>

                    <div className="flex justify-between">
                        <Link href={`/sign-up`}>
                            <button className="font-semibold text-blue-700 text-sm">New? Create Account</button>
                        </Link>
                        <Link href={`/forget-password`}>
                            <button className="font-semibold text-blue-700 text-sm">Forget Password?</button>
                        </Link>
                    </div>

                    <hr />

                    <SignInWithGoogleComponent />

                </div>
            </section>
        </main>
    );
}



function SignInWithGoogleComponent() {
    const [isLoading, setIsLoading] = useState(false);
    const handleLogin = async () => {
        setIsLoading(true);
        try {
            const user = await signInWithPopup(auth , new GoogleAuthProvider());
        } catch (error) {
            toast.error(error?.message);
        }
        setIsLoading(false);
    };
    return (
        <Button isLoading={isLoading} isDisabled={isLoading} onPress={handleLogin}>
            Sign In With Google
        </Button>
    );
}
