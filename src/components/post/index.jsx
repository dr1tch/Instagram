import { useRef } from "react";
import Actions from "./actions";
import Caption from "./caption";
import Comments from "./comments";
// import Footer from "./footer";
import Header from "./header";
import Image from "./image";
import PropTypes from 'prop-types';

// Post props will be the content of the post 
// Header props will be the username and the avatar {username, avatar}
// Image props will be the image source and the caption {image, caption}
// Actions props will be the number of likes, if the user like the post : {likes, liked}
// Caption props will be the username and the caption {username, caption}
// Comments props will be the list of comments {comments}
// Footer props will be the reference create in the Post component {commentRef}

export default function Post({ post }) {
    const commentRef = useRef(null);
    const handleFocus = () => commentRef.current.focus();
    
    return (
        <div className='bg-white border border-gray-primary rounded col-span-4 mb-6'>
            <Header username={post.username} avatar={post.avatar} />
            <Image image={post.image} caption={post.caption} />
            <Actions docId={post.docId} likes={post.likes.length} liked={post.liked} handleFocus={handleFocus} />
            <Caption username={post.username} caption={post.caption} />
            <Comments docId={post.docId} comments={post.comments} createdAt={post.created_at} commentRef={commentRef}/>
            {/* <Footer commentRef={commentRef} docId={post.docId} comments={comments} setComments={setComments}/> */}
        </div>
    )
};

Post.protoType = {
    post: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
        comments: PropTypes.array.isRequired,
        created_at: PropTypes.number.isRequired,
        docId: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired,
        likes: PropTypes.array.isRequired,
        username: PropTypes.string.isRequired,
        postId: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired
    })
}