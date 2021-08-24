import { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import FirebaseContext from '../../context/firbase';
export default function Login() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('')
    const isInvalid = password === '' || email === ''

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            history.push(ROUTES.DASHBOARD);
        } catch (error) {
            setEmail('');
            setPassword('');
            setErrors(error.message)
        }
    }

    useEffect(() => {
        document.title = 'Instagram - Sign In'
    }, [])

    return (
        <div className="mx-auto max-w-screen-md container flex justify-center items-center h-screen">
            <div className="hidden sm:flex  sm:w-3/5">
                <img src="/img/iphone-with-profile.jpg" alt="iphone-with-profile" />
            </div>
            <div className="flex flex-col sm:w-2/5 w-4/5">
                <div className="flex flex-col items-center bg-white p-6 border border-gray-primary mb-5 rounded">
                    <h1 className="w-full flex justify-center">
                        <img className="w-6/12 mt-2 mb-4" src="/img/logo.png" alt="Instagram logo" />
                    </h1>
                    { errors && <p className='text-red-primary text-xs text-center mb-4'>{errors}</p> }
                    <form onSubmit={handleLogin}>
                        <input 
                            type="email"  
                            aria-label='Enter Your Email Address'
                            placeholder='Email Address...'
                            className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
                            onChange={({target}) => setEmail(target.value)}
                            defaultValue={email}
                        />
                        <input 
                            type="password"  
                            aria-label='Enter Your Password Address'
                            placeholder='Password...'
                            className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-4'
                            onChange={({target}) => setPassword(target.value)}
                            defaultValue={password}
                        />
                        <button 
                            className={`w-full bg-blue-medium text-white text-sm h-8 font-bold rounded mb-4 ${isInvalid ? 'opacity-50' : ''}`}
                            type="submit"
                            disabled={isInvalid}
                        >
                            Log In
                        </button>
                    </form>
                </div>
            <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-5 rounded">
                <p className="text-sm">Don't have an account? {' '}
                    <Link
                        to={ROUTES.SIGNUP}
                        className='text-blue-medium font-bold'
                        >
                            Sign Up
                        </Link>
                </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
                <p className=''>Get the app.</p>
                <div className="flex items-center gap-3">
                    <img className="w-36" src="/img/app-store.png" alt="Download Instagram from App Store" />
                    <img className="w-36" src="/img/play-store.png" alt="Download Instagram from Play Store" />
                </div>
            </div>
            </div>
        </div>
    )
};
