
"use client";

import { ArrowRight, Search, Users, X } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ExpertsContent() {
    const searchParams = useSearchParams();
    const type = searchParams.get("type");
    const specialty = searchParams.get("specialty");
    const region = searchParams.get("region");

    const experts = [
        { name: "佐藤 健二", role: "公認会計士 / 税理士", tags: ["事業再構築", "DX"], image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
        { name: "田中 美咲", role: "中小企業診断士", tags: ["創業融資", "IT導入"], image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
        { name: "鈴木 一郎", role: "社会保険労務士", tags: ["雇用調整", "働き方改革"], image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
        { name: "高橋 陽子", role: "行政書士", tags: ["ものづくり補助金", "特許"], image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400" },
    ];

    // Simple mock filter logic (visual only for this demo unless we had real data structure matching queries)
    // If a filter is active, we just show a banner, but technically we could filter 'tags' or 'role'.
    const activeFilters = [
        type && { label: `士業種: ${type}`, key: "type" },
        specialty && { label: `得意分野: ${specialty}`, key: "specialty" },
        region && { label: `地域: ${region}`, key: "region" },
    ].filter(Boolean) as { label: string; key: string }[];

    return (
        <div className="min-h-screen bg-white">
            {/* Page Header */}
            <div className="bg-slate-900 pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-success rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="container px-6 mx-auto relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white/80 text-sm font-black mb-8">
                            <Users className="w-4 h-4 text-primary" />
                            提携パートナー 150名突破
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                            信頼できる<span className="text-primary">専門家</span>と繋がる。
                        </h1>
                        <p className="text-white/60 text-xl font-medium leading-relaxed mb-12 max-w-2xl">
                            補助金申請の成功率を高める、実績豊富な専門家をご紹介します。
                            あなたのビジネスを伴走型で全力サポート。
                        </p>

                        <div className="max-w-2xl relative group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 w-6 h-6 group-focus-within:text-primary transition-colors" />
                            <input
                                type="text"
                                defaultValue={type || specialty || ""}
                                placeholder="エリア、専門分野、資格で絞り込む..."
                                className="w-full pl-16 pr-8 py-6 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/30 focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all font-bold backdrop-blur-md"
                            />
                        </div>

                        {activeFilters.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-6 animate-in slide-in-from-top-2">
                                {activeFilters.map((filter) => (
                                    <span key={filter.key} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-primary font-black text-sm rounded-full">
                                        {filter.label}
                                        <X className="w-4 h-4 cursor-pointer hover:text-white" onClick={() => window.history.back()} />
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Experts Card Grid */}
            <div className="container px-6 mx-auto py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Visual trick: show we found matches if filter is on */}
                    {activeFilters.length > 0 && (
                        <div className="col-span-full mb-4">
                            <p className="text-slate-500 font-bold">
                                {activeFilters.map(f => f.label).join(", ")} に一致する専門家が見つかりました。
                            </p>
                        </div>
                    )}

                    {experts.map((exp, i) => (
                        <div key={i} className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
                            <div className="aspect-square relative overflow-hidden">
                                <img src={exp.image} alt={exp.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-xl font-black text-slate-900 mb-2">{exp.name}</h3>
                                <p className="text-slate-500 text-sm font-black mb-6">{exp.role}</p>
                                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                    {exp.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-slate-50 border border-slate-100 text-[10px] font-black text-slate-400 rounded-lg group-hover:border-primary/20 group-hover:text-primary transition-colors">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <Link href={`/experts/${i}`} className="w-full py-4 bg-slate-50 group-hover:bg-primary group-hover:text-white text-slate-400 font-black rounded-xl border border-slate-100 group-hover:border-primary transition-all flex items-center justify-center gap-2">
                                    プロフィールを見る
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Back to Home link */}
            <div className="container px-6 mx-auto pb-24 text-center">
                <Link href="/" className="inline-flex items-center gap-2 text-slate-400 font-bold hover:text-primary transition-colors">
                    <ArrowRight className="w-5 h-5 rotate-180" />
                    トップページに一度戻る
                </Link>
            </div>
        </div>
    );
}

export default function ExpertsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-white animate-pulse" />}>
            <ExpertsContent />
        </Suspense>
    );
}
