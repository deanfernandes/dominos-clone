import classes from "./MenuSection.module.css";
import type { ReactNode } from "react";

interface MenuSectionProps {
  heading: string;
  bannerImgUrl: string;
  bannerImgAlt: string;
  children: ReactNode;
}

export default function MenuSection({
  heading,
  bannerImgUrl,
  bannerImgAlt,
  children,
}: MenuSectionProps) {
  return (
    <section className={classes.container}>
      <h2 className={classes.heading} id={heading.toLowerCase()}>
        {heading}
      </h2>
      <img src={bannerImgUrl} alt={bannerImgAlt} className={classes.banner} />
      {children}
    </section>
  );
}
