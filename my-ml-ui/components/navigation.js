import Link from 'next/link'
import styles from '../styles/Navigation.module.css'

export default function Navigation() {
	return (
			<nav className={styles.nav}>
				<div className={styles.sideLinks}>
					<Link href="/">
						<a className={styles.linkLeft}>MyMl</a>
					</Link>
				</div>
				<div className={styles.centerLinks}>
					<Link href="/datasets">
						<a className={styles.link}>Datasets</a>
					</Link>
					<Link href="/">
						<a className={styles.link}>Visualize</a>
					</Link>
					<Link href="/">
						<a className={styles.link}>Models</a>
					</Link>
				</div>
				<div className={styles.sideLinks}>
					<Link href="/user">
						<a className={styles.linkRight}>User</a>
					</Link>
				</div>
			</nav>
	)
}