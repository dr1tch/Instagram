import Details from './details';
import Suggestions from './suggestions';
import CurrentUserContext from "../../context/current-user";
import { useContext } from "react";
export default function Sidebar() {
    const { user } = useContext(CurrentUserContext);
    console.log(user)
    return (
        <div>
            <Details fullname={user?.fullName} username={user?.username} avatar={user?.avatar} />
            <Suggestions />
        </div>
    );
}