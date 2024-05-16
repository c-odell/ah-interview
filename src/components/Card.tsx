import type { ReactNode } from "react";
import { twMerge } from 'tailwind-merge'


export const Card = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <section className={twMerge("bg-white shadow-md py-4 px-6 rounded-md", className)}>
            {children}
        </section>
    )
}