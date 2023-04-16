import { useState } from "react";

const slow = (time) => {
  const done = Date.now() + time;
  while (done > Date.now()) {
    //...오래걸리는 작업
  }
};

const SlowComponent = ({ time, onChange }) => {
  slow(time);

  return (
    <div>
      작업 시간은?
      <input
        type="number"
        value={time}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ backgroundColor: "white" }}
      />
    </div>
  );
};

const NormalComponent = ({ time }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      무언가 입력해보세요
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ backgroundColor: "white" }}
      />
      <div>
        {value ? `${value}'은 ${time}ms 뒤에 실행됩니다` : "값을 입력하세요"}
      </div>
    </div>
  );
};

const AppComponent = () => {
  const [time, setTime] = useState(300);

  return (
    <>
      <NormalComponent time={time} />
      <br></br>
      <SlowComponent time={time} onChange={setTime} />
    </>
  );
};

export default function TestPage() {
  return <AppComponent></AppComponent>;
}
