import type { Locale } from '../i18n/ui';

/**
 * 사이트 전체에서 쓰는 프로필 정보.
 * ✏️ 표시된 곳은 실제 내용으로 바꿔주세요.
 * 초상 사진: public/portrait.jpg 로 넣고 아래 portrait 경로를 바꾸면 됩니다.
 */

type Bilingual = Record<Locale, string>;

export const profile = {
  name: { en: 'Jiyun Kim', ko: '김지윤' } satisfies Bilingual,
  tagline: {
    en: 'Music Information Retrieval · German Letters',
    ko: 'Music Information Retrieval · German Letters',
  } satisfies Bilingual,
  affiliation: {
    en: 'M.S. student · MALerLab, Sogang University',
    ko: '서강대학교 MALerLab 석사과정',
  } satisfies Bilingual,
  // ✏️ 소개문 — 홈 인트로에 문단별로 표시됩니다
  about: {
    en: [
      `I am a master's student at MALerLab, Sogang University, working on music information retrieval.`,
      `Before turning to MIR, I studied German literature. That background still shapes how I listen: a song is never just a signal to me — it is also a poem, a text, a history. Much of my writing here lives in that overlap.`,
      `This site has three rooms: MIR notes in Korean (including a chapter-by-chapter companion to Müller's Fundamentals of Music Processing), essays between music and literature, and a small playground of browser instruments.`,
    ],
    ko: [
      `서강대학교 MALerLab에서 음악 정보 검색(MIR)을 공부하는 석사과정생입니다.`,
      `MIR에 오기 전에는 독문학을 공부했습니다. 그 배경은 지금도 제가 음악을 듣는 방식을 만듭니다 — 저에게 노래는 신호이기만 한 적이 없고, 언제나 시이고 텍스트이고 역사이기도 합니다. 이 사이트의 글 대부분은 그 겹침 위에 있습니다.`,
      `이 사이트에는 방이 세 개 있습니다. 한국어로 쓰는 MIR 노트(Müller의 Fundamentals of Music Processing을 챕터별로 해설하는 연재 포함), 음악과 문학 사이의 에세이, 그리고 브라우저 악기들의 작은 놀이터.`,
    ],
  } satisfies Record<Locale, string[]>,
  // ✏️ 관심사
  interests: {
    en: ['symbolic music', 'music generation', 'orchestral music', 'Lied and poetry'],
    ko: ['symbolic music', '음악 생성', '오케스트라', 'Lied와 시'],
  } satisfies Record<Locale, string[]>,
  // ✏️ 뉴스 — 최신이 위로. 오래된 항목은 지우지 말고 아래로.
  news: [
    {
      date: '2026. 9.',
      en: 'Submitted our first Late-Breaking Demo to ISMIR 2026.',
      ko: 'ISMIR 2026에 첫 Late-Breaking Demo를 제출했습니다.',
      href: '/research',
    },
    {
      date: '2026. 7.',
      en: 'Started the FMP Korean commentary series.',
      ko: 'FMP 한국어 해설 연재를 시작했습니다.',
      href: '/mir',
    },
  ],
  // ✏️ 홈 하단 타임라인 — 최신이 위로. period는 '2026 —'(진행 중) 또는 '2019 – 2023' 형태
  timeline: [
    {
      period: '2026. 9.',
      title: {
        en: 'First paper submitted — ISMIR 2026 Late-Breaking Demo',
        ko: '첫 논문 제출 — ISMIR 2026 Late-Breaking Demo',
      },
      detail: {
        en: 'Who Is Conducting? A conductor skeleton dataset and identifiability study from in-the-wild concert video.',
        ko: '실제 공연 영상에서 추출한 지휘자 스켈레톤 데이터셋과 식별 가능성 연구.',
      },
    },
    {
      period: '2026 —',
      title: {
        en: 'M.S. student, MALerLab, Sogang University',
        ko: '서강대학교 MALerLab 석사과정',
      },
      detail: {
        en: 'Music information retrieval, advised by Prof. Dasaem Jeong.',
        ko: '음악 정보 검색(MIR). 지도교수 정다샘.',
      },
    },
    {
      period: '2018 – 2024',
      title: {
        en: 'B.A. in German Language & Literature, Korea University',
        ko: '고려대학교 독어독문학 학사',
      },
      detail: {
        en: 'Interdisciplinary major in Brain and Cognitive Sciences.',
        ko: '뇌인지과학 융합전공.',
      },
    },
  ],
  portrait: '/portrait.svg', // ✏️ public/portrait.jpg 넣고 '/portrait.jpg'로 변경
  links: {
    github: 'https://github.com/franziyun',
    scholar: '', // ✏️ Google Scholar 프로필 URL
    email: 'mailto:jiyunjulik@gmail.com',
    cv: '', // ✏️ CV PDF를 public/cv.pdf 로 넣고 '/cv.pdf'
  },
};
