import { useEffect, useState } from "react"

const useParts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('https://protected-waters-84927.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setParts(data);
            })
    }, [])

    return [parts];
}
export default useParts;

