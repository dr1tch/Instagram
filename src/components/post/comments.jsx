// Comments props will be the list of comments {comments, docId, createdAt}
import PropTypes from 'prop-types';
import { formatDistance } from "date-fns";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddComments from './add-comment';
export default function Comments({comments: allComments, docId, createdAt, commentRef}) {
    const [comments, setComments] = useState(allComments);
    const [commentsSlice, setcommentsSlice] = useState(1);

    const showMoreComments = () => {setcommentsSlice(commentsSlice + 3)};
    return (
        <>
        {/* Display the comments, if comments more than 3 then diplay just 3 comments. */}
        <div className='px-4 flex flex-col items-start mb-3'>
       
            {
                comments.slice(0, commentsSlice).map((comment) => (
                    <p key={`${comment.body}-${comment.username}`} className="mb-1">
                      <Link to={`/${comment.username}`}>
                        <span className="mr-1 font-bold text-black text-sm">{comment.username}</span>
                      </Link>
                      <span className=' font-normal text-sm text-black'>{comment.body}</span>
                    </p>
                  ))
            }

            {
                comments.length >= 3 && commentsSlice < comments.length && (
                    <button
                        className="text-sm text-gray-base mb-1 cursor-pointer focus:outline-none"
                        type="button"
                        onClick={showMoreComments}
                        onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            showMoreComments();
                        }
                        }}
                    >
                        View more comments
                    </button>
                )
            }
            <span className="text-xs text-gray-400 font-regular mt-2">{formatDistance(createdAt, new Date()).toUpperCase() + ' AGO'}</span>
        </div> 
        {/* Add comment part (Form) */}
        <AddComments commentRef={commentRef} docId={docId} comments={comments} setComments={setComments} />
        </>
    );
};

Comments.propTypes = {
    comments: PropTypes.array.isRequired, 
    docId: PropTypes.string.isRequired, 
    commentRef: PropTypes.object.isRequired,
    createdAt: PropTypes.number.isRequired
}
