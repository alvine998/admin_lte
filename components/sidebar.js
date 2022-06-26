import React from 'react'
import styles from '../styles/sidebar.module.css'

const Sidebar = () => {
    return (
        <>
            <div className={styles.sider}>
                <div className='p-3'>
                    <a href='#dashboard'><h5 style={{ textAlign: "center" }}>Dashboard</h5></a>
                    <div className='mt-5'>
                        <a href='#dashboard'><p className='is-active'>Dashboard</p></a>
                        <a className='select' href='#deposit'><p>Deposit</p></a>
                        <a className='select' href='#withdraw'><p>Withdraw</p></a>
                        <a className='select' href='#e-wallet'><p>e-Wallet</p></a>
                        <a className='select' href='#transfer'><p>Transfer</p></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Sidebar }