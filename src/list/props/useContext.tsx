import { createContext, useContext } from 'react' 

const context = createContext('default value')

const A = () => {
    return (
        <div>
            A
            <context.Provider value={'from a'}>
                <B />
            </context.Provider>
        </div>
    )
}
const B = () => {
    const value = useContext(context)
    return (
        <div>
            B{value}
            <C />
        </div>
    )
}
const C = () => {
    const value = useContext(context)
    return (
        <div>
            C{value}
        </div>
    )
}

export default  A