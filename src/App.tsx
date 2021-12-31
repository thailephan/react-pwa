import React from 'react';
import './App.css';
import OfflineApp from './OfflineApp';

function App() {
  return (
    <>
    {navigator.onLine 
      ? <div>This is online page</div>
      : <OfflineApp />
    }
    </>
  );
}

export default App;
