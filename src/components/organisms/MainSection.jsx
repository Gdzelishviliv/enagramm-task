import { useState } from "react";
import DownArrow from "../../assets/down-arrow.svg";
import Checkbox from "../../assets/chechkbox.svg";
import ButtonIcn from "../../assets/button.svg";

const MainSection = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [comparedText1, setComparedText1] = useState([]);
  const [comparedText2, setComparedText2] = useState([]);
  const [isCompared, setIsCompared] = useState(false);

  const createDiff = (text1, text2) => {
    const words1 = text1.split(/(\s+)/);
    const words2 = text2.split(/(\s+)/);

    const result1 = [];
    const result2 = [];

    let i = 0,
      j = 0;

    while (i < words1.length || j < words2.length) {
      if (i < words1.length && j < words2.length && words1[i] === words2[j]) {
        result1.push(<span key={`t1-${i}`}>{words1[i]}</span>);
        result2.push(<span key={`t2-${j}`}>{words2[j]}</span>);
        i++;
        j++;
      } else if (i < words1.length && !words2.slice(j).includes(words1[i])) {
        result1.push(
          <span
            key={`t1-del-${i}`}
            className="bg-red-200 text-red-800 px-1 rounded"
          >
            {words1[i]}
          </span>
        );
        i++;
      } else if (j < words2.length && !words1.slice(i).includes(words2[j])) {
        result1.push(
          <span
            key={`t1-add-${j}`}
            className="bg-green-200 text-green-800 px-1 rounded"
          >
            {words2[j]}
          </span>
        );
        j++;
      } else {
        if (i < words1.length) {
          result1.push(<span key={`t1-${i}`}>{words1[i]}</span>);
          i++;
        }
        if (j < words2.length) {
          result2.push(<span key={`t2-${j}`}>{words2[j]}</span>);
          j++;
        }
      }
    }

    i = 0;
    j = 0;

    while (i < words2.length || j < words1.length) {
      if (i < words2.length && j < words1.length && words2[i] === words1[j]) {
        i++;
        j++;
      } else if (i < words2.length && !words1.slice(j).includes(words2[i])) {
        result2.push(
          <span
            key={`t2-del-${i}`}
            className="bg-red-200 text-red-800 px-1 rounded"
          >
            {words2[i]}
          </span>
        );
        i++;
      } else if (j < words1.length && !words2.slice(i).includes(words1[j])) {
        result2.push(
          <span
            key={`t2-add-${j}`}
            className="bg-green-200 text-green-800 px-1 rounded"
          >
            {words1[j]}
          </span>
        );
        j++;
      } else {
        if (i < words2.length) i++;
        if (j < words1.length) j++;
      }
    }

    return { result1, result2 };
  };

  const handleCompare = () => {
    const { result1, result2 } = createDiff(text1, text2);
    setComparedText1(result1);
    setComparedText2(result2);
    setIsCompared(true);
  };

  const handleReset = () => {
    setText1("");
    setText2("");
    setComparedText1([]);
    setComparedText2([]);
    setIsCompared(false);
  };
  return (
    <>
      <div className="pt-[24px]">
        <div className="flex flex-col md:flex-row justify-between  border-b-[1px] border-[#EDEDED] pb-[16px] md:pb-[17px] mx-[16px] md:mx-[28px]">
          <div className="flex flex-col md:flex-row md:gap-[24px]">
            <div className="flex flex-col relative">
              <input
                className="border-[1px] h-[40px] border-[#EDEDED] rounded-[8px] p-[8px] "
                type="text"
                placeholder="ქართული"
                disabled
              />
              <img
                className="absolute right-[40px] top-2.5"
                src={DownArrow}
                alt="down arrow"
                width={24}
                height={24}
              />
            </div>
            <div className="flex gap-2 mt-[16px] md:mt-0 md:items-center">
              <img src={Checkbox} alt="checkbox" width={24} height={24} />
              <span className="text-[14px] text-[#383A48] font-helvetica">
                ფორმატის შენარჩუნება
              </span>
            </div>
          </div>
          <div className="flex gap-4 mt-[24px] md:mt-0">
            <button className="flex gap-0.5 justify-center items-center rounded-[6px]  bg-[#383A4899] h-[42px] w-full md:w-[150px]">
              <img src={ButtonIcn} alt="icn" />
              <span className="text-[#FFFFFF] text-[14px]">ახლის გახსნა </span>
            </button>
          </div>
        </div>
        <div className="mx-[16px] md:mx-[28px] mt-[24px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mb-[16px]">
            <div className="flex flex-col">
              {!isCompared ? (
                <textarea
                  className="border-[1px] border-[#EDEDED] bg-[#F0F7FF] rounded-[8px] p-[12px] h-[190px] resize-none focus:outline-none focus:border-[#383A48] md:h-[432px]"
                  placeholder="დაიწყე წერა..."
                  value={text1}
                  onChange={(e) => setText1(e.target.value)}
                />
              ) : (
                <div className="border-[1px] border-[#EDEDED] rounded-[8px] p-[12px] min-h-[120px] bg-[#fafafa] text-[14px] leading-relaxed">
                  {comparedText1}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              {!isCompared ? (
                <textarea
                  className="border-[1px] border-[#EDEDED] bg-[#F0F7FF] rounded-[8px] p-[12px] h-[190px] resize-none focus:outline-none focus:border-[#383A48] md:h-[432px]"
                  placeholder="დაიწყე წერა..."
                  value={text2}
                  onChange={(e) => setText2(e.target.value)}
                />
              ) : (
                <div className="border-[1px] border-[#EDEDED] rounded-[8px] p-[12px] min-h-[120px] bg-[#fafafa] text-[14px] leading-relaxed">
                  {comparedText2}
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-[12px] mb-[40px] justify-center mt-[32px]">
            <button
              onClick={handleCompare}
              disabled={!text1 || !text2 || isCompared}
              className="bg-[#383A48] text-white px-[16px] py-[8px] rounded-[6px] text-[14px] font-medium disabled:bg-[#EDEDED] disabled:text-[#999] hover:bg-[#2a2c38] transition-colors"
            >
              შედარება
            </button>
            {isCompared && (
              <button
                onClick={handleReset}
                className="bg-[#f5f5f5] text-[#383A48] px-[16px] py-[8px] rounded-[6px] text-[14px] font-medium border-[1px] border-[#EDEDED] hover:bg-[#e8e8e8] transition-colors"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
