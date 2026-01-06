            {/* Featured Partner Section - Subsidy Common */}
            <section className="py-24 bg-slate-50 overflow-hidden">
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
                                    src="/images/partner-banner.png"
                                    alt="補助金コモン"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:block hidden" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
