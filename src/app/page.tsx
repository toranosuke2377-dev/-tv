"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Search, FileText, Users, TrendingUp, ShieldCheck, FileSearch, Sparkles, X, Menu, ChevronRight, ChevronLeft, Zap, AppWindow, Maximize2 } from 'lucide-react';
import Link from 'next/link';
import CategorySearch from '@/components/CategorySearch';
import PrefectureSearch from '@/components/PrefectureSearch';
import YoutubeSection from '@/components/YoutubeSection';
import HeroSlider from '@/components/HeroSlider';

export default function Home() {
    const [activeSearch, setActiveSearch] = useState<null | 'subsidy' | 'expert'>(null);

    const closeSearch = () => setActiveSearch(null);

    return (
        <>
            {/* Hero Slider Section */}
            <HeroSlider />

            {/* Sticky Search Integrated Section */}
            <section className="relative z-20 -mt-16 pb-24">
                <div className="container px-6 mx-auto">

                    {/* Premium Glassmorphic Search Bar */}
                    <div className="max-w-5xl mx-auto bg-white/40 backdrop-blur-2xl p-4 rounded-[3rem] border border-white/40 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] animate-in fade-in zoom-in-95 duration-1000 delay-300">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-[2.5] relative group/input">
                                <Search className="absolute left-7 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6 group-focus-within/input:text-primary transition-colors" />
                                <input
                                    type="text"
                                    placeholder="キーワードを入力 (例: IT導入, 省エネ, リスキリング)"
                                    className="w-full pl-16 pr-8 py-7 bg-white/60 rounded-[2rem] text-slate-900 text-xl focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-slate-400 font-bold border border-slate-100 group-hover/input:border-primary/20"
                                />
                            </div>
                            <div className="flex-1 bg-white/60 rounded-[2rem] flex items-center px-6 border border-slate-100 group/select">
                                <select className="w-full bg-transparent py-7 text-slate-700 focus:outline-none appearance-none cursor-pointer font-black text-lg">
                                    <option>すべての地域</option>
                                    <option>東京都</option>
                                    <option>大阪府</option>
                                    <option>愛知県</option>
                                    <option>福岡県</option>
                                </select>
                            </div>
                            <Link href="/diagnosis" className="w-full md:w-auto bg-primary hover:bg-teal-600 text-white font-black px-12 py-7 rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 text-xl group whitespace-nowrap">
                                AI無料診断を始める
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Stats / Tags */}
                    <div className="mt-16 flex flex-wrap justify-center gap-4 text-slate-400 animate-in fade-in slide-in-from-top-4 duration-1000 delay-500">
                        <span className="text-[11px] font-black mt-3.5 uppercase tracking-widest text-slate-300">Trending Tags</span>
                        {["DX投資", "省エネ化補助", "事業承継支援", "IT導入2025"].map((tag) => (
                            <Link href={`/subsidies?tag=${tag}`} key={tag} className="px-6 py-2.5 bg-white/50 backdrop-blur-md rounded-2xl text-[13px] font-black border border-slate-100 text-slate-600 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all shadow-sm">
                                {tag}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>



            {/* Search Hub Section: Bento Grid Refactor */}
            <section className="py-16 bg-white overflow-hidden border-b border-slate-100">
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-block px-6 py-2 bg-primary/5 rounded-full text-primary text-xs font-black tracking-widest uppercase mb-6 border border-primary/10">
                            Search Hub 2.0
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
                            あなたのための<span className="text-primary">最適解</span>を。
                        </h2>
                        <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto font-bold leading-relaxed">
                            補助金の検索から専門家への相談まで、ビジネスを加速させる<br className="hidden md:block" />
                            リソースを詰め込んだ、次世代のサーチハブ。
                        </p>
                    </div>

                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 auto-rows-[300px] md:auto-rows-[320px]">
                        {/* 補助金を探す Card - Large Featured (Bento span 7) */}
                        <div
                            onClick={() => setActiveSearch('subsidy')}
                            className="md:col-span-12 lg:col-span-6 md:row-span-2 group relative overflow-hidden rounded-[3.5rem] bg-slate-50 border border-slate-200 shadow-2xl shadow-slate-200/50 hover:shadow-success/20 hover:border-success/30 transition-all duration-700 cursor-pointer flex flex-col hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 z-0">
                                <img
                                    src="https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=1200"
                                    className="w-full h-full object-cover opacity-[0.2] group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                                    alt="補助金を探す"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/60 to-transparent" />
                            </div>

                            <div className="relative z-10 flex-1 flex flex-col p-12 md:p-16 lg:p-20">
                                <div className="flex items-center gap-8 mb-10">
                                    <div className="w-24 h-24 bg-success/10 rounded-[2.5rem] flex items-center justify-center border border-success/20 shadow-inner">
                                        <FileSearch className="w-12 h-12 text-success" />
                                    </div>
                                    <div>
                                        <h3 className="text-4xl md:text-6xl font-black text-slate-900 group-hover:text-success transition-colors">補助金を<span className="text-success">探す</span></h3>
                                        <p className="text-success font-black text-xs uppercase tracking-[0.2em] mt-2">Subsidy Explorer</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 text-lg lg:text-xl leading-relaxed mb-12 max-w-xl font-bold">
                                    全国各地の補助金情報を網羅。AIが地域・目的・業種から、事業に最適な活用プランを精緻に導き出します。
                                </p>
                                <div className="mt-auto">
                                    <button className="flex items-center gap-4 bg-success hover:bg-emerald-600 text-white font-black py-6 px-12 rounded-[2rem] transition-all shadow-2xl shadow-success/30 group-hover:px-16 text-xl">
                                        詳細条件で検索
                                        <Maximize2 className="w-7 h-7" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* 専門家を探す Card - Medium (Bento span 5) */}
                        {/* 専門家を探す Card - Medium (Bento span 5) */}
                        <div
                            onClick={() => setActiveSearch('expert')}
                            className="md:col-span-12 lg:col-span-6 md:row-span-2 group relative overflow-hidden rounded-[3.5rem] bg-primary/5 border border-primary/20 shadow-2xl shadow-primary/5 hover:shadow-primary/20 hover:border-primary/40 transition-all duration-700 cursor-pointer flex flex-col hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 z-0">
                                <img
                                    src="https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&q=80&w=1200"
                                    className="w-full h-full object-cover opacity-[0.15] group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                                    alt="専門家を探す"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                            </div>

                            <div className="relative z-10 flex-1 flex flex-col p-12 md:p-16 lg:p-20">
                                <div className="flex items-center gap-8 mb-10">
                                    <div className="w-24 h-24 bg-primary/10 rounded-[2.5rem] flex items-center justify-center border border-primary/20 text-primary shadow-inner">
                                        <Users className="w-12 h-12" />
                                    </div>
                                    <div>
                                        <h3 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight group-hover:text-primary transition-colors">専門家を<br className="hidden" /><span className="text-primary">探す</span></h3>
                                        <p className="text-primary font-black text-xs uppercase tracking-[0.2em] mt-2">Expert Explorer</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 text-lg lg:text-xl leading-relaxed mb-12 max-w-xl font-bold">
                                    信頼できる士業ネットワーク。実績豊富なパートナーが、あなたの申請を成功へと導きます。
                                </p>
                                <div className="mt-auto">
                                    <button className="flex items-center gap-4 bg-primary hover:bg-blue-700 text-white font-black py-6 px-12 rounded-[2rem] transition-all shadow-xl shadow-primary/30 group-hover:px-16 text-xl">
                                        専門家を絞り込む
                                        <Maximize2 className="w-7 h-7" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Bento Bonus Card 1 - Quick Diagnosis (Bento span 6) */}
                        <Link href="/diagnosis" className="hidden lg:flex md:col-span-6 row-span-1 group relative overflow-hidden rounded-[3rem] bg-slate-900 border border-slate-800 p-12 items-center justify-between hover:shadow-2xl hover:border-secondary/30 transition-all cursor-pointer">
                            <div>
                                <h4 className="text-2xl font-black text-white mb-2">10秒でわかる無料診断</h4>
                                <p className="text-slate-400 text-sm font-bold">あなたの会社に合う補助金をAIが判定</p>
                            </div>
                            <button className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <Zap className="w-8 h-8 fill-current" />
                            </button>
                        </Link>

                        {/* Bento Bonus Card 2 - Stats (Bento span 6) */}
                        <div className="hidden lg:flex md:col-span-6 row-span-1 group relative overflow-hidden rounded-[3rem] bg-white border border-slate-100 p-12 items-center justify-around text-center hover:shadow-xl transition-all">
                            {[
                                { val: "5,000+", label: "掲載制度数" },
                                { val: "92.4%", label: "提携士業満足度" },
                                { val: "10万件+", label: "診断実績" }
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="text-3xl font-black text-primary mb-1">{stat.val}</span>
                                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Focused Search Overlays - Unified Modal */}
            {(activeSearch === 'subsidy' || activeSearch === 'expert') && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-500 ease-out">
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl" onClick={closeSearch} />
                    <div className="relative w-full max-w-5xl bg-white rounded-[3rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 slide-in-from-bottom-12 duration-500 ease-out border border-slate-200">
                        {/* Tab Navigation */}
                        <div className="flex flex-row">
                            <button
                                onClick={() => setActiveSearch('subsidy')}
                                className={`flex-1 py-5 flex items-center justify-center gap-2 font-black text-xl transition-all ${activeSearch === 'subsidy'
                                    ? 'bg-success text-white'
                                    : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                                    }`}
                            >
                                <FileSearch className="w-6 h-6" />
                                補助金を探す
                            </button>
                            <button
                                onClick={() => setActiveSearch('expert')}
                                className={`flex-1 py-5 flex items-center justify-center gap-2 font-black text-xl transition-all ${activeSearch === 'expert'
                                    ? 'bg-primary text-white'
                                    : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                                    }`}
                            >
                                <Users className="w-6 h-6" />
                                専門家を探す
                            </button>
                        </div>

                        <div className="p-8 md:p-14 overflow-y-auto relative">
                            <button onClick={closeSearch} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-all hover:rotate-90 z-20">
                                <X className="w-6 h-6 text-slate-400" />
                            </button>

                            {/* Subsidy Search Form */}
                            {activeSearch === 'subsidy' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                    {/* Keyword */}
                                    <div className="space-y-4">
                                        <label className="text-lg font-black text-slate-800 ml-1">キーワードを入力</label>
                                        <div className="relative">
                                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
                                            <input
                                                type="text"
                                                placeholder="例：IT導入, 省エネ"
                                                className="w-full pl-16 pr-6 py-6 bg-slate-50 border border-slate-200 rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-success/5 focus:border-success transition-all text-lg font-medium"
                                            />
                                        </div>
                                    </div>

                                    {/* Region */}
                                    <div className="space-y-4">
                                        <label className="text-lg font-black text-slate-800 ml-1">地域を選択</label>
                                        <select className="w-full px-8 py-6 bg-slate-50 border border-slate-200 rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-success/5 focus:border-success transition-all text-lg appearance-none cursor-pointer font-bold">
                                            <option>すべての地域</option>
                                            <option>北海道・東北</option>
                                            <option>関東</option>
                                            <option>中部</option>
                                            <option>近畿</option>
                                            <option>中国・四国</option>
                                            <option>九州・沖縄</option>
                                        </select>
                                    </div>

                                    {/* Purpose Selection */}
                                    <div className="col-span-1 md:col-span-2 space-y-6">
                                        <label className="text-lg font-black text-slate-800 ml-1">利用目的を選択 (複数選択可)</label>
                                        <div className="flex flex-wrap gap-3 p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem]">
                                            {[
                                                "経営改善・経営強化", "地域活性・まちづくり", "設備投資", "人材育成・雇用",
                                                "生産性向上・業務効率化", "起業・創業・ベンチャー", "販路開拓・販路拡大", "ものづくり・新商品開発",
                                                "デジタル", "省エネ", "環境", "再エネ・畜エネ",
                                                "研究・実証実験・産学連携", "海外展開", "防犯・防災・BCP", "観光・インバウンド",
                                                "新規事業・第二創業", "空き家利用", "EV関連", "事業承継",
                                                "省力化・省人化", "感染症対策", "被災者支援", "文化・伝統",
                                                "企業立地・企業誘致・オフィス移転", "特許・知的財産", "業態転換・新分野展開", "六次産業化",
                                                "認証取得", "融資", "農福連携"
                                            ].map((purpose) => (
                                                <Link href={`/subsidies?purpose=${purpose}`} key={purpose} className="px-3 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-success hover:text-success hover:bg-success/5 transition-all shadow-sm">
                                                    {purpose}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Industry Selection */}
                                    <div className="col-span-1 md:col-span-2 space-y-6">
                                        <label className="text-lg font-black text-slate-800 ml-1">業種を選択 (複数選択可)</label>
                                        <div className="flex flex-wrap gap-3 p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem]">
                                            {[
                                                "サービス業", "農業", "製造業", "運輸業",
                                                "医療・福祉", "介護", "飲食業", "小売業",
                                                "宿泊業", "卸売・小売業", "情報通信業", "漁業",
                                                "建設業", "林業", "食品製造業", "畜産業",
                                                "電気・ガス", "金融・保険業", "不動産業", "水産業",
                                                "加工販売業", "流通販売業", "鉱業", "建設・不動産業",
                                                "倉庫業"
                                            ].map((industry) => (
                                                <Link href={`/subsidies?industry=${industry}`} key={industry} className="px-3 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-success hover:text-success hover:bg-success/5 transition-all shadow-sm">
                                                    {industry}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Status */}
                                    <div className="space-y-4">
                                        <label className="text-lg font-black text-slate-800 ml-1">公募ステータス</label>
                                        <div className="flex gap-4">
                                            {["公募予定", "公募中", "公募終了"].map((status) => (
                                                <button key={status} className="flex-1 py-5 px-4 rounded-2xl border border-slate-200 text-sm font-black hover:bg-success/10 hover:border-success/30 hover:text-success transition-all shadow-sm">
                                                    {status}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Amount */}
                                    <div className="space-y-4">
                                        <label className="text-lg font-black text-slate-800 ml-1">上限金額・助成額</label>
                                        <select className="w-full px-8 py-6 bg-slate-50 border border-slate-200 rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-success/5 focus:border-success transition-all text-lg appearance-none cursor-pointer font-bold">
                                            <option>上限金額を選択</option>
                                            <option>100万円以下</option>
                                            <option>500万円以下</option>
                                            <option>1,000万円以下</option>
                                            <option>1,000万円以上</option>
                                        </select>
                                    </div>

                                    <div className="col-span-1 md:col-span-2 mt-4 flex justify-center">
                                        <Link href="/subsidies" className="inline-flex items-center gap-4 bg-success hover:bg-emerald-600 text-white font-black py-7 px-24 rounded-[2.5rem] transition-all shadow-2xl shadow-success/30 text-2xl group">
                                            この条件で補助金を検索する
                                            <ArrowRight className="w-10 h-10 group-hover:translate-x-3 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            )}

                            {/* Expert Search Form */}
                            {activeSearch === 'expert' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                    {/* Keyword */}
                                    <div className="space-y-4">
                                        <label className="text-lg font-black text-slate-800 ml-1">キーワードを入力</label>
                                        <div className="relative">
                                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
                                            <input
                                                type="text"
                                                placeholder="ご自由に入力してください"
                                                className="w-full pl-16 pr-6 py-6 bg-slate-50 border border-slate-200 rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all text-lg font-medium"
                                            />
                                        </div>
                                    </div>

                                    {/* Region */}
                                    <div className="space-y-4">
                                        <label className="text-lg font-black text-slate-800 ml-1">地域を選択</label>
                                        <select className="w-full px-8 py-6 bg-slate-50 border border-slate-200 rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all text-lg appearance-none cursor-pointer font-bold">
                                            <option>選択してください</option>
                                            <option>全国対応可能</option>
                                            <option>北海道・東北</option>
                                            <option>関東</option>
                                            <option>中部</option>
                                            <option>近畿</option>
                                            <option>中国・四国</option>
                                            <option>九州・沖縄</option>
                                        </select>
                                    </div>

                                    {/* Expert Type */}
                                    <div className="col-span-1 md:col-span-2 space-y-6">
                                        <label className="text-lg font-black text-slate-800 ml-1">士業種を選択</label>
                                        <div className="flex flex-wrap gap-3 p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem]">
                                            {[
                                                "行政書士", "社会保険労務士", "中小企業診断士", "税理士", "会計士",
                                                "司法書士", "弁護士", "弁理士", "民間コンサル"
                                            ].map((type) => (
                                                <Link href={`/experts?type=${type}`} key={type} className="px-6 py-3 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-600 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all shadow-sm">
                                                    {type}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Specialty */}
                                    <div className="col-span-1 md:col-span-2 space-y-6">
                                        <label className="text-lg font-black text-slate-800 ml-1">分野を選択</label>
                                        <div className="flex flex-wrap gap-3 p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem]">
                                            {[
                                                "設備投資", "雇用・助成金", "融資", "IT・DX", "研究所支援",
                                                "教育・メンタルヘルス", "中小企業支援", "農地・土地開発", "会社・法人",
                                                "社会保険・労働保険", "特許・知的財産", "遺言・相続", "外国人関連",
                                                "介護・福祉関連", "建設業・製造業", "運送・自動車", "産業廃棄・環境",
                                                "権利義務・事実証明", "医療法人関連", "風俗・各種営業", "ハラスメント"
                                            ].map((spec) => (
                                                <Link href={`/experts?specialty=${spec}`} key={spec} className="px-6 py-3 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-600 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all shadow-sm">
                                                    {spec}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="col-span-1 md:col-span-2 mt-4 flex justify-center">
                                        <Link href="/experts" className="inline-flex items-center gap-4 bg-primary hover:bg-blue-700 text-white font-black py-7 px-24 rounded-[2.5rem] transition-all shadow-2xl shadow-primary/30 text-2xl group">
                                            専門家を絞り込んで表示
                                            <ArrowRight className="w-10 h-10 group-hover:translate-x-3 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Latest Subsidies Section */}
            <section className="py-16 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col md:flex-row items-baseline justify-between mb-8 gap-4">
                        <div>
                            <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">最新の補助金・助成金<span className="text-success">。</span></h2>
                            <p className="text-slate-500 text-xl font-medium">直近で公募が開始された、今チェックすべき注目制度です</p>
                        </div>
                        <Link href="/subsidies" className="group flex items-center gap-2 text-primary font-black text-lg hover:text-blue-700 transition-colors">
                            すべての支援制度を見る
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { title: "DX・IT導入促進支援金", amount: "最大 500万円", region: "全国", category: "IT・システム", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600", link: "/subsidies/dx-it-support" },
                            { title: "省エネ設備更新補助事業", amount: "最大 1,000万円", region: "東京都", category: "設備投資", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600", link: "/subsidies/energy-saving" },
                            { title: "創業・再挑戦起業家支援", amount: "最大 200万円", region: "大阪府", category: "起業・創業", image: "https://images.unsplash.com/photo-1507679799987-c71277c4829a?auto=format&fit=crop&q=80&w=600", link: "/subsidies/startup-support" }
                        ].map((sub, i) => (
                            <Link href={sub.link} key={i} className="group bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:border-success/30 transition-all duration-500 flex flex-col h-full">
                                <div className="aspect-[21/9] relative overflow-hidden">
                                    <img src={sub.image} alt={sub.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-5 py-2 bg-success text-white text-[10px] font-black rounded-full shadow-lg">
                                            公募中
                                        </span>
                                    </div>
                                </div>
                                <div className="p-10 pt-8 flex flex-col flex-1">
                                    <div className="text-[10px] font-black text-primary mb-3 uppercase tracking-widest">{sub.category}</div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-primary transition-colors leading-tight">
                                        {sub.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm mb-10 line-clamp-3 font-medium leading-relaxed">
                                        事業の継続的発展を目的として、{sub.category}に関連する経費の一部を補助する制度です。
                                    </p>
                                    <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-slate-400 font-black uppercase tracking-tighter mb-1">上限金額</span>
                                            <span className="text-[22px] font-black text-success tracking-tight">{sub.amount}</span>
                                        </div>
                                        <button className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-success group-hover:border-success transition-all">
                                            <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            {/* Recommended Experts */}
            <section className="py-16 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-baseline mb-8 gap-4">
                        <div>
                            <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">おすすめの専門家<span className="text-primary">。</span></h2>
                            <p className="text-slate-500 text-xl font-medium">補助金申請のプロフェッショナルがあなたの事業をサポート</p>
                        </div>
                        <Link href="/experts" className="flex items-center gap-2 text-primary font-black text-lg hover:gap-4 transition-all group">
                            専門家をもっと探す <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "中野 拓実",
                                firm: "中野中小企業診断士事務所",
                                desc: "採択率90％以上！製造業・DX分野での申請から報告まで一貫してサポートいたします。",
                                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
                                role: "中小企業診断士",
                                tags: ["省エネ", "DX", "事業再構築"],
                                link: "/experts/nakano"
                            },
                            {
                                name: "佐藤 美咲",
                                firm: "佐藤税理士法人",
                                desc: "女性起業家・小規模事業者のための補助金活用と伴走支援を得意としています。",
                                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
                                role: "税理士",
                                tags: ["創業支援", "雇用助成", "IT導入"],
                                link: "/experts/sato"
                            },
                            {
                                name: "株式会社ミライ経営",
                                firm: "認定支援機関 第150号",
                                desc: "全国対応。AI診断と連動したスピード申請で、あなたの資金調達を最大化します。",
                                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
                                role: "経営コンサルタント",
                                tags: ["全般", "グローバル", "賃上げ"],
                                link: "/experts/mirai"
                            }
                        ].map((expert, i) => (
                            <Link href={expert.link} key={i} className="group bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden flex flex-col">
                                <div className="aspect-[4/3] relative overflow-hidden">
                                    <img src={expert.image} alt={expert.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0" />
                                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                                        <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-[10px] font-black text-slate-900 rounded-xl shadow-sm">
                                            {expert.role}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-10 flex flex-col flex-1">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-black text-slate-900 mb-1 leading-tight group-hover:text-primary transition-colors">{expert.name}</h3>
                                        <p className="text-slate-400 text-xs font-bold">{expert.firm}</p>
                                    </div>
                                    <p className="text-slate-500 text-sm mb-8 line-clamp-2 font-bold leading-relaxed">
                                        {expert.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-10">
                                        {expert.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-slate-50 text-[10px] font-black text-slate-400 rounded-lg group-hover:bg-primary/5 group-hover:text-primary transition-colors">#{tag}</span>
                                        ))}
                                    </div>
                                    <button className="mt-auto flex items-center gap-2 text-primary font-black group/btn group-hover:gap-4 transition-all">
                                        プロフィールを見る
                                        <ArrowRight className="w-5 h-5 transition-transform" />
                                    </button>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-20 p-12 rounded-[3.5rem] bg-slate-900 overflow-hidden relative shadow-2xl">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                            <div className="text-center lg:text-left">
                                <h3 className="text-3xl font-black text-white mb-4">専門家登録をご希望の方はこちら</h3>
                                <p className="text-slate-400 text-base font-medium">日本全国の中小企業へ、あなたの卓越した知見を届けましょう。</p>
                            </div>
                            <Link href="/experts/register" className="whitespace-nowrap bg-primary hover:bg-success text-white font-black px-12 py-6 rounded-2xl transition-all shadow-xl shadow-primary/30 text-xl group">
                                専門家登録はこちら
                                <ArrowRight className="inline-block ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* Featured Partner Section - Subsidy Common */}
            <section className="py-16 bg-slate-50 overflow-hidden">
                <div className="container px-6 mx-auto">
                    <div className="bg-white rounded-[4rem] border border-slate-100 shadow-2xl overflow-hidden group">
                        <div className="flex flex-col lg:flex-row items-center">
                            <div className="flex-1 p-12 lg:p-20 relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary text-[10px] font-black rounded-lg mb-8 tracking-widest uppercase">
                                    Official Partner
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                                    自社商材 × 補助金で<br />
                                    さらなる<span className="text-primary border-b-4 border-primary/20">売上アップ</span>を。
                                </h2>
                                <p className="text-slate-500 text-lg font-bold leading-relaxed mb-10 max-w-xl">
                                    「補助金コモン」は、企業の課題となっていた補助金を活用して、自社商材やサービスの売上向上を図りたいというニーズに対応した補助金営業専門のサービスです。
                                </p>
                                <div className="flex flex-wrap gap-4 mb-12">
                                    {["売上最大化", "営業支援", "専門コンサル"].map(tag => (
                                        <div key={tag} className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl text-xs font-black text-slate-400 border border-slate-100">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                                <Link href="/experts" className="inline-flex items-center gap-3 bg-[#FF9F59] hover:bg-[#F28C41] text-white font-black px-12 py-5 rounded-2xl transition-all shadow-xl shadow-orange-200 text-xl group active:scale-95">
                                    詳しくはこちら
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                            <div className="flex-1 w-full lg:h-[600px] relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
                                    alt="補助金コモン"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:block hidden" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Popular Article Ranking */}
            <section className="py-16 bg-slate-50 border-y border-slate-200">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-baseline mb-8 gap-4">
                        <div>
                            <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">人気記事ランキング<span className="text-secondary">。</span></h2>
                            <p className="text-slate-500 text-xl font-medium">多くの経営者が今チェックしている重要トピック</p>
                        </div>
                        <Link href="/articles" className="flex items-center gap-2 text-primary font-black text-lg hover:underline underline-offset-8 transition-all">
                            記事一覧へ
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Featured Article */}
                        <div className="lg:col-span-2">
                            <Link href="/articles/featured-article" className="bg-white rounded-[3rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-all group">
                                <div className="aspect-[16/9] relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=2000" alt="Education" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute top-8 left-8 flex gap-3">
                                        <span className="px-5 py-2 bg-secondary text-primary text-xs font-black rounded-full shadow-lg">RANK 1</span>
                                        <span className="px-5 py-2 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-black rounded-full border border-white/20 shadow-lg">教育支援</span>
                                    </div>
                                </div>
                                <div className="p-12">
                                    <div className="flex items-center gap-6 mb-8 text-xs text-slate-400 font-bold">
                                        <span className="font-mono text-primary">2025.12.15</span>
                                        <span className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
                                        <span>48,290 Views</span>
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-8 leading-tight group-hover:text-primary transition-colors">
                                        高校授業料の無償化！所得制限撤廃と私立高校の支援拡大へ【高等学校等就学支援金】
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium line-clamp-4">
                                        2026年度から所得制限が撤廃され、すべての世帯が実質授業料無償化となる予定です。具体的には、所得制限の撤廃と私立全日制高校の支援上限が年45万7,000円に引き上げられることが決定しました。高校生活のスタートを安心して迎えるためにも、制度のポイントを確認しましょう。
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-12">
                                        {["所得制限撤廃", "私立高校無償化", "就学支援金", "2026年度改正"].map(tag => (
                                            <span key={tag} className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-[10px] font-black text-slate-500 rounded-lg">#{tag}</span>
                                        ))}
                                    </div>
                                    <button className="flex items-center gap-4 text-primary font-black text-lg group/btn group-hover:gap-6 transition-all">
                                        記事を詳しく読む
                                        <ArrowRight className="w-6 h-6" />
                                    </button>
                                </div>
                            </Link>
                        </div>

                        {/* Ranking Sidebar */}
                        <div className="flex flex-col gap-6">
                            {[
                                { date: "2024.11.26", title: "高年齢求職者給付金とは？求職中の高齢者が受け取れる失業給付金", category: "雇用支援", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400", link: "/articles/ranking-2" },
                                { date: "2024.11.19", title: "定額減税補足給付金（不足額給付）だれが支給される？", category: "税制・給付金", image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=400", link: "/articles/ranking-3" },
                                { date: "2024.12.16", title: "東京アプリを登録してみた！12月15日から500ポイント還元開始", category: "地域情報", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400", link: "/articles/ranking-4" },
                                { date: "2024.12.08", title: "重点支援地方交付金を拡充！推奨メニュー「賃上げ環境整備」とは", category: "中小企業支援", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400", link: "/articles/ranking-5" },
                                { date: "2024.12.03", title: "【東京都】令和7年度12月補正予算 東京アプリ1.1万ポイント支給", category: "予算・政策", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400", link: "/articles/ranking-6" }
                            ].map((article, i) => (
                                <Link key={i} href={article.link} className="flex gap-4 group items-center p-4 bg-white rounded-3xl border border-transparent hover:border-slate-200 hover:shadow-lg transition-all duration-300">
                                    <div className="shrink-0 relative">
                                        <div className="w-16 h-16 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                                            <img src={article.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        </div>
                                        <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-secondary text-primary text-[10px] font-black flex items-center justify-center border-4 border-white shadow-lg">
                                            {i + 2}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 flex-1">
                                        <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest">
                                            <span className="text-primary">{article.category}</span>
                                        </div>
                                        <h4 className="text-[13px] font-bold text-slate-800 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                                            {article.title}
                                        </h4>
                                    </div>
                                </Link>
                            ))}

                            <div className="mt-8 p-10 rounded-[2.5rem] bg-primary relative overflow-hidden shadow-xl shadow-primary/20">
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-[40px] translate-x-1/2 translate-y-1/2" />
                                <h5 className="font-black text-white text-xl mb-4 leading-tight">最新情報を<br />いち早くチェック</h5>
                                <p className="text-xs text-white/70 mb-8 font-medium">重要ニュースをメルマガでお届けします。</p>
                                <Link href="/newsletter" className="w-full py-4 bg-secondary text-primary font-black rounded-xl hover:bg-yellow-400 transition-all shadow-lg active:scale-95 flex items-center justify-center">
                                    メルマガ会員登録する
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Article Search Section */}
            <section className="py-16 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center justify-center gap-6 mb-12 py-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                            <Search className="w-10 h-10 text-primary" />
                            <h2 className="text-4xl font-black text-slate-900 tracking-tight">記事を<span className="text-primary">探す</span></h2>
                        </div>

                        <div className="space-y-12">
                            {/* Popular Tags */}
                            <div className="flex flex-col md:flex-row gap-10 pb-12 border-b border-slate-100">
                                <div className="md:w-72 shrink-0">
                                    <h3 className="text-lg font-black text-slate-900 mb-2">人気タグ</h3>
                                    <p className="text-[13px] text-slate-400 font-medium">注目のキーワードから情報を探す</p>
                                    <Link href="/articles/tags" className="inline-block mt-4 text-[13px] text-primary font-bold hover:underline underline-offset-4 transition-all">タグ一覧を見る →</Link>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "キャリアアップ助成金", "省エネ", "小規模事業者持続化補助金",
                                        "リスキリング", "中小企業新事業進出補助金", "IT導入補助金",
                                        "ものづくり補助金", "省力化投資補助金", "年収の壁"
                                    ].map((tag) => (
                                        <Link href={`/articles?tag=${tag}`} key={tag} className="px-6 py-3 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all shadow-sm">
                                            {tag}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="flex flex-col md:flex-row gap-10 pb-12 border-b border-slate-100">
                                <div className="md:w-72 shrink-0">
                                    <h3 className="text-lg font-black text-slate-900 mb-2">カテゴリ</h3>
                                    <p className="text-[13px] text-slate-400 font-medium">制度の種類から情報を探す</p>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "補助金", "助成金", "概算要求", "雇用系助成金",
                                        "設備系補助金", "観光系補助金", "IT系補助金",
                                        "まとめ記事", "特集", "個人向け支援"
                                    ].map((cat) => (
                                        <button key={cat} className="px-6 py-3 bg-white border border-slate-200 rounded-[1.25rem] text-sm font-bold text-slate-700 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all shadow-sm">
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Industry */}
                            <div className="flex flex-col md:flex-row gap-10">
                                <div className="md:w-72 shrink-0">
                                    <h3 className="text-lg font-black text-slate-900 mb-2">業種</h3>
                                    <p className="text-[13px] text-slate-400 font-medium">あなたの事業ジャンルから探す</p>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "製造業", "サービス業", "情報通信業", "運輸業",
                                        "医療福祉", "建設・不動産", "農林水産業"
                                    ].map((ind) => (
                                        <button key={ind} className="px-6 py-3 bg-white border border-slate-200 rounded-[1.25rem] text-sm font-bold text-slate-700 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all shadow-sm">
                                            {ind}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* News Section */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container px-6 mx-auto">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-end justify-between mb-12">
                            <div>
                                <h2 className="text-4xl font-black text-slate-900 mb-3 tracking-tight">News</h2>
                                <p className="text-slate-500 font-medium text-lg">補助金・助成金に関する最新のお知らせ</p>
                            </div>
                            <Link href="/news" className="group flex items-center gap-2 text-primary font-black hover:text-blue-700 transition-colors py-2">
                                最新情報一覧
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
                            {[
                                { date: "2024.12.23", category: "重要", title: "【最新】2025年度（令和7年度）の主要補助金スケジュールと変更点を公開しました。", link: "/news/article-1" },
                                { date: "2024.12.20", category: "公募情報", title: "「中小企業新事業進出補助金」第3回公募が12月下旬より開始される予定です。", link: "/news/article-2" },
                                { date: "2024.12.18", category: "重要", title: "IT導入補助金2024、インボイス枠・セキュリティ対策推進枠の最終締め切りが迫っています。", link: "/news/article-3" },
                                { date: "2024.12.15", category: "解説", title: "【解説】2025年度から拡充される「中小企業省力化投資補助金」の一般型について。", link: "/news/article-4" },
                                { date: "2024.12.10", category: "セミナー", title: "参加無料：2025年の創業・事業再構築に向けた補助金活用オンラインセミナー開催決定。", link: "/news/article-5" }
                            ].map((news, i) => (
                                <Link key={i} href={news.link} className="group flex flex-col md:flex-row md:items-center py-8 gap-4 md:gap-12 hover:bg-slate-50/80 transition-all px-8">
                                    <div className="flex items-center gap-6 shrink-0">
                                        <span className="text-slate-400 font-bold font-mono text-xs">{news.date}</span>
                                        <span className={`px-4 py-1.5 rounded-lg text-[10px] font-black border tracking-wider ${news.category === '重要' ? 'bg-red-50 text-red-600 border-red-100' :
                                            news.category === '公募情報' ? 'bg-success/5 text-success border-success/10' :
                                                news.category === '解説' ? 'bg-primary/5 text-primary border-primary/10' :
                                                    'bg-slate-50 text-slate-500 border-slate-100'
                                            }`}>
                                            {news.category}
                                        </span>
                                    </div>
                                    <h3 className="text-[17px] font-bold text-slate-800 group-hover:text-primary transition-colors leading-relaxed flex-1">
                                        {news.title}
                                    </h3>
                                    <div className="md:ml-auto translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                                        <ArrowRight className="w-6 h-6 text-primary" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Youtube Section */}
            <YoutubeSection />
            {/* Category Navigation Section */}
            <CategorySearch />
            {/* Prefecture Search Section */}
            <PrefectureSearch />
            {/* Footer CTA */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[60%] h-[100%] bg-white/5 rounded-full blur-[140px] translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-[40%] h-[100%] bg-success/10 rounded-full blur-[120px] -translate-x-1/3" />
                </div>

                <div className="container relative z-10 px-6 mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-black mb-10 backdrop-blur-sm">
                            <span className="flex h-2.5 w-2.5 rounded-full bg-secondary animate-pulse" />
                            今すぐ始められる無料診断
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tight leading-[1.1]">
                            ビジネスの可能性を、<br />
                            <span className="text-secondary">最大限に。</span>
                        </h2>
                        <p className="text-lg md:text-xl text-white/70 mb-16 leading-relaxed font-medium">
                            補助金ポータルは、あなたの事業の「これまで」と「これから」に寄り添い、<br className="hidden md:block" />
                            最適な公的支援の活用を全力でサポートします。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                            <Link href="/diagnosis" className="w-full sm:w-auto bg-secondary hover:bg-yellow-400 text-primary font-black px-16 py-6 rounded-2xl transition-all shadow-2xl shadow-secondary/30 text-2xl group active:scale-95 flex items-center justify-center">
                                無料で相談を始める
                                <ArrowRight className="inline-block ml-3 w-8 h-8 group-hover:translate-x-2 transition-transform" />
                            </Link>
                            <Link href="/download" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-black px-16 py-6 rounded-2xl transition-all backdrop-blur-md border border-white/20 text-2xl active:scale-95 flex items-center justify-center">
                                資料ダウンロード
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
