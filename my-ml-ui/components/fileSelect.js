export default function FileSelect() {
    
    let selectedFile = null
    const updateSelectedFile = event => {
        selectedFile = event.target.files[0]
          
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
        <div>
            <form>
                <input type='file' name='file' onChange={updateSelectedFile}/>
                <button onClick={postUpload}>Upload</button>
            </form>
        </div>
    )
}