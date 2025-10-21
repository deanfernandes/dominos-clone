import classes from "./FilterButton.module.css";
import { useState } from "react";

interface FilterButtonProps {
  text: string;
}

export default function FilterButton({ text }: FilterButtonProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <button
      className={`${classes.button} ${isActive ? classes.active : ""}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
