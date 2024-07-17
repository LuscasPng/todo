import logo from "../assets/Logo.png"
import styles from "./Header.module.css"

export function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="ToDO" />
    </div>
  )
}