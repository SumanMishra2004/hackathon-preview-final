import React from "react";
import RetroGrid from "@/components/magicui/homebggrid";
import HomeUpperWrittenArea from "./(home)/_components/homeUpperWrittenArea";
import LinearGradient from "@/components/magicui/linear-gradient";
import MarqueeDemo from "./(home)/_components/marqueehome";
import DocumentLink from "./(home)/_components/documentLink";
import { GoogleGeminiEffectDemo } from "./(home)/_components/gemini-effect";
import { BentoGridThirdDemo } from "./(home)/_components/bento-grid";

const app = () => {
  return (
    <div className="h-auto w-auto">
      <div className="home-area h-[110vh] w-screen overflow-hidden relative flex items-center justify-center ">
        <RetroGrid />
        <HomeUpperWrittenArea />
      </div>
    <MarqueeDemo/>
      <div className="relative flex h-fit w-screen  items-center justify-start ">
        <LinearGradient />
       
        <div className="absolute top-0 left-0 z-30  w-full">
          <DocumentLink/>
          <GoogleGeminiEffectDemo/>
          <BentoGridThirdDemo/>
        </div>
      </div>
    </div>
  );
};

export default app;
