import { useState } from "react";
import Children from "./children";

const Parent = () => {
    const name = 'zhangsan'  // string
    const age = 18 // number
    const graduate = false // boolean
    const address = {
        province: 'shanxi',
        city: 'taiyuan',
        county: 'xiaodian'
    } // object
    const [childId, setChildId] = useState('')
    const getId = (id) => {
        setChildId(id)
    }
    const childJSX = (
        <span>这是传递给子组件的 JSX 代码</span>
    ); // jsx
    return (
        <div className="parent">
            this is parent
            {childId}
            <Children 
            name={name} 
            age={age} 
            graduate={graduate}
            address={address}
            child={childJSX}
            getId={getId}
            />
        </div>
    )
}
export default Parent;
