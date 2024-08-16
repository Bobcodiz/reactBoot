import {useState} from "react";

export const ColourChangeWithHooks = () => {
    const [color,setColor] = useState("blue");

    const changeColor = (e) => {
        e.preventDefault();
        setColor(e.target.value);
       /* const buttonColor = document.getElementById("my-color").value;
        buttonColor.style.backgroundColor = color;*/
        console.log(color);

    }


    return(
        <div>
            <select value={color} onChange={changeColor}>
                <option value={'yellow'}>yellow</option>
                <option value={'green'}>green</option>
            </select>
            <div>
                <button  id={'my-color'} style={{backgroundColor:color}}>change</button>
            </div>
        </div>

)
}