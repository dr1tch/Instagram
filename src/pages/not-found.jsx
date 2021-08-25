import { Link } from "react-router-dom";
import * as ROUTES from '../constants/routes';
export default function NotFound() {
    return (
        <div className="w-full h-screen flex items-center align-middle justify-center ">
            <div className="flex flex-col items-center align-middle justify-center w-3/12 bg-white p-4 border border-gray-primary rounded">
                <h1 className="text-3xl font-bold mb-5">404 Not Found</h1>
                <Link to={ROUTES.DASHBOARD} className="text-lg font-bold text-blue-medium">Back to Home Page</Link>
            </div>
        </div>
    )
};
