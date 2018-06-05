import * as React from 'react';
import 'styles/main.scss';

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">This our website</h1>
        </header>
        <p className="app-intro">
          Welcome to hack beanpot 2019
        </p>
      </div>
    );
  }
}

export default App;
