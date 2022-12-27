import React, { useState } from "react";
import "./ExpencesItem.css";
import Card from "../UI/Card";
import ExpencesDate from "./ExpencesDate";

function ExpencesItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updating!!!");
    console.log(title);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpencesDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <h6 className="expense-item__price ">${props.amount}</h6>
          <button onClick={clickHandler}>Click</button>
        </div>
      </Card>
    </li>
  );
}
export default ExpencesItem;
