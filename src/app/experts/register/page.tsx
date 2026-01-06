
"use client";

import { ArrowRight, CheckCircle2, Trophy, Users2, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ExpertRegisterPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center py-20">
            <div className="container px-6 mx-auto">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                    {/* Content Section */}
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-success/10 text-success text-xs font-black rounded-lg mb-8">
                            <Trophy className="w-3.5 h-3.5" />
                            提携パートナー募集中
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                            あなたの知見を、<br />
                            <span className="text-primary">価値。</span>に変える。
                        </h1>
                        <p className="text-slate-500 text-xl font-bold leading-relaxed mb-12">
                            補助金ポータルは、日本全国の経営者と補助金のプロフェッショナルを繋ぐプラットフォームです。
                            案件の獲得から、業務の効率化まで。あなたの士業としてのキャリアを加速させます。
                        </p>

                        <div className="space-y-6 mb-12">
                            {[
                                "圧倒的な集客力：月間100万PVのメディアで露出を最大化",
                                "高精度なマッチング：AIがあなたの専門性に合った企業を推奨",
                                "業務支援ツール：申請・報告書作成を効率化するツールが利用可能"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1">
                                        <CheckCircle2 className="w-4 h-4 text-white" />
                                    </div>
                                    <p className="text-slate-700 font-bold">{item}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-6 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-slate-200 shadow-sm">
                                        <img src={`https://images.unsplash.com/photo-${1500000000000 + i * 100000}?auto=format&fit=crop&q=80&w=100`} alt="" className="w-full h-full object-cover grayscale" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-500 text-sm font-bold">
                                すでに <span className="text-slate-900 text-lg">150名以上</span> の<br />
                                専門家が活躍しています。
                            </p>
                        </div>
                    </div>

                    {/* Simple Registration Card */}
                    <div className="w-full lg:w-[450px] bg-slate-900 rounded-[3rem] p-10 md:p-14 shadow-2xl shadow-slate-900/40 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10">
                            <h2 className="text-2xl font-black text-white mb-10 text-center">パートナー登録を開始</h2>

                            <form className="space-y-6">
                                <div>
                                    <label className="block text-xs font-black text-slate-400 mb-2 uppercase tracking-widest">お名前</label>
                                    <input type="text" placeholder="補助金 太郎" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-bold" />
                                </div>
                                <div>
                                    <label className="block text-xs font-black text-slate-400 mb-2 uppercase tracking-widest">主な資格</label>
                                    <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-bold appearance-none cursor-pointer">
                                        <option className="bg-slate-900">選択してください</option>
                                        <option className="bg-slate-900">中小企業診断士</option>
                                        <option className="bg-slate-900">税理士</option>
                                        <option className="bg-slate-900">行政書士</option>
                                        <option className="bg-slate-900">社会保険労務士</option>
                                        <option className="bg-slate-900">民間コンサルタント</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-black text-slate-400 mb-2 uppercase tracking-widest">メールアドレス</label>
                                    <input type="email" placeholder="example@office.com" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-bold" />
                                </div>
                                <button className="w-full bg-primary hover:bg-teal-600 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 mt-10 active:scale-95">
                                    資料請求・登録申込み
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </form>

                            <p className="mt-8 text-[10px] text-slate-500 font-bold text-center leading-relaxed">
                                折り返し担当者より、提携プランの詳細と審査の流れについて<br />
                                ご案内させていただきます。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <Link href="/" className="text-slate-400 font-bold hover:text-primary transition-colors flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 rotate-180" />
                    トップページに戻る
                </Link>
            </div>
        </div>
    );
}
