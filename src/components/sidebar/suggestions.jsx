import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes';
export default function Suggestions() {
    return (
        <div>
            <div className='flex items-center justify-between mb-3'>
                <h1 className="font-bold text-gray-400">Suggestions For You</h1>
                <Link to={ROUTES.SUGGESTIONS} >
                    <p className="text-xs font-bold text-gray-900">See All</p>
                </Link>
            </div>
            <Skeleton count={5} height={45} />
        </div>
    )
}
