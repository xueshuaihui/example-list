import Children from "./children";

const Parent = () => {
    const name = 'this is params'  // string
    return (
        <div className="parent">
            this is parent
        <Children name={name} />
        </div>
    )
} 
export default Parent;
