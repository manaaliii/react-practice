import React, {useState} from 'react';

const State_ = (props) => {
    const [cnt, setCnt] = useState(0);
    const handleClick = e =>{
        setCnt((prevCnt)=>{
                return  prevCnt +=1
        })
        setCnt((prevCnt)=>{
           return  prevCnt +=1
        })

    }
    return (
        <>
        Count:{cnt} <button onClick={handleClick}>Click</button>
        </>
    );
}

export default State_;
