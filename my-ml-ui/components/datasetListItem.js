import styles from '../styles/ListDisplay.module.css'
import Link from 'next/link'

export default function DatasetListItem({file}) {

    return (
        <tr>
            <th>            
                <Link href={{ pathname: "/visualize",
                    query: {uploadId: file.upload_id}
                }}>
					<a>{file.upload_id}</a>
			    </Link></th>
            <th>            
                <p>{file.file_name}</p>
            </th>
        </tr>
    )

}