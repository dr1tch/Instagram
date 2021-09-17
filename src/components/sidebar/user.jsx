import { Link } from 'react-router-dom';
export default function User({ user: {username, avatar, fullName}}) {
    return (
        <div className='flex items-center justify-between' >
            <div className='flex items-center gap-4 mb-5'>
                <Link to={`/${username}`} >
                    <img src={avatar} title={`Follow ${fullName}`} alt={`${fullName} profile`} className='rounded-full w-10 h-10' />
                </Link>
                <div>
                    <Link to={`/${username}`} >
                        <h1 className="font-bold text-sm">{username}</h1>
                    </Link>
                    <p className=' text-sm text-gray-400'>{fullName}</p>
                </div>
            </div>
            <button
                className="text-xs font-bold text-blue-medium"
                type="button"
            >
                Follow
            </button>
        </div>
    );
};
