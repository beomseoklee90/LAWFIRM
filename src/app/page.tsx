"use client";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  IntroSection,
  AboutSection,
  EvidenceSection,
  StrategySection,
  ExpertiseSection,
  ContactSection,
} from "../components/Sections";

export default function LawyerBriefingRoom() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const GoldMain = "#c5a065";
  const GoldLight = "#e4d4b1";
  const GoldDim = "rgba(197, 160, 101, 0.5)";

  const menuItems = [
    "About",
    "Intro",
    "Data",
    "Strategy",
    "Practice",
    "Contact",
  ];

  const scrollToSection = (index: number) => {
    const container = scrollContainerRef.current;
    if (container) {
      const sections = container.querySelectorAll(".briefing-section");
      sections[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  const sections = [
    <AboutSection key="s2" />,
    <IntroSection key="s1" />,
    <EvidenceSection key="s3" />,
    <StrategySection key="s4" />,
    <ExpertiseSection key="s5" />,
    <ContactSection key="s6" />,
  ];

  return (
    <div className="h-screen w-full overflow-hidden relative bg-[#1a120e] flex flex-col">
      {/* 텍스처 배경 */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      {/* 🧭 Navbar: 상단 고정 */}
      <nav className="shrink-0 w-full px-6 md:px-16 py-6 md:py-8 flex justify-between items-center z-[10000] bg-black/40 backdrop-blur-md border-b border-white/5 relative">
        <div className="flex flex-col">
          <span
            className="font-black text-xl md:text-3xl tracking-tighter italic leading-none drop-shadow-lg"
            style={{ color: GoldLight }}
          >
            LEGAL ARCHITECT
          </span>
          <span
            className="text-[8px] md:text-[11px] tracking-[0.3em] mt-2 uppercase font-bold"
            style={{ color: GoldDim }}
          >
            Confidential Briefing Mode
          </span>
        </div>

        <div className="hidden lg:flex gap-8 text-[13px] font-bold tracking-[0.1em] uppercase">
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(i)}
              className="transition-all hover:brightness-125"
              style={{ color: GoldMain }}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 z-[10001] p-2"
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
            className="w-6 h-0.5"
            style={{ backgroundColor: GoldMain }}
          />
          <motion.div
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            className="w-6 h-0.5"
            style={{ backgroundColor: GoldMain }}
          />
          <motion.div
            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
            className="w-6 h-0.5"
            style={{ backgroundColor: GoldMain }}
          />
        </button>
      </nav>

      {/* 📱 메인 영역: 위아래 빈 공간 없이 꽉 채움 */}
      <main className="flex-1 w-full flex items-center justify-center relative z-10 p-0 md:p-8 overflow-hidden">
        {/* 📱 메인 프레임: 모바일은 꽉 차게, 데스크탑은 여백 조절 */}
        <div className="relative w-full max-w-[1200px] h-full bg-white border-0 md:border-[16px] border-[#e2e4e7] rounded-none md:rounded-[40px] shadow-2xl overflow-hidden z-20 flex flex-col">
          <div className="h-full w-full bg-[#fafafa] flex flex-col relative">
            {/* 내부 상단바 */}
            <div className="shrink-0 w-full px-6 py-4 md:py-6 flex justify-between items-center border-b border-gray-100 bg-white z-30">
              <span className="text-[10px] md:text-[12px] font-black text-gray-400 tracking-[0.2em] uppercase italic">
                Briefing File: CASE_2026_PRO
              </span>
              <div className="text-[10px] md:text-[12px] font-black text-red-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-900 rounded-full animate-ping" />
                <span className="hidden md:inline">SECURE CONNECTION</span>
              </div>
            </div>

            {/* 📜 내부 스크롤 영역 */}
            <div
              ref={scrollContainerRef}
              className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth no-scrollbar relative z-10"
            >
              {sections.map((section, idx) => (
                <div
                  key={idx}
                  className={`briefing-section min-h-full flex items-center justify-center p-6 md:p-20 border-b border-gray-50 ${idx % 2 === 1 ? "bg-white" : "bg-[#fafafa]"}`}
                >
                  {section}
                </div>
              ))}
            </div>

            {/* 내부 하단바 */}
            <div className="shrink-0 w-full px-6 py-4 md:py-6 bg-gray-50/80 border-t border-gray-100 flex justify-between items-center z-30 font-bold text-gray-300">
              <span className="text-[9px] md:text-[11px] tracking-[0.2em] uppercase">
                © 2026 LEGAL ARCHITECT
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* 📱 모바일 드로워 */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1a120e] z-[9999] flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {menuItems.map((item, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(i)}
                className="text-3xl font-black italic text-[#e4d4b1]"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
