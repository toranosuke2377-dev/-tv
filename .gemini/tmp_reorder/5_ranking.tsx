            {/* Popular Article Ranking */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
                        <div>
                            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">人気記事ランキング<span className="text-secondary">。</span></h2>
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
                                    <img src="/images/hero-banner-1.png" alt="Education" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
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
