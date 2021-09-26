import Details from './details';
import Suggestions from './suggestions';
import CurrentUserContext from "../../context/current-user";
import { useContext } from "react";
export default function Sidebar({user: current}) {
    const { user } = useContext(CurrentUserContext);
    return (
        <div className='my-8'>
            <Details fullname={user?.fullName} username={user?.username} avatar={user?.avatar} />
            <Suggestions following={user?.following} userId={user?.userId} loggedInUserDocId={user?.docId} />
        </div>
    );
}