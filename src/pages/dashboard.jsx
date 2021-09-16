import Header from '../components/header';
import Timeline from '../components/timeline';
import Sidebar from '../components/sidebar';
import CurrentUserContext from '../context/current-user';
import useUser from '../hooks/use-user';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
export default function Dashboard ({user: current}){
    const { user } = useUser(current?.uid);
    useEffect(() => {
        document.title = 'Instagram';
    }, [])
    return (
        <CurrentUserContext.Provider value={{ user }} >
            <div>
                <Header />
                <div className='grid grid-cols-3 gap-16 justify-between mx-auto max-w-screen-lg relative top-24'>
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