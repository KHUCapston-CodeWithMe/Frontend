import React, { useState } from "react";
import tw from "tailwind-styled-components";
import CodeSample from "@/components/Snapshot/CodeSample";
import SnapshotInfo from "@/components/Snapshot/SnapshotInfo";

const SnapshotListModal = () => {
  return (
    <MainDiv>
      <SnapshotListDiv>
        <SnapshotInfo />
        <SnapshotInfo />
        <SnapshotInfo />
      </SnapshotListDiv>
      <CodeSampleDiv>
        <CodeSample />
      </CodeSampleDiv>
    </MainDiv>
  );
};

export default SnapshotListModal;

const MainDiv = tw.div`
w-full h-full
flex
`;

const SnapshotListDiv = tw.div`
w-[50%] h-full
p-[20px]
overflow-y-auto
`;

const CodeSampleDiv = tw.div`
w-[50%] h-full
dark-1
p-[36px_10px_10px_10px]
rounded-[0_10px_10px_0]
`;
