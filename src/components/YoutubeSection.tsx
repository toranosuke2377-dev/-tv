'use client';

import { Play } from 'lucide-react';

export default function YoutubeSection() {
    return (
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="container px-6 mx-auto">
                <div className="flex flex-col items-center text-center">
                    <div className="inline-block px-4 py-1 bg-red-100 text-red-600 text-[10px] font-black rounded-lg mb-4 tracking-widest uppercase border border-red-200">
                        Official Channel
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        公式YouTubeチャンネル
                    </h2>
                    <p className="text-slate-500 text-lg font-bold mb-8">
                        補助金の基礎知識や申請のポイントを動画で分かりやすく解説。<br className="hidden md:block" />
                        最新の制度情報もいち早くお届けしています。
                    </p>

                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="relative w-full max-w-4xl aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer block">
                        {/* Thumbnail Image (Mock) */}
                        <div className="absolute inset-0 bg-slate-900">
                            <img
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200"
                                alt="YouTube Thumbnail"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-500"
                            />
                        </div>

                        {/* YouTube UI Elements Simulation */}
                        <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-white text-xl font-bold truncate">【2025年最新】中小企業向け補助金・助成金 徹底解説セミナー</h3>
                        </div>

                        {/* Play Button */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                            <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-2" />
                        </div>

                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                            クリックして動画を再生
                        </div>
                    </a>

                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="mt-12 inline-flex items-center gap-2 text-slate-400 font-bold hover:text-red-600 transition-colors">
                        チャンネル登録はこちら <span className="text-xs">↗</span>
                    </a>
                </div>
            </div>
        </section >
    );
}
