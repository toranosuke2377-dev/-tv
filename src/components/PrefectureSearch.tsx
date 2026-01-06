'use client';

import Link from 'next/link';
import {
    MapPin,
    Car,
    Landmark,
    Building2,
    Utensils,
    Snowflake,
    Mountain,
    Trees,
    Waves,
    Castle
} from 'lucide-react';

const REGIONS = [
    {
        name: "北海道・東北",
        prefectures: ["北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県"]
    },
    {
        name: "関東",
        prefectures: ["茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県"]
    },
    {
        name: "甲信越・北陸",
        prefectures: ["新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県"]
    },
    {
        name: "東海",
        prefectures: ["岐阜県", "静岡県", "愛知県", "三重県"]
    },
    {
        name: "関西",
        prefectures: ["滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県"]
    },
    {
        name: "四国",
        prefectures: ["徳島県", "香川県", "愛媛県", "高知県"]
    },
    {
        name: "中国",
        prefectures: ["鳥取県", "島根県", "岡山県", "広島県", "山口県"]
    },
    {
        name: "九州・沖縄",
        prefectures: ["福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"]
    }
];

const FEATURED_AREAS = [
    { name: "北海道", icon: Snowflake, label: "Hokkaido", color: "text-cyan-500", bg: "bg-cyan-50" },
    { name: "東京", icon: Landmark, label: "Tokyo", color: "text-purple-500", bg: "bg-purple-50" },
    { name: "愛知", icon: Car, label: "Aichi", color: "text-blue-500", bg: "bg-blue-50" },
    { name: "大阪", icon: Castle, label: "Osaka", color: "text-indigo-500", bg: "bg-indigo-50" },
    { name: "福岡", icon: Utensils, label: "Fukuoka", color: "text-orange-500", bg: "bg-orange-50" }
];

export default function PrefectureSearch() {
    return (
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="container px-6 mx-auto">
                <div className="flex flex-col gap-4 mb-8 px-4 md:px-0">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">都道府県別の補助金・助成金</h2>
                </div>

                {/* Featured Areas */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 mb-16">
                    {FEATURED_AREAS.map((area) => (
                        <Link href={`/subsidies?pref=${area.name}`} key={area.name} className="flex flex-col items-center justify-center py-8 px-4 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                            <div className={`w-16 h-16 ${area.bg} ${area.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <area.icon className="w-8 h-8" strokeWidth={2.5} />
                            </div>
                            <span className="font-black text-slate-700 text-lg">{area.name}</span>
                        </Link>
                    ))}
                </div>

                {/* Detailed List */}
                <div className="flex flex-col gap-2">
                    {REGIONS.map((region) => (
                        <div key={region.name} className="flex flex-col md:flex-row md:items-start py-8 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors rounded-2xl px-4 md:px-8">
                            <div className="w-48 shrink-0 mb-4 md:mb-0">
                                <span className="font-bold text-slate-900 text-md">{region.name}</span>
                            </div>
                            <div className="flex-1 flex flex-wrap gap-3">
                                {region.prefectures.map((pref) => (
                                    <Link href={`/subsidies?pref=${pref}`} key={pref} className="px-4 py-3 bg-white border border-slate-100 rounded-xl text-sm font-bold text-slate-600 hover:border-primary hover:text-primary hover:shadow-md transition-all flex items-center gap-2">
                                        {pref} <span className="text-[10px] text-slate-400 font-normal">補助金 +</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
