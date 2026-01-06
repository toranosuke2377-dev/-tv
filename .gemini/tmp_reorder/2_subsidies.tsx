            {/* Latest Subsidies Section */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
                        <div>
                            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">最新の補助金・助成金<span className="text-success">。</span></h2>
                            <p className="text-slate-500 text-xl font-medium">直近で公募が開始された、今チェックすべき注目制度です</p>
                        </div>
                        <Link href="/subsidies" className="group flex items-center gap-2 text-primary font-black text-lg hover:text-blue-700 transition-colors">
                            すべての支援制度を見る
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { title: "DX・IT導入促進支援金", amount: "最大 500万円", region: "全国", category: "IT・システム", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600", link: "/subsidies/dx-it-support" },
                            { title: "省エネ設備更新補助事業", amount: "最大 1,000万円", region: "東京都", category: "設備投資", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600", link: "/subsidies/energy-saving" },
                            { title: "創業・再挑戦起業家支援", amount: "最大 200万円", region: "大阪府", category: "起業・創業", image: "https://images.unsplash.com/photo-1507679799987-c71277c4829a?auto=format&fit=crop&q=80&w=600", link: "/subsidies/startup-support" }
                        ].map((sub, i) => (
                            <Link href={sub.link} key={i} className="group bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:border-success/30 transition-all duration-500 flex flex-col h-full">
                                <div className="aspect-[21/9] relative overflow-hidden">
                                    <img src={sub.image} alt={sub.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-5 py-2 bg-success text-white text-[10px] font-black rounded-full shadow-lg">
                                            公募中
                                        </span>
                                    </div>
                                </div>
                                <div className="p-10 pt-8 flex flex-col flex-1">
                                    <div className="text-[10px] font-black text-primary mb-3 uppercase tracking-widest">{sub.category}</div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-primary transition-colors leading-tight">
                                        {sub.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm mb-10 line-clamp-3 font-medium leading-relaxed">
                                        事業の継続的発展を目的として、{sub.category}に関連する経費の一部を補助する制度です。
                                    </p>
                                    <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-slate-400 font-black uppercase tracking-tighter mb-1">上限金額</span>
                                            <span className="text-[22px] font-black text-success tracking-tight">{sub.amount}</span>
                                        </div>
                                        <button className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-success group-hover:border-success transition-all">
                                            <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
