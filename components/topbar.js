import Image from 'next/image'
import React from 'react'
import { dummy1 } from '../assets'
import styles from '../styles/topbar.module.css'

const Topbar = () => {
    return (
        <>
            <div className={styles.topbar}>
                <div className={styles.nav}>
                    <div className='row'>
                        <div className='col-md'>
                            <Image src={dummy1} className={styles.image} height={30} width={30} />
                        </div>
                        <div className='col-md dropdown'>
                            <a className='dropdown-toggle' id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Halo, Sammy</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Akun</a></li>
                                <hr/>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Topbar }