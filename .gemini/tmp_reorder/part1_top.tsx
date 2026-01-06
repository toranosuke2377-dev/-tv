"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Search, FileText, Users, TrendingUp, ShieldCheck, FileSearch, Sparkles, X, Menu, ChevronRight, ChevronLeft, Zap, AppWindow, Maximize2 } from 'lucide-react';
import Link from 'next/link';
import CategorySearch from '@/components/CategorySearch';
import PrefectureSearch from '@/components/PrefectureSearch';
import YoutubeSection from '@/components/YoutubeSection';

export default function Home() {
    const [activeSearch, setActiveSearch] = useState<null | 'subsidy' | 'expert'>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "/images/hero-banner-1.png",
            title: "自社商材 × 補助金でさらなる売上アップを。",
            desc: "補助金コモンは、企業の課題となっていた補助金を活用して、自社商材やサービスの売上向上を図りたいというニーズに対応した補助金営業専門のサービスです。",
            link: "/experts",
            btnText: "詳しくはこちら",
            btnColor: "bg-[#FF9F59]",
            overlay: "bg-white/40"
        },
        {
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000",
            title: "AIがあなたの会社に最適な補助金を10秒で特定。",
            desc: "1,000件以上の制度から、AIが地域・目的・業種に合わせた最適な活用プランを瞬時に導き出します。",
            link: "/diagnosis",
            btnText: "AI無料診断を始める",
            btnColor: "bg-primary",
            overlay: "bg-slate-900/40"
        },
        {
            image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=2000",
            title: "2025年度 最新補助金データ更新済み。",
            desc: "速報性No.1。官公庁の一次情報を元に、専門スタッフが毎日データを更新。高精度な情報提供をお約束します。",
            link: "/subsidies",
            btnText: "補助金を検索する",
            btnColor: "bg-success",
            overlay: "bg-slate-900/40"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const closeSearch = () => setActiveSearch(null);
    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <>
            {/* Hero Carousel Section */}
            <section className="relative pt-24 min-h-[700px] flex items-center bg-white overflow-hidden">
                <div className="absolute inset-0 z-0 flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((slide, i) => (
                        <div key={i} className="min-w-full h-full relative">
                            <img src={slide.image} alt="" className="w-full h-full object-cover" />
                            <div className={`absolute inset-0 ${slide.overlay} backdrop-blur-[2px]`} />
                        </div>
                    ))}
                </div>

                <div className="container relative z-10 px-6 mx-auto">
                    <div className="max-w-4xl">
                        {slides.map((slide, i) => (
                            <div key={i} className={`transition-all duration-1000 absolute top-1/2 -translate-y-1/2 ${currentSlide === i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none'}`}>
                                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-sm text-slate-600 text-sm font-black mb-10 overflow-hidden">
                                    <span className="flex h-2.5 w-2.5 rounded-full bg-success animate-ping" />
                                    {i === 0 ? "Official Partner" : "New Arrival 2025"}
                                </div>

                                <h1 className={`text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-[1.1] ${slide.overlay.includes('bg-white') ? 'text-slate-900' : 'text-white'}`}>
                                    {slide.title.split(' ').map((word, idx) => (
                                        <span key={idx} className={idx === 1 ? "text-primary" : ""}>{word} </span>
                                    ))}
                                </h1>

                                <p className={`text-lg md:text-xl mb-16 max-w-2xl leading-relaxed font-bold ${slide.overlay.includes('bg-white') ? 'text-slate-600' : 'text-slate-200'}`}>
                                    {slide.desc}
                                </p>

                                <Link href={slide.link} className={`inline-flex items-center gap-4 ${slide.btnColor} hover:brightness-110 text-white font-black px-12 py-6 rounded-[2rem] transition-all shadow-2xl shadow-primary/20 text-xl group active:scale-95`}>
                                    {slide.btnText}
                                    <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className="absolute bottom-12 left-6 flex gap-3">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentSlide(i)}
                                className={`h-2.5 rounded-full transition-all duration-500 ${currentSlide === i ? 'w-12 bg-primary' : 'w-2.5 bg-slate-300'}`}
                            />
                        ))}
                    </div>

                    {/* Arrow Navigation - Sides */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-xl text-slate-600 z-20 group"
                        title="前へ"
                    >
                        <ChevronLeft className="w-6 h-6 group-active:scale-95 transition-transform" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-xl text-slate-600 z-20 group"
                        title="次へ"
                    >
                        <ChevronRight className="w-6 h-6 group-active:scale-95 transition-transform" />
                    </button>
                </div>
            </section>

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
                            <button key={tag} className="px-6 py-2.5 bg-white/50 backdrop-blur-md rounded-2xl text-[13px] font-black border border-slate-100 text-slate-600 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all shadow-sm">
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </section>



            {/* Search Hub Section: Bento Grid Refactor */}
            <section className="py-24 bg-white overflow-hidden border-b border-slate-100">
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-24">
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
                                                <button key={purpose} className="px-3 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-success hover:text-success hover:bg-success/5 transition-all shadow-sm">
                                                    {purpose}
                                                </button>
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
                                                <button key={industry} className="px-3 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-success hover:text-success hover:bg-success/5 transition-all shadow-sm">
                                                    {industry}
                                                </button>
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
                                        <button className="inline-flex items-center gap-4 bg-success hover:bg-emerald-600 text-white font-black py-7 px-24 rounded-[2.5rem] transition-all shadow-2xl shadow-success/30 text-2xl group">
                                            この条件で補助金を検索する
                                            <ArrowRight className="w-10 h-10 group-hover:translate-x-3 transition-transform" />
                                        </button>
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
                                                <button key={type} className="px-6 py-3 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-600 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all shadow-sm">
                                                    {type}
                                                </button>
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
                                                <button key={spec} className="px-6 py-3 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-600 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all shadow-sm">
                                                    {spec}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="col-span-1 md:col-span-2 mt-4 flex justify-center">
                                        <button className="inline-flex items-center gap-4 bg-primary hover:bg-blue-700 text-white font-black py-7 px-24 rounded-[2.5rem] transition-all shadow-2xl shadow-primary/30 text-2xl group">
                                            専門家を絞り込んで表示
                                            <ArrowRight className="w-10 h-10 group-hover:translate-x-3 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Article Search Section */}
