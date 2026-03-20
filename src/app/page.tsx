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
    <div className="h-[100dvh] w-full overflow-hidden relative bg-[#1a120e] flex flex-col">
      {/* 텍스처 배경 */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] pointer-events-none z-0" />

      {/* 🧭 Navbar: 데스크탑/모바일 공용 고정 */}
      <nav className="fixed top-0 left-0 w-full px-6 md:px-16 py-5 md:py-8 flex justify-between items-center z-[100002] bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="flex flex-col">
          <span
            className="font-black text-xl md:text-3xl tracking-tighter italic leading-none"
            style={{ color: GoldLight }}
          >
            LEGAL ARCHITECT
          </span>
          <span
            className="text-[8px] md:text-[10px] tracking-[0.3em] mt-1 md:mt-2 uppercase font-bold opacity-70"
            style={{ color: GoldDim }}
          >
            Confidential Briefing Mode
          </span>
        </div>

        {/* ✅ 데스크탑 메뉴: 다시 보이게 수정 */}
        <div className="hidden lg:flex gap-10 text-[13px] font-black tracking-[0.1em] uppercase">
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(i)}
              className="transition-all hover:text-white"
              style={{ color: GoldMain }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* 햄버거 버튼 */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 relative z-[100003]"
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

      {/* 📱 메인 영역 */}
      <main className="flex-1 w-full pt-[80px] md:pt-[110px] flex items-center justify-center relative z-10 p-3 md:p-8 overflow-hidden">
        {/* ✅ 디바이스 하드웨어 프레임: 모바일에서도 가장 바깥쪽 rounded 적용 */}
        <div className="relative w-full max-w-[1200px] h-full bg-white md:bg-[#e2e4e7] rounded-[40px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6)] flex flex-col p-1.5 md:p-[20px] z-20 overflow-hidden border border-white/10">
          {/* 📷 데스크탑 전용 카메라 홀 */}
          <div className="hidden md:flex absolute top-[8px] left-1/2 -translate-x-1/2 items-center gap-2 z-30 opacity-40">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
            <div className="w-3 h-3 bg-[#111] rounded-full border border-gray-400" />
          </div>

          {/* 🖥️ 내부 디스플레이 영역 */}
          <div className="h-full w-full bg-[#fafafa] flex flex-col relative rounded-[35px] md:rounded-[20px] overflow-hidden">
            {/* 내부 상단바 */}
            <div className="shrink-0 w-full px-6 py-4 md:py-6 pt-7 md:pt-6 flex justify-between items-center border-b border-gray-100 bg-white z-30 font-bold overflow-hidden">
              <span className="text-[10px] md:text-[12px] text-gray-400 tracking-[0.05em] uppercase italic truncate mr-2">
                File: CASE_2026_PRO.PDF
              </span>
              <div className="text-[9px] md:text-[11px] text-red-900 flex items-center gap-2 shrink-0 bg-red-50 px-2 py-1 rounded-full">
                <span className="w-1 h-1 bg-red-900 rounded-full animate-ping shrink-0" />
                <span className="whitespace-nowrap font-black uppercase">
                  LEGAL-ARCH ACTIVE
                </span>
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
            <div className="shrink-0 w-full px-6 py-4 md:py-5 bg-gray-50 border-t border-gray-100 flex justify-between items-center z-30 font-bold text-gray-300">
              <span className="text-[9px] md:text-[10px] tracking-[0.2em] whitespace-nowrap">
                © 2026 LEGAL ARCHITECT
              </span>
              <span className="hidden md:block text-[8px] tracking-widest opacity-40 uppercase">
                Legal-Arch System v1.0
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* 📱 모바일 메뉴 드로워 */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1a120e]/fb z-[100001] flex flex-col items-center justify-center gap-10 lg:hidden backdrop-blur-3xl"
          >
            {menuItems.map((item, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(i)}
                className="text-4xl font-black italic text-[#e4d4b1] hover:text-white uppercase"
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
