import type { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => {
    return (
        <section className="bg-white shadow-md py-4 px-6 rounded-md">
            {children}
        </section>
    )
}