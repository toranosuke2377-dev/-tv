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
