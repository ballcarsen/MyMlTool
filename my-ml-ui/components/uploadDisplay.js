import styles from '../styles/UserDisplay.module.css'
import Link from 'next/link'

export default function UserDisplay({file}) {

    return (
        <div className={styles.user}>
            <Link href="/visualize">
					<a>{file.upload_id}</a>
			</Link>
            <p>{file.file_name}</p>
        </div>
    )

}