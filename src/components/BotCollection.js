import React from "react";
import BotCard from "./BotCard";


function BotCollection({handleAdd, releaseFromArmy}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {bot.map((bot,key) => (
          <BotCard key={key} bot={bot} collection={true} handleAdd={handleAdd} releaseFromArmy={releaseFromArmy}/>
        ))}
      </div>
    </div>
  );
}

export default BotCollection();
