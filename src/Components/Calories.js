import React, { useState } from "react";
import CalorieCard from "./CalorieCard";

const initList = [
  {
    name: "tomato",
    calorie: 20,
  },
  {
    name: "rice",
    calorie: 30,
  },
  {
    name: "Candy",
    calorie: 100,
  },
];

export default function Calories() {
  const [list, setList] = useState(initList);
  const [edit, setEdit] = useState(false);

  const removeUnhealthy = (e) => {
    const filteredList = list.filter((item) => item.calorie <= 50);
    setList(filteredList);
  };
  const defaultList = (e) => {
    setList(initList);
  };
  const editableText = (e) => {
    setEdit(true);
  };

  const defaultText = (e, i) => {
    if (e.key === "Enter") {
      setEdit(!edit);
      const copyList = [...list];
      copyList[i].name = e.target.value;
    }
  };
  const removeItem = (e) => {
    console.dir(e.target.name);
    const filteredList = list.filter((item) => e.target.name !== item.name);
    setList(filteredList);
  };

  return (
    <div>
      <h2>Grocery list </h2>
      {list.map((v, i) => {
        return (
          <CalorieCard
            key={`${i}${v.name}${v.calorie}`}
            item={v}
            onClick={removeItem}
            editt={edit}
            onDoubleClick={editableText}
            onKeyPress={defaultText}
            index={i}
          ></CalorieCard>
        );
      })}
      <button onClick={removeUnhealthy}>RemoveUnhealthy</button>
      <button onClick={defaultList}>defaultList</button>
    </div>
  );
}
