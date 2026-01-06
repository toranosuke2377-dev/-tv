
"use client";

import { ArrowRight, CheckCircle2, Clock, FileText, Share2, ShieldOr } from "lucide-react";
import Link from "next/link";

export default function SubsidyDetailPage({ params }: { params: { id: string } }) {
    // In a real app, fetch data based on params.id
    const id = params.id;

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header / Hero */}
            <div className="bg-white border-b border-slate-200">
                <div className="container px-6 mx-auto py-12 md:py-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-wrap items-center gap-3 mb-6 animate-in fade-in slide-in-from-bottom-2">
                            <span className="px-3 py-1 bg-success/10 text-success font-black text-xs rounded-lg">公募中</span>
                            <span className="px-3 py-1 bg-slate-100 text-slate-500 font-bold text-xs rounded-lg">更新: 2025.12.23</span>
                            <span className="px-3 py-1 bg-primary/10 text-primary font-bold text-xs rounded-lg">#DX化</span>
                            <span className="px-3 py-1 bg-primary/10 text-primary font-bold text-xs rounded-lg">#省力化</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight animate-in fade-in slide-in-from-bottom-4 delay-100">
                            中小企業省力化投資補助金（第{id}回公募）
                        </h1>
                        <p className="text-xl text-slate-500 font-bold leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-4 delay-200">
                            中小企業等の売上拡大や生産性向上を後押しするため、人手不足に悩む中小企業等が、IoT、ロボット等の人手不足解消に効果がある汎用製品を導入するための事業費等の経費の一部を補助します。
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 delay-300">
                            <button className="flex-1 bg-primary hover:bg-teal-600 text-white font-black py-4 px-8 rounded-2xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
                                <FileText className="w-5 h-5" />
                                申請ガイドをダウンロード
                            </button>
                            <button className="flex-none bg-slate-100 hover:bg-slate-200 text-slate-600 font-black py-4 px-6 rounded-2xl transition-all flex items-center justify-center gap-2">
                                <Share2 className="w-5 h-5" />
                                共有
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container px-6 mx-auto py-16">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Left Column (Details) */}
                    <div className="md:col-span-2 space-y-12">
                        {/* Summary Card */}
                        <section className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg shadow-slate-200/50 border border-slate-100">
                            <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                                <ShieldOr className="w-8 h-8 text-primary" />
                                制度概要
                            </h2>
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-slate-100">
                                    <div className="text-slate-400 font-bold text-sm">補助上限額</div>
                                    <div className="sm:col-span-2 text-2xl font-black text-slate-900">
                                        最大 <span className="text-primary text-3xl">1,000</span> 万円
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-slate-100">
                                    <div className="text-slate-400 font-bold text-sm">補助率</div>
                                    <div className="sm:col-span-2 text-xl font-black text-slate-900">
                                        1/2 (最大 2/3)
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="text-slate-400 font-bold text-sm">対象経費</div>
                                    <div className="sm:col-span-2 text-slate-700 font-bold leading-relaxed">
                                        機械装置・システム構築費、技術導入費、専門家経費、運搬費、クラウドサービス利用費、原材料費、外注費、知的財産権等関連経費
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Requirements */}
                        <section>
                            <h2 className="text-2xl font-black text-slate-900 mb-6">主な申請要件</h2>
                            <div className="bg-white rounded-[2rem] p-8 border border-slate-100">
                                <ul className="space-y-4">
                                    {[
                                        "日本国内に本社及び実施場所を有する中小企業者等であること",
                                        "資本金又は出資金が5億円未満の法人であること",
                                        "直近の決算において、付加価値額が年率平均3%以上向上していること",
                                        "賃上げ計画を策定し、従業員に表明していること"
                                    ].map((req, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <CheckCircle2 className="w-6 h-6 text-success shrink-0 mt-0.5" />
                                            <span className="text-slate-700 font-bold">{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Schedule */}
                        <section>
                            <h2 className="text-2xl font-black text-slate-900 mb-6">公募スケジュール</h2>
                            <div className="bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden">
                                <div className="relative z-10 space-y-6">
                                    <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between pb-6 border-b border-white/10">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                                <span className="font-black text-sm">開始</span>
                                            </div>
                                            <span className="font-bold text-white/70">公募開始日</span>
                                        </div>
                                        <span className="text-xl font-black">2025年12月01日 (月)</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/30">
                                                <Clock className="w-5 h-5 text-white" />
                                            </div>
                                            <span className="font-bold text-white/70">申請締切日</span>
                                        </div>
                                        <span className="text-2xl font-black text-red-400">2026年02月15日 (金) 17:00</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column (CTA) */}
                    <div className="md:col-span-1">
                        <div className="sticky top-10 space-y-6">
                            <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
                                <h3 className="text-lg font-black text-slate-900 mb-4">
                                    この補助金について<br />専門家に相談する
                                </h3>
                                <p className="text-xs text-slate-400 font-bold mb-8">
                                    認定支援機関等の専門家が、申請書の作成から採択後の報告までサポートします。
                                </p>
                                <Link href="/experts" className="w-full py-4 bg-primary hover:bg-teal-600 text-white font-black rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 mb-4">
                                    無料で相談する
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <div className="text-[10px] text-slate-400 font-bold">
                                    相談実績: 1,200件以上
                                </div>
                            </div>

                            <Link href="/subsidies" className="block text-center text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors">
                                ← 検索結果に戻る
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
