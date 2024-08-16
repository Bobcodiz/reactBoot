import {useState} from "react";

export const DynamicShopListings = () => {
    const [items, setItems] = useState([{
        name:"",
        price : ""}])

    const handleInput = (index) => {
        const inputs = items.map((item,i) =>(
            i ===index?[...items, {name: '',price: ''}]:items
        ))
        setItems(inputs)
        console.log(inputs)
    }
    const handleRemove = (index) => {
        setItems(items.filter((item,i)=>i !== index))
    }
    const handleAddItem = () => {
        setItems([...items, {name:"",price:""}])
    }

    return(
        <div>
            <h2>Welcome to the dynamic shop</h2>
            <hr/>
            {
                items.map((item,index)=>(
                    <div key={index}>
                        <label>{index + 1} . name </label>
                        <input type={'text'} value={items.name} onChange={(e)=>handleInput(...item,e.target.value)}/>
                        <label> price</label>
                        <input type={'text'} value={items.price} onChange={(e)=>handleInput(...item,e.target.value)}/>

                        <button onClick={() => handleRemove(index)}>Remove</button>
                    </div>
                ))
            }
            <div>
                <button onClick={handleAddItem}>Add</button>
            </div>
        </div>
    )
}