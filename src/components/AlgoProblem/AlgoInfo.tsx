import { useTheme } from "@/context/ThemeContext";
import { algoProbState } from "@/store/algoProbState";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import tw from "tailwind-styled-components";

const AlgoInfo = () => {
  const algoProblem = useRecoilValue(algoProbState);
  const [probIndex, setProbIndex] = useState(0);

  console.log(algoProblem);

  return (
    <MainDiv>
      {algoProblem.length == 0 ? (
        <TempDiv>
          <i className="fa-solid fa-circle-exclamation"></i>
          필터를 설정해서 <br /> 문제를 탐색해보세요 !
        </TempDiv>
      ) : (
        <>
          <MenuController>
            <i className="fa-solid fa-angle-left"></i>
            <TitleHolder>
              {algoProblem.list[probIndex].num}{" "}
              {algoProblem.list[probIndex].title}
            </TitleHolder>
            <i className="fa-solid fa-angle-right"></i>
          </MenuController>
          <RestraintDiv>
            시간 복잡도{" "}
            <RestraintHolder>
              {algoProblem.list[probIndex].timeRestraint}
            </RestraintHolder>
          </RestraintDiv>
          <RestraintDiv>
            공간 복잡도{" "}
            <RestraintHolder>
              {algoProblem.list[probIndex].memoryRestraint}
            </RestraintHolder>
          </RestraintDiv>
          <TitleDiv>· 문제</TitleDiv>
          <ContentP>{algoProblem.list[probIndex].problemContent}</ContentP>
          <TitleDiv>· 입력</TitleDiv>
          <ContentP>{algoProblem.list[probIndex].input}</ContentP>
          <TitleDiv>· 출력</TitleDiv>
          <ContentP>{algoProblem.list[probIndex].output}</ContentP>{" "}
        </>
      )}
    </MainDiv>
  );
};

export default AlgoInfo;

const MainDiv = tw.div`
w-full h-full overflow-y-scroll overflow-x-hidden
px-[14px] py-[10px]
`;

const TempDiv = tw.div`
w-full h-full
flex flex-col gap-[10px] justify-center items-center
text-sm text-center
`;

const MenuController = tw.div`
w-full h-[30px]
flex justify-between items-center
`;

const TitleHolder = tw.span`
text-m font-bold
`;

const RestraintDiv = tw.div`
relative right-[2%]
w-[104%] h-[30px]
mt-[6px] px-[10px]
flex justify-between items-center
text-xs font-bold
bg-neutral rounded-[4px]
`;

const RestraintHolder = tw.span`
font-normal
`;

const TitleDiv = tw.div`
mt-[12px]
text-sm font-bold
`;

const ContentP = tw.p`
text-xs leading-5
`;
