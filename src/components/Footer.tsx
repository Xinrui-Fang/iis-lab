import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer} id="colophon">
      <div className={styles.siteInfo}>
        <p className={styles.copyright}>
          © {year} Interactive Intelligent Systems Laboratory
        </p>
      </div>
    </footer>
  )
}
