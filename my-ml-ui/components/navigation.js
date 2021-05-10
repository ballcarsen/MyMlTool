import Link from 'next/link'
import styles from '../styles/Navigation.module.css'

export default function Navigation() {
	return (
			<nav className={styles.nav}>
				<Link href="/">
					<a className={styles.link}>Home</a>
				</Link>
				<Link href="/upload">
					<a className={styles.link}>Upload</a>
				</Link>
				<Link href="/">
					<a className={styles.link}>Visualize</a>
				</Link>
				<Link href="/user">
					<a className={styles.link}>User</a>
				</Link>
			</nav>
	)
}