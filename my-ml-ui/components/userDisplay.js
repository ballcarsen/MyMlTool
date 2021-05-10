import styles from '../styles/UserDisplay.module.css'

export default function UserDisplay({user}) {

    return (
        <div className={styles.user}>
            <p>{user.user_id}</p>
            <p>{user.first_name}</p>
        </div>
    )

}