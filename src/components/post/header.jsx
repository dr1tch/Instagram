import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Header props will be the username and the avatar {username, avatar}

export default function Header({username, avatar}) {
    return (
        <div className='flex item-center justify-between border-b border-gray-primary h-4 p-4 py-8'>
            <div className="flex items-center gap-4">
                <Link to={`/${username}`} >
                    <img src={avatar} alt={`${username} profile`} className='rounded-full w-8 h-8' />
                </Link>
                <div>
                    <Link to={`/${username}`} >
                        <h1 className="font-bold text-sm">{username}</h1>
                    </Link>
                </div>
            </div>
            <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
            </div>
        </div>
    )
};

Header.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
}
