
"use client";

import { ArrowRight, Search, ShieldCheck, X } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function SubsidiesContent() {
    const searchParams = useSearchParams();
    const initialTag = searchParams.get("tag");
    const initialPurpose = searchParams.get("purpose");
    const initialIndustry = searchParams.get("industry");
    const initialRegion = searchParams.get("region");

    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        if (initialTag) setKeyword(initialTag);
        if (initialPurpose) setKeyword(initialPurpose);
        if (initialIndustry) setKeyword(initialIndustry);
    }, [initialTag, initialPurpose, initialIndustry]);

    const activeFilters = [
        initialTag && { label: `タグ: ${initialTag}`, key: "tag" },
        initialPurpose && { label: `目的: ${initialPurpose}`, key: "purpose" },
        initialIndustry && { label: `業種: ${initialIndustry}`, key: "industry" },
        initialRegion && { label: `地域: ${initialRegion}`, key: "region" },
    ].filter(Boolean) as { label: string; key: string }[];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Page Header */}
            <div className="bg-white border-b border-slate-200 pt-20 pb-16">
                <div className="container px-6 mx-auto">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                            補助金・助成金を<span className="text-primary">探す。</span>
                        </h1>
                        <p className="text-slate-500 text-xl font-bold leading-relaxed mb-10">
                            現在公募中の最新制度から、あなたのビジネスに最適な支援をリアルタイムで抽出します。
                        </p>

                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-[2] relative group">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    placeholder="キーワード、設備、目的など..."
                                    className="w-full pl-14 pr-6 py-5 bg-slate-50 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all font-bold"
                                />
                            </div>
                            <button className="px-10 py-5 bg-primary text-white font-black rounded-2xl hover:bg-teal-600 transition-all shadow-lg shadow-primary/20">
                                検索を実行
                            </button>
                        </div>

                        {activeFilters.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-6 animate-in slide-in-from-top-2">
                                {activeFilters.map((filter) => (
                                    <span key={filter.key} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-black text-sm rounded-full">
                                        {filter.label}
                                        <X className="w-4 h-4 cursor-pointer hover:text-red-500" onClick={() => window.history.back()} />
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Results Grid Placeholder */}
            <div className="container px-6 mx-auto py-24">
                <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-4">
                        <div className="px-4 py-2 bg-slate-900 text-white text-xs font-black rounded-lg">
                            全 {activeFilters.length > 0 ? "12" : "842"} 件
                        </div>
                        <h2 className="text-xl font-black text-slate-900">
                            {activeFilters.length > 0 ? "絞り込み結果" : "最新の検索結果"}
                        </h2>
                    </div>
                    <div className="flex gap-4">
                        <select className="bg-transparent font-bold text-slate-600 focus:outline-none cursor-pointer">
                            <option>新着順</option>
                            <option>金額が高い順</option>
                            <option>締切が近い順</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <Link href={`/subsidies/${i}`} key={i} className="group bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-2xl transition-all duration-500 block">
                            <div className="p-10">
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="px-3 py-1 bg-success/10 text-success text-[10px] font-black rounded-full">公募中</span>
                                    <span className="text-[10px] font-black text-slate-400">更新: 2025.12.23</span>
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-6 group-hover:text-primary transition-colors">
                                    {keyword ? `${keyword}関連補助金 ${i}` : `サンプル補助金制度タイトル ${i}`}
                                </h3>
                                <p className="text-slate-500 text-sm mb-10 line-clamp-2 leading-relaxed font-medium">
                                    この補助金は、中小企業の事業継続と競争力強化を目的とした支援制度です。
                                    {keyword && `特に${keyword}の活用を検討されている事業者様に推奨されます。`}
                                </p>
                                <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">上限金額</span>
                                        <span className="text-xl font-black text-success">最大 1,000万円</span>
                                    </div>
                                    <ArrowRight className="w-6 h-6 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Pagination Placeholder */}
                <div className="mt-20 flex justify-center gap-2">
                    {[1, 2, 3, "...", 12].map((p, i) => (
                        <button key={i} className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm transition-all ${p === 1 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white border border-slate-200 text-slate-400 hover:border-primary hover:text-primary'}`}>
                            {p}
                        </button>
                    ))}
                </div>
            </div>

            {/* Back to Home Link */}
            <div className="container px-6 mx-auto pb-24">
                <Link href="/" className="text-slate-400 font-bold hover:text-primary transition-colors flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 rotate-180" />
                    トップページに戻る
                </Link>
            </div>
        </div>
    );
}

export default function SubsidiesPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-50 animate-pulse" />}>
            <SubsidiesContent />
        </Suspense>
    );
}
