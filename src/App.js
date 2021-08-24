// Packages imports 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Suspense, lazy } from 'react'

// Constants import
import * as ROUTES from './constants/routes';

// Context imports

// Services import

// Pages lazy loading imports
import Loading from './components/loading';
const Login = lazy(() => import('./pages/auth/login'));
const Signup = lazy(() => import('./pages/auth/signup'));
const Dashboard = lazy(() => import('./pages/dashboard'));



// Hooks import
function App() {
  return (
    <Router>
      <Suspense fallback={<Loading className=' text-gray-400 animate-pulse' />} >
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGNUP} component={Signup} />
          <Route path={ROUTES.DASHBOARD} component={Dashboard} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
