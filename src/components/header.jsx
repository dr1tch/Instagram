import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import * as ROUTES from '../constants/routes';
import UserContext from '../context/user';
import useUser from '../hooks/use-user';
import FirebaseContext from '../context/firbase';
export default function Header() {
    const {user: currentUser} = useContext(UserContext);
    const {user} = useUser(currentUser?.uid);
    const { firebase } = useContext(FirebaseContext);
    const history = useHistory();
    return (
       <header className="h-16 bg-white border-b border-gray-primary mb-8 fixed top-0 right-0 left-0 z-50">
           <div className="container mx-auto max-w-screen-lg h-full">
               <div className="flex items-center justify-between h-full">
                   <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
                        <h1 className='flex justify-center w-full'>
                            <Link to={ROUTES.DASHBOARD} aria-label="Intagram logo">
                                <img src="/img/logo.png" alt="Instagram Logo" className='mt-2 w-6/12' />
                            </Link>
                        </h1>
                   </div>
                   <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
                       {
                           currentUser ? (

                           <>
                       <Link to={ROUTES.DASHBOARD} >
                            <svg aria-label="Home" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22" className="w-8 mr-4 text-black-light cursor-pointer">
                                <path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path>
                            </svg>
                       </Link>
                       <Link to={ROUTES.INBOX} >
                            <svg aria-label="Messenger" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22" className="w-8 mr-4 text-black-light cursor-pointer">
                                <path d="M36.2 16.7L29 22.2c-.5.4-1.2.4-1.7 0l-5.4-4c-1.6-1.2-3.9-.8-5 .9l-6.8 10.7c-.7 1 .6 2.2 1.6 1.5l7.3-5.5c.5-.4 1.2-.4 1.7 0l5.4 4c1.6 1.2 3.9.8 5-.9l6.8-10.7c.6-1.1-.7-2.2-1.7-1.5zM24 1C11 1 1 10.5 1 23.3 1 30 3.7 35.8 8.2 39.8c.4.3.6.8.6 1.3l.2 4.1c0 1 .9 1.8 1.8 1.8.2 0 .5 0 .7-.2l4.6-2c.2-.1.5-.2.7-.2.2 0 .3 0 .5.1 2.1.6 4.3.9 6.7.9 13 0 23-9.5 23-22.3S37 1 24 1zm0 41.6c-2 0-4-.3-5.9-.8-.4-.1-.8-.2-1.3-.2-.7 0-1.3.1-2 .4l-3 1.3V41c0-1.3-.6-2.5-1.6-3.4C6.2 34 4 28.9 4 23.3 4 12.3 12.6 4 24 4s20 8.3 20 19.3-8.6 19.3-20 19.3z"></path>
                            </svg>
                       </Link>
                       <Link to={ROUTES.EXPLORE} >
                            <svg aria-label="Find People" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22" className="w-8 mr-4 text-black-light cursor-pointer">
                                <path clip-rule="evenodd" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z" fill-rule="evenodd"></path>
                            </svg>
                       </Link>
                       <button 
                            type="button"
                            title='Log Out'
                            onClick={() => {
                                firebase.auth().signOut();
                                history.push(ROUTES.LOGIN);
                            }}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                  firebase.auth().signOut();
                                  history.push(ROUTES.LOGIN);
                                }
                              }}
                       >
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 mr-4 text-black-light cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                       </button>
                       {/*<Link to={ROUTES.DASHBOARD} >
                            <svg aria-label="Home" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22">
                                <path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path>
                            </svg>
                       </Link> */}
                        {user && (
                            <div className="flex items-center cursor-pointer">
                                <Link to={`/${user?.username}`}>
                                    <img
                                        title={`${user?.username} profile`}
                                        className="rounded-full h-8 w-8 flex"
                                        src={`/img/avatars/${user?.username}.jpg`}
                                        alt={`${user?.username} profile`}
                                        // onError={(e) => {
                                        //     e.target.src = DEFAULT_IMAGE_PATH;
                                        // }}
                                    />
                                </Link>
                            </div>
                        )}
                        </>
                        ): (
                            <>
                            <Link to={ROUTES.LOGIN}>
                              <button
                                type="button"
                                className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8"
                              >
                                Log In
                              </button>
                            </Link>
                            <Link to={ROUTES.SIGNUP}>
                              <button
                                type="button"
                                className="font-bold text-sm rounded text-blue-medium w-20 h-8"
                              >
                                Sign Up
                              </button>
                            </Link>
                          </>
                        )
                       }
                   </div>
               </div>
           </div>
       </header>
    )
};
