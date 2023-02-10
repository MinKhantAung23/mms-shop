import {createContext, useContext, useEffect, useReducer, useState} from 'react'
import { getData } from '../api/api';

const StateContext = createContext();

export const StateContextProvider = ({children}) => {

    const [productList, setProductList] = useState([]) 

    const [search, setSearch] = useState("")

    const initialState = {
        products : [],
        cart : []
    }

    const reducer = (state, action) => {
        switch(action.type) {
            case "GET_PRODUCTS":
                return {...state, products: action.payload};
            case "ADD_TO_CART":
                const item = action.payload;
                const isExisted = state.cart.find(c => c.id === item.id);
                if(isExisted) {
                    return{
                        ...state, cart: state.cart.map(c => c.id === item.id ? {...item} : {...c})
                    }
                }else {
                    return{
                        ...state, cart: [...state.cart, {...item}]
                    }
                }
            case "REMOVE_FROM_CART":
                return {...state, cart: state.cart.filter(item => item.id !== action.payload.id)}
            case 'CART_EMPTY':
                return {...state, cart: (state.cart=[])}
            default:
                return state;   
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    
    const getProducts = async() => {
        const data = await getData('/products');
        setProductList(data)
    }

    useEffect(() => {getProducts()}, [])

    useEffect(() => {
        dispatch({type: "GET_PRODUCTS", payload: productList})
        const filterProducts = productList.filter((pd => pd.title.toLowerCase().includes(search.toLowerCase())))
        dispatch({type: "GET_PRODUCTS", payload: filterProducts})
    }, [productList, search])

    const data = {state,search, setSearch, dispatch}
    return(
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)