import classes from "./Footer.module.css";
import BaseFooter from "./BaseFooter";
import LegalFooter from "./LegalFooter";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <BaseFooter />
      <LegalFooter />
    </footer>
  );
}
