import classes from "./MainNavBar.module.css";
import { NavLink, type NavLinkRenderProps, useLocation } from "react-router";

export default function MainNavBar() {
  const location = useLocation();

  return (
    <nav className={classes.container}>
      <div className={classes.collection_container}>
        <a href="#" className={classes.collection_link}>
          <span className={classes.collection_icon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              {/* Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com */}
              {/* License - https://fontawesome.com/license/free */}
              {/* Copyright 2025 Fonticons, Inc. */}
              <path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z" />
            </svg>
          </span>
          <span>Collection</span>
          <span className={classes.collection_location}>Birkenhead</span>
        </a>
      </div>

      <div className={classes.menu_links_container}>
        <NavLink
          to="/menu"
          title="Main navigation links"
          className={({ isActive }: NavLinkRenderProps) =>
            isActive
              ? `${classes.menu_link} ${classes.menu_link_active}`
              : classes.menu_link
          }
        >
          Menu
        </NavLink>
        <NavLink
          to="/deals"
          title="Main navigation links"
          className={({ isActive }: NavLinkRenderProps) =>
            isActive
              ? `${classes.menu_link} ${classes.menu_link_active}`
              : classes.menu_link
          }
        >
          Deals
        </NavLink>
        {(location.pathname === "/menu" || location.pathname === "/deals") && (
          <div
            className={classes.menu_link_underline}
            style={
              location.pathname === "/menu"
                ? { left: "145px" }
                : { left: "305px" }
            }
          ></div>
        )}
      </div>

      <div className={classes.basket_container}>
        <NavLink
          to="/basket"
          className={({ isActive }: NavLinkRenderProps) =>
            isActive
              ? `${classes.basket_link} ${classes.basket_link_active}`
              : classes.basket_link
          }
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              width="32"
              height="32"
            >
              {/* Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com */}
              {/* License - https://fontawesome.com/license/free */}
              {/* Copyright 2025 Fonticons, Inc. */}
              <path d="M320 64C326.6 64 332.9 66.7 337.4 71.5L481.4 223.5L481.9 224L560 224C577.7 224 592 238.3 592 256C592 270.5 582.4 282.7 569.2 286.7L523.1 493.9C516.6 523.2 490.6 544 460.6 544L179.3 544C149.3 544 123.3 523.2 116.8 493.9L70.8 286.7C57.6 282.8 48 270.5 48 256C48 238.3 62.3 224 80 224L158.1 224L158.6 223.5L302.6 71.5C307.1 66.7 313.4 64 320 64zM320 122.9L224.2 224L415.8 224L320 122.9zM240 328C240 314.7 229.3 304 216 304C202.7 304 192 314.7 192 328L192 440C192 453.3 202.7 464 216 464C229.3 464 240 453.3 240 440L240 328zM320 304C306.7 304 296 314.7 296 328L296 440C296 453.3 306.7 464 320 464C333.3 464 344 453.3 344 440L344 328C344 314.7 333.3 304 320 304zM448 328C448 314.7 437.3 304 424 304C410.7 304 400 314.7 400 328L400 440C400 453.3 410.7 464 424 464C437.3 464 448 453.3 448 440L448 328z" />
            </svg>
          </span>
          <span>Basket</span>
          <span className={classes.basket_amount}>£0.00</span>
        </NavLink>
      </div>
    </nav>
  );
}
