import Navigation from '../components/navigation'
import FileSelect from '../components/fileSelect'
import styles from '../styles/Common.module.css'

export default function Upload() {
    return (
        <div>
            <Navigation></Navigation>
            <div className={styles.columnside}></div>
            <div className={styles.columnmiddle}>
                <h1>
                    Upload Data
                </h1>
                <FileSelect></FileSelect>
            </div>
            <div className={styles.columnside}></div>
        </div>
    )
}