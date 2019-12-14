import React from 'react';
// import logo from './logo.svg';
import '@blueprintjs/core/lib/css/';
import "@blueprintjs/core/lib/css/blueprint.css";
// import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';
// import '@blueprintjs/icons/lib/css/blueprint-icons.css';
// '/babel/core/lib/css/blueprint.css';
import Hello from './components/hello';
const App: React.FC = () => {
  return (
    <div className="App">
      <Hello/>
    </div>
  );
}

export default App;
