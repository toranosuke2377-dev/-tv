            {/* Recommended Experts */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
                        <div>
                            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">おすすめの専門家<span className="text-primary">。</span></h2>
                            <p className="text-slate-500 text-xl font-medium">補助金申請のプロフェッショナルがあなたの事業をサポート</p>
                        </div>
                        <Link href="/experts" className="flex items-center gap-2 text-primary font-black text-lg hover:gap-4 transition-all group">
                            専門家をもっと探す <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "中野 拓実",
                                firm: "中野中小企業診断士事務所",
                                desc: "採択率90％以上！製造業・DX分野での申請から報告まで一貫してサポートいたします。",
                                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
                                role: "中小企業診断士",
                                tags: ["省エネ", "DX", "事業再構築"],
                                link: "/experts/nakano"
                            },
                            {
                                name: "佐藤 美咲",
                                firm: "佐藤税理士法人",
                                desc: "女性起業家・小規模事業者のための補助金活用と伴走支援を得意としています。",
                                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
                                role: "税理士",
                                tags: ["創業支援", "雇用助成", "IT導入"],
                                link: "/experts/sato"
                            },
                            {
                                name: "株式会社ミライ経営",
                                firm: "認定支援機関 第150号",
                                desc: "全国対応。AI診断と連動したスピード申請で、あなたの資金調達を最大化します。",
                                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
                                role: "経営コンサルタント",
                                tags: ["全般", "グローバル", "賃上げ"],
                                link: "/experts/mirai"
                            }
                        ].map((expert, i) => (
                            <Link href={expert.link} key={i} className="group bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden flex flex-col">
                                <div className="aspect-[4/3] relative overflow-hidden">
                                    <img src={expert.image} alt={expert.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0" />
                                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                                        <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-[10px] font-black text-slate-900 rounded-xl shadow-sm">
                                            {expert.role}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-10 flex flex-col flex-1">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-black text-slate-900 mb-1 leading-tight group-hover:text-primary transition-colors">{expert.name}</h3>
                                        <p className="text-slate-400 text-xs font-bold">{expert.firm}</p>
                                    </div>
                                    <p className="text-slate-500 text-sm mb-8 line-clamp-2 font-bold leading-relaxed">
                                        {expert.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-10">
                                        {expert.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-slate-50 text-[10px] font-black text-slate-400 rounded-lg group-hover:bg-primary/5 group-hover:text-primary transition-colors">#{tag}</span>
                                        ))}
                                    </div>
                                    <button className="mt-auto flex items-center gap-2 text-primary font-black group/btn group-hover:gap-4 transition-all">
                                        プロフィールを見る
                                        <ArrowRight className="w-5 h-5 transition-transform" />
                                    </button>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-20 p-12 rounded-[3.5rem] bg-slate-900 overflow-hidden relative shadow-2xl">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                            <div className="text-center lg:text-left">
                                <h3 className="text-3xl font-black text-white mb-4">専門家登録をご希望の方はこちら</h3>
                                <p className="text-slate-400 text-base font-medium">日本全国の中小企業へ、あなたの卓越した知見を届けましょう。</p>
                            </div>
                            <Link href="/experts/register" className="whitespace-nowrap bg-primary hover:bg-success text-white font-black px-12 py-6 rounded-2xl transition-all shadow-xl shadow-primary/30 text-xl group">
                                専門家登録はこちら
                                <ArrowRight className="inline-block ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
