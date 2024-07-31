const Children = (props: any) => {
    const { name, age, graduate, address: {province, city, county}, child } = props
    const id = '123456'
    return (
        <div className="children">
            <span onClick={() => props.getId(id)}>this is children</span>
            <ul>
                <li>name: {name}</li>
                <li>age: {age}</li>
                <li>graduate: {graduate?'yes':'no'}</li>
                <ol>
                    <li>province: {province}</li>
                    <li>city: { city}</li>
                    <li>county: { county}</li>
                </ol>
                <li>{child}</li>
            </ul>
        </div>
    )
}
export default Children
