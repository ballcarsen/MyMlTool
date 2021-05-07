import useSWR from 'swr'

export default function AllUsers() {
  const { data, error } = useSWR('127.0.0.1:8000/users', fetch)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>{data.content}</div>
}
