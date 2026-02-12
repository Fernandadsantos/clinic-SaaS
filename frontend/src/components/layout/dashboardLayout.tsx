import { Sidebar } from "./sidebar";
import { DashboardLayoutProps } from "../../interfaces";


export function DashboardLayout({ children }: DashboardLayoutProps) {

    return (
        <div className=" h-screen bg-gray-50 flex">
            <Sidebar />
            <main className="flex-1 overflow-auto">{children}</main>
        </div>
    );
}