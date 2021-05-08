export default function UserDisplay({user}) {

    return (
        <div>
            <p>{user.user_id}</p>
            <p>{user.first_name}</p>
        </div>
    )

}