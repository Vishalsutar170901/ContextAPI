import React, { createContext } from 'react';
import ChildA from './childA';

const data = createContext();

function App() {
  const name = "vishal sutar";

  return (
    <data.Provider value={name}>
      <ChildA />
    </data.Provider>
  );
}

export default App;