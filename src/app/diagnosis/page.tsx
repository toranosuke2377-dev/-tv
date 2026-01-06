
"use client";

import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export default function DiagnosisPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-20">
            <div className="container px-6 mx-auto">
                <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-slate-200 overflow-hidden border border-slate-100 flex flex-col md:flex-row">
                    {/* Left Side: Illustration/Text */}
                    <div className="flex-1 bg-primary p-12 md:p-16 text-white flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <Zap className="w-16 h-16 text-secondary mb-10" />
                        <h1 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                            AI無料診断で<br />
                            最適な補助金を<br />
                            <span className="text-secondary">特定します。</span>
                        </h1>
                        <p className="text-white/70 text-lg font-bold leading-relaxed mb-10">
                            簡単な質問に答えるだけで、1,000種類以上の制度からあなたにぴったりのものをAIが選定。
                        </p>
                        <div className="space-y-4">
                            {["完全無料", "最短10秒で完了", "専門家監修"].map(check => (
                                <div key={check} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                                    <span className="font-black text-sm">{check}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Simple Form Placeholder */}
                    <div className="flex-[1.2] p-12 md:p-20 flex flex-col justify-center">
                        <div className="mb-12">
                            <div className="flex justify-between items-end mb-4">
                                <span className="text-primary font-black text-sm uppercase tracking-widest">Question 01</span>
                                <span className="text-slate-300 font-bold text-xs">Step 1 of 5</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-1/5 rounded-full" />
                            </div>
                        </div>

                        <h2 className="text-2xl font-black text-slate-900 mb-10">
                            現在、最も関心のある分野を選択してください。
                        </h2>

                        <div className="grid grid-cols-1 gap-4 mb-16">
                            {[
                                "DX化・ITシステム導入",
                                "省エネ・脱炭素設備",
                                "新規事業立ち上げ・創業",
                                "販路開拓・展示会出展",
                                "人材採用・リスキリング"
                            ].map(option => (
                                <button key={option} className="w-full text-left p-6 rounded-2xl border-2 border-slate-100 hover:border-primary hover:bg-primary/5 font-black text-slate-600 hover:text-primary transition-all group flex justify-between items-center">
                                    {option}
                                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center justify-between gap-6">
                            <Link href="/" className="text-slate-400 font-bold text-sm hover:text-primary transition-colors">キャンセル</Link>
                            <button className="flex-1 bg-slate-900 text-white font-black py-5 rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 group">
                                次へ進む
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <Link href="/" className="text-slate-400 font-bold hover:text-primary transition-colors flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 rotate-180" />
                    トップページに戻る
                </Link>
            </div>
        </div>
    );
}
