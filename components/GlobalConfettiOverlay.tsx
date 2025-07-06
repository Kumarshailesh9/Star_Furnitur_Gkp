"use client";

import Confetti from "react-confetti";
import { useConfetti } from "@/app/contexts/ConfettiContext";
import { useWindowSize } from "react-use";

export default function GlobalConfettiOverlay() {
  const { showConfetti } = useConfetti();
  const { width, height } = useWindowSize();

  if (!showConfetti) return null;

  return (
    <>
      <Confetti width={width} height={height} />
      <div className="fixed inset-0 flex items-center justify-center z-[9999]">
        <div className="fixed inset-0 bg-black/50"></div>
        <div className="relative z-10 bg-white text-black text-center p-10 rounded-2xl shadow-2xl text-2xl font-bold">
          🎉 Congratulations! <br /> Please wait...
        </div>
      </div>
    </>
  );
}
