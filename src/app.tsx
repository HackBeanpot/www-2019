import * as React from 'react';
import '@styles/main.scss';
import Stories from '@stories/stories';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  public render() {
    return (
      <Switch>
        {/* For main page routing, follow the pattern for the stories path. */}
        <Route exact path={'/stories'} component={Stories} />
      </Switch>
    );
  }
}

export default App;
