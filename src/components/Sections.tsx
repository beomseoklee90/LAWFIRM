"use client";
import { motion } from "framer-motion";

// fadeInUp 설정을 아래와 같이 변경하면 스크롤할 때마다 효과가 나타납니다.
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 }, // animate 대신 whileInView 사용
  viewport: { once: true, margin: "-100px" }, // 화면에 들어올 때 한 번만 실행
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

// 1. 인트로
export const IntroSection = () => (
  <motion.div {...fadeInUp} className="max-w-3xl text-center px-4">
    <h3 className="text-red-900 font-black text-[14px] md:text-[18px] tracking-[0.6em] mb-10 uppercase">
      Step 01. Philosophy
    </h3>
    <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.2] mb-10 break-keep">
      과장하지 않고,
      <br />
      있는 그대로의 해결책을 제시합니다.
    </h1>
    <p className="text-gray-600 font-normal text-lg md:text-2xl leading-relaxed break-keep">
      우리는 의뢰인에게 무리한 장담이나 공포를 심어드리지 않습니다.
      <br className="hidden md:block" />
      가장 안전하고 합리적인 길을 안내하는 진실한 파트너가 되겠습니다.
    </p>
  </motion.div>
);

// 2. 성과
export const EvidenceSection = () => (
  <motion.div {...fadeInUp} className="w-full text-center px-4">
    <h3 className="text-red-900 font-black text-[14px] md:text-[18px] tracking-[0.6em] mb-10 uppercase">
      Step 02. Data & Records
    </h3>
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <span className="text-[7rem] md:text-[11rem] font-black text-gray-900 tracking-tighter leading-none">
          1,200<span className="text-5xl text-red-900 ml-2">+</span>
        </span>
      </div>
      <p className="text-gray-900 text-lg md:text-2xl font-bold tracking-[0.1em] mb-12">
        누적 심층 상담 및 사건 수행
      </p>

      <div className="w-full max-w-4xl text-left border-t border-gray-200 pt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-900 text-xl font-black mb-4 uppercase italic underline decoration-red-900/30">
            Quality First
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed break-keep">
            사건의 수를 제한하여 퀄리티를 유지합니다. 한 건의 사건에 더 많은
            시간을 투입하는 것이 승소의 유일한 지름길임을 알기 때문입니다.
          </p>
        </div>
        <div>
          <p className="text-gray-900 text-xl font-black mb-4 uppercase italic underline decoration-red-900/30">
            Deep Trust
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed break-keep">
            기존 의뢰인의 재방문율과 지인 추천이 압도적입니다. 화려한 광고보다
            묵묵한 결과로 신뢰를 쌓아온 저희만의 자부심입니다.
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

// 3. 전략
export const StrategySection = () => (
  <motion.div {...fadeInUp} className="w-full max-w-5xl px-4">
    <h3 className="text-red-900 font-black text-[14px] md:text-[18px] tracking-[0.6em] mb-10 uppercase">
      Step 03. Work Process
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          t: "투명한 진단",
          d: "승소 가능성을 객관적으로 판단하여 실익이 없는 사건은 솔직하게 말씀드립니다.",
        },
        {
          t: "밀착 소통",
          d: "진행 상황을 정기적으로 공유하여 내 사건이 어떻게 흘러가는지 불안하지 않게 합니다.",
        },
        {
          t: "다각적 플랜",
          d: "소송 전 합의나 조정 등 의뢰인에게 가장 유리한 최적의 플랜B를 제안합니다.",
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

// 4. 전문분야 (카드 크기 상향)
export const ExpertiseSection = () => (
  <motion.div {...fadeInUp} className="w-full max-w-5xl px-4">
    <h3 className="text-red-900 font-black text-[14px] md:text-[18px] tracking-[0.6em] mb-10 uppercase">
      Step 04. Practice Areas
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        {
          title: "부동산 및 임대차 분쟁",
          desc: "전세금 반환, 명도 소송 등 삶의 터전과 관련된 권리를 안전하게 보호합니다.",
        },
        {
          title: "기업 법무 및 스타트업",
          desc: "리스크를 선제적으로 차단하여 대표님이 사업에만 집중하게 돕습니다.",
        },
        {
          title: "민사 손해배상",
          desc: "사고나 피해에 대해 법이 허용하는 최대의 합당한 배상을 이끌어냅니다.",
        },
        {
          title: "가사 및 상속",
          desc: "가족 간 분쟁에서 감정 소모를 최소화하고 합리적인 조율점을 도출합니다.",
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

// 5. 컨택트 (버튼 시인성 상향)
export const ContactSection = () => (
  <motion.div {...fadeInUp} className="text-center px-4">
    <h3 className="text-red-900 font-black text-[14px] md:text-[18px] tracking-[0.6em] mb-10 uppercase">
      Final Step. Connect
    </h3>
    <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-10 tracking-tighter break-keep leading-tight">
      당신의 고민이 확신으로
      <br />
      바뀌는 상담.
    </h1>
    <p className="text-gray-600 mb-12 font-medium text-lg md:text-2xl leading-relaxed break-keep">
      혼자 고민하지 마세요. 현재 상황에서 무엇을 준비해야 하는지,
      <br className="hidden md:block" />
      전문적인 진단만으로도 해결의 실마리가 보입니다.
    </p>
    <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
      <button className="w-full md:w-auto px-12 py-7 bg-gray-900 text-white font-black text-sm md:text-lg tracking-[0.2em] rounded-full shadow-2xl hover:bg-red-900 transition-all active:scale-95">
        1:1 프라이빗 상담 예약
      </button>
      <button className="w-full md:w-auto px-12 py-7 border-2 border-gray-200 text-gray-600 font-black text-sm md:text-lg tracking-[0.2em] rounded-full bg-white hover:bg-gray-50 transition-all">
        오시는 길 확인
      </button>
    </div>
  </motion.div>
);

// 0. 인트로덕션: 대표 변호사 인사말 (새로 추가)
export const AboutSection = () => (
  <motion.div {...fadeInUp} className="w-full max-w-5xl px-4 py-10">
    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
      {/* 대표 사진 영역 */}
      <div className="w-full md:w-2/5 aspect-[3/4] relative group">
        <div className="absolute inset-0 border-2 border-red-900/20 translate-x-4 translate-y-4 rounded-2xl transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gray-200 shadow-2xl">
          {/* 📸 사장님 사진 경로를 src에 넣으시면 됩니다 */}
          <img
            src="/lawyer-profile.png"
            alt="대표 변호사"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>

      {/* 인사말 영역 */}
      <div className="w-full md:w-3/5 text-left">
        <h3 className="text-red-900 font-black text-[14px] md:text-[16px] tracking-[0.8em] mb-8 uppercase opacity-80">
          I N T R O D U C T I O N
        </h3>
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight break-keep">
          당신의 가장 힘든 순간,
          <br />
          법률 건축가가 곁에 서겠습니다.
        </h1>
        <div className="space-y-6">
          <p className="text-gray-600 text-base md:text-xl font-light leading-relaxed break-keep">
            안녕하십니까, 대표 변호사 OOO입니다.
            <br />
            <br />
            법은 차갑고 복잡해 보이지만, 결국 사람을 향해야 한다고 믿습니다.
            단순히 법조문을 읊는 기술자가 아니라, 의뢰인의 무너진 일상을 다시
            설계하고 단단하게 세워 올리는 '법률 건축가'로서 이 자리에 섰습니다.
          </p>
          <p className="text-gray-500 text-sm md:text-lg font-light leading-relaxed break-keep border-l-4 border-red-900/30 pl-6 italic">
            "우리는 판결문 그 너머의 삶을 봅니다. 당신이 다시 웃을 수 있을
            때까지, 묵묵히 최선의 논리를 쌓아 올리겠습니다."
          </p>
          <div className="pt-6">
            <p className="text-gray-900 font-black text-xl">
              대표 변호사 O O O
            </p>
            <p className="text-gray-400 text-sm tracking-widest uppercase mt-1">
              Chief Attorney at Law
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);
