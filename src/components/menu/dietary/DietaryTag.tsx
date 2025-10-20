import classes from "./DietaryTag.module.css";

interface DietaryTagProps {
  name: string;
  iconUrl: string;
  onClick?: () => void;
}

export default function DietaryTag({
  name,
  iconUrl,
  onClick,
}: DietaryTagProps) {
  return onClick ? (
    <button title={name} className={classes.button} onClick={onClick}>
      <img src={iconUrl} alt={`${name} icon`} />
      {name}
    </button>
  ) : (
    <span title={name} className={classes.text}>
      <img src={iconUrl} alt={`${name} icon`} />
      {name}
    </span>
  );
}
