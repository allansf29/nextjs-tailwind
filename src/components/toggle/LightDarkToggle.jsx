'use client'
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export const LightDarkToggle = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <div className="flex justify-center">
            {currentTheme === "dark" ? (
                <button
                    className="bg-slate-700 rounded-full p-2 hover:bg-slate-800"
                    onClick={() => setTheme("light")}
                >
                    <Image
                        src={"/toggle/sun.svg"}
                        alt="Illustration of sun, click to enable light mode."
                        height={20}
                        width={20}
                    />
                </button>
            ) : (
                <button
                    className="bg-slate-200 rounded-full p-2 hover:bg-slate-300"
                    onClick={() => setTheme("dark")}
                >
                    <Image
                        src={"/toggle/moon.svg"}
                        alt="Illustration of moon, click to enable dark mode"
                        height={20}
                        width={20}
                    />
                </button>
            )}
        </div>
    )
}
