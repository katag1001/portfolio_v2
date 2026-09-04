import React, { createContext, useContext, useState } from "react";

const HeaderEyebrowContext = createContext(null);

export function HeaderEyebrowProvider({ children }) {
  const [eyebrow, setEyebrow] = useState(null);

  return (
    <HeaderEyebrowContext.Provider value={{ eyebrow, setEyebrow }}>
      {children}
    </HeaderEyebrowContext.Provider>
  );
}

export function useHeaderEyebrowContext() {
  const ctx = useContext(HeaderEyebrowContext);
  if (!ctx) {
    throw new Error("useHeaderEyebrowContext must be used within a HeaderEyebrowProvider");
  }
  return ctx;
}
