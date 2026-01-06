
"use client";

import { ArrowRight, Search, Users, Zap, HelpCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function GuidePage() {
    const steps = [
        {
            icon: Search,
            title: "1. 補助金を探す",
            desc: "まずは、あなたの事業概要や目的を入力。1,000種類以上の最新データベースから候補を絞り込みます。",
            color: "bg-primary",
            link: "/subsidies"
        },
        {
            icon: Zap,
            title: "2. 無料診断で特定",
            desc: "AI診断ツールを使えば、わずか10秒で採択の可能性が高い補助金を自動選定します。",
            color: "bg-secondary",
            link: "/diagnosis"
        },
        {
            icon: Users,
            title: "3. 専門家に相談",
            desc: "気になる補助金が見つかったら、実績豊富な専門家へワンクリックで相談。申請をトータルサポートします。",
            color: "bg-success",
            link: "/experts"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-primary rounded-full blur-[140px] translate-x-1/3" />
                </div>
                <div className="container px-6 mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 text-slate-500 text-sm font-black mb-10 shadow-sm">
                        <HelpCircle className="w-4 h-4 text-primary" />
                        はじめての方へ
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-10 tracking-tight leading-[1.1]">
                        補助金活用を、<br />
                        <span className="text-primary">もっとシンプルに。</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-bold">
                        補助金ポータルは、複雑な公的支援情報を整理し、<br className="hidden md:block" />
                        あなたのビジネスに最適な資金調達を最短距離でガイドします。
                    </p>
                </div>
            </section>

            {/* Step Section */}
            <section className="py-24">
                <div className="container px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {steps.map((step, i) => (
                            <div key={i} className="relative group p-12 bg-white rounded-[3.5rem] border border-slate-100 shadow-xl shadow-slate-200/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                <div className={`w-20 h-20 ${step.color} rounded-3xl flex items-center justify-center mb-10 shadow-lg shadow-slate-200 group-hover:rotate-6 transition-transform`}>
                                    <step.icon className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-6">{step.title}</h3>
                                <p className="text-slate-500 leading-relaxed font-bold mb-10">
                                    {step.desc}
                                </p>
                                <Link href={step.link} className="inline-flex items-center gap-2 text-primary font-black group/link">
                                    詳しく見る
                                    <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                                </Link>
                                {i < 2 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-6 translate-x-full text-slate-100">
                                        <ArrowRight className="w-12 h-12" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-success rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3" />
                </div>
                <div className="container px-6 mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
                            選ばれる3つの理由
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { title: "鮮度の高いデータ", desc: "官公庁の一次情報を毎日クローリングし、常に最新の公募情報を反映しています。" },
                            { title: "専門家との即時連携", desc: "150名以上の認定支援機関と提携。採択実績の豊富なプロをすぐに見つけられます。" },
                            { title: "AIによる高度な推奨", desc: "独自のアルゴリズムで、あなたの事業計画に最適な補助金を自動でマッチングします。" }
                        ].map((reason, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-md">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-8">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                </div>
                                <h4 className="text-xl font-black text-white mb-4">{reason.title}</h4>
                                <p className="text-slate-400 font-bold text-sm leading-relaxed">{reason.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container px-6 mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-12">
                        まずは無料で、<br />
                        可能性を広げてみませんか？
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/diagnosis" className="px-12 py-6 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:bg-teal-600 transition-all text-xl">
                            無料診断を試す
                        </Link>
                        <Link href="/subsidies" className="px-12 py-6 bg-slate-900 text-white font-black rounded-2xl shadow-xl shadow-slate-900/20 hover:bg-slate-800 transition-all text-xl text-center">
                            補助金を探してみる
                        </Link>
                    </div>
                </div>
            </section>

            <div className="container px-6 mx-auto pb-24 text-center">
                <Link href="/" className="inline-flex items-center gap-2 text-slate-400 font-bold hover:text-primary transition-colors">
                    <ArrowRight className="w-5 h-5 rotate-180" />
                    トップページに戻る
                </Link>
            </div>
        </div>
    );
}
