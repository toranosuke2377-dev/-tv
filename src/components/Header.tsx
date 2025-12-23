"use client";

import Link from "next/link";
import { Coins, LogIn, UserPlus, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const navItems = [
    { name: "補助金ポータル", href: "/" },
    { name: "補助金を探す", href: "/subsidies" },
    { name: "専門家を探す", href: "/experts" },
    { name: "コラム", href: "/articles" },
    { name: "士業の方へ", href: "/experts/register" },
    { name: "診断ツール", href: "/diagnosis" },
    { name: "はじめての方", href: "/guide" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);

        // Get initial session
        supabase.auth.getUser().then(({ data: { user } }) => {
            setUser(user);
        });

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            subscription.unsubscribe();
        };
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/login");
        router.refresh();
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-white/90 backdrop-blur-md",
                isScrolled ? "py-3 border-slate-100 shadow-sm" : "py-5 border-transparent"
            )}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Logo & Main Nav */}
                    <div className="flex items-center gap-10">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center shadow-lg shadow-secondary/30 group-hover:scale-110 transition-transform">
                                <Coins className="w-6 h-6 text-primary" />
                            </div>
                            <span className="text-2xl font-extrabold tracking-tighter text-slate-900">
                                補助金<span className="text-primary">ポータル</span>
                            </span>
                        </Link>

                        <nav className="hidden lg:flex items-center gap-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-bold transition-all text-slate-600 hover:text-primary relative group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        {user ? (
                            <>
                                <div className="text-sm font-bold text-slate-500 mr-2">
                                    {user.email}
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="px-5 py-2.5 rounded-xl text-sm font-bold text-slate-600 hover:text-red-600 hover:bg-red-50 border border-slate-100 transition-all"
                                >
                                    ログアウト
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-slate-600 hover:text-primary hover:bg-slate-50 border border-slate-100 transition-all"
                                >
                                    <LogIn className="w-4 h-4" />
                                    ログイン
                                </Link>
                                <Link
                                    href="/register"
                                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-secondary text-primary hover:bg-[#F0D56B] shadow-lg shadow-secondary/30 transition-all hover:scale-105 active:scale-95"
                                >
                                    <UserPlus className="w-4 h-4" />
                                    新規会員登録
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "fixed inset-0 bg-white z-40 transition-transform duration-500 lg:hidden",
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            )}>
                <div className="flex flex-col h-full p-10 overflow-y-auto">
                    <div className="flex justify-between items-center mb-12 border-b pb-6">
                        <span className="text-2xl font-extrabold text-slate-900 tracking-tighter">
                            補助金<span className="text-primary">ポータル</span>
                        </span>
                        <button
                            className="p-2 text-slate-400 hover:text-slate-900"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-2xl font-bold text-slate-800 hover:text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-auto pt-10 flex flex-col gap-4">
                        {user ? (
                            <button
                                onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}
                                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-lg font-bold text-red-600 border border-red-100 bg-red-50"
                            >
                                ログアウト
                            </button>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-lg font-bold text-slate-600 border border-slate-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <LogIn className="w-5 h-5" />
                                    ログイン
                                </Link>
                                <Link
                                    href="/register"
                                    className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-lg font-bold bg-secondary text-primary shadow-lg shadow-secondary/20"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <UserPlus className="w-5 h-5" />
                                    新規会員登録
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
