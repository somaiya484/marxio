import Link from "next/link";

export default function Page() {
    return (
        <main className="p-5">
            <div className="flex justify-between items-center ">
                <h1>Products</h1>
                <Link href={`/admin/products/form`}>
                    <button className="bg-[#313131] text-white px-4 py-2 rounded-lg text-sm">Create</button>
                </Link>
            </div>
        </main>
    )
}