const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            urlApiUsers: 'https://jsonplaceholder.typicode.com/users',
            urlApiPokemons: 'https://pokeapi.co/api/v2/pokemon',
            users: null,
            pokemons: null,
            user: null,
            email: '',
            password: ''
        },
        actions: {
            getUsers: (url) => {
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        //setUsers(data);
                        setStore({ users: data });
                    })
            },
            getUserById: (id) => {
                fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({ user: data});
                    })
            },
            getPokemons: (url) => {
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        //setUsers(data);
                        //setStore({ pokemons: data });
                        return data;
                    })
                    .then(async (data) => {
                        const { results } = data;
                        results.forEach(async (pokemon, index) => {
                            const resp = await fetch(pokemon.url);
                            const info = await resp.json();
                            data.results[index] = info;
                        })

                        setStore({ pokemons: data })
                    })
            }
        }
    }
}

export default getState;