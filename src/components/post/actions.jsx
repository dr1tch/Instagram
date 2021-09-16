// Actions props will be the number of likes, if the user like the post : {likes, liked}
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import FirebaseContext from '../../context/firbase';
import UserContext from '../../context/user';
export default function Actions({likes: totalLikes, liked, docId, handleFocus}) {
    const {user: {uid: userId}} = useContext(UserContext);
    const [isLiked, setIsLiked] = useState(liked);
    const [likes, setLikes] = useState(totalLikes);
    const {firebase, FieldValue} = useContext(FirebaseContext);

    const toggleLike = async () => {
        setIsLiked((isLiked) => !isLiked);
        await firebase.firestore()
        .collection('posts')
        .doc(docId)
        .update({
            likes: isLiked ? FieldValue.arrayRemove(userId) : FieldValue.arrayUnion(userId)
        });
        setLikes((likes) => (isLiked ? likes - 1 : likes + 1))
    }

    return (
        <div className="px-4 pt-4 pb-1">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-4">
                    <svg
                        onClick={toggleLike}
                        onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            toggleLike();
                        }
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        tabIndex={0}
                        className={`w-8 select-none cursor-pointer focus:outline-none ${
                        isLiked ? 'fill-red text-red-primary' : 'text-black-light'
                        }`}
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                    </svg>
                    <svg 
                         onClick={handleFocus}
                         onKeyDown={(event) => {
                           if (event.key === 'Enter') {
                             handleFocus();
                           }
                         }}
                        aria-label="Comment" 
                        fill="#262626" 
                        height="24" 
                        role="img" 
                        viewBox="0 0 48 48" 
                        width="24" 
                        className="cursor-pointer"
                    >
                        <path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path>
                    </svg>
                </div>
                <div>
                <svg aria-label="Save" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24" className="cursor-pointer">
                    <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                </svg>
                </div>
            </div>
            <p className="text-sm font-bold text-black">{likes} likes</p>
        </div>
    )
};

Actions.propTypes = {
    likes: PropTypes.number.isRequired,
    liked: PropTypes.bool.isRequired
}
