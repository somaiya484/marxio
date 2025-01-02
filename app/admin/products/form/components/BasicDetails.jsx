"use client"

export default function BasicDetails() {
    return (
        <section className="bg-white rounded-xl p-4 border">
            <h1 className="font-semibold">Basic Details</h1>
            <div className="flex flex-col gap-1">
                <label className="text-gray-500 text-xs" htmlFor="product-title">Product Name <span className="text-red-500">*</span></label>
                <input
                    type="text"
                    id="product-title"
                    name="product-title"
                    placeholder="Enter Title"
                    className="border px-3 py-2 rounded-lg w-full outline-none"
                />
            </div>
        </section>
    )
}