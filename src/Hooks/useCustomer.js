import { useEffect, useState } from "react"

const useCustomer = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('customer.json')
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, [])
    return [review];
}
export default useCustomer;