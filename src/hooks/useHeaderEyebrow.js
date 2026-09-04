import { useEffect } from "react";
import { useHeaderEyebrowContext } from "../context/HeaderEyebrowContext";

// Lets a page/section push its "eyebrow" label (index + title) up into the
// site header. Pass index as null to omit the numbered badge.
export default function useHeaderEyebrow(index, label) {
  const { setEyebrow } = useHeaderEyebrowContext();

  useEffect(() => {
    setEyebrow({ index, label });
    return () => setEyebrow(null);
  }, [index, label, setEyebrow]);
}
