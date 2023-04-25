import { useEffect } from "react";

export const CautionLabelsOrange = () => {
  useEffect(() => {
    const headings = document.querySelectorAll("h5");
    headings.forEach((heading) => {
      heading.style.color = "orange";
      heading.style.backgroundClip = "content-box";
      heading.style.backgroundColor = "#FDEBD0";
    });
  }, []);

  return null;
};
