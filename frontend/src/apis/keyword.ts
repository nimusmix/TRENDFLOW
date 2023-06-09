import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RankingListInterface, RankingListItemInterface } from '@/types/ranking';
import { RecommendKeywordInterface, WordCloudInterface } from '@/types/keyword';
import { api } from '@/apis/utils/axios';

const { VITE_API_URL: BASE_URL } = import.meta.env;
// const port = window.location.href.split(':', 3)[2].substring(0, 4);
export const keywordApi = createApi({
  reducerPath: 'keywordApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/keyword/`,
  }),
  tagTypes: ['hot', 'related', 'recommend', 'wordcloud'],
  endpoints: (builder) => ({
    getHotKeywords: builder.query<RankingListInterface, void>({
      query: () => 'hot',
      providesTags: ['hot'],
    }),
    getRelatedKeywords: builder.query<Array<RankingListItemInterface>, { keyword: string }>({
      query: (keyword) => ({ url: 'related', params: keyword }),
      providesTags: ['related'],
    }),
    getRecommendKeywords: builder.query<RecommendKeywordInterface[], void>({
      query: () => 'recommend',
      providesTags: ['recommend'],
    }),
    getWordCloudKeywords: builder.query<WordCloudInterface[], { keyword: string }>({
      query: ({ keyword }) => `wordcloud?keyword=${keyword}`,
      providesTags: ['wordcloud'],
      keepUnusedDataFor: 1,
    }),
  }),
});

export const getComments = async (link: string, code: number, page: number, perPage: number) => {
  const data = await api.get(
    `/analyze/youtube/comment?link=${link}&code=${code}&page=${page}&perPage=${perPage}`
  );
  return data;
};

export const {
  useGetHotKeywordsQuery,
  useGetRelatedKeywordsQuery,
  useGetRecommendKeywordsQuery,
  useGetWordCloudKeywordsQuery,
} = keywordApi;
