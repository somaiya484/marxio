"use client"

import BasicDetails from "./components/BasicDetails"

export default function page() {
    return (
        <main className="flex flex-col gap-4 p-5">
            <h1 className="text-xl font-semibold">Create New Products</h1>

            <div>
                <BasicDetails></BasicDetails>
            </div>
        </main>
    )
}