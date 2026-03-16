"use client";
import React, { useRef } from "react";
import { AnimatePresence } from "framer-motion";
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

  // 상단 네비게이션 클릭 시 해당 섹션으로 스크롤
  const scrollToSection = (index: number) => {
    const container = scrollContainerRef.current;
    if (container) {
      const sections = container.querySelectorAll(".briefing-section");
      sections[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
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

      {/* 🧭 Navbar: 모바일과 데스크탑 대응 */}
      <nav className="fixed top-0 w-full px-6 md:px-16 py-6 md:py-10 flex justify-between items-center z-[9999] text-white">
        <div className="flex flex-col">
          <span className="font-black text-xl md:text-3xl tracking-tighter italic leading-none text-white">
            LEGAL ARCHITECT
          </span>
          <span className="text-[8px] md:text-[11px] tracking-[0.3em] text-white/40 mt-2 uppercase">
            Confidential Briefing Mode
          </span>
        </div>
        <div className="hidden lg:flex gap-8 text-[13px] font-bold tracking-[0.1em] uppercase">
          {["About", "Intro", "Data", "Strategy", "Practice", "Contact"].map(
            (item, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(i)}
                className="transition-all hover:text-red-900 text-white/50"
              >
                {item}
              </button>
            ),
          )}
        </div>
      </nav>

      <div className="h-full w-full flex items-center justify-center relative z-10 p-0 md:p-6 pt-16 md:pt-24">
        {/* ✏️ 펜슬: 데스크탑 전용 (xl 이상에서만 표시) */}
        <div className="absolute right-[8%] top-[25%] w-3 h-80 z-[60] hidden xl:block rotate-[45deg] origin-top pointer-events-none">
          <div className="w-full h-full bg-gradient-to-r from-gray-200 via-white to-gray-400 rounded-full shadow-[25px_45px_80px_rgba(0,0,0,0.6)] relative">
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[24px] border-t-gray-900" />
            <div className="absolute bottom-[-20px] left-[-40px] w-[300%] h-[40px] bg-black/40 blur-[40px] -rotate-[10deg] z-[-1]" />
          </div>
        </div>

        {/* 📱 메인 프레임: 모바일은 꽉 차게, 데스크탑은 태블릿 형태 */}
        <div className="relative w-full max-w-[1100px] h-full md:h-[82vh] bg-white border-0 md:border-[20px] border-[#e2e4e7] rounded-none md:rounded-[65px] shadow-none md:shadow-[0_100px_200px_-50px_rgba(0,0,0,1)] overflow-hidden z-20 transition-all duration-500">
          {/* 📷 카메라 렌즈: 데스크탑 전용 */}
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
