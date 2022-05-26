import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useMyOrderProducts = () => {
    const [myOrderProducts, setMyOrderProducts] = useState([]);
    const [user] = useAuthState(auth);
    const url = 'http://localhost:5000/my-products';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(user.email);
                console.log("data from:", data);
                const myOrders = data.filter(order => order.email === user.email);
                setMyOrderProducts(myOrders);
            })
    }, [myOrderProducts])

    return [myOrderProducts, setMyOrderProducts];
}
export default useMyOrderProducts;