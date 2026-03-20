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
    // dvh로 전체 높이 고정
    <div className="h-[100dvh] w-full overflow-hidden relative bg-[#1a120e] flex flex-col">
      {/* 텍스처 배경 - pointer-events-none으로 클릭 방해 금지 */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 pointer-events-none z-0" />

      {/* 🧭 Navbar: fixed로 상단에 칼같이 박음 (다른 요소에 영향 안 줌) */}
      <nav className="fixed top-0 left-0 w-full px-6 md:px-16 py-6 md:py-8 flex justify-between items-center z-[100002] bg-black/60 backdrop-blur-xl border-b border-white/5">
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

        {/* 데스크탑 메뉴 */}
        <div className="hidden lg:flex gap-8 text-[13px] font-bold tracking-[0.1em] uppercase">
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
          className="lg:hidden flex flex-col gap-1.5 p-2 relative"
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

      {/* 📱 메인 영역: Navbar 높이만큼 padding-top(pt)을 주어 본문이 가려지지 않게 함 */}
      <main className="flex-1 w-full pt-[80px] md:pt-[120px] flex items-center justify-center relative z-10 p-4 md:p-8 overflow-hidden">
        {/* 📱 디바이스 하드웨어 프레임 */}
        <div className="relative w-full max-w-[1200px] h-full bg-white md:bg-[#e2e4e7] rounded-none md:rounded-[40px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)] flex flex-col p-0 md:p-[20px] z-20 overflow-hidden">
          {/* 📷 데스크탑 카메라 */}
          <div className="hidden md:flex absolute top-[8px] left-1/2 -translate-x-1/2 items-center gap-2 z-30 pointer-events-none">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
            <div className="w-3 h-3 bg-[#111] rounded-full border border-gray-400 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-blue-900/40 rounded-full" />
            </div>
          </div>

          {/* 🖥️ 내부 디스플레이 영역 */}
          <div className="h-full w-full bg-[#fafafa] flex flex-col relative rounded-none md:rounded-[20px] overflow-hidden">
            {/* 내부 상단바 */}
            <div className="shrink-0 w-full px-6 py-4 md:py-6 pt-6 flex justify-between items-center border-b border-gray-100 bg-white z-30 font-bold overflow-hidden">
              <span className="text-[10px] md:text-[12px] text-gray-400 tracking-[0.1em] uppercase italic truncate mr-2">
                2026_Briefing_File.PDF
              </span>
              <div className="text-[10px] md:text-[12px] text-red-900 flex items-center gap-2 shrink-0 bg-red-50/50 px-2 py-1 rounded-sm border border-red-100/50">
                <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-red-900 rounded-full animate-ping shrink-0" />
                <span className="whitespace-nowrap tracking-tighter uppercase font-black">
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
            <div className="shrink-0 w-full px-6 py-4 md:py-5 bg-gray-50 border-t border-gray-100 flex justify-between items-center z-30 font-bold text-gray-400">
              <span className="text-[9px] md:text-[11px] tracking-[0.2em] whitespace-nowrap">
                © 2026 LEGAL ARCHITECT
              </span>
              <span className="hidden md:block text-[8px] tracking-widest opacity-50">
                LEGAL-ARCH PAD PRO V1.0
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* 📱 모바일 드로워: Navbar 아래가 아니라 화면 전체를 덮도록 설정 */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1a120e]/fb z-[100001] flex flex-col items-center justify-center gap-8 lg:hidden backdrop-blur-2xl"
          >
            {menuItems.map((item, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(i)}
                className="text-4xl font-black italic text-[#e4d4b1] hover:text-white transition-colors"
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
