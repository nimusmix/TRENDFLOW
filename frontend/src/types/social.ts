export interface SocialAnalysisItemInterface {
  date: string;
  mentionCountInfo: {
    total: number;
    daum: number;
    naver: number;
    twitter: number;
  };
  grapeQuotientInfo: {
    positive: number;
    negative: number;
    neutral: number;
    grape: number;
  };
  compareInfo: {
    mention: {
      type: string;
      changed: number;
    };
    grapeQuotient: {
      type: string;
      changed: number;
    };
  };
}

export interface SocialContentInterface {
  id: number;
  social: string;
  code: string;
  thumbnail: string | null;
  title: string;
  desc: string;
  date: string;
  link: string;
}

export interface SocialReqInterface {
  keyword: string;
  startDate: string;
  endDate: string;
}
