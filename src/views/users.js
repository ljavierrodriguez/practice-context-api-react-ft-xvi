import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Users = () => {
   /*  const [urlUsers] = useState("https://jsonplaceholder.typicode.com/users");
    const [urlPokemon] = useState("https://pokeapi.co/api/v2/pokemon"); */
    /* [
        { id: 1, name: 'Service 1'},
        { id: 2, name: 'Service 2'},
        { id: 3, name: 'Service 3'},
        { id: 4, name: 'Service 4'},
    ] */
    /* const [users, setUsers] = useState(null)

    useEffect(() => {
        getUsers(urlUsers);
    }, [])

    const getUsers = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            })
    }
 */

    const { store } = useContext(Context)

    return (
        <>
        <h1>Users</h1>
        <ul>
        {
            !!store.users && 
            store.users.length > 0 &&
            store.users.map((elem, index) => {
                //let text = "https://swapi.dev/api/people/1/";
                //let id = text.match(/\/\d+/)[0].replace('/', '');
                //console.log(id);
                return <li key={index}>{elem.name} <Link to={`/users/${elem.id}/detail`}>ver</Link></li>
            })
        }
        </ul>
        </>
    )
}

export default Users;