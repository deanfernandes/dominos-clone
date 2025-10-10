import classes from "./CustomizePizzaCard.module.css";

interface CustomizePizzaCardProps {
  imgUrl: string;
  title: string;
  description: string;
  background: string;
}

export default function CustomizePizzaCard({
  imgUrl,
  title,
  description,
  background,
}: CustomizePizzaCardProps) {
  return (
    <div className={classes.card_container}>
      <div className={classes.card_header_container} style={{ background }}>
        <img src={imgUrl} alt="" />
        <h3>{title}</h3>
      </div>
      <div className={classes.card_content_container}>
        <p>{description}</p>
        <button>Choose</button>
      </div>
    </div>
  );
}
