
import { Navbar } from "@/components/ui/navbar";
import React from "react";

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Navbar />
            <section className="container">
                {children}
            </section>
        </>
    )
}