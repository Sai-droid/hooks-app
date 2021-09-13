import React,{useState,useEffect} from 'react'

const initXY ={
    x:null,
    y:null
}

function ClockHook() {

    const[time,SetTime] = useState(Date);
    const[xy,setXY] = useState(initXY);

    useEffect(()=>{
        let handle = setInterval(()=>{
            SetTime(Date);
        },3000)

        return () =>{
            clearInterval(handle)
        }
    })


    const mousemoveHandle = (e) =>{
        setXY({
            x:e.clientX,
            y:e.clientY
        })
    }
    useEffect(()=>{
        window.addEventListener("mousemove",mousemoveHandle)
    
    return () =>{
        window.removeEventListener("mousemove",mousemoveHandle)
    }
    
    })


    return (
        <div>
            <header className ="App-header">
                <h1>use Effect examples</h1>
                <h3>Date and Time :{time}</h3>
                <h3>{`x:${xy.x},y:${xy.y}`}</h3>
            </header>
        </div>
    )
}

export default ClockHook
