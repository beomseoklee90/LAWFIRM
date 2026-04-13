"use client";
import { motion } from "framer-motion";

// fadeInUp 설정을 아래와 같이 변경하면 스크롤할 때마다 효과가 나타납니다.
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

// 0. 인트로덕션: 대표 인사말
export const AboutSection = () => (
  <motion.div {...fadeInUp} className="w-full max-w-5xl px-4 py-10">
    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
      {/* <div className="w-full md:w-2/5 aspect-[3/4] relative group">
        <div className="absolute inset-0 border-2 border-red-900/20 translate-x-4 translate-y-4 rounded-2xl transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gray-200 shadow-2xl">
          {/* 📸 대표님 사진 경로 }

          <img
            src="/ceo-profile.png"
            alt="대표 이범석"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div> */}

      <div className="w-full md:w-3/5 text-left">
        <h3 className="text-red-900 font-black text-[14px] md:text-[16px] tracking-[0.8em] mb-8 uppercase opacity-80">
          A I · R E S O N A N C E
        </h3>
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight break-keep">
          모든 임직원을
          <br />
          전략 컨설턴트로 만듭니다.
        </h1>
        <div className="space-y-6">
          <p className="text-gray-600 text-base md:text-xl font-light leading-relaxed break-keep">
            안녕하십니까, 유다이어리 대표 이범석입니다.
            <br />
            <br />
            AI는 빠르게 발전하고 있지만, 기업 현장에서는 여전히 방법론이
            부재합니다. 저는 수많은 시스템 개발과 전략 운영을 거치며 하나의
            해답을 찾았습니다. 인공지능의 연산력에 리더의 '직관'을 공진시키는
            것. 그것이 바로 압도적 통찰의 시작입니다.
          </p>
          <p className="text-gray-500 text-sm md:text-lg font-light leading-relaxed break-keep border-l-4 border-red-900/30 pl-6 italic">
            "우리는 화려한 템플릿 그 너머의 '진짜 해답'을 봅니다. 당신의 확신을
            데이터와 로직으로 단단하게 세워 올리겠습니다."
          </p>
          <div className="pt-6">
            <p className="text-gray-900 font-black text-xl">대 표 이 범 석</p>
            <p className="text-gray-400 text-sm tracking-widest uppercase mt-1">
              Strategy Architecture Designer
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// 1. 철학 및 문제 제기
export const IntroSection = () => (
  <motion.div {...fadeInUp} className="max-w-3xl text-center px-4 mt-20">
    <h3 className="text-red-900 font-black text-[14px] md:text-[18px] tracking-[0.6em] mb-10 uppercase">
      Step 01. Philosophy
    </h3>
    <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.2] mb-10 break-keep">
      보기 좋은 보고서가 아닌,
      <br />
      정확한 해답을 요구하십시오.
    </h1>
    <p className="text-gray-600 font-normal text-lg md:text-2xl leading-relaxed break-keep">
      시중의 템플릿은 업무를 간소화하지만, 리더의 '생각'을 누락시킵니다.
      <br className="hidden md:block" />
      단순한 현상 분석을 넘어, 방향을 지시하고 결과를 더블 체크하는 진짜
      프레임워크가 필요합니다.
    </p>
  </motion.div>
);

// 2. 핵심 로직 (성과/데이터 섹션 변형)
export const EvidenceSection = () => (
  <motion.div {...fadeInUp} className="w-full text-center px-4 mt-32">
    <h3 className="text-red-900 font-black text-[14px] md:text-[18px] tracking-[0.6em] mb-10 uppercase">
      Step 02. The Formula
    </h3>
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <span className="text-[7rem] md:text-[11rem] font-black text-gray-900 tracking-tighter leading-none">
          5<span className="text-5xl text-red-900 ml-2">P</span>
        </span>
      </div>
      <p className="text-gray-900 text-lg md:text-2xl font-bold tracking-[0.1em] mb-12">
        전략적 공진을 위한 5대 파라미터 (Parameters)
      </p>

      <div className="w-full max-w-4xl text-left border-t border-gray-200 pt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-900 text-xl font-black mb-4 uppercase italic underline decoration-red-900/30">
            [과제] + [전제] + [맥락]
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed break-keep">
            인공지능은 입력한 내용만큼만 답변합니다. 비즈니스 컨텍스트와 정확한
            전제조건을 주입하여 AI의 무의미한 평균적 답변을 선제적으로
            차단합니다.
          </p>
        </div>
        <div>
          <p className="text-gray-900 text-xl font-black mb-4 uppercase italic underline decoration-red-900/30">
            [내 생각] + [검증 사항]
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed break-keep">
            리더의 가설을 투입하고, CFO 관점의 재무적 제약 등 명확한 검증 조건을
            설정합니다. 이 과정을 통해 뻔한 보고서가 아닌 역공학 기반의 컨설팅
            리포트가 완성됩니다.
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

// 3. 전략 프로세스 (어떻게 작동하는가)
export const StrategySection = () => (
  <motion.div {...fadeInUp} className="w-full max-w-5xl px-4 mt-32">
    <h3 className="text-red-900 font-black text-[14px] md:text-[18px] tracking-[0.6em] mb-10 uppercase">
      Step 03. Work Process
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          t: "고해상도 컨텍스트 주입",
          d: "단순한 지시가 아닙니다. 시장 상황, 경쟁사 정보, 내부 인프라 등 분석에 필요한 모든 전제를 AI에게 완벽하게 매핑합니다.",
        },
        {
          t: "가설 기반의 시뮬레이션",
          d: "리더의 직관(가설)을 바탕으로 변수를 조절하며, 가장 확률 높은 최적의 의사결정 시나리오를 AI와 함께 도출해냅니다.",
        },
        {
          t: "업무의 전방위적 호환",
          d: "거시적 전략 기획뿐만 아니라, 이메일 작성 및 실무 자동화까지 기존 업무 도메인과 100% 호환되는 유연성을 제공합니다.",
        },
      ].map((item, i) => (
        <div key={i} className="border-t-2 border-gray-900 pt-8">
          <span className="text-red-900 font-black text-2xl mb-4 block italic">
            0{i + 1}
          </span>
          <h4 className="font-black text-gray-900 mb-4 text-xl md:text-2xl">
            {item.t}
          </h4>
          <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed break-keep">
            {item.d}
          </p>
        </div>
      ))}
    </div>
  </motion.div>
);
// 4. 비즈니스 임팩트 (도입 시 얻을 수 있는 것)
export const ExpertiseSection = () => (
  <motion.div {...fadeInUp} className="w-full max-w-5xl px-4 mt-32">
    <h3 className="text-red-900 font-black text-[14px] md:text-[18px] tracking-[0.6em] mb-10 uppercase">
      Step 04. Business Impact
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        {
          title: "Top-Down 전략 자동화",
          desc: "리더의 직관·가설·경험을 AI가 즉시 전략 구조로 변환합니다. 기존의 Bottom-Up식 자료 수집 중심 업무를 뒤집어, 전략이 먼저 나오고 데이터는 전략을 검증하는 용도로만 사용됩니다.",
        },
        {
          title: "맥락 기반 쿼리로 통찰 즉시 확보",
          desc: "사람이 며칠 동안 조사해야 얻는 통찰을, 맥락이 가득한 쿼리 한 번으로 시뮬레이션합니다. 자료 조사는 ‘통찰을 확인하는 단계’로 축소되어 리드타임이 획기적으로 단축됩니다.",
        },
        {
          title: "의사결정 품질의 비약적 향상",
          desc: "AI가 방대한 지식·패턴·사례를 결합해 인간이 놓치는 변수까지 고려한 결론을 제시합니다. 리더는 더 적은 정보로 더 정확한 결정을 내릴 수 있으며, 조직 전체의 판단력이 상향 평준화됩니다.",
        },
        {
          title: "전략 생산성의 기하급수적 증가",
          desc: "전략 초안·대안 비교·리스크 분석 등 반복적 고부하 작업을 자동화하여, 기획·전략팀의 생산성을 기존 대비 압도적으로 끌어올립니다. 동일 인력으로 더 많은 전략 프로젝트를 처리할 수 있습니다.",
        },
      ].map((field, i) => (
        <div
          key={i}
          className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-center hover:shadow-md transition-shadow"
        >
          <p className="text-gray-900 font-black text-xl md:text-2xl mb-4">
            {field.title}
          </p>
          <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed break-keep">
            {field.desc}
          </p>
        </div>
      ))}
    </div>
  </motion.div>
);

// 5. 컨택트 (도발적 텍스트와 이메일 연결)
export const ContactSection = () => (
  <motion.div {...fadeInUp} className="text-center px-4 mt-32 mb-20">
    <h3 className="text-red-900 font-black text-[14px] md:text-[18px] tracking-[0.6em] mb-10 uppercase">
      Final Step. Connect
    </h3>
    <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-10 tracking-tighter break-keep leading-tight">
      당신의 확신을
      <br />
      외주화하지 마십시오.
    </h1>
    <p className="text-gray-600 mb-12 font-medium text-lg md:text-2xl leading-relaxed break-keep">
      의문으로 시작한 보고서를, 확신의 전략으로 바꿉니다.
      <br className="hidden md:block" />
      지금 귀사에 가장 정교한 AI 의사결정 시스템을 도입하십시오.
    </p>
    <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
      <button className="w-full md:w-auto px-12 py-7 bg-gray-900 text-white font-black text-sm md:text-lg tracking-[0.2em] rounded-full shadow-2xl hover:bg-red-900 transition-all active:scale-95">
        전략 프레임워크 도입 문의
      </button>
      <a
        href="mailto:DJ.ICE.BREAKING@outlook.kr"
        className="w-full md:w-auto px-12 py-7 border-2 border-gray-200 text-gray-600 font-black text-sm md:text-lg tracking-[0.2em] rounded-full bg-white hover:bg-gray-50 transition-all flex justify-center items-center"
      >
        DJ.ICE.BREAKING@outlook.kr
      </a>
    </div>
  </motion.div>
);

// 3. 증명 (실제 시뮬레이션 케이스 스터디 원본) - 새로 추가
export const CaseStudySection = () => (
  <motion.div {...fadeInUp} className="w-full max-w-5xl px-4 mt-32">
    <h3 className="text-red-900 font-black text-[14px] md:text-[18px] tracking-[0.6em] mb-10 uppercase text-center">
      The Proof
    </h3>
    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 text-center tracking-tighter break-keep">
      결과로 증명하는 압도적 해상도
    </h2>
    <p className="text-gray-600 text-center mb-12 text-lg md:text-xl break-keep">
      가장 원초적인 '날것의 전압'을 그대로 공개합니다.
      <br className="hidden md:block" />
      아래는 대기업 가전 렌탈 B사가 경쟁사 A사를 역공학하기 위해 수행한 실제
      시뮬레이션 원본입니다.
    </p>

    {/* 기밀 문서 UI 컨테이너 */}
    <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden flex flex-col">
      {/* 상단 탭/헤더 바 */}
      <div className="bg-gray-900 px-6 py-4 flex justify-between items-center">
        <span className="text-white font-black tracking-widest text-sm opacity-80 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          SYSTEM_LOG: REVERSE ENGINEERING
        </span>
        <span className="text-gray-400 font-bold text-xs tracking-[0.2em]">
          RAW DATA EXPORT
        </span>
      </div>

      <div className="p-6 md:p-10 space-y-16 bg-[#fafafa]">
        {/* ================= INPUT 영역 ================= */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-gray-900"></div>
            <h4 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
              [입력] 5P 프레임워크 쿼리 설계도
            </h4>
          </div>
          <p className="text-gray-500 mb-6 font-medium">
            📂 전략팀 신입에게 건네는 '경쟁사 역공학' 컨설팅 가이드
          </p>

          <div className="bg-gray-100 p-6 md:p-8 rounded-2xl text-base text-gray-800 font-mono leading-relaxed space-y-6 border border-gray-200">
            <div>
              <p className="font-black text-red-900 mb-2">
                1. [전제] 비즈니스 컨텍스트 및 가상 기업 셋팅
              </p>
              <p>
                • 우리 회사 (B사): 국내 상위권 가전 렌탈 기업. 압도적 시장
                지배력을 가졌으나, 2030 1인 가구 시장 진입에 새로운 돌파구가
                필요한 상황.
              </p>
              <p>
                • 경쟁사 (A사): IT 기술로 무장한 라이프스타일 테크 스타트업.
              </p>
              <p>
                • 분석 대상 (서비스 X): 3개월 단위 '가전 순환 구독'과 커뮤니티를
                결합해 2030 점유율을 1년 만에 18% 확보한 모델.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-300">
              <p className="font-black text-red-900 mb-2">
                2. [전략 프레임워크] 역공학 기반의 대응 로직 설계
              </p>
              <p>
                <span className="font-bold">[과제 (Task)]</span> "A사가 어떻게
                우리의 고객을 뺏어갔는지 분석하라. 기술적 스펙이 아닌, '소유보다
                경험을 중시하는 유저의 심리적 락인(Lock-in)' 관점에서 문제의
                본질을 파악할 것."
              </p>
              <p className="mt-3">
                <span className="font-bold">[맥락 (Context)]</span> "우리의 기존
                '장기 할부형' 모델은 MZ에게 '부담'이다. 반면 A사는 '가전은
                소모품이 아닌 콘텐츠'라는 프레임으로 접근했다. 이들이 구축한
                신뢰 시스템의 핵심 동인을 찾아내라."
              </p>
              <p className="mt-3">
                <span className="font-bold">[나의 생각 (Expectation)]</span> "내
                가설은 A사가 가전이 아닌 '공간의 유연성'을 팔았다는 것이다.
                유저들이 인테리어를 인증하며 얻는 '자기표현 욕구'와 '소속감'이
                실제 매출(ROI)에 미친 영향을 추론해라."
              </p>
              <p className="mt-3">
                <span className="font-bold">
                  [검증 및 주의사항 (Constraint)]
                </span>{" "}
                "단순 현상 분석은 컨설팅이 아니다. B사의 자본력과 인프라를
                활용해 A사의 모델을 무력화시킬 역공학 기반의 대응 전략을
                도출하라. 보고 대상은 CFO다. 철저히 비용 효율성과 실행 가능성
                위주로 제언할 것."
              </p>
            </div>
          </div>
        </div>

        {/* ================= OUTPUT 영역 ================= */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-red-900"></div>
            <h4 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
              [출력] CFO 보고용 컨설팅 리포트 (원본)
            </h4>
          </div>

          <div className="bg-white p-6 md:p-10 rounded-2xl text-base text-gray-900 leading-relaxed space-y-10 border border-gray-200 shadow-sm">
            {/* 핵심 결론 */}
            <div className="border-b-2 border-gray-900 pb-6">
              <p className="font-black text-xl mb-4">핵심 결론부터 말하면:</p>
              <p className="mb-4">
                A사는 가전을 ‘소모품’이 아니라{" "}
                <span className="font-bold text-red-900 bg-red-50 px-1">
                  ‘자기 공간을 디자인하는 콘텐츠’
                </span>
                로 재정의함으로써, 2030 세대의 심리적 락인(Psychological
                Lock‑in)을 구축했다.
              </p>
              <p>
                이 락인은 기술이 아니라 정체성·소속감·유연성이라는 감정적 자산을
                기반으로 작동했고, 그 결과 B사의 ‘장기·고정·부담’ 프레임을
                무력화했다.
                <br />
                아래에서는 CFO 관점에서 비용 효율적·역공학 기반 대응 전략까지
                단계적으로 정리한다.
              </p>
            </div>

            {/* 1번 */}
            <div>
              <h5 className="font-black text-xl mb-4">
                1. A사가 고객을 빼앗은 진짜 이유: “가전 = 공간 경험 콘텐츠”라는
                프레임 전환
              </h5>
              <div className="space-y-4 pl-4 border-l-2 border-gray-200">
                <div>
                  <p className="font-bold">
                    1) 기존 B사의 프레임: “가전 = 고가 내구재 → 장기 계약으로
                    비용 분산”
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-gray-700">
                    <li>2030 세대에게는 부채처럼 느껴지는 구조</li>
                    <li>
                      제품은 ‘필요해서 갖는 것’이지, ‘나를 표현하는 수단’이 아님
                    </li>
                    <li>계약 기간이 길수록 심리적 리스크(후회 비용) 증가</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold">
                    2) A사의 프레임: “가전 = 공간을 꾸미는 콘텐츠 → 3개월 단위로
                    교체 가능”
                  </p>
                  <p className="mt-2 text-gray-700">
                    A사는 제품이 아니라 ‘공간의 유연성’을 팔았다.
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-gray-700">
                    <li>
                      3개월 교체는 “내 취향이 바뀌어도 괜찮다”는 심리적 안전장치
                    </li>
                    <li>가전이 ‘정체성 표현의 도구’로 재해석됨</li>
                    <li>
                      커뮤니티 인증(인테리어 사진 공유)이 자기표현 욕구를
                      폭발적으로 자극
                    </li>
                    <li>
                      “나와 비슷한 취향의 사람들이 모여 있다”는 소속감이
                      락인으로 작동
                    </li>
                  </ul>
                  <p className="mt-3 font-bold text-red-900">
                    즉, A사는 제품이 아닌 ‘정체성 기반 경험’을 판매했다.
                  </p>
                </div>
              </div>
            </div>

            {/* 2번 */}
            <div>
              <h5 className="font-black text-xl mb-4">
                2. A사가 구축한 심리적 락인 구조 (기술이 아닌 ‘감정의 구조’)
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-5 rounded-xl">
                  <p className="font-bold mb-2">
                    🔒 락인 1: 자기표현(Self‑Expression Lock‑in)
                  </p>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                    <li>유저는 가전을 ‘나의 취향을 드러내는 오브제’로 사용</li>
                    <li>
                      교체할수록 피드·인증 콘텐츠가 늘어나고, 탈퇴 비용이 증가
                    </li>
                    <li>
                      “이 서비스 덕분에 내 공간이 멋있어진다”는 감정적 보상
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-5 rounded-xl">
                  <p className="font-bold mb-2">
                    🔒 락인 2: 소속감(Community Lock‑in)
                  </p>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                    <li>
                      A사는 커뮤니티를 단순 후기 게시판이 아니라 취향 기반 SNS로
                      설계
                    </li>
                    <li>유저 간 ‘좋아요·댓글·추천’이 사회적 보상을 제공</li>
                    <li>
                      커뮤니티 활동이 많을수록 서비스 이탈 시 정체성 단절감 발생
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-5 rounded-xl">
                  <p className="font-bold mb-2">
                    🔒 락인 3: 유연성(Flexibility Lock‑in)
                  </p>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                    <li>3개월 교체는 ‘심리적 리스크 제로’</li>
                    <li>
                      “실패해도 괜찮다”는 메시지가 구매 장벽을 극적으로 낮춤
                    </li>
                    <li>
                      장기 계약 대비 진입 비용이 낮아 초기 유입이 폭발적으로
                      증가
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-5 rounded-xl">
                  <p className="font-bold mb-2">
                    🔒 락인 4: 추천 알고리즘(Preference Lock‑in)
                  </p>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                    <li>
                      유저의 취향 데이터를 기반으로 ‘다음에 어울리는 가전’을
                      추천
                    </li>
                    <li>추천이 정교해질수록 서비스를 떠날 이유가 사라짐</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3번 */}
            <div>
              <h5 className="font-black text-xl mb-4">
                3. 이 심리적 락인이 실제 매출(ROI)에 미친 영향 추론
              </h5>
              <div className="space-y-3 pl-4 border-l-2 border-gray-200 text-gray-700">
                <p>
                  <span className="font-bold text-gray-900">
                    1) 교체 빈도 증가 → LTV 상승:
                  </span>{" "}
                  3개월 단위 교체는 ‘구독 유지 기간’을 자연스럽게 연장.
                  교체할수록 커뮤니티 활동이 늘고, 이탈률이 감소.
                </p>
                <p>
                  <span className="font-bold text-gray-900">
                    2) 커뮤니티 기반 자연 유입 → CAC 절감:
                  </span>{" "}
                  인테리어 인증은 사실상 UGC 기반 광고. A사는 광고비를 줄이고도
                  바이럴 기반 성장 확보.
                </p>
                <p>
                  <span className="font-bold text-gray-900">
                    3) 취향 데이터 축적 → 고마진 추천 판매:
                  </span>{" "}
                  유저 취향 기반으로 ‘프리미엄 옵션’ 추천. 실제 구매 전환율이
                  높아 ARPU 상승.
                </p>
                <p>
                  <span className="font-bold text-gray-900">
                    4) 정체성 기반 락인 → 가격 탄력성 감소:
                  </span>{" "}
                  “이 서비스가 나의 공간을 완성해준다”는 감정적 가치가 생기면
                  가격 인상에도 민감도가 낮아짐.
                </p>
              </div>
            </div>

            {/* 4번 */}
            <div>
              <h5 className="font-black text-xl mb-4">
                4. CFO 관점의 역공학 기반 대응 전략 (B사의 자본력·인프라 활용)
              </h5>
              <p className="mb-4 text-gray-600">
                아래 전략은 비용 효율성 + 실행 가능성을 기준으로 설계했다.
              </p>

              <div className="space-y-6">
                {/* 전략 1 */}
                <div className="border border-gray-200 p-6 rounded-xl">
                  <p className="font-bold text-lg mb-2">
                    📌 전략 1: ‘3개월 교체’가 아닌 ‘공간 모듈화’로 더 큰 유연성
                    제공
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    A사의 3개월 교체는 비용이 많이 든다. B사는 물류·AS 인프라가
                    압도적이므로 더 효율적인 방식으로 대응 가능.
                  </p>
                  <p className="font-bold">👉 제안:</p>
                  <ul className="list-disc pl-5 mb-4 text-gray-700">
                    <li>
                      제품 전체 교체가 아니라 전면 패널·컬러·부품만 교체하는
                      모듈형 서비스
                    </li>
                    <li>교체 비용은 A사의 30~40% 수준</li>
                    <li>고객은 “공간 분위기를 바꾸는 경험”을 동일하게 누림</li>
                  </ul>
                  <div className="bg-gray-100 p-3 rounded-lg text-sm">
                    <p className="font-bold text-gray-900 mb-1">
                      CFO 관점 효과
                    </p>
                    <p className="text-gray-700">
                      • 물류비·회수비·재정비비 절감
                      <br />• 기존 제품 라인업 그대로 활용 → CAPEX 최소화
                    </p>
                  </div>
                </div>

                {/* 전략 2 */}
                <div className="border border-gray-200 p-6 rounded-xl">
                  <p className="font-bold text-lg mb-2">
                    📌 전략 2: ‘취향 기반 커뮤니티’를 B사의 자산으로 재해석
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    A사는 커뮤니티가 핵심 락인이다. B사는 이미 수백만 고객 DB를
                    보유하고 있어 훨씬 빠르게 확장 가능.
                  </p>
                  <p className="font-bold">👉 제안:</p>
                  <ul className="list-disc pl-5 mb-4 text-gray-700">
                    <li>
                      ‘인테리어 인증’이 아니라 “우리 집 루틴 공유” 중심 커뮤니티
                      구축 (예: 공기청정기·정수기·건조기 등 B사 강점 제품 활용)
                    </li>
                    <li>가전 사용 패턴을 공유하는 생활 루틴 SNS로 확장</li>
                    <li>커뮤니티 활동에 따라 구독 할인·포인트 지급</li>
                  </ul>
                  <div className="bg-gray-100 p-3 rounded-lg text-sm">
                    <p className="font-bold text-gray-900 mb-1">
                      CFO 관점 효과
                    </p>
                    <p className="text-gray-700">
                      • 기존 고객의 재구매·업셀링 증가
                      <br />• 커뮤니티 기반 자연 유입으로 CAC 절감
                    </p>
                  </div>
                </div>

                {/* 전략 3, 4, 5는 공간상 생략 없이 동일한 컴포넌트 구조로 이어붙일 수 있습니다 (길이 조절을 위해 간소화된 뷰로 묶음) */}
                <div className="border border-gray-200 p-6 rounded-xl">
                  <p className="font-bold text-lg mb-2">
                    📌 전략 3, 4, 5: 추천 엔진 및 홈 OS, 단기 MVP 모델 도입
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>
                      <span className="font-bold">저비용 MVP:</span> 고도화된
                      AI가 아니라 간단한 규칙 기반 추천 엔진으로 시작. 개발비
                      최소화.
                    </li>
                    <li>
                      <span className="font-bold">공간 관리 OS:</span> 가전
                      상태·필터·소모품·전력 사용량을 통합한 홈 운영 대시보드
                      제공. 구독형 반복 매출.
                    </li>
                    <li>
                      <span className="font-bold">초기 진입 장벽 제거:</span>{" "}
                      3개월 체험형 단기 구독(일부 제품군 제한) 테스트 후 장기
                      계약 전환 인센티브 제공. 리스크 최소화.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5번 요약 */}
            <div className="bg-gray-900 text-white p-8 rounded-2xl">
              <h5 className="font-black text-xl mb-6">
                5. 최종 요약: B사가 가져가야 할 ‘역공학 핵심’
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="font-bold text-red-400 mb-2">
                    ✔ A사의 성공 요인
                  </p>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>가전 → 콘텐츠</li>
                    <li>구매 → 자기표현</li>
                    <li>계약 → 유연성</li>
                    <li>고객 → 커뮤니티</li>
                    <li>데이터 → 취향 추천</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-red-400 mb-2">
                    ✔ B사가 해야 할 대응
                  </p>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>전체 교체가 아닌 모듈형 유연성 제공</li>
                    <li>커뮤니티를 ‘루틴 기반 SNS’로 재정의</li>
                    <li>저비용 추천 엔진으로 취향 락인 구축</li>
                    <li>홈 운영 OS로 확장해 장기 락인 강화</li>
                    <li>단기형 구독 MVP로 진입 장벽 제거</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="font-bold text-lg mb-2">
                  ✔ CFO에게 중요한 메시지
                </p>
                <p className="italic text-gray-300">
                  “A사의 모델은 감정 기반 락인이다. B사는 자본력·인프라·데이터를
                  활용해 더 낮은 비용으로 더 강한 락인을 만들 수 있다.”
                </p>
                <p className="text-xs text-gray-500 mt-4">
                  원하면, 위 전략을 실행 로드맵(6개월·12개월) 또는 재무적 효과
                  추정 모델(LTV·CAC·ROI) 형태로도 정리해줄게.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center mt-12 bg-red-900/5 py-8 rounded-2xl border border-red-900/10">
      <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
        보이시나요?
      </h3>
      <p className="text-gray-600 text-lg md:text-xl font-medium break-keep px-4">
        시중에 많이 알려진 방식으로 질문하면 절대로 이렇게 컨설팅스러운 답변을
        주지 않습니다.
        <br />
        그러면, 이 공식의 원리는 무엇일까요?
      </p>
    </div>
  </motion.div>
);
