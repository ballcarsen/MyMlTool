import useSWR from 'swr'
import styles from '../styles/ListDisplay.module.css'
import DatasetListItem from './datasetListItem'

const fetcher = url => fetch(url).then(res => res.json());

export default function DatasetList() {
    
    const {data, error} = useSWR('http://127.0.0.1:8000/uploads/', fetcher)    
    
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading uploads</div>
    
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                {data.map(function(d, idx){
                    return (
                        <DatasetListItem file={d} key={d.upload_id} /> 
                    )
                })}
            </table>
        </div>
    )
}