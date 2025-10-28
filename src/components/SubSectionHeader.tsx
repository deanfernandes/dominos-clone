import classes from "./SubSectionHeader.module.css";

interface SubSectionHeaderProps {
  text?: string;
}

export default function SubSectionHeader({ text }: SubSectionHeaderProps) {
  return text ? (
    <h3
      className={classes.heading}
      data-cy={`sub-section-header-${text.toLowerCase()}`}
    >
      {text}
    </h3>
  ) : null;
}
