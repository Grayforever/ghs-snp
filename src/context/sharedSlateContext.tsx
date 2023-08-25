import React, { ReactNode, createContext, useMemo, useState } from "react";

export type SharedStateType = [string | null, string | null];

interface SharedStateContextType {
  sharedState: SharedStateType;
  setSharedState: React.Dispatch<React.SetStateAction<SharedStateType>>;
}

export const SharedStateContext = createContext<
  SharedStateContextType | undefined
>(undefined);

export const SharedStateProvider = ({ children }: { children: ReactNode }) => {
  const [sharedState, setSharedState] = useState<SharedStateType>([null, null]);

  const val = useMemo(() => {
    return { sharedState, setSharedState };
  }, [sharedState]);

  return (
    <SharedStateContext.Provider value={val}>
      {children}
    </SharedStateContext.Provider>
  );
};
