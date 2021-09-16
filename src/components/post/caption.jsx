
// props: {username, caption} from the post by the followed user
export default function Caption({username, caption}) {
    return (
        <div className="px-4">
            <span className="mr-1 font-bold text-black text-sm">{username}</span>
            <span className=' font-normal text-sm text-black'>{caption}</span>
        </div>
    )
};
