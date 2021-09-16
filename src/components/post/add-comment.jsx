import { useContext, useState } from "react";
import FirebaseContext from "../../context/firbase";
import UserContext from "../../context/user";
import useUser from "../../hooks/use-user";
import PropTypes from 'prop-types';

// for the comment input u need a ref to the comment input box
export default function AddComment({ commentRef, comments, setComments, docId }) {
    const { user: { uid: userId } } = useContext(UserContext);
    const { firebase, FieldValue } = useContext(FirebaseContext);
    const [body, setBody] = useState('');
    const { 
        user
    } = useUser(userId);
    const isInvalid = body === '';
   
    // onSubmitComment: add the comment to the list of comments of the current post.
    const onSubmitComment = (event) => {
        event.preventDefault();
        setComments([...comments, {body, username: user.username, created_at: Date.now()}]);
        setBody('');
        
        
        return firebase
        .firestore()
        .collection('posts')
        .doc(docId)
        .update({
            comments: FieldValue.arrayUnion({ body, username: user.username, created_at: Date.now() })
        });
    };

    return (
        <div className="border-t border-gray-primary p-4">
            <div className="flex items-center justify-between w-full">
                <input
                    ref={commentRef}
                    type="text"
                    placeholder="Add Comment..."
                    className='text-sm w-full focus:outline-none focus:ring-0'
                    onChange={({ target }) => setBody(target.value)}
                />
                <button type='button'
                    className={`font-bold text-sm text-blue-medium ${isInvalid ? 'opacity-50' : ' '}`}
                    disabled={isInvalid}
                    onClick={onSubmitComment}
                    onKeyUp={() => {
                        onSubmitComment()
                    }}
                >Post</button>
            </div>
        </div>
    )
};

AddComment.propTypes = {
    commentRef: PropTypes.object, 
    comments: PropTypes.array, 
    setComments: PropTypes.func, 
    docId: PropTypes.string
}