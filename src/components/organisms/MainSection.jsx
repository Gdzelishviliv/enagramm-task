import { useState, useEffect } from "react";
import DownArrow from "../../assets/down-arrow.svg";
import Checkbox from "../../assets/chechkbox.svg";
import ButtonIcn from "../../assets/button.svg";
import DownUp from "../../assets/downUp.svg"

const MainSection = () => {
   const [text1, setText1] = useState("")
  const [text2, setText2] = useState("")
  const [comparedText1, setComparedText1] = useState([])
  const [comparedText2, setComparedText2] = useState([])
  const [isCompared, setIsCompared] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isLoading) {
      setProgress(0)
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 2
        })
      }, 30)
      return () => clearInterval(interval)
    }
  }, [isLoading])

  const createDiff = (text1, text2) => {
    const words1 = text1.split(/(\s+)/)
    const words2 = text2.split(/(\s+)/)

    const result1 = []
    const result2 = []

    let i = 0,
      j = 0

    while (i < words1.length || j < words2.length) {
      if (i < words1.length && j < words2.length && words1[i] === words2[j]) {
        result1.push(<span key={`t1-${i}`}>{words1[i]}</span>)
        result2.push(<span key={`t2-${j}`}>{words2[j]}</span>)
        i++
        j++
      } else if (i < words1.length && !words2.slice(j).includes(words1[i])) {
        result1.push(
          <span key={`t1-del-${i}`} className="bg-red-200 text-red-800 px-1 rounded">
            {words1[i]}
          </span>,
        )
        i++
      } else if (j < words2.length && !words1.slice(i).includes(words2[j])) {
        result1.push(
          <span key={`t1-add-${j}`} className="bg-green-200 text-green-800 px-1 rounded">
            {words2[j]}
          </span>,
        )
        j++
      } else {
        if (i < words1.length) {
          result1.push(<span key={`t1-${i}`}>{words1[i]}</span>)
          i++
        }
        if (j < words2.length) {
          result2.push(<span key={`t2-${j}`}>{words2[j]}</span>)
          j++
        }
      }
    }

    i = 0
    j = 0

    while (i < words2.length || j < words1.length) {
      if (i < words2.length && j < words1.length && words2[i] === words1[j]) {
        i++
        j++
      } else if (i < words2.length && !words1.slice(j).includes(words2[i])) {
        result2.push(
          <span key={`t2-del-${i}`} className="bg-red-200 text-red-800 px-1 rounded">
            {words2[i]}
          </span>,
        )
        i++
      } else if (j < words1.length && !words2.slice(i).includes(words1[j])) {
        result2.push(
          <span key={`t2-add-${j}`} className="bg-green-200 text-green-800 px-1 rounded">
            {words1[j]}
          </span>,
        )
        j++
      } else {
        if (i < words2.length) i++
        if (j < words1.length) j++
      }
    }

    return { result1, result2 }
  }

  const handleButtonClick = async () => {
    if (isCompared) {
      setText1("")
      setText2("")
      setComparedText1([])
      setComparedText2([])
      setIsCompared(false)
    } else {
      setIsLoading(true)

      await new Promise((resolve) => setTimeout(resolve, 1500))

      const { result1, result2 } = createDiff(text1, text2)
      setComparedText1(result1)
      setComparedText2(result2)
      setIsCompared(true)
      setIsLoading(false)
    }
  }
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
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px] mb-[16px]">
              <div className="flex flex-col">
                {!isCompared ? (
                  <textarea
                    className={`border-[1px] border-[#EDEDED] rounded-[8px] bg-[#F0F7FF] p-[12px] h-[190px] md:h-[432px] resize-none focus:outline-none focus:border-[#383A48] ${
                      isLoading ? "opacity-30" : ""
                    }`}
                    placeholder="დაიწყე წერა..."
                    value={text1}
                    onChange={(e) => setText1(e.target.value)}
                    disabled={isLoading}
                  />
                ) : (
                  <div className="border-[1px] border-[#EDEDED] rounded-[8px] p-[12px] h-[190px] md:h-[432px] bg-[#F0F7FF] text-[14px] leading-relaxed">
                    {comparedText1}
                  </div>
                )}
              </div>
              <img className="absolute top-[50%] left-[50%] transform -translate-y-1/2 -translate-x-1/2 md:rotate-180" src={DownUp} alt="" />
              <div className="flex flex-col">
                {!isCompared ? (
                  <textarea
                    className={`border-[1px] border-[#EDEDED] rounded-[8px] bg-[#F0F7FF] p-[12px] h-[190px] md:h-[432px] resize-none focus:outline-none focus:border-[#383A48] ${
                      isLoading ? "opacity-30" : ""
                    }`}
                    placeholder="დაიწყე წერა..."
                    value={text2}
                    onChange={(e) => setText2(e.target.value)}
                    disabled={isLoading}
                  />
                ) : (
                  <div className="border-[1px] border-[#EDEDED] rounded-[8px] p-[12px] h-[190px] md:h-[432px] bg-[#F0F7FF] text-[14px] leading-relaxed">
                    {comparedText2}
                  </div>
                )}
              </div>
            </div>

            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-[8px]">
                <div className="bg-white border border-gray-200 rounded-[12px] p-[24px] shadow-lg min-w-[300px]">
                  <div className="flex items-center gap-[12px] mb-[16px]">
                    <div className="relative w-[40px] h-[40px]">
                      <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                      <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
                      <div className="absolute inset-[8px] bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-[16px] font-medium text-gray-700 mb-[4px]">
                        Converting...Thank you For your Patience
                      </div>
                      <div className="text-[14px] font-bold text-blue-600 mb-[8px]">{progress}%</div>
                      <div className="w-full bg-gray-200 rounded-full h-[6px]">
                        <div
                          className="bg-blue-500 h-[6px] rounded-full transition-all duration-100 ease-out"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-[12px] mb-[40px] justify-center mt-[32px]">
            <button
              onClick={handleButtonClick}
              disabled={((!text1 || !text2) && !isCompared) || isLoading}
              className="bg-[#4571E4] text-white px-[16px] py-[8px] rounded-[6px] text-[14px] font-medium disabled:bg-[#383A4899] disabled:text-[##FFFFFF] hover:bg-[#2a2c38] transition-colors flex items-center gap-[8px] min-w-[120px] justify-center cursor-pointer"
            >
              {isCompared ? "გაუქმება" : "შედარება"}
            </button>
          </div>      
        </div>
      </div>
    </>
  );
};

export default MainSection;
