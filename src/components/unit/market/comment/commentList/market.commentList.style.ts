import styled from "@emotion/styled";
import React, { useState } from "react";
import { Rate } from "antd";

export const MainBox = styled.div`
  width: 1120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const SubBox = styled.div`
  width: 970px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const AllCommentsBox = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const CommentBox = styled.div`
  width: 900px;
  height: 140px;
  display: flex;
  flex-direction: column;
  border: 6px solid black;
  margin-bottom: 25px;
`;

export const TopBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 6px solid black;
  background-color: #6083ff;
  color: white;
  padding: 0px 25px;
`;

export const Name = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: white;
  font-size: 25px;
`;

export const Date = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  color: white;
  font-size: 18px;
`;

export const BottomBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentsBox = styled.div`
  width: 800px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  padding: 0px 25px;
`;

export const ButtonBox = styled.button`
  width: 110px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
  background-color: white;
  color: #7b7b7b;
`;

export const EditButton = styled.button`
  width: 55px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #32a6ff;
  font-size: 20px;
  cursor: pointer;
  color: white;
  border: 0px;
  border-left: 5px solid black;

  :active {
    background-color: #818181;
  }
`;

export const DeleteButton = styled.button`
  width: 55px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ff5b5b;
  font-size: 20px;
  cursor: pointer;
  color: white;
  border: 0px;
  border-left: 5px solid black;

  :active {
    background-color: #818181;
  }
`;

export const QuestionButton = styled.button`
  width: 55px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ac52ff;
  font-size: 20px;
  cursor: pointer;
  color: white;
  border: 0px;
  border-left: 5px solid black;

  :active {
    background-color: #818181;
  }
`;
//////
//////
export const EditCommentBox = styled.div`
  width: 900px;
  height: 140px;
  display: flex;
  flex-direction: column;
  border: 6px solid black;
  margin-bottom: 40px;
`;

export const EditCommentTopBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 6px solid black;
  background-color: #818181;
  color: white;
  font-size: 25px;
  padding: 0px 25px;
`;

export const EditCommentBottomBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const EditCommentInputBox = styled.input`
  width: 790px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
  background-color: white;
  padding: 0px 25px;
  color: #7b7b7b;
`;

export const EditCommentWriteButton = styled.button`
  width: 55px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #4551ff;
  font-size: 20px;
  border-left: 6px solid black;
  cursor: pointer;
  color: white;

  :active {
    background-color: #a7a7a7;
  }
`;

export const EditCommentCancelButton = styled.button`
  width: 55px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f649ff;
  font-size: 20px;
  border-left: 6px solid black;
  cursor: pointer;
  color: white;

  :active {
    background-color: #a7a7a7;
  }
`;

///
////

export const QuestionSubBox = styled.div`
  width: 970px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 70px;
`;

export const QuestionBox = styled.div`
  width: 770px;
  height: 140px;
  display: flex;
  flex-direction: column;
  border: 5px solid black;
  margin-bottom: 25px;
`;

export const QuestionTopBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 5px solid black;
  background-color: #818181;
  color: white;
  font-size: 25px;
  padding: 0px 25px;
`;

export const QuestionBottomBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const QuestionInputBox = styled.input`
  width: 625px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
  background-color: white;
  padding: 0px 25px;
  color: #7b7b7b;
`;

export const QuestionWriteButton = styled.button`
  width: 70px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  font-size: 20px;
  border-left: 5px solid black;
  cursor: pointer;

  :active {
    background-color: #a7a7a7;
  }
`;
export const QuestionCancelButton = styled.button`
  width: 70px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  font-size: 20px;
  border-left: 5px solid black;
  cursor: pointer;

  :active {
    background-color: #a7a7a7;
  }
`;
