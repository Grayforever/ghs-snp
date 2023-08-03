import React, { ReactNode, createContext, useContext, useState } from "react";

export type SharedStateType = string | undefined;

interface SharedStateContextType {
  sharedState: SharedStateType;
  setSharedState: React.Dispatch<React.SetStateAction<SharedStateType>>;
}

const SharedStateContext = createContext<SharedStateContextType | undefined>(
  undefined
);

export const useSharedState = (): SharedStateContextType => {
  const context = useContext(SharedStateContext);
  if (!context) {
    throw new Error("useSharedState must be used within a SharedStateProvider");
  }
  return context;
};

export const SharedStateProvider = ({ children }: { children: ReactNode }) => {
  const [sharedState, setSharedState] = useState<SharedStateType>("districts");

  return (
    <SharedStateContext.Provider value={{ sharedState, setSharedState }}>
      {children}
    </SharedStateContext.Provider>
  );
};
