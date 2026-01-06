
"use client";

import { ArrowRight, BookOpen, Clock, Tag, X } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ArticlesContent() {
    const searchParams = useSearchParams();
    const tag = searchParams.get("tag");

    const articles = [
        { title: "2025年度の補助金トレンド予測：DXと環境対応が鍵に", category: "トレンド", date: "2024.12.23", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
        { title: "【徹底解説】事業再構築補助金の採択率を上げる5つのポイント", category: "解説", date: "2024.12.20", image: "https://images.unsplash.com/photo-1454165833772-d99628a5ffef?auto=format&fit=crop&q=80&w=800" },
        { title: "中小企業が今すぐ取り組める省エネ・脱炭素の補助金活用術", category: "省エネ", date: "2024.12.18", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" },
        { title: "IT導入補助金2024のスケジュールと申請時の注意点まとめ", category: "IT導入", date: "2024.12.15", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Page Header */}
            <div className="bg-white border-b border-slate-200 pt-20 pb-16">
                <div className="container px-6 mx-auto">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-black rounded-lg mb-6">
                            <BookOpen className="w-3.5 h-3.5" />
                            知って得する補助金コラム
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                            ビジネスを成長させる<span className="text-primary">知恵。</span>
                        </h1>
                        <p className="text-slate-500 text-xl font-bold leading-relaxed max-w-2xl mb-8">
                            補助金・助成金の最新情報から、申請のノウハウ、経営に役立つトレンドまで、専門家が分かりやすく解説します。
                        </p>

                        {tag && (
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 font-black text-sm rounded-full animate-in zoom-in">
                                タグ: {tag}
                                <X className="w-4 h-4 cursor-pointer hover:text-red-500" onClick={() => window.history.back()} />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Articles List */}
            <div className="container px-6 mx-auto py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* If tag is present, we could filter. For now, we mock it by showing the same list but implying relevance */}
                    {articles.map((art, i) => (
                        <div key={i} className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
                            <div className="aspect-[16/10] relative overflow-hidden">
                                <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-[10px] font-black text-slate-900 rounded-xl shadow-sm">
                                        {art.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-10 flex flex-col flex-1">
                                <div className="flex items-center gap-4 text-slate-400 text-xs font-bold mb-6">
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5" />
                                        {art.date}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Tag className="w-3.5 h-3.5" />
                                        {tag ? `#${tag}` : "#補助金解説"}
                                    </div>
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-8 leading-tight group-hover:text-primary transition-colors">
                                    {art.title}
                                </h3>
                                <Link href={`/articles/${i}`} className="mt-auto flex items-center gap-2 text-primary font-black group/btn group-hover:gap-4 transition-all">
                                    記事を読む
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-20 flex justify-center gap-3">
                    <button className="px-8 py-4 bg-white border border-slate-200 text-slate-400 font-bold rounded-2xl hover:border-primary hover:text-primary transition-all">
                        前のページ
                    </button>
                    <button className="px-8 py-4 bg-primary text-white font-black rounded-2xl shadow-lg shadow-primary/20 hover:bg-teal-600 transition-all">
                        次の記事を読み込む
                    </button>
                </div>
            </div>

            {/* Bottom Recommendation */}
            <div className="container px-6 mx-auto pb-24">
                <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center md:text-left">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-xl">
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">最新情報を見逃さない</h2>
                            <p className="text-slate-400 text-lg font-medium leading-relaxed">
                                重要ニュースや注目の補助金公募情報を、メールマガジンで定期的にお届けします。
                            </p>
                        </div>
                        <button className="bg-secondary hover:bg-yellow-400 text-primary font-black px-12 py-5 rounded-2xl transition-all shadow-xl shadow-secondary/20 text-lg">
                            メルマガに登録する
                        </button>
                    </div>
                </div>
            </div>

            <div className="container px-6 mx-auto pb-24 text-center">
                <Link href="/" className="inline-flex items-center gap-2 text-slate-400 font-bold hover:text-primary transition-colors">
                    <ArrowRight className="w-5 h-5 rotate-180" />
                    トップページに戻る
                </Link>
            </div>
        </div>
    );
}

export default function ArticlesPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-50 animate-pulse" />}>
            <ArticlesContent />
        </Suspense>
    );
}
