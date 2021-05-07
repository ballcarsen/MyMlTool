import Link from 'next/link'
import styles from '../styles/Navigation.module.css'

export default function Navigation() {
    return (
            <nav className={styles.nav}>
                <a href='/' className={styles.logo}>
                    <img src="/logo.png" height="60"/>
                </a>
                <Link href="/upload">
                    <a className={styles.link}>Upload</a>
                </Link>
                <Link href="/">
                    <a className={styles.link}>Visualize</a>
                </Link>
            </nav>
    )
}