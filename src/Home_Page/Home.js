import React from 'react'
import Feed from './Feed'
import Header from './Header'
import Leftsidebar from './Leftsidebar'
import Rightsidebar from './Rightsidebar'

function Home() {
    return (
        <React.Fragment>
            <Header />
            <main>
                <div className="container">
                    <Leftsidebar />
                    <Feed />
                    <Rightsidebar />
                </div>
            </main>
        </React.Fragment>
    )
}

export default Home