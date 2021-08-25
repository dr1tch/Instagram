import Header from '../components/header';
import Timeline from '../components/timeline';
import Sidebar from '../components/sidebar';

export default function Dashboard (){
    return (
        <div>
            <Header />
            <div className='grid grid-cols-3 container mx-auto max-w-screen-lg gap-4 justify-between'>
                <Timeline />
                <Sidebar />
            </div>
        </div>
    )
}