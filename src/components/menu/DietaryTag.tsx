import classes from "./DietaryTag.module.css";

interface DietaryTagProps {
  name: string;
  iconUrl: string;
  isButton: boolean;
}

export default function DietaryTag({
  name,
  iconUrl,
  isButton,
}: DietaryTagProps) {
  return isButton ? (
    <button title={name} className={classes.button}>
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
