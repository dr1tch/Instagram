import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Suspense, lazy } from 'react'

import Loading from './components/loading';

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />} >
        <div>
          <h1>djlkqsjdlkjqsklj</h1>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
