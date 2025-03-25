"use client";
import { useContext, createContext, useState } from "react";

type WatchForChangesContextType = {
  productsChangeCounter: number;
  setProducstChangeCounter: React.Dispatch<React.SetStateAction<number>>;
};

const WatchForChangesContext = createContext<
  WatchForChangesContextType | undefined
>(undefined);

export function WatchForChangesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [productsChangeCounter, setProducstChangeCounter] = useState(0);

  return (
    <WatchForChangesContext.Provider
      value={{
        productsChangeCounter,
        setProducstChangeCounter,
      }}
    >
      {children}
    </WatchForChangesContext.Provider>
  );
}

export function useWatchForChanges() {
  const context = useContext(WatchForChangesContext);
  if (!context) {
    throw new Error(
      "useWatchForChanges must be used within a WatchForChangesProvider"
    );
  }
  return context;
}
