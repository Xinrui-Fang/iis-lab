import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import styles from './Layout.module.css'

export function Layout() {
  return (
    <div className={styles.layout}>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content" className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
