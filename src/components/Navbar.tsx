"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Intro", href: "#intro" },
    { name: "Data", href: "#data" },
    { name: "Portfolio", href: "#portfolio" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 로고 영역 */}
        <div className="text-xl font-bold tracking-tighter">DJ.ICEBREAKING</div>

        {/* 데스크탑 메뉴: md 이상에서만 보임 */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-gray-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* 햄버거 버튼: md 미만에서만 보임 */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1.5 w-8 h-8"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>

      {/* 모바일 드로워 메뉴: 클릭 시 쫙 펼쳐짐 */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 animate-fadeIn">
          <div className="flex flex-col items-center py-8 space-y-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)} // 클릭 시 메뉴 닫기
                className="text-2xl font-light hover:text-gray-400"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
