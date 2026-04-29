import {Outlet} from 'react-router-dom'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'

export default function (){

    return(
        <>
            <AppHeader/>
        <main className='min-vh-100'>
            <Outlet/>
        </main>
            <AppFooter/>
        
        </>
    )
}