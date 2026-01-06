'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Search, ChevronDown, ChevronUp } from 'lucide-react';

const INDUSTRIES = [
    "林業", "漁業", "鉱業", "建設業", "製造業", "電気・ガス", "卸売・小売業", "小売業", "飲食業",
    "金融・保険業", "不動産業", "サービス業", "介護", "運輸業", "建設・不動産業", "医療・福祉", "宿泊業",
    "情報通信業", "食品製造業", "加工販売業", "流通販売業", "農業", "畜産業", "水産業", "倉庫業",
    "学校法人", "社会福祉法人", "医療法人", "独立行政法人", "介護施設", "医療機関", "宿泊施設", "飲食店",
    "中小企業", "個人事業主", "大企業", "連携体", "組合・団体等", "農業法人", "農業団体", "農業協同組合等",
    "小規模事業者", "法人", "当該地域事業者", "NPO法人", "自治会", "社団法人・財団法人", "個人", "個人農業者",
    "自治体", "障害者施設", "幼児・保育施設", "私立学校等", "創業前", "創業1年未満", "創業2年未満", "創業3年未満",
    "創業4年未満", "創業5年未満", "創業10年未満", "創業7年未満", "みなし大企業", "サービス施設", "学校",
    "官庁系施設", "創業6か月未満", "創業15年未満", "入浴施設", "創業3か月未満", "創業5か月未満", "創業1か月未満",
    "中堅企業"
];

const KEYWORDS = [
    "HP作成", "ECサイト作成", "デジタルサイネージ", "太陽光", "蓄電池", "冷蔵庫", "防犯カメラ", "LED",
    "サテライトオフィス", "WiFi", "セルフレジ", "インターネット回線", "UTM", "サーモカメラ", "消毒液スタンド",
    "非接触オーダーシステム", "サーキュレーター", "換気扇", "CO2センサー", "エアコン", "倉庫", "フォークリフト",
    "運行管理システム", "ロボット", "プリンター", "衛生用品", "換気設備", "自動ドア", "3Dプリンタ", "非接触体温計",
    "空気清浄機付きエアコン", "見守りシステム・センサー（介護・医療）", "オゾン発生装置", "介護用品・介護ロボット",
    "空調", "POSレジ", "ワークポット（テレワークボックス）", "オフィス什器（机・椅子等）", "燃料電池",
    "水素ステーション", "ドローン", "EMS(自動制御システム)", "動画制作", "空気清浄機", "ボイラー/給湯機器",
    "窓ガラス（断熱）", "ガス発電機", "省エネ設備", "加工機械", "生産機械", "製氷機", "展示会", "テレワーク",
    "DX", "ワーケーション", "HACCP", "キャッシュレス", "セキュリティ", "インボイス", "賃上げ", "働き方改革",
    "雇用拡大", "ネットワーク機器等", "ウェブカメラ", "遡及申請可", "災害対策", "リフォーム・リノベーション",
    "ICT", "ものづくり", "パソコン", "ネットワーク・IT", "コンサルタント", "内装工事", "職場環境改善",
    "メンタル・ヘルス", "移動販売車", "脱炭素", "タブレット", "スマートフォン", "荷主", "熱中症対策",
    "断熱/遮熱", "カスハラ"
];

export default function CategorySearch() {
    const [isIndustryExpanded, setIsIndustryExpanded] = useState(false);
    const [isKeywordExpanded, setIsKeywordExpanded] = useState(false);

    const INITIAL_COUNT = 20;

    const visibleIndustries = isIndustryExpanded ? INDUSTRIES : INDUSTRIES.slice(0, INITIAL_COUNT);
    const visibleKeywords = isKeywordExpanded ? KEYWORDS : KEYWORDS.slice(0, INITIAL_COUNT);

    return (
        <section className="py-16 bg-white border-t border-slate-200">
            <div className="container px-6 mx-auto">
                <div className="flex flex-col gap-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                                業種・条件から<span className="text-primary">検索。</span>
                            </h2>
                            <p className="text-slate-500 text-lg font-bold leading-relaxed">
                                あなたのビジネスに該当するカテゴリーを選択して、<br className="hidden md:block" />
                                最適な支援制度を絞り込むことができます。
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="px-6 py-4 bg-white border border-slate-200 rounded-2xl flex items-center gap-3">
                                <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                                <span className="text-sm font-black text-slate-700">最終更新: 2025.12.23</span>
                            </div>
                        </div>
                    </div>

                    {/* Industry & Entity Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-12 md:p-16 rounded-[3.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        {/* Industry Categories */}
                        <div className="space-y-10 relative z-10 flex flex-col h-full">
                            <div className="flex items-center gap-4 py-4 border-b-2 border-slate-100">
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                    <ShieldCheck className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-black text-slate-900">業種・対象事業者</h3>
                            </div>
                            <div className="flex flex-wrap gap-2.5">
                                {visibleIndustries.map((item) => (
                                    <Link href="/subsidies" key={item} className="px-5 py-2.5 bg-slate-50 text-[13px] font-bold text-slate-600 rounded-xl border border-slate-200 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all text-center">
                                        {item}
                                    </Link>
                                ))}
                            </div>
                            <button
                                onClick={() => setIsIndustryExpanded(!isIndustryExpanded)}
                                className="mt-auto pt-4 flex items-center justify-center gap-2 text-primary font-black hover:opacity-80 transition-opacity w-full text-sm"
                            >
                                {isIndustryExpanded ? (
                                    <>
                                        閉じる <ChevronUp className="w-4 h-4" />
                                    </>
                                ) : (
                                    <>
                                        もっと見る <ChevronDown className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Keywords / Tags Cloud */}
                        <div className="space-y-10 relative z-10 flex flex-col h-full">
                            <div className="flex items-center gap-4 py-4 border-b-2 border-slate-100">
                                <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                                    <Search className="w-6 h-6 text-success" />
                                </div>
                                <h3 className="text-xl font-black text-slate-900">キーワード・設備</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {visibleKeywords.map((tag) => (
                                    <Link href="/subsidies" key={tag} className="px-4 py-2 bg-white text-[12px] font-black text-slate-500 rounded-full border border-slate-100 shadow-sm hover:border-success hover:text-success hover:bg-success/5 transition-all">
                                        #{tag.replace('#', '')}
                                    </Link>
                                ))}
                            </div>
                            <button
                                onClick={() => setIsKeywordExpanded(!isKeywordExpanded)}
                                className="mt-auto pt-4 flex items-center justify-center gap-2 text-primary font-black hover:opacity-80 transition-opacity w-full text-sm"
                            >
                                {isKeywordExpanded ? (
                                    <>
                                        閉じる <ChevronUp className="w-4 h-4" />
                                    </>
                                ) : (
                                    <>
                                        もっと見る <ChevronDown className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Summary Footer */}
                    <div className="flex justify-center mt-8">
                        <p className="text-slate-400 font-bold text-sm bg-white px-8 py-3 rounded-full border border-slate-100 shadow-inner">
                            全 <span className="text-slate-900">{INDUSTRIES.length}</span> カテゴリー / <span className="text-slate-900">{KEYWORDS.length}</span> キーワードから検索可能
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
