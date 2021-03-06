import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        console.log("new user :", user);
        const email = user?.user?.email;
        const name = user?.user?.displayName;
        console.log("user or g user name:", name);
        const currentUser = {
            email: email,
            name: name
        }
        if (email) {
            fetch(`https://protected-waters-84927.herokuapp.com/users/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })

        }

    }, [user])
    return [token];
}
export default useToken;