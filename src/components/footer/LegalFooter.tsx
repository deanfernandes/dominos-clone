import classes from "./LegalFooter.module.css";

export default function LegalFooter() {
  return (
    <div className={classes.legal_footer_container}>
      <div>
        <a>Pizza Near Me</a>
        <a>Domino's deals</a>
        <a>Student discount</a>
        <a>Terms of Use</a>
        <a>Terms and Conditions</a>
        <a>Privacy Policy</a>
        <a>Marketing Preferences</a>
        <a>Cookie Policy</a>
        <a>Copyright and Legal</a>
        <a>Boring Legal Stuff</a>
      </div>
      <div>
        <p>© 2025 Domino's Pizza UK and Ireland Limited</p>
      </div>
    </div>
  );
}
