import React, { useState } from 'react';
import './App.css';
import { CreateUser } from './components/CreateUser';
import { GetAllUsers } from './components/GetAllUsers';

function App() {
  const [showUserList, setShowUserList] = useState(false);

  const gameBoard = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ];

  //console.log(gameBoard);

  // Denna första vet jag vilken row det är han placerar
  //const userPlacement = Number(prompt('Skriv in din location X'));

  // Den andra vet jag vilken column det är han placerar
  //const userPlacement2 = Number(prompt('Skriv in din location Y'));

  //console.log('userPlacement: ', userPlacement);
  //console.log('userPlacement2: ', userPlacement2);

  // Lowest number one can take is [0][0]
  // Highest number one can take is [5][46]

  // Rows
  for (let i = 0; i < gameBoard.length; i++) {
    // Columns
    //console.log('gameBoard[i]: ', gameBoard[i]);
    for (let j = 0; j < gameBoard[i].length; j++) {
      //console.log('gameBoard[i][j]: ', gameBoard[i][j]);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button
            style={{ backgroundColor: showUserList ? '#3c425c' : 'white' }}
            className="TabButton"
            onClick={() => setShowUserList(false)}
          >
            Skapa user
          </button>
          <button
            style={{ backgroundColor: showUserList ? 'white' : '#3c425c' }}
            className="TabButton"
            onClick={() => setShowUserList(true)}
          >
            Lista users
          </button>
          {showUserList ? <GetAllUsers /> : <CreateUser />}


        </div>
      </header>
    </div>
  );
}

export default App;
