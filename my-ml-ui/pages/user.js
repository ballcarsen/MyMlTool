import useSWR from 'swr'

const fetcher = url => fetch(url).then(res => res.json());


function User() {
    const {data, error} = useSWR('http://127.0.0.1:8000/users/1', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    console.log(data)
    return <div>{data.first_name}</div>

}

export default User


// function User({data}) {
//     console.log(data)
//     return <div>{data => (<div><p>{user.first_name}</p></div>)}</div>
// }
//     export async function getServerSideProps() {
//         const res = await fetch('http://127.0.0.1:8000/users')
//         const data = await res.json()
//         return { props: {data} }
//     }

// export default User