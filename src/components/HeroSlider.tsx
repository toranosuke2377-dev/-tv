'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// スライドデータ（後から変更しやすいように配列で定義）
const slides = [
    {
        id: 1,
        badge: '補助金のプロが徹底サポート',
        title: '最大1億円の補助金で\nあなたの事業を加速',
        subtitle: '採択率85%以上の実績。1,000件以上の申請サポート経験を持つ専門家が、あなたのビジネス成長を全力でバックアップします。',
        buttonText: '無料で相談する',
        buttonLink: '/diagnosis',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
        imageAlt: 'ビジネスマン',
    },
    {
        id: 2,
        badge: 'AIが最適な補助金を診断',
        title: '10秒で分かる\nあなたに最適な補助金',
        subtitle: '簡単な質問に答えるだけで、1,000種類以上の制度からあなたにピッタリの補助金をAIが自動選定。もう迷う必要はありません。',
        buttonText: 'AI診断を始める',
        buttonLink: '/diagnosis',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
        imageAlt: 'ビジネスウーマン',
    },
    {
        id: 3,
        badge: '経験豊富な専門家ネットワーク',
        title: '信頼できる専門家と\n二人三脚で成功へ',
        subtitle: '税理士・中小企業診断士・行政書士など、各分野のプロフェッショナルが連携。書類作成から採択後のフォローまで一貫サポート。',
        buttonText: '専門家を探す',
        buttonLink: '/experts',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
        imageAlt: 'コンサルタント',
    },
];

export default function HeroSlider() {
    return (
        <section className="relative bg-gradient-to-br from-slate-50 to-white overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    prevEl: '.swiper-button-prev-custom',
                    nextEl: '.swiper-button-next-custom',
                }}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className} swiper-pagination-bullet-custom"></span>`;
                    },
                }}
                className="w-full hero-swiper"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32">
                            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
                                {/* Left: Text Content */}
                                <div className="flex-1 text-center lg:text-left">
                                    <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-black rounded-full mb-6 animate-in fade-in slide-in-from-bottom-4">
                                        {slide.badge}
                                    </div>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-8 whitespace-pre-line animate-in fade-in slide-in-from-bottom-4 delay-100">
                                        {slide.title}
                                    </h1>
                                    <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-4 delay-200">
                                        {slide.subtitle}
                                    </p>
                                    <a
                                        href={slide.buttonLink}
                                        className="inline-flex items-center gap-3 bg-primary hover:bg-teal-600 text-white font-black px-10 py-5 rounded-2xl shadow-xl shadow-primary/20 transition-all hover:scale-105 animate-in fade-in slide-in-from-bottom-4 delay-300"
                                    >
                                        {slide.buttonText}
                                        <ArrowRight className="w-5 h-5" />
                                    </a>
                                </div>

                                {/* Right: Image */}
                                <div className="flex-1 relative">
                                    <div className="relative w-full max-w-lg mx-auto">
                                        {/* Background decorative elements */}
                                        <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-success/10 rounded-full blur-3xl"></div>

                                        {/* Main image container */}
                                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 border-8 border-white animate-in fade-in zoom-in-95 delay-200">
                                            <img
                                                src={slide.image}
                                                alt={slide.imageAlt}
                                                className="w-full h-[400px] md:h-[500px] object-cover object-top"
                                            />
                                        </div>

                                        {/* Floating stats card */}
                                        <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 z-20 animate-in fade-in slide-in-from-left-4 delay-500">
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 bg-success/10 rounded-xl flex items-center justify-center">
                                                    <span className="text-2xl">✓</span>
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-black text-slate-900">85%</div>
                                                    <div className="text-sm font-bold text-slate-400">採択率</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Floating badge card */}
                                        <div className="absolute -top-4 -right-4 lg:-right-8 bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-4 z-20 animate-in fade-in slide-in-from-right-4 delay-700">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                                                    <span className="text-lg">⭐</span>
                                                </div>
                                                <div className="text-sm font-black text-slate-900">1,200件+<br />サポート実績</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <button className="swiper-button-prev-custom absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white hover:bg-slate-50 rounded-full shadow-lg shadow-slate-200/50 flex items-center justify-center transition-all hover:scale-110 group">
                <ArrowLeft className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
            </button>
            <button className="swiper-button-next-custom absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white hover:bg-slate-50 rounded-full shadow-lg shadow-slate-200/50 flex items-center justify-center transition-all hover:scale-110 group">
                <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
            </button>

            {/* Custom styles for pagination */}
            <style jsx global>{`
                .hero-swiper .swiper-pagination {
                    position: absolute;
                    bottom: 32px !important;
                    left: 50% !important;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 12px;
                    z-index: 30;
                }
                .swiper-pagination-bullet-custom {
                    width: 12px;
                    height: 12px;
                    background: #cbd5e1;
                    border-radius: 9999px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    opacity: 1;
                }
                .swiper-pagination-bullet-custom:hover {
                    background: #94a3b8;
                }
                .swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
                    background: #0d9488 !important;
                    width: 32px;
                }
            `}</style>
        </section>
    );
}
