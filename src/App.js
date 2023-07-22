// App.js
import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [bots, setBots] = useState([]);

  useEffect(() => {
    // Fetch bot data from the server
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const enlistBot = (botId) => {
    const enlistedBot = bots.find((bot) => bot.id === botId);

    if (!enlistedBots.some((bot) => bot.id === botId)) {
      setEnlistedBots((prevEnlistedBots) => [...prevEnlistedBots, enlistedBot]);
    }
  };

  return (
    <div className="App">
      <h1>Welcome to Bot Battlr</h1>
      {/* Pass bots data as a prop to BotCollection */}
      <BotCollection bots={bots} enlistBot={enlistBot} />
      <YourBotArmy enlistedBots={enlistedBots} />
    </div>
  );
}

export default App;
