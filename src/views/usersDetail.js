import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const UsersDetail = () => {

    //const [user, setUser] = useState(null);
    const { store, actions } = useContext(Context);

    const params = useParams();

    useEffect(() => {
        actions.getUserById(params.user_id);
    }, [])

    /* const getUserById = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setUser(data);
            })
    }
 */
    return (
        <>
            {
                !!store.user ?
                    (
                        <h1>User Detail ({store?.user?.name})</h1>
                    ) : (
                        <h1>Loading...</h1>
                    )
            }
        </>
    )
}

export default UsersDetail;