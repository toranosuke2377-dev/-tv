            {/* Article Search Section */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center justify-center gap-6 mb-16 py-10 bg-slate-50 rounded-[2rem] border border-slate-100">
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
                                        <button key={tag} className="px-6 py-3 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all shadow-sm">
                                            {tag}
                                        </button>
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
