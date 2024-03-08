import styles from "./Header.module.css";
export default function Hamburger({ isNavOpen, handleNavOpen }) {
  return (
    <button className={styles.btnMobileNav} onClick={handleNavOpen}>
      <ion-icon
        style={{ height: "48px", width: "48px", color: "#fff" }}
        className={styles.iconMobileNav}
        name={isNavOpen ? "close-outline" : "menu-outline"}
      ></ion-icon>
    </button>
  );
}
