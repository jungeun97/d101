import React, { useState } from 'react';
import ReturnDetail from './ReturnDetail';
import ReturnList from './ReturnList';
import * as BooksStyle from './ReturnBooks_Style';
import API from '../../../store/api';

function ReturnBooks() {
  const [isReturn, setIsReturn] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const ReturnState = () => {
    setIsReturn(!isReturn);
  };

  const ReturnComplete = () => {
    setIsComplete(true);
    // API.post('returnsuccess')
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  if (isComplete) {
    return (
      <BooksStyle.WrapBooks>
        <BooksStyle.CompleteText>
          반납이 완료되었습니다.
        </BooksStyle.CompleteText>
        <BooksStyle.CompleteText>감사합니다.</BooksStyle.CompleteText>
      </BooksStyle.WrapBooks>
    );
  }

  if (isReturn) {
    return <ReturnList ReturnComplete={ReturnComplete} />;
  }

  return <ReturnDetail ReturnState={ReturnState} />;
}

export default ReturnBooks;
