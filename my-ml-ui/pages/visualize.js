import { useRouter } from "next/router"

export default function Visualize() {
    const router = useRouter()
    const {
        query: { uploadId },
      } = router
    return (
        <div>{uploadId}</div>
    )
}