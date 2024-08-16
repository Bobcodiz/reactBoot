import {useState} from "react";


export const DynamicFields = ()=>{
    const [field, setField] = useState([{value:''}]);

    const handleChange = (index, value) =>{
        const updatedItem = field.map((field,i)=>{
            i === index?{...field, value}: field
        });
        setField(updatedItem)
    }

    const handleAddField = () => {
        setField([...field,{value:''}])
    }
    const handleRemoveField = (index) => {
        setField(field.filter((_,i)=>i !== index))
    }


    return (
        <div>
            Dynamic Fields
            <form>
                {
                    field.map((item, index) => (
                         
                        <div key={index}>
                            <label >{index + 1} : item</label>
                            <input type="text" onChange={(e) => handleChange(
                                ...item, e.target.value
                            )}/>
                            <button onClick={() => handleRemoveField(index)}>Remove</button>
                        </div>
                    ))

                }
            </form>
            <button onClick={handleAddField}>Add</button>

        </div>
    )
}