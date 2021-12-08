import * as React from 'react';
import Home from './components/Home/Home';
import ContextProvider from './Context/ContextProvider';

function App() {
  return (
    <div className="App">
      <h1 className="text-5xl text-center my-10 font-mono font-bold text-purple-600">Robot Market</h1>
      {/*Add your code here*/}
      <ContextProvider>
        <Home></Home>
      </ContextProvider>
    </div>
  );
}

export default App;
