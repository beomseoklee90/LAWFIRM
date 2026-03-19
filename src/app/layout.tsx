import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 검색 결과에 뜰 제목 (사장님의 이름이나 브랜드명을 앞에 넣으세요)
  title: "포트폴리오: 법률 건축가 | 논리와 구조로 설계하는 프리미엄 브리핑 룸",

  // 검색 결과에 뜰 설명 (160자 이내)
  description:
    "포트폴리오: 어그로와 불안 마케팅을 배제합니다. 연세대 CS 출신 개발자가 당신의 전문성을 가장 담백하고 정교한 디지털 리포트 형식으로 설계해 드립니다.",

  // 검색 로봇을 위한 키워드 (선택 사항)
  keywords: [
    "법률브리핑",
    "포트폴리오설계",
    "전문직홈페이지",
    "Next.js개발자",
    "DJ ICE BREAKING",
  ],
  verification: {
    google:
      "google-site-verification=F18MFiZCi_LQ4IGQgqVNWXC7ytse5ie3ysEQ7vk4254",
  },

  // 공유 시 뜰 이미지 설정 (Open Graph)
  openGraph: {
    title: "포트폴리오: 법률 건축가의 디지털 브리핑 룸",
    description: "포트폴리오: 전문성을 구조화하는 가장 세련된 방법",
    url: "https://portfolio-lawfirm.djicebreaking.org",
    type: "website",
    images: [
      {
        url: "/images/lawyer-profile.png", // 카톡 공유 시 뜰 메인 이미지 (1200x630 권장)
        width: 1200,
        height: 630,
        alt: "DJ Icebreaking 공연 이미지",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
