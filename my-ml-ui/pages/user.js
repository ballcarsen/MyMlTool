import useSWR from 'swr'
import styles from '../styles/Common.module.css'
import Navigation from '../components/navigation'
import UserForm from '../components/userForm'
import UserDisplay from '../components/userDisplay'

const fetcher = url => fetch(url).then(res => res.json());


function User() {
    const {data, error} = useSWR('http://127.0.0.1:8000/users/', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    console.log(data)
    return (
        <div className={styles.container}>
            <Navigation></Navigation>
            <div className={styles.columnside}>
                <UserForm></UserForm>
            </div>
            <div className={styles.columnmiddle}>
            
            <div className={styles.display}>  
                {data.map(function(d, idx){
                    return (
                        <UserDisplay user={d} key={d.user_id} /> 
                    )
                })}
            </div>

            </div>
            <div className={styles.columnside}></div>

        </div>
    )
}

export default User
