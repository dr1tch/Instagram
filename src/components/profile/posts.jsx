import Skeleton from "react-loading-skeleton"
export default function Posts({ posts }) {
    return (
        <div className="h-16 border-t border-gray-primary mt-12 pt-4">
            <div className="grid grid-cols-3 gap-8 mt-4 mb-12">
                {
                    !posts 
                    ? new Array(12).fill(0).map((_, i) => <Skeleton key={i} width={288} height={288} />)
                    : posts.length > 0
                    ? posts.map((photo) => (
                        <div key={photo.docId} className="relative group mb-5 cursor-pointer">
                            <img src={photo.image} alt={photo.caption} className='object-cover w-72 h-72 '/>
                            <div className="absolute bottom-0 left-0 bg-black-light z-10 w-72 h-72 justify-evenly items-center bg-opacity-40 bg-black-faded group-hover:flex hidden">
                                <p className="flex items-center text-white font-bold">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-8 mr-4"
                                    >
                                    <path
                                        fillRule="evenodd"
                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                        clipRule="evenodd"
                                    />
                                    </svg>
                                    {photo.likes.length}
                                </p>

                                <p className="flex items-center text-white font-bold">
                                {/* <svg 
                                    aria-label="Comment" 
                                    fill="currentColor"
                                    className="w-8 mr-4 fill-white"
                                    height="24" 
                                    role="img" 
                                    viewBox="0 0 48 48" 
                                    width="24"
                                >
                        <path fillRule="evenodd" clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"></path>
                    </svg>  */}
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-8 mr-4"
                                    >
                                    <path
                                        fillRule="evenodd"
                                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                        clipRule="evenodd"
                                    />
                                    </svg>
                                    {photo.comments.length}
                                </p>
                                </div>
                            </div>
                            ))
                        : null}
                    </div>
                     
                
        </div>
    )
};
