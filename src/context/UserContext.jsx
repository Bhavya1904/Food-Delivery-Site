import React, { Children, createContext, useState } from 'react'
import { food_items } from '../food.js' 

export const dataContext = createContext()


const UserContext = ({ children }) => {
    let [input,setInput] = useState("") // empty 
    const [cat, setCat] = useState(food_items)
    let [showCart, setShowCart] = useState(false)

    let data = {
        input,
        setInput,
        cat,
        setCat,
        showCart,
        setShowCart
    }
    return (
        <div>
            <dataContext.Provider value = {data}>
                {children}
            </dataContext.Provider>
        </div>
    )
}

export default UserContext