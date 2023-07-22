// components/BotCollection.js
import React, { useState, useEffect } from 'react';

function BotCollection() {
  const [bots, setBots] = useState([]);

  // Fetch bot data from the server (use your actual endpoint URL)
  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Function to handle bot enlistment
  const enlistBot = (botId) => {
    // Implement your enlistment logic here
    // You may update the state in YourBotArmy component here
  };

  return (
    <div>
      <h2>Available Bots</h2>
      <div className="bot-collection">
        {bots.map((bot) => (
          <div key={bot.id} className="bot-card">
            {/* Render basic bot information */}
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            {/* Add a button to enlist the bot */}
            <button onClick={() => enlistBot(bot.id)}>Enlist</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
