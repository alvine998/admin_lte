import React from 'react'
import { Sidebar } from './sidebar'
import { Topbar } from './topbar'

const Layout = ({ children }) => {
    return (
        <>
            <div style={{ overflowX: "hidden" }}>
                <div className='row'>
                    <div className='col-md-2'>
                        <Sidebar />
                    </div>
                    <div className='col-md'>
                        <Topbar />
                        <hr />
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export { Layout }