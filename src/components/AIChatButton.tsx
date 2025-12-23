"use client";

import { MessageSquare, Sparkles, X, Send, User } from "lucide-react";
import { useState, useEffect } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Reference image character styling: Short dark hair, purple eyes, black/dark grey suit with teal accents.
export default function AIChatButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'ai', text: 'こんにちは。補助金ポータルAIコンシェルジュの「かなえ」です。お客様の事業にぴったりの補助金探しをお手伝いいたします。気になることがあれば何でも聞いてくださいね。' }
    ]);
    const [inputValue, setInputValue] = useState("");

    const handleSend = () => {
        if (!inputValue.trim()) return;

        setMessages([...messages, { role: 'user', text: inputValue }]);
        setInputValue("");

        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'ai',
                text: 'ご質問ありがとうございます。現在、最新のデータベースから最適な情報を検索しています。具体的に「IT導入」や「省エネ投資」など、どのような分野にご興味がありますか？'
            }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
            {/* Chat Window */}
            {isOpen && (
                <div className="w-[400px] h-[680px] bg-white rounded-[2.5rem] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.4)] border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-600">
                    {/* Header with Reference Character Portrait */}
                    <div className="p-8 bg-[#1A1C1E] text-white relative overflow-hidden">
                        {/* Teal accent lines matching character suit */}
                        <div className="absolute top-0 right-0 w-full h-1 bg-primary" />
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/20 rounded-full translate-x-10 translate-y-10 blur-3xl opacity-50" />

                        <div className="flex items-center gap-6 relative z-10 font-noto">
                            <div className="relative">
                                <div className="w-24 h-24 rounded-full shadow-2xl overflow-hidden border-4 border-primary/30 bg-[#2D2F31]">
                                    {/* Using the character's visual identity: Short dark hair, professional look */}
                                    <div className="w-full h-full relative">
                                        {/* Avatar UI - In a real app this would be the actual image file */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#2D2F31] to-black flex items-center justify-center">
                                            <User className="w-12 h-12 text-primary/40" />
                                        </div>
                                        {/* Stylized representation of the character based on image */}
                                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200')] bg-cover bg-center grayscale-[0.3] brightness-90 contrast-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    </div>
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary border-4 border-[#1A1C1E] rounded-full shadow-lg" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="bg-primary/20 text-primary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-primary/30">Official Concierge</span>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all group/close"
                                    >
                                        <X className="w-6 h-6 text-slate-400 group-hover/close:rotate-90 transition-transform" />
                                    </button>
                                </div>
                                <h3 className="font-black text-3xl tracking-tighter">AIかなえ</h3>
                                <p className="text-[12px] text-slate-400 font-bold mt-1">信頼の補助金相談パートナー</p>
                            </div>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "flex items-start gap-4",
                                    msg.role === 'user' ? "flex-row-reverse" : "flex-row"
                                )}
                            >
                                {msg.role === 'ai' && (
                                    <div className="w-10 h-10 rounded-full bg-[#1A1C1E] flex items-center justify-center shrink-0 border border-primary/20 overflow-hidden shadow-md">
                                        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100')] bg-cover bg-center grayscale" />
                                    </div>
                                )}
                                <div className={cn(
                                    "max-w-[85%] p-5 rounded-[1.75rem] text-[15px] font-bold leading-[1.7] transition-all",
                                    msg.role === 'user'
                                        ? "bg-primary text-white rounded-tr-none shadow-lg shadow-primary/20"
                                        : "bg-white text-slate-700 rounded-tl-none border border-slate-100 shadow-sm"
                                )}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="p-8 bg-white border-t border-slate-100">
                        <div className="relative">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="かなえにメッセージを送る..."
                                className="w-full pl-8 pr-16 py-5 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:outline-none focus:ring-8 focus:ring-primary/5 focus:border-primary transition-all text-sm font-bold placeholder:text-slate-400"
                            />
                            <button
                                onClick={handleSend}
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#1A1C1E] text-white rounded-xl flex items-center justify-center hover:bg-primary transition-all shadow-lg active:scale-95 group"
                            >
                                <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Action Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="group relative flex items-center gap-6 focus:outline-none"
                >
                    <div className="bg-[#1A1C1E] px-8 py-4 rounded-2xl shadow-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-x-6 group-hover:translate-x-0">
                        <span className="text-sm font-black text-white whitespace-nowrap">AIかなえに相談する</span>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" />
                        <div className="relative w-28 h-28 rounded-full flex items-center justify-center shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] border-4 border-primary hover:scale-105 active:scale-95 transition-all duration-500 overflow-hidden bg-[#1A1C1E]">
                            <div className="w-full h-full relative">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200')] bg-cover bg-center grayscale-[0.2] transition-all group-hover:grayscale-0 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-2 inset-x-0 flex flex-col items-center">
                                    <span className="text-[10px] font-black text-white tracking-widest uppercase">Kanae</span>
                                    <div className="w-8 h-0.5 bg-primary mt-1" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-1 -right-1">
                            <div className="bg-primary text-white p-2 rounded-xl shadow-lg animate-bounce">
                                <Sparkles className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </button>
            )}
        </div>
    );
}
