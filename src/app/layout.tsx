import "./global.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  alternates: { canonical: "https://ai-consulting.djicebreaking.org/" },
  // 검색 결과에 뜰 제목: 임원들이 가장 민감하게 반응하는 단어(확신, 전략) 전진 배치
  title: "AI 전략 연구소: 범석 Matrix | 확신을 외주화하지 마십시오",

  // 검색 결과에 뜰 설명 (160자 이내): 대기업 임원의 시간적 고통(3주)과 해결책(3번의 쿼리)을 직관적으로 제시
  description:
    "3주의 전략 기획을 인공지능 쿼리로 압축합니다. 대기업 임원을 위한 AI 기반 비즈니스 역공학 시뮬레이터. 당신의 확신을 데이터와 로직으로 설계하십시오.",

  // 검색 로봇을 위한 키워드: 임원들이 야근하며 구글링할 만한 '실무적이고 무거운' 키워드들로 교체
  keywords: [
    "신사업 전략 시뮬레이션",
    "비즈니스 역공학",
    "범석 매트릭스",
    "AI 전략 아키텍처",
    "CFO ROI 분석",
    "임원 의사결정 모델",
    "DJ ICE BREAKING",
  ],

  verification: {
    google:
      "google-site-verification=F18MFiZCi_LQ4IGQgqVNWXC7ytse5ie3ysEQ7vk4254",
  },

  // 카톡/링크드인 등 공유 시 뜰 이미지 설정 (Open Graph)
  openGraph: {
    title: "AI 공진 전략 연구소: 범석 Matrix",
    description: "의문으로 시작한 보고서를, 확신의 전략으로 바꿉니다.",
    url: "https://ai-consulting.djicebreaking.org", // (참고: 도메인 변경 시 여기도 업데이트 필요)
    type: "website",
    images: [
      {
        // 이전의 lawyer-profile 대신 ceo-profile 등 새로운 썸네일 경로로 변경하는 것을 권장합니다.
        url: "",
        width: 1200,
        height: 630,
        alt: "범석 Matrix: AI 기반 전략 시뮬레이터",
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
