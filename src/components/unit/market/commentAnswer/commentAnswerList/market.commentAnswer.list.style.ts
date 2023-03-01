import styled from "@emotion/styled";
import React, { useState } from "react";
import { Rate } from "antd";

export const MainBox = styled.div`
  width: 1120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SubBox = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CommentAnswerBox = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;

export const AnswerIcon = styled.div`
  width: 15%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export const CommentBox = styled.div`
  width: 85%;
  height: 140px;
  display: flex;
  flex-direction: column;
  border: 6px solid black;
  margin-bottom: 15px;
`;

export const TopBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 6px solid black;
  background-color: #fc60ff;
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
  width: 845px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  padding: 0px 25px;
`;

export const ButtonBox = styled.div`
  width: 845px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
  background-color: white;
  padding: 0px 25px;
  color: #7b7b7b;
`;

export const WriteButton = styled.button`
  width: 114px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  font-size: 20px;
  border-left: 6px solid black;
  cursor: pointer;

  :active {
    background-color: #a7a7a7;
  }
`;
