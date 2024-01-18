'use client'
const Buttons = (props) => {
    return (
        <div>
            <button type="button" onClick={() => alert(`Price: ${props.price}$`)}>Check Price</button>
        </div>
    )
}

export default Buttons