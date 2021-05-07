import Navigation from "../components/navigation"
import styles from '../styles/Upload.module.css'

export default function Upload() {
    return (
        <div className={styles.container}>
            <Navigation></Navigation>
            <main className={styles.main}>
                <h1>
                    Upload Data
                </h1>
            </main>
        </div>
    )
}