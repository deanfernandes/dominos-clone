import classes from "./LegalFooter.module.css";

export default function LegalFooter() {
  return (
    <div className={classes.legal_footer_container}>
      <nav className={classes.legal_footer_links_container}>
        <a href="https://www.dominos.co.uk/pizza-near-me/">Pizza Near Me</a>
        <a href="https://www.dominos.co.uk/blog/vouchers/" target="_blank">
          Domino's deals
        </a>
        <a href="https://www.dominos.co.uk/blog/students/" target="_blank">
          Student discount
        </a>
        <a
          href="https://www.dominos.co.uk/legal/content/termsofuse"
          target="_blank"
        >
          Terms of Use
        </a>
        <a
          href="https://www.dominos.co.uk/legal/content/termsandconditions"
          target="_blank"
        >
          Terms and Conditions
        </a>
        <a
          href="https://www.dominos.co.uk/legal/content/privacypolicy"
          target="_blank"
        >
          Privacy Policy
        </a>
        <a
          href="https://www.dominos.co.uk/marketingpreferences"
          target="_blank"
        >
          Marketing Preferences
        </a>
        <a
          href="https://www.dominos.co.uk/legal/content/cookiepolicy"
          target="_blank"
        >
          Cookie Policy
        </a>
        <a
          href="https://www.dominos.co.uk/legal/content/copyrightandlegal"
          target="_blank"
        >
          Copyright and Legal
        </a>
        <a href="https://www.dominos.co.uk/legal/content/index" target="_blank">
          Boring Legal Stuff
        </a>
      </nav>
      <nav className={classes.legal_footer_links_container_mobile}>
        <a
          href="https://www.dominos.co.uk/pizza-near-me/"
          className={classes.legal_footer_link_mobile}
        >
          Pizza Near Me
        </a>
        <a
          href="https://www.dominos.co.uk/blog/vouchers/"
          target="_blank"
          className={classes.legal_footer_link_mobile}
        >
          Domino's deals
        </a>
        <a
          href="https://www.dominos.co.uk/blog/students/"
          target="_blank"
          className={classes.legal_footer_link_mobile}
        >
          Student discount
        </a>
        <a
          href="https://www.dominos.co.uk/legal/content/termsofuse"
          target="_blank"
          className={classes.legal_footer_link_mobile}
        >
          Terms of Use
        </a>
        <a
          href="https://www.dominos.co.uk/legal/content/termsandconditions"
          target="_blank"
          className={classes.legal_footer_link_mobile}
        >
          Terms and Conditions
        </a>
        <a
          href="https://www.dominos.co.uk/legal/content/privacypolicy"
          target="_blank"
          className={classes.legal_footer_link_mobile}
        >
          Privacy Policy
        </a>
        <a
          href="https://www.dominos.co.uk/marketingpreferences"
          target="_blank"
          className={classes.legal_footer_link_mobile}
        >
          Marketing Preferences
        </a>
        <a
          href="https://www.dominos.co.uk/legal/content/cookiepolicy"
          target="_blank"
          className={classes.legal_footer_link_mobile}
        >
          Cookie Policy
        </a>
        <a
          href="https://www.dominos.co.uk/legal/content/copyrightandlegal"
          target="_blank"
          className={classes.legal_footer_link_mobile}
        >
          Copyright and Legal
        </a>
        <a
          href="https://www.dominos.co.uk/legal/content/index"
          target="_blank"
          className={classes.legal_footer_link_mobile}
        >
          Boring Legal Stuff
        </a>
      </nav>

      <div className={classes.copyright_container}>
        <p>© 2025 Domino's Pizza UK and Ireland Limited</p>
      </div>
    </div>
  );
}
