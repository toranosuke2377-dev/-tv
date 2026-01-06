
"use client";

import { ArrowRight, User, Mail, Building2, Briefcase, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        industry: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: {
                    data: {
                        full_name: formData.name,
                        company: formData.company,
                        industry: formData.industry,
                    }
                }
            });

            if (error) throw error;
            setSuccess(true);
            setTimeout(() => {
                router.push("/login");
            }, 3000);
        } catch (err: any) {
            setError(err.message || "登録に失敗しました");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <Link href="/" className="flex justify-center items-center gap-2 mb-8 group">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:-rotate-6 transition-transform">
                        <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-2xl font-black text-slate-900 tracking-tighter">
                        補助金<span className="text-primary">ポータル</span>
                    </span>
                </Link>
                <h2 className="text-center text-3xl font-black text-slate-900 mb-2">無料会員登録</h2>
                <p className="text-center text-slate-500 font-bold mb-8">
                    最適な補助金情報を、あなた専用のマイページでお届けします。
                </p>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-xl relative z-10 px-4">
                <div className="bg-slate-50/50 backdrop-blur-xl py-12 px-8 sm:px-12 shadow-2xl shadow-slate-200/50 rounded-[3rem] border border-white">
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-bold">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-100 text-green-600 rounded-xl text-sm font-bold">
                            登録が完了しました！確認メールをチェックしてください。ログインページへ移動します...
                        </div>
                    )}
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                        {/* Name */}
                        <div className="md:col-span-2 lg:col-span-1">
                            <label className="block text-sm font-black text-slate-700 mb-2">お名前</label>
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    required
                                    placeholder="補助金 太郎"
                                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-bold placeholder:text-slate-200"
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="md:col-span-2 lg:col-span-1">
                            <label className="block text-sm font-black text-slate-700 mb-2">メールアドレス</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="email"
                                    required
                                    placeholder="info@brand.jp"
                                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-bold placeholder:text-slate-200"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Company Name */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-black text-slate-700 mb-2">会社名・屋号</label>
                            <div className="relative group">
                                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    required
                                    placeholder="株式会社 補助金アドバイザーズ"
                                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-bold placeholder:text-slate-200"
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Industry */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-black text-slate-700 mb-2">業種</label>
                            <div className="relative group">
                                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-primary transition-colors" />
                                <select
                                    required
                                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-bold text-slate-600 appearance-none cursor-pointer"
                                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                                >
                                    <option value="">業種を選択してください</option>
                                    <option>IT・情報通信</option>
                                    <option>製造・工業</option>
                                    <option>飲食・小売</option>
                                    <option>建設・不動産</option>
                                    <option>医療・福祉</option>
                                    <option>その他</option>
                                </select>
                            </div>
                        </div>

                        {/* Password */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-black text-slate-700 mb-2">パスワード</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="password"
                                    required
                                    placeholder="8文字以上で入力してください"
                                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-bold placeholder:text-slate-200"
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="md:col-span-2 pt-6">
                            <p className="text-xs text-slate-400 font-bold mb-8 text-center px-4">
                                登録ボタンを押すことで、私たちの<a href="#" className="text-primary underline">利用規約</a>および<a href="#" className="text-primary underline">プライバシーポリシー</a>に同意したものとみなされます。
                            </p>
                            <button
                                type="submit"
                                disabled={loading || success}
                                className="w-full flex justify-center py-5 px-4 border border-transparent rounded-[1.5rem] shadow-xl shadow-primary/20 text-xl font-black text-white bg-primary hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all active:scale-95 gap-3 items-center disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? "登録中..." : "無料会員登録を完了する"}
                                <ArrowRight className={`w-6 h-6 ${loading ? 'animate-pulse' : ''}`} />
                            </button>
                        </div>
                    </form>
                </div>

                <p className="mt-10 text-center text-sm text-slate-500 font-bold">
                    すでにアカウントをお持ちですか？{' '}
                    <Link href="/login" className="font-black text-primary hover:text-teal-600 underline underline-offset-4">
                        こちらからログイン
                    </Link>
                </p>
            </div>
        </div>
    );
}
