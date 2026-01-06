
"use client";

import { ArrowRight, Calendar, Clock, Facebook, Linkedin, Share2, Tag, Twitter } from "lucide-react";
import Link from "next/link";

export default function ArticleDetailPage({ params }: { params: { id: string } }) {
    return (
        <div className="min-h-screen bg-white">
            {/* Header Image */}
            <div className="w-full h-[60vh] relative">
                <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600"
                    alt="Article Cover"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-20">
                    <div className="container mx-auto max-w-4xl">
                        <div className="flex items-center gap-4 text-white/80 font-bold mb-6">
                            <span className="px-3 py-1 bg-primary text-white text-xs font-black rounded-lg">トレンド</span>
                            <div className="flex items-center gap-2 text-xs">
                                <Calendar className="w-4 h-4" />
                                2024.12.23
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                                <Clock className="w-4 h-4" />
                                読了時間 5分
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8">
                            2025年度の補助金トレンド予測：<br />
                            <span className="text-primary">DX</span>と<span className="text-success">環境対応</span>が鍵に
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container px-6 mx-auto py-16">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Share Side (Desktop) */}
                    <div className="hidden md:flex md:col-span-1 flex-col gap-6 sticky top-24 h-min">
                        <button className="w-12 h-12 rounded-full bg-slate-100 hover:bg-black hover:text-white flex items-center justify-center transition-all md: tooltip" aria-label="Share on X">
                            <Twitter className="w-5 h-5" />
                        </button>
                        <button className="w-12 h-12 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all">
                            <Facebook className="w-5 h-5" />
                        </button>
                        <button className="w-12 h-12 rounded-full bg-slate-100 hover:bg-blue-700 hover:text-white flex items-center justify-center transition-all">
                            <Linkedin className="w-5 h-5" />
                        </button>
                        <button className="w-12 h-12 rounded-full bg-slate-100 hover:text-primary flex items-center justify-center transition-all">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Main Text */}
                    <div className="md:col-span-8 space-y-8">
                        <p className="text-xl font-bold text-slate-700 leading-loose">
                            2025年度、中小企業庁は「省力化」と「脱炭素」をさらに強く推進する方針を固めました。本記事では、来年度の主力となる補助金の変更点と、今のうちに準備すべきポイントを解説します。
                        </p>

                        <div className="prose prose-lg prose-slate max-w-none font-medium">
                            <h2>1. 省力化投資補助金の拡充</h2>
                            <p>
                                人手不足が深刻化する中、IoT機器や配膳ロボットなどの導入を支援する「省力化投資補助金」の予算枠が拡大される見込みです。特に、カタログから選ぶだけの簡易申請枠（カタログ型）の対象製品が大幅に追加されます。
                            </p>

                            <h3>注目の対象製品カテゴリ</h3>
                            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                                <li>自動清掃ロボット</li>
                                <li>自動配膳システム</li>
                                <li>セルフ精算機</li>
                                <li>在庫管理AIシステム</li>
                            </ul>

                            <figure className="my-10 rounded-[2rem] overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" alt="Tech" />
                                <figcaption className="text-center text-xs text-slate-400 mt-4 font-bold">自動化技術の進展が鍵となる</figcaption>
                            </figure>

                            <h2>2. GX（グリーントランスフォーメーション）分野への重点配分</h2>
                            <p>
                                「ものづくり補助金」においても、省エネ設備投資枠（グリーン枠）の補助率が優遇される傾向が継続します。炭素生産性を向上させる設備投資に対して、最大で3分の2の補助が受けられる可能性があります。
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="pt-12 border-t border-slate-100 flex flex-wrap gap-2">
                            {["補助金トレンド", "2025年度", "省力化", "GX"].map(tag => (
                                <Link key={tag} href={`/articles?tag=${tag}`} className="flex items-center gap-1 px-4 py-2 bg-slate-50 rounded-full text-slate-600 font-bold text-sm hover:bg-slate-100 transition-colors">
                                    <Tag className="w-3.5 h-3.5" />
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="md:col-span-3 space-y-8">
                        <div className="bg-slate-50 p-6 rounded-[2rem]">
                            <h3 className="font-black text-slate-900 mb-4">この記事の著者</h3>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt="Author" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="font-black text-slate-900 text-sm">編集部デスク</div>
                                    <div className="text-xs text-slate-500 font-bold">補助金ポータル</div>
                                </div>
                            </div>
                            <button className="w-full py-3 bg-white border-2 border-slate-200 rounded-xl text-slate-600 font-black text-xs hover:border-primary hover:text-primary transition-all">
                                執筆記事一覧
                            </button>
                        </div>

                        <div>
                            <h3 className="font-black text-slate-900 mb-4">関連記事</h3>
                            <div className="space-y-4">
                                {[1, 2, 3].map(i => (
                                    <Link key={i} href="#" className="block group">
                                        <div className="aspect-video rounded-xl overflow-hidden mb-2">
                                            <img src={`https://source.unsplash.com/random/400x300?business&sig=${i}`} alt="Related" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                        </div>
                                        <h4 className="font-bold text-slate-700 text-sm group-hover:text-primary transition-colors line-clamp-2">
                                            事業再構築補助金の次回公募はいつ？予想スケジュル
                                        </h4>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to List */}
            <div className="container px-6 mx-auto pb-24 text-center">
                <Link href="/articles" className="inline-flex items-center gap-2 text-slate-400 font-bold hover:text-primary transition-colors">
                    <ArrowRight className="w-5 h-5 rotate-180" />
                    記事一覧に戻る
                </Link>
            </div>
        </div>
    );
}
