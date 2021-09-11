import React from 'react'
import  './Calories.css'


function CalorieCard(props) {
    return (
        <div className="item-style">
            <h3>{props.item.name}</h3>
            <h3>{props.item.calorie}</h3>
        </div>
    )
}

export default CalorieCard
