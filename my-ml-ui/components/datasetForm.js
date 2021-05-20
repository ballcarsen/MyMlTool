import styles from '../styles/DatasetForm.module.css'

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

        <div className={styles.container}>
            <h2>Create a New Dataset!</h2>
            <form>
                <div className={styles.grid}>
                        <label className={styles.label} for='name'>Name</label>
                        <input className={styles.input} type='text' name='name'/>
                        <label className={styles.label} for='type'>Type</label>
                        <input className={styles.input} type='text' name='type'/>
                        <label className={styles.label} for='file'>CSV</label>
                        <input className={styles.input} type='file' name='file' onChange={updateSelectedFile}/>
                </div>
            </form>
            <div>
                <button className={styles.button} id='upload' onClick={postUpload} disabled={true}>Upload</button>
            </div>
        </div>
    )
}