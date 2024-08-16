import {useState} from "react";

export const ArrayHooking = () => {

    const [items, setItems] = useState([{value: 1}, {value: 2}, {value: 3}]);
    const addItem = () => {
        setItems([...items,
            {
                /*id: items.length*/
                value: Math.floor(Math.random()*10) + 1
            }])
    }
    return(
        <div>
            <button onClick={addItem}>Add item</button>
            <ul>
                {
                    items.map( (item,index)=>(
                        <li key = {index}>{index + 1} : {item.value}</li>
                    ))
            }
        </ul>
</div>
)
}