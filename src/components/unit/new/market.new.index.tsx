import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import * as S from "./market.new.style";
import { gql, useMutation, useQuery } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import {
  CREATE_USED_ITEM,
  UPDATE_USED_ITEM,
  FETCH_USED_ITEM,
  UPLOAD_FILE,
} from "./market.new.query";
import { useRecoilValueLoadable } from "recoil";
import { useForm } from "react-hook-form";
import Uploads01 from "../../commons/upload/Uploads01.container";
import { FetchUseditem } from "../../../hooks/api/query/FetchUseditem";

export default function MarketNewIndex(props: any): JSX.Element {
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const { data, refetch } = FetchUseditem();
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const router = useRouter();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [remarks, setRemarks] = useState("");
  const [contents, setContents] = useState("");
  const [tags, setTags] = useState([]);
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [zipcode, setZipcode] = useState("");

  const [fileUrls, setFileUrls] = useState([]);

  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  const onClickWriteBtn = async (): Promise<void> => {
    console.log(name);
    if (name && price && remarks && contents) {
      try {
        const result = await createUseditem({
          variables: {
            createUseditemInput: {
              name: name,
              remarks: remarks,
              contents,
              price: Number(price),
              tags,
              images: [...fileUrls],
            },
          },
        });
        router.push(`/market/${result.data?.createUseditem._id}`);
        alert("게시글 등록이 완료 되었습니다.");
      } catch (error) {
        if (error instanceof Error) {
          alert("Error" + error);
        }
      }
    }
  };

  // useEffect(() => {
  //   const images = data?.fetchUseditem?.images;
  //   if (images !== undefined && images !== null) setFileUrls([...images]);
  // }, []);

  const onClickEditBtn = async (): Promise<void> => {
    //   const currentFiles = JSON.stringify(fileUrls);
    //   const defaultFiles = JSON.stringify(data?.fetchUseditem.images);
    //   const isChangedFiles = currentFiles !== defaultFiles;
    //   const updateUseditemInput = {};
    //   if (name !== "") updateUseditemInput.name = name;
    //   if (contents !== "") updateUseditemInput.contents = contents;
    //   if (remarks !== "") updateUseditemInput.remarks = remarks;
    //   if (price !== 0) updateUseditemInput.price = price;
    //   if (tags[0] !== "") updateUseditemInput.tags = tags;
    //   if (addressDetail !== "")
    //     updateUseditemInput.useditemAddress = { addressDetail: addressDetail };
    //   if (address !== "")
    //     updateUseditemInput.useditemAddress = { address: address };
    //   if (isChangedFiles) updateUseditemInput.images = fileUrls;
    //   try {
    //     if (typeof router.query.itemId !== "string") {
    //       alert("게시글 ID를 불러오지 못했습니다");
    //       return;
    //     }
    //     const result = await updateUseditem({
    //       variables: {
    //         updateUseditemInput: updateUseditemInput,
    //         useditemId: router.query.itemId,
    //       },
    //     });
    //     router.push(`/market/${result.data?.updateUseditem._id}`);
    //   } catch (error) {
    //     if (error instanceof Error) {
    //       alert("Error" + error);
    //     }
    //   }
  };

  const onClickCancel = () => {
    router.back;
  };

  const onClickUpload = (): void => {
    fileRef.current?.click();
  };

  const onChangeFileUrls = (fileUrl: string): void => {
    const newFileUrls = [...fileUrls];
    setFileUrls(newFileUrls);
  };

  const onChangeName = (e): void => {
    setName(e.currentTarget.value);
  };

  const onChangeTags = (e): void => {
    setTags(e.currentTarget.value);
  };

  const onChangePrice = (e): void => {
    setPrice(e.currenTarget.value);
  };

  const onChangeContents = (e): void => {
    setContents(e.currentTarget.value);
  };

  const onChangeFile = async (event) => {
    const file = event.target.files?.[0];

    try {
      const result = await uploadFile({ variables: { file } });
      onChangeFileUrls(result.data.uploadFile.url);
      console.log(result.data.uploadFile.url);
    } catch (error) {
      alert("error. 개발자에게 문의하세요");
    }
  };

  const onClickSubmit = (): void => {};

  return (
    <S.MainBox>
      <S.BackgroundBox>
        <S.SubBox>
          <S.TitleText>상품등록</S.TitleText>
          <S.PictureBox>
            {props.isEdit
              ? data?.fetchUseditem?.images?.map((el, index) => (
                  <Uploads01
                    key={uuidv4()}
                    index={index}
                    fileUrl={el}
                    onChangeFileUrls={onChangeFileUrls}
                  ></Uploads01>
                ))
              : fileUrls.map((el: any, index: any) => (
                  <Uploads01
                    key={uuidv4()}
                    index={index}
                    fileUrl={el}
                    onChangeFileUrls={onChangeFileUrls}
                  ></Uploads01>
                ))}
          </S.PictureBox>
          <S.InputBox>
            <S.InputContent
              id="name"
              placeholder="제목"
              {...register("name")}
              // defaultValue={props.isEdit ? data?.fetchUseditem?.name : ""}
              onChange={onChangeName}
            ></S.InputContent>
          </S.InputBox>
          <S.InputBox>
            <S.InputContent
              id="price"
              placeholder="가격"
              {...register("price")}
              // defaultValue={props.isEdit ? data?.fetchUseditem.remarks : ""}
              onChange={onChangePrice}
            ></S.InputContent>
          </S.InputBox>
          <S.TextAreaBox
            placeholder="내용"
            {...register("contents")}
            onChange={onChangeContents}
          ></S.TextAreaBox>
          <S.InputBox>
            <S.InputContent
              placeholder="#태그 #태그 #태그"
              {...register("tags")}
              onChange={onChangeTags}
              // defaultValue={props.isEdit ? data?.fetchUseditem.tags : [""]}
            ></S.InputContent>
          </S.InputBox>
          <S.MapBox>
            <span>거래 위치를 지정해주세요</span>
            <div
              id="map"
              style={{
                width: "384px",
                height: "252px",
              }}
            ></div>
          </S.MapBox>
          <S.ButtonBox>
            <S.WriteButton type="button" onClick={onClickCancel}>
              취소하기
            </S.WriteButton>
            <S.CancelButton
              type="button"
              onClick={props.isEdit ? onClickEditBtn : onClickWriteBtn}
            >
              {props.isEdit ? "수정" : "등록"}하기
            </S.CancelButton>
          </S.ButtonBox>
        </S.SubBox>
      </S.BackgroundBox>
    </S.MainBox>
  );
}
