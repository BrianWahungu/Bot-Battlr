// components/BotSpecs.js
import React from 'react';

function BotSpecs({ bot, goBack, enlistBot }) {
  // Function to handle enlisting the bot from BotSpecs
  const handleEnlist = () => {
    // Implement your enlistment logic here
    // You may use the `enlistBot` function passed as a prop from the parent component
  };

  return (
    <div>
      <h2>Bot Details</h2>
      <div className="bot-specs">
        {/* Render detailed bot information */}
        <img src={bot.avatar_url} alt={bot.name} />
        <h3>{bot.name}</h3>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <p>Bot Class: {bot.bot_class}</p>
        <p>Catchphrase: {bot.catchphrase}</p>
        {/* Add a button to go back to BotCollection */}
        <button onClick={goBack}>Go Back</button>
        {/* Add a button to enlist the bot */}
        <button onClick={handleEnlist}>Enlist</button>
      </div>
    </div>
  );
}

export default BotSpecs;
