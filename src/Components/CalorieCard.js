import React from "react";
import "./Calories.css";
import Calories from "./Calories";

function CalorieCard(props) {
  return (
    <div className="item-style">
      {props.editt ? (
        <input type="text" onKeyPress ={(e)=>props.onKeyPress(e,props.index)}  defaultValue={props.item.name} />
      ) : (
        <h3  onDoubleClick={props.onDoubleClick}>{props.item.name}</h3>
      )}

      <h3>{props.item.calorie}</h3>
      <button
        name={props.item.name}
        className="remove-button"
        onClick={props.onClick}
      >
        RemoveItem
      </button>
    </div>
  );
}

export default CalorieCard;
