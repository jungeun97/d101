import React from 'react';
import * as DetailStyle from './ReturnDetail_Style';
import BookImage from '../../../Resources/Images/BookImage.jpg';
import Btn from '../../Common/Btn';

interface ReturnDetail {
  ReturnState: () => void;
}

function ReturnDetail(props: ReturnDetail) {
  return (
    <DetailStyle.WrapDetail>
      <DetailStyle.BookDetailDiv>
        <DetailStyle.BookDiv>
          <DetailStyle.BookImg src={BookImage} />
          <DetailStyle.BookTextDiv>
            <DetailStyle.BookName>
              24단계 실습으로 정복하는 쿠버네티스
            </DetailStyle.BookName>
            <DetailStyle.BookWriter>이정훈 저</DetailStyle.BookWriter>
          </DetailStyle.BookTextDiv>
        </DetailStyle.BookDiv>
        <DetailStyle.PositionText>
          2번째 선반에 책을 넣으세요.
        </DetailStyle.PositionText>
      </DetailStyle.BookDetailDiv>
      <DetailStyle.DetailText>
        계속 반납하시려면 바코드를 찍어주세요.
      </DetailStyle.DetailText>
      <DetailStyle.DetailText>
        책을 모두 반납하셨으면 버튼을 눌러주세요.
      </DetailStyle.DetailText>
      <Btn
        message="반납완료"
        go={props.ReturnState}
        position="absolute"
        bottom="20px"
        right="20px"
      />
    </DetailStyle.WrapDetail>
  );
}

export default ReturnDetail;
