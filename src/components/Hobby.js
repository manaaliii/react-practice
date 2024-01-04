    import React, {useState} from 'react'

    const Hobby = (props) => {
        const [visibility, setVisibility] = useState(false);
        const [hobby, setHobby] = useState(props.value);
        // console.log(visibility)
    return (
        <li>
            {
                visibility ? (
                    <>
                    <input type="text" value={hobby} onChange={(event)=> setHobby(event.target.value)} placeholder="Enter your hobby" />
                    <button type="submit" onClick={()=> {setVisibility(false); props.handleUpdate( props.index, hobby)}}>Save</button>
                    </>
                )
                : (
                    props.value
                )
            }

            {!visibility && <button type="submit" onClick={()=>setVisibility(true)}>Update</button>}
            <button type="submit" onClick={(event)=> props.handleDelete(event, props.index)}>Delete</button>
        </li>
    )
    }

    export default Hobby