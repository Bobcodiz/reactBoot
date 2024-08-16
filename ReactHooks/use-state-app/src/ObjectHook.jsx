import {useState} from "react";

export default function ObjectHook(){

    const [person, setPerson] = useState({
        firstName:"",
        lastName:"",
        surName:""
    });

    return(
        <form>
            <input type={'text'} value={person["firstName"]} onChange={e => setPerson(
                {  ...person, firstName : e.target.value}
            )}/>
            <input type={'text'} value={person.lastName} onChange={e =>
            setPerson({...person, lastName : e.target.value})}/>
            <input type={'text'} value={person.surname} onChange={e =>
            setPerson({...person,surname : e.target.value})}/>


            <p >{ person.firstName}</p>
            <p >{ person.lastName}</p>
            <p >{ person.surname}</p>

        </form>
    )
}