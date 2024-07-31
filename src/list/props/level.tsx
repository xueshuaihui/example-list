import { useState } from "react"


const A = () => {
    const [BID, setBID] = useState(null)
    const getId = id => {
        setBID(id)
    }
    return (
        <div>
            A
            <B getId={getId} />
            <C BID={BID}/>
        </div>
    )
}
const B = props => {
    const id = '2423'
    return (
        <div onClick={() => { props.getId(id) }}>
            B
        </div>
    )
}
const C = (props) => {

    return (
        <div>
            C{props.BID}
        </div>
    )
}

export default  A