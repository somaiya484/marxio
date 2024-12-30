import Sidebar from "./components/Sidebar";

export default function Layout({children}) {
                     
    return(
        <main className="flex">
            <Sidebar></Sidebar>
            <section className="flex-1">{children}</section>
        </main>
    )
}