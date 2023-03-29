import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Divider, Typography } from '@/components/atoms';
import { useTheme } from '@emotion/react';
import Lottie from 'lottie-react';
import { useGetRecommendKeywordsQuery } from '@/apis/keyword';
import { SearchBar } from '@/components/molecules';
import { ROUTER_PATH } from '@/constants/path';
import * as S from './index.styles';
import searchLottie from '@/assets/lotties/searchLottie.json';

export interface BoxInterface {
  marginTopBottom?: string;
}

const SocialMainPage = () => {
  const [value, setValue] = useState('');
  const navi = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navi(`/${ROUTER_PATH.SOCIAL_RESULT_PAGE}`, { state: { keyword: value } });
  };
  const theme = useTheme();
  const { data: recommendKeywords, isLoading, isError } = useGetRecommendKeywordsQuery();

  return (
    <>
      <S.SearchWrapper>
        <SearchBar
          placeholder="키워드를 입력하세요"
          value={value}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </S.SearchWrapper>
      <S.Contents>
        <S.Left>
          <Lottie animationData={searchLottie} />
        </S.Left>
        <S.Right>
          <S.Wrapper>
            <S.Box marginTopBottom="2">
              <Typography variant="H2" color={theme.text} weight="bold">
                분석하고 싶은 키워드를 검색해보세요.
              </Typography>
            </S.Box>

            <S.Box marginTopBottom="1">
              <Typography variant="LARGE" color={theme.text}>
                여러 소셜 미디어를 종합하여 분석한 언급량, 긍정 지수 등등 알려드랴용
              </Typography>
            </S.Box>
          </S.Wrapper>

          <Divider type="dashed" direction="horizontal" width={2} length="100%" />

          <S.Wrapper>
            <S.Box marginTopBottom="2">
              <Typography variant="H3" color={theme.text} weight="bold">
                이런 키워드는 어떠세요 ?
              </Typography>
            </S.Box>

            <S.Box>
              {recommendKeywords?.map((keyword) => (
                <S.Keyword
                  variant="outlined"
                  fontSize="BASE"
                  size="SMALL"
                  borderSize="2"
                  key={keyword.id}
                >
                  {keyword.keyword}
                </S.Keyword>
              ))}
            </S.Box>
          </S.Wrapper>
        </S.Right>
      </S.Contents>
    </>
  );
};

export default SocialMainPage;
