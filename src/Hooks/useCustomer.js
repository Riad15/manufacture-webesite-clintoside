import { useEffect, useState } from "react"

const useCustomer = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, [])
    return [review];
}
export default useCustomer;