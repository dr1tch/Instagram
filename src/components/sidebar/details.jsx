import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

export default function Details({ fullname, username, avatar }) {
    console.log('fullname, username, avatar', {fullname, username, avatar})
    return !fullname || !username || !avatar ? (
        <Skeleton count={1} height={61}/>
    ) : (
        
            <div className='flex items-center gap-4 mb-5' >
                <Link to={`/${username}`} >
                    <img src={avatar} alt={`${fullname} profile`} className='rounded-full w-14 h-14' />
                </Link>
                <div>
                    <Link to={`/${username}`} >
                        <h1 className="font-bold text-sm">{username}</h1>
                    </Link>
                    <p className=' text-sm text-gray-400'>{fullname}</p>
                </div>
            </div>
    )
}

Details.propTypes = {
    fullname: PropTypes.string,
    username: PropTypes.string, 
    avatar: PropTypes.string
};