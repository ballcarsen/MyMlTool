import useSWR from 'swr'
import styles from '../styles/Upload.module.css'
import Navigation from '../components/navigation'
import UserForm from '../components/userForm'
import UserDisplay from '../components/user-display'

const fetcher = url => fetch(url).then(res => res.json());


function User() {
    const {data, error} = useSWR('http://127.0.0.1:8000/users/', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    console.log(data)
    return (
        <div className={styles.container}>
            <Navigation></Navigation>
            <main className={styles.main}>
                
            {data.map(function(d, idx){
                return (
                    <UserDisplay user={d} key={d.user_id} /> 
                )
            })}

            </main>
            <UserForm></UserForm>
        </div>
    )
}

export default User
