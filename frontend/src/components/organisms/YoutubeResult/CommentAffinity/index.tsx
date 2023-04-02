import * as S from './index.styles';

export interface AffinityProps {
  positive: number | undefined;
  negative: number | undefined;
  neutral: number | undefined;
}

const CommentAffinity = ({ positive, negative, neutral }: AffinityProps): React.ReactElement => {
  return (
    <S.Wrapper>
      <S.Title>댓글 선호도 분석</S.Title>
      <S.AffinityPaper>
        <S.BarChart>
          <S.BarItem kind="positive" value={positive}></S.BarItem>
          <S.BarItem kind="negative" value={negative}></S.BarItem>
          <S.BarItem kind="neutral" value={neutral}></S.BarItem>
        </S.BarChart>
        <S.ChartLabels>
          <S.ChartLabel kind="positive">
            <S.Circle kind="positive"></S.Circle>
            <S.Span>긍정 {positive}%</S.Span>
          </S.ChartLabel>
          <S.ChartLabel kind="negative">
            <S.Circle kind="negative"></S.Circle>
            <S.Span>부정 {negative}%</S.Span>
          </S.ChartLabel>
          <S.ChartLabel kind="neutral">
            <S.Circle kind="neutral"></S.Circle>
            <S.Span>중립 {neutral}%</S.Span>
          </S.ChartLabel>
        </S.ChartLabels>
      </S.AffinityPaper>
    </S.Wrapper>
  );
};

export default CommentAffinity;
