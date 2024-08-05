// import { useState } from 'react'

// const Child = () => {
//     return (
//         <div>
//             <p>child</p>
//         </div>
//     )
// }

// const Toggle =  () => {
//     const [show, setshow] = useState(false);
//     return (
//         <div>
//             <button onClick={() => setshow(!show)}>toggle</button>
//             {show && <Child />}
//         </div>
//     )
// }
// export default Toggle;


import { useState } from 'react'

const Child = () => {
    return (
        <div>
            <p>child</p>
        </div>
    )
}

const useToggle = () => {
    const [show, setshow] = useState(false);
    const toggle = () => {
        setshow(!show);
    }
    return {
        show,
        toggle
    }
}

const Toggle =  () => {
    const { show, toggle } = useToggle()
    return (
        <div>
            <button onClick={toggle}>toggle</button>
            {show && <Child />}
        </div>
    )
}
export default Toggle;
