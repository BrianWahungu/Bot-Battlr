// components/SortBar.js
import React from 'react';

function SortBar({ handleSort }) {
  return (
    <div>
      <h2>Sort Bots</h2>
      <div className="sort-bar">
        {/* Add buttons to sort by health, damage, and armor */}
        <button onClick={() => handleSort('health')}>Sort by Health</button>
        <button onClick={() => handleSort('damage')}>Sort by Damage</button>
        <button onClick={() => handleSort('armor')}>Sort by Armor</button>
      </div>
    </div>
  );
}

export default SortBar;
