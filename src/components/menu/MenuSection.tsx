import classes from "./MenuSection.module.css";
import type { ReactNode } from "react";

interface MenuSectionProps {
  heading: string;
  id: string;
  bannerImgUrl?: string;
  bannerImgAlt?: string;
  children: ReactNode;
}

export default function MenuSection({
  heading,
  bannerImgUrl,
  bannerImgAlt,
  children,
  id,
}: MenuSectionProps) {
  return (
    <section className={classes.container}>
      <h2 className={classes.heading} id={id}>
        {heading}
      </h2>
      {bannerImgUrl && (
        <img src={bannerImgUrl} alt={bannerImgAlt} className={classes.banner} />
      )}
      {children}
    </section>
  );
}
