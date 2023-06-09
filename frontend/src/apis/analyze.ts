import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ComparisonAnalysisInterface, ComparisonReqInterface } from '../types/comparison';
import { SocialAnalysisItemInterface, SocialReqInterface } from '@/types/social';
import {
  YoutubeAnalysisInterface,
  YoutubeCommentInterface,
  YoutubeCommentQueryProps,
} from '@/types/youtube';
import { api } from '@/apis/utils/axios';

const { VITE_API_URL: BASE_URL } = import.meta.env;
// const port = window.location.href.split(':', 3)[2].substring(0, 4);

export const analyzeApi = createApi({
  reducerPath: 'analyzeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/analyze/`,
  }),
  tagTypes: ['analyze'],
  endpoints: (builder) => ({
    getSocialAnalysis: builder.query<Array<SocialAnalysisItemInterface>, SocialReqInterface>({
      query: (info) => ({ url: 'social', params: info }),
    }),
    getYoutubeAnalysis: builder.query<YoutubeAnalysisInterface, string>({
      query: (link) => `youtube?link=${encodeURIComponent(link)}`,
    }),
    getYoutubeCommentAnalysis: builder.query<
      Array<YoutubeCommentInterface>,
      YoutubeCommentQueryProps
    >({
      query: (data) => {
        const { link, code, page, perPage } = data;
        return `youtube/comment?link=${encodeURIComponent(
          link
        )}&code=${code}&page=${page}&perPage=${perPage}`;
      },
    }),
    getComparisonAnalysis: builder.query<ComparisonAnalysisInterface, ComparisonReqInterface>({
      query: (info) => ({ url: 'compare', params: info }),
    }),
  }),
});

export const getContents = async (
  keyword: string,
  code: string,
  page: number,
  perPage: number,
  startDate: string,
  endDate: string
) => {
  const data = await api.get(
    `/analyze/related?keyword=${keyword}&code=${code}&page=${page}&perPage=${perPage}&startDate=${startDate}&endDate=${endDate}`
  );
  return data;
};

export const {
  useGetSocialAnalysisQuery,
  useGetYoutubeAnalysisQuery,
  useGetYoutubeCommentAnalysisQuery,
  useGetComparisonAnalysisQuery,
} = analyzeApi;
