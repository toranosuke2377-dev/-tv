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
