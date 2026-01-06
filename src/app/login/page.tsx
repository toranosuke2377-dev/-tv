
"use client";

import { ArrowRight, Lock, Mail, Github, Chrome, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;
            router.push("/");
            router.refresh();
        } catch (err: any) {
            setError(err.message || "ログインに失敗しました");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-success/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <Link href="/" className="flex justify-center items-center gap-2 mb-8 group">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform">
                        <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-2xl font-black text-slate-900 tracking-tighter">
                        補助金<span className="text-primary">ポータル</span>
                    </span>
                </Link>
                <h2 className="text-center text-3xl font-black text-slate-900 mb-2">おかえりなさい！</h2>
                <p className="text-center text-slate-500 font-bold mb-8">
                    アカウントにログインして、最適なサポートを再開しましょう。
                </p>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <div className="bg-white py-12 px-8 shadow-2xl shadow-slate-200/50 rounded-[2.5rem] border border-slate-100 mx-4 sm:mx-0">
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-bold animate-in fade-in slide-in-from-top-2">
                            {error}
                        </div>
                    )}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-black text-slate-700 mb-2">メールアドレス</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="example@company.com"
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-bold placeholder:text-slate-300"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-black text-slate-700 mb-2">パスワード</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-bold placeholder:text-slate-300"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-slate-200 rounded" />
                                <label className="ml-2 block text-sm font-bold text-slate-500">ログイン状態を保持</label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-black text-primary hover:text-teal-600">パスワードを忘れた？</a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg shadow-primary/20 text-lg font-black text-white bg-primary hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all active:scale-95 gap-2 items-center disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? "処理中..." : "ログイン"}
                                <ArrowRight className={`w-5 h-5 ${loading ? 'animate-pulse' : ''}`} />
                            </button>
                        </div>
                    </form>

                    <div className="mt-10">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-100"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-slate-400 font-bold">他のアカウントでログイン</span>
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <button
                                onClick={() => supabase.auth.signInWithOAuth({ provider: 'google' })}
                                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-all font-black text-slate-600 text-sm"
                            >
                                <Chrome className="w-5 h-5" /> Google
                            </button>
                            <button
                                onClick={() => supabase.auth.signInWithOAuth({ provider: 'github' })}
                                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-all font-black text-slate-600 text-sm"
                            >
                                <Github className="w-5 h-5" /> GitHub
                            </button>
                        </div>
                    </div>
                </div>

                <p className="mt-10 text-center text-sm text-slate-500 font-bold">
                    アカウントをお持ちではありませんか？{' '}
                    <Link href="/register" className="font-black text-primary hover:text-teal-600">
                        今すぐ無料登録
                    </Link>
                </p>
            </div>
        </div>
    );
}
