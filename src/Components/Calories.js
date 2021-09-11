import React ,{useState}from 'react'
import CalorieCard from './CalorieCard'




const initList =[
    {
        name:"tomato",calorie:20
    },
    {
        name:"rice",calorie:30
    },
    {
        name:"Candy",calorie:100
    }
]

export default function Calories() {
    const [list,setList] = useState(initList)
    const removeUnhealthy =(e)=>{
        const filteredList = list.filter((item)=>item.calorie<=50)
        setList(filteredList)
    }
    const defaultList =(e)=>{
        const filteredList = initList.filter((item)=>item)

        setList(filteredList)
    }

    return (
        <div >
            <h2>Grocery list </h2>
           {
               list.map((v,i)=>{
                   return(<CalorieCard key ={`${i}${v.name}${v.calorie}`} item ={v} ></CalorieCard>)
               })
           }
           <button onClick ={removeUnhealthy}>RemoveUnhealthy</button>
           <button onClick ={defaultList}>defaultList</button>
        </div>
    )
}

