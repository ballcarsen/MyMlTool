import Link from 'next/link'
import styles from './navigation.module.css'

export default function Navigation() {
    return (
        <header className={styles.container}>
            <nav>
                <div>
                    <a href='/'>
                        <img src="/logo.png" height="60"/>
                    </a>
                    <div id="links" className={styles.links}>
                        <Link href="/upload" >
                        <a className={styles.link}>Upload</a>
                        </Link>
                        <Link href="/">
                        <a>Visualize</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}