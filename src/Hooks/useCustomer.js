import { useEffect, useState } from "react"

const useCustomer = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://protected-waters-84927.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, [])
    return [review];
}
export default useCustomer;