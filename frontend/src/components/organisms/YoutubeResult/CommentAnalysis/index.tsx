/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import { useEffect, useMemo, useRef, useState } from 'react';
import { CommentItem } from '@/components/molecules';
import * as S from './index.styles';
import { YoutubeCommentInterface } from '@/types/youtube';
import { getComments } from '@/apis/keyword';

interface Props {
  link: string;
}

const CommentAnalysis = ({ link }: Props): React.ReactElement => {
  const [page, setPage] = useState<number>(1);
  const [code, setCode] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [comments, setComments] = useState<YoutubeCommentInterface[]>([]);
  const getData = async () => {
    setIsLoading(true);
    const { data } = await getComments(link, code, page, 10);
    if (data === '') return;
    setComments((prev) => prev.concat(data));
    setIsLoading(false);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const handleClickFilter = (kind: number) => {
    setComments([]);
    setCode(kind);
    setPage(1);
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, code]);

  useEffect(() => {
    setComments([]);
    setCode(0);
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [link]);
  return (
    <S.Wrapper>
      <S.Title>댓글 분석</S.Title>
      <S.CommentPaper>
        <S.Filter>
          <S.FilterBtn isClick={code === 0} onClick={() => handleClickFilter(0)} kind="positive">
            긍정
          </S.FilterBtn>
          <S.FilterBtn isClick={code === 1} onClick={() => handleClickFilter(1)} kind="negative">
            부정
          </S.FilterBtn>
          <S.FilterBtn isClick={code === 2} onClick={() => handleClickFilter(2)} kind="neutral">
            중립
          </S.FilterBtn>
        </S.Filter>
        {comments.length === 0 ? (
          <S.NoComment>
            {code === 0
              ? '긍정 댓글이 없습니다.'
              : code === 1
              ? '부정 댓글이 없습니다.'
              : '중립 댓글이 없습니다.'}
          </S.NoComment>
        ) : (
          comments.map((comment, index) => {
            return (
              <CommentItem
                key={index}
                comment={comment.comment}
                upCount={comment.upCount}
                downCount={comment.downCount}
                isLast={index === comments.length - 1}
                nextPage={nextPage}
              />
            );
          })
        )}
      </S.CommentPaper>
    </S.Wrapper>
  );
};

export default CommentAnalysis;
