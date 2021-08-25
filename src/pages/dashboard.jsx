import Header from '../components/header';
import Timeline from '../components/timeline';
import Sidebar from '../components/sidebar';
import CurrentUserContext from '../context/current-user';
import useUser from '../hooks/use-user';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
export default function Dashboard ({user: current}){
    const { user, setCurrentUser } = useUser(current?.uid);
    console.log('currentUser', user)
    useEffect(() => {
        document.title = 'Instagram';
    }, [])
    return (
        <CurrentUserContext.Provider value={{ user }} >
            <div>
                <Header />
                <div className='grid grid-cols-3 container mx-auto max-w-screen-lg gap-4 justify-between'>
                    <Timeline />
                    <Sidebar />
                </div>
            </div>
        </CurrentUserContext.Provider>
    )
}

Dashboard.propTypes = {
    user: PropTypes.object.isRequired
};