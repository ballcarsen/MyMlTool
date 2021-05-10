import useSWR from 'swr'
import UploadDisplay from './uploadDisplay'

const fetcher = url => fetch(url).then(res => res.json());

export default function UploadList() {
    
    const {data, error} = useSWR('http://127.0.0.1:8000/uploads/', fetcher)    
    
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading uploads</div>
    
    return (
        <div>
            {data.map(function(d, idx){
                return (
                    <UploadDisplay file={d} key={d.upload_id} /> 
                )
            })}
        </div>
    )
}