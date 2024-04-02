import React from 'react';
import SimpleCard from './Components/SimpleCard';

function App() {
  return (
    <div >
      <SimpleCard
        imageUrl="https://www.recipetineats.com/wp-content/uploads/2023/05/Garlic-cheese-pizza_9.jpg"
        title="Garlic Cheezy Pizza"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
      />
    </div>
  );
}

export default App;