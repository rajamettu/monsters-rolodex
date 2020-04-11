import React from "react";

import "./card-list.styles.css";

import Card from "../card/card.component";

const CardList = props => {

  return (
    <div>
      <div className="card-list">
        {props.monsters.map(monster => {
          return <Card key={monster.id} monster={monster} />;
        })}
      </div>
    </div>
  );
};

export default CardList;
