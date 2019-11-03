import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Coffee from './Coffee'

export default () => {
  return (
    <Router>
      <div className="coffee-cup">
        <Route path="/" component={ Coffee } />
      </div>
    </Router>
  );
}