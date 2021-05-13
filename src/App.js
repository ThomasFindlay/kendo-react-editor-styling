import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import styles from './App.module.css';
import BasicEditor from './views/editor/BasicEditor';
function App() {
  return (
    <Router>
      <div className={styles.app}>
        <div>
          <nav>
            <Link to="/">Basic</Link>
          </nav>
        </div>

        <Switch>
          <Route href="/" component={BasicEditor} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
