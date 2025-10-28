import classes from "./FilterButton.module.css";

interface FilterButtonProps {
  text: string;
  active: boolean;
  onClick: () => void;
}

export default function FilterButton({
  text,
  active,
  onClick,
}: FilterButtonProps) {
  return (
    <button
      className={`${classes.button} ${active ? classes.active : ""}`}
      onClick={onClick}
      data-cy={`filter-button-${text.toLowerCase()}`}
    >
      {text.charAt(0).toUpperCase() + text.slice(1)}
    </button>
  );
}
