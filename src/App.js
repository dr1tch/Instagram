// Packages imports 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Suspense, lazy } from 'react'

// Constants import
import * as ROUTES from './constants/routes';

// Context imports
import UserContext from './context/user';

// Services import

// Hooks import
import useAuthListener from './hooks/user-auth-listener';

// Pages lazy loading imports
import Loading from './components/loading';
const Login = lazy(() => import('./pages/auth/login'));
const Signup = lazy(() => import('./pages/auth/signup'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const NotFound = lazy(() => import('./pages/not-found'));
const Profile = lazy(() => import('./pages/profile'));


// Hooks import
function App() {
  const {user, setUser} = useAuthListener();
  return (
    <UserContext.Provider value={{user, setUser}} >
      <Router>
        <Suspense fallback={<Loading className=' text-gray-400 animate-pulse' />} >
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.SIGNUP} component={Signup} />
            <Route path={ROUTES.PROFILE} component={Profile} />
            <Route path={ROUTES.DASHBOARD} exact >
              <Dashboard user={user} />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
