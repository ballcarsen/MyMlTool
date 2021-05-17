import styles from '../styles/Common.module.css'
import formStyles from '../styles/DatasetForm.module.css'

export default function DatasetForm() {

    let selectedFile = null

    const updateSelectedFile = event => {
        selectedFile = event.target.files[0]    
        document.getElementById('upload').disabled = false
    }

    const postUpload = async event => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('file', selectedFile)
        const res = await fetch('http://127.0.0.1:8000/upload', {
            body: formData,
            method: 'POST'
        })
        
    }

    return (

        <div className={formStyles.container}>
            <h2>Create a New Dataset!</h2>
            <form>
                <div className={formStyles.inputRow}>
                    <label className={formStyles.label} for='name'>Name</label>
                    <input className={formStyles.input} type='text' name='name'/>
                </div>
                <div className={formStyles.inputRow}>
                    <label className={formStyles.label} for='type'>Type</label>
                    <input className={formStyles.input} type='text' name='type'/>
                </div>
                <div className={formStyles.inputRow}>
                    <label className={formStyles.label} for='file'>CSV</label>
                    <input className={formStyles.input} type='file' name='file' onChange={updateSelectedFile}/>
                </div>
                <button id='upload' onClick={postUpload} disabled={true}>Upload</button>
            </form>
        </div>
    
    )
}