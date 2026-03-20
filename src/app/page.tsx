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

  // 🏛️ 사장님의 프리미엄 브랜딩을 위한 골드 컬러 팔레트
  const GoldMain = "#c5a065"; // 중후한 브론즈 골드 (기본)
  const GoldLight = "#e4d4b1"; // 세련된 샴페인 골드 (강조)
  const GoldDim = "rgba(197, 160, 101, 0.5)"; // 은은한 골드 (보조)

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
    <div className="h-screen w-full overflow-hidden relative bg-[#1a120e]">
      {/* 텍스처 배경 */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      {/* 🧭 Navbar: 골드 테마 적용 및 가독성 보정 */}
      <nav className="fixed top-0 w-full px-6 md:px-16 py-6 md:py-10 flex justify-between items-center z-[9999]">
        <div className="flex flex-col">
          <span
            className="font-black text-xl md:text-3xl tracking-tighter italic leading-none drop-shadow-md"
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
              className="transition-all hover:brightness-125 drop-shadow-sm"
              style={{ color: GoldMain }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* 🍔 모바일 햄버거 버튼 */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 z-[10000] p-2"
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

      {/* 📱 모바일 드로워 메뉴 */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#1a120e]/95 backdrop-blur-xl z-[9998] flex flex-col items-center justify-center gap-10 lg:hidden"
          >
            {menuItems.map((item, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(i)}
                className="text-3xl font-black italic tracking-tighter hover:scale-110 transition-transform"
                style={{ color: GoldLight }}
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-full w-full flex items-center justify-center relative z-10 p-0 md:p-6 pt-16 md:pt-24">
        {/* ✏️ 펜슬 */}
        <div className="absolute right-[8%] top-[25%] w-3 h-80 z-[60] hidden xl:block rotate-[45deg] origin-top pointer-events-none">
          <div className="w-full h-full bg-gradient-to-r from-gray-200 via-white to-gray-400 rounded-full shadow-[25px_45px_80px_rgba(0,0,0,0.6)] relative">
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[24px] border-t-gray-900" />
            <div className="absolute bottom-[-20px] left-[-40px] w-[300%] h-[40px] bg-black/40 blur-[40px] -rotate-[10deg] z-[-1]" />
          </div>
        </div>

        {/* 📱 메인 프레임 */}
        <div className="relative w-full max-w-[1100px] h-full md:h-[82vh] bg-white border-0 md:border-[20px] border-[#e2e4e7] rounded-none md:rounded-[65px] shadow-none md:shadow-[0_100px_200px_-50px_rgba(0,0,0,1)] overflow-hidden z-20 transition-all duration-500">
          <div className="hidden md:block absolute top-[12px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0a0a0a] rounded-full z-[70] border border-white/10 shadow-inner">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-blue-900/20 rounded-full" />
          </div>

          <div className="h-full w-full bg-[#fafafa] flex flex-col relative">
            {/* 고정 상단바 */}
            <div className="w-full px-6 py-5 md:py-8 flex justify-between items-center border-b border-gray-100 bg-white/95 backdrop-blur-md z-30">
              <span className="text-[10px] md:text-[13px] font-black text-gray-400 tracking-[0.2em] uppercase italic">
                Briefing File: CASE_2026_PRO
              </span>
              <div className="text-[10px] md:text-[12px] font-black text-red-900 tracking-tighter flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-900 rounded-full animate-ping" />
                <span className="hidden md:inline">SECURE CONNECTION</span>
                <span className="md:hidden">LIVE</span>
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

            {/* 고정 하단바 */}
            <div className="w-full px-6 py-4 md:py-7 bg-gray-50/80 border-t border-gray-100 flex justify-between items-center z-30 font-bold text-gray-300">
              <span className="text-[8px] md:text-[11px] tracking-[0.2em] uppercase italic">
                © 2026 LEGAL ARCHITECT
              </span>
              <div className="flex gap-1.5">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-gray-200 rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
