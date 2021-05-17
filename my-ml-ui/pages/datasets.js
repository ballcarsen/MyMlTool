import Navigation from '../components/navigation'
import DatasetForm from '../components/datasetForm'
import DatasetList from '../components/datasetList'
import styles from '../styles/Common.module.css'

export default function Datasets() {
    return (
        <div>
            <Navigation></Navigation>
            <div className={styles.columnside}></div>
            <div className={styles.columnmiddle}>
                <h1>
                    Datasets
                </h1>
                <DatasetForm></DatasetForm>
            </div>
            <div className={styles.columnside}>
                <DatasetList></DatasetList>
            </div>
        </div>
    )
}