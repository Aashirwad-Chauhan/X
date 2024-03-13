import React from 'react'
import Header from '../Home_Page/Header'
import Leftsidebar from '../Home_Page/Leftsidebar'
import Rightsidebar from '../Home_Page/Rightsidebar'
import Feed from './Feed'

function Event() {
    return (
        <React.Fragment>
            <Header />
            <main>
                <div className='container'>
                    <Leftsidebar />
                    <Feed/>
                    <Rightsidebar />
                </div>
            </main>
        </React.Fragment>
    )
}

export default Event