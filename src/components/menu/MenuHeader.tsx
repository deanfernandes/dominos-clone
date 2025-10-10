import classes from "./MenuHeader.module.css";

interface MenuHeaderProps {
  text: string;
}

export default function MenuHeader({ text }: MenuHeaderProps) {
  return <h2 className={classes.header}>{text}</h2>;
}
