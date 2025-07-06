"use client";

import React, { createContext, useContext, useState } from "react";

type ConfettiContextType = {
  showConfetti: boolean;
  setShowConfetti: (value: boolean) => void;
};

const ConfettiContext = createContext<ConfettiContextType | undefined>(undefined);

export const ConfettiProvider = ({ children }: { children: React.ReactNode }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <ConfettiContext.Provider value={{ showConfetti, setShowConfetti }}>
      {children}
    </ConfettiContext.Provider>
  );
};

export const useConfetti = () => {
  const context = useContext(ConfettiContext);
  if (!context) throw new Error("useConfetti must be used inside ConfettiProvider");
  return context;
};
