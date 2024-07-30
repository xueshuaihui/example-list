const Children = (props: any) => {
    console.log(props);
    const { name } = props
return (
    <div className="children">this is children {name}</div>
)
}
export default Children
