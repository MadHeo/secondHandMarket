import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import Uploads01Presenter from "./Uploads01.presenter";
import { UPLOAD_FILE } from "./Uploads01.queries";
import { IUploads01Props } from "./Uploads01.types";

export default function Uploads01(props: IUploads01Props): JSX.Element {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = (): void => {
    fileRef.current?.click();
  };

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0];

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      alert("error. 개발자에게 문의하세요");
    }
  };

  return (
    <>
      <Uploads01Presenter
        fileRef={fileRef}
        fileUrl={props.fileUrl}
        defaultFileUrl={props.defaultFileUrl}
        onClickUpload={onClickUpload}
        onChangeFile={onChangeFile}
      ></Uploads01Presenter>
    </>
  );
}
