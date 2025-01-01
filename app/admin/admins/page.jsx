import From from "./components/Form";
import ListView from "./components/ListView";

export default function Page() {
    return (
        <main className="p-5 flex flex-col md:flex-row items-center gap-5">
            <From></From>
            <ListView></ListView>
        </main>
    )
}