import React from "react";



const ListRender = props => {
    const render = l =>{ 
        return l.map((ele,ind)=>{
        return(
            <li key={ind}>{ele}</li>
        )
    })
} 
    return(
        <ul>
            {render(props.list)}
        </ul>
    )
}

export default ListRender;