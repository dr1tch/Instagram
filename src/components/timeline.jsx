import { useContext } from 'react'
import Skeleton from 'react-loading-skeleton';
import CurrentUserContext from '../context/current-user';
import usePosts from '../hooks/usePosts';
import Post from './post'
export default function Timeline() {
    const { user } = useContext(CurrentUserContext);
    const { posts } = usePosts(user);
    return (
        <div className='container col-span-2'>
            {
                !posts ? (
                    <Skeleton count={5} width={640} height={500} className='mb-5' />
                ) : (
                    posts.map((post) => <Post key={post.docId} post={post} />)
                )
            }
        </div>
    )
};
