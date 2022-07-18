import { createContext, useEffect, useState } from "react";
import getState from "./flux";

export const Context = createContext(null);

const injectContext = PassedComponent => {

    const StoreWrapper = () => {
        const [state, setState] = useState(getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: (objUpdate) => setState({
                store: Object.assign(state.store, objUpdate), // { name: 'Anna' } = { name: 'Ana'} + {name: 'Anna'}
                actions: { ...state.actions }
            })
        }))

        useEffect(() => {
            state.actions.getUsers(state.store.urlApiUsers);// ejecutando una action al momento de cargar el sitio web
            state.actions.getPokemons(state.store.urlApiPokemons);
        }, [])


        return (
            <Context.Provider value={state}>
                <PassedComponent />
            </Context.Provider>
        )
    }

    return StoreWrapper;

}

export default injectContext;
