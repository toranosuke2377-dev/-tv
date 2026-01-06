
"use client";

import { ArrowRight, Award, Briefcase, MapPin, Star, User } from "lucide-react";
import Link from "next/link";

export default function ExpertDetailPage({ params }: { params: { id: string } }) {
    const id = params.id;

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header Profile */}
            <div className="bg-white border-b border-slate-200 pb-12 pt-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                <div className="container px-6 mx-auto relative z-10">
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start">
                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
                                alt="Expert Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-slate-900 text-white font-bold text-xs rounded-lg">公認会計士</span>
                                <span className="px-3 py-1 bg-slate-900 text-white font-bold text-xs rounded-lg">税理士</span>
                                <div className="flex items-center gap-1 text-yellow-400">
                                    <Star className="w-4 h-4 fill-current" />
                                    <span className="text-slate-900 font-black text-sm">4.9</span>
                                    <span className="text-slate-400 text-xs font-bold">(124件の評価)</span>
                                </div>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
                                佐藤 健二
                                <span className="text-lg md:text-xl text-slate-400 font-bold ml-4">Sato Kenji</span>
                            </h1>
                            <p className="text-slate-500 font-bold leading-relaxed mb-8 max-w-2xl">
                                元国税局勤務の経験を活かし、的確な財務分析と補助金申請サポートを提供します。
                                ものづくり補助金、事業再構築補助金の採択実績多数。
                                クライアントの事業成長を第一に考えた伴走支援を心がけています。
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <div className="flex items-center gap-2 text-slate-600 font-bold text-sm">
                                    <MapPin className="w-4 h-4 text-primary" />
                                    東京都千代田区
                                </div>
                                <div className="flex items-center gap-2 text-slate-600 font-bold text-sm">
                                    <Briefcase className="w-4 h-4 text-primary" />
                                    実務経験 15年
                                </div>
                                <div className="flex items-center gap-2 text-slate-600 font-bold text-sm">
                                    <Award className="w-4 h-4 text-primary" />
                                    採択率 85%以上
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container px-6 mx-auto py-16">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Left Column (Info) */}
                    <div className="md:col-span-2 space-y-12">
                        {/* Services */}
                        <section>
                            <h2 className="text-2xl font-black text-slate-900 mb-6">対応可能な業務</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {["事業再構築補助金 申請支援", "ものづくり補助金 申請支援", "IT導入補助金 申請支援", "創業融資サポート", "事業計画書作成", "財務コンサルティング"].map((s, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 font-bold text-slate-700 shadow-sm">
                                        {s}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Achievements */}
                        <section>
                            <h2 className="text-2xl font-black text-slate-900 mb-6">主な支援実績</h2>
                            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 space-y-6">
                                <div className="pb-6 border-b border-slate-100">
                                    <div className="text-xs text-slate-400 font-black mb-2">2024.11</div>
                                    <h3 className="text-lg font-black text-slate-900 mb-2">製造業（金属加工）</h3>
                                    <p className="text-slate-600 font-medium text-sm">ものづくり補助金を活用し、最新鋭のレーザー加工機を導入。生産性を200%向上。</p>
                                </div>
                                <div className="pb-6 border-b border-slate-100">
                                    <div className="text-xs text-slate-400 font-black mb-2">2024.09</div>
                                    <h3 className="text-lg font-black text-slate-900 mb-2">飲食業（カフェ経営）</h3>
                                    <p className="text-slate-600 font-medium text-sm">事業再構築補助金により、店舗販売からECサイトによる冷凍食品販売へ業態転換。</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column (Contact) */}
                    <div className="md:col-span-1">
                        <div className="sticky top-10 space-y-6">
                            <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                                <h3 className="text-lg font-black text-slate-900 mb-6">
                                    この専門家に相談する
                                </h3>
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-black text-slate-500 mb-2">相談内容</label>
                                        <select className="w-full p-4 bg-slate-50 rounded-xl font-bold text-sm border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all">
                                            <option>補助金申請について</option>
                                            <option>資金調達について</option>
                                            <option>その他経営相談</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black text-slate-500 mb-2">メッセージ</label>
                                        <textarea
                                            rows={4}
                                            className="w-full p-4 bg-slate-50 rounded-xl font-bold text-sm border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-slate-300"
                                            placeholder="具体的な相談内容をご記入ください..."
                                        />
                                    </div>
                                    <button className="w-full py-4 bg-slate-900 text-white font-black rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20">
                                        メッセージを送信
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </form>
                                <p className="mt-4 text-[10px] text-slate-400 text-center font-medium">
                                    通常24時間以内に返信があります。
                                </p>
                            </div>

                            <Link href="/experts" className="block text-center text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors">
                                ← 専門家一覧に戻る
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
