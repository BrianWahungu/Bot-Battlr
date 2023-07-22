// components/YourBotArmy.js
import React, { useState } from 'react';

function YourBotArmy() {
  const [enlistedBots, setEnlistedBots] = useState([]);

  // Function to handle bot release
  const releaseBot = (botId) => {
    // Implement your release logic here
    // You may update the state to remove the bot from enlistedBots
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="your-bot-army">
        {enlistedBots.map((bot) => (
          <div key={bot.id} className="bot-card">
            {/* Render enlisted bot information */}
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            {/* Add a button to release the bot */}
            <button onClick={() => releaseBot(bot.id)}>Release</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
