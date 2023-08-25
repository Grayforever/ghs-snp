import { useContext } from "react";
import { SharedStateContext } from "../context/sharedSlateContext";

export type SharedStateType = [string | null, string | null];
interface SharedStateContextType {
  sharedState: SharedStateType;
  setSharedState: React.Dispatch<React.SetStateAction<SharedStateType>>;
}

export const useSharedState = (): SharedStateContextType => {
  const context = useContext(SharedStateContext);
  if (!context) {
    throw new Error("useSharedState must be used within a SharedStateProvider");
  }
  return context;
};
