import React, { useEffect, useState } from 'react'
import '../Nav/Nav.scss'
import { NavLink } from 'react-router-dom'
import img1 from "../../assets/logo.png"
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { HashLink } from 'react-router-hash-link'

const Nav = () => {
    const [show, setShow] = useState(true)
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const controlNavbar = () => {
        if (window.scrollY > 10) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    return (
        <>
            <nav className={`nav ${show && 'nav--scroll'}`}>
                <div className="container nav--container">
                    <NavLink className='link--home' to="/">
                        <img src={img1} alt="" />
                    </NavLink>
                    <ul>
                        <li>
                            <HashLink smooth to='/#companiy'>
                                О КОМПАНИИ
                            </HashLink>
                        </li>
                        <li>
                            <HashLink smooth to='/#products'>
                                ПРОДУКЦИЯ
                            </HashLink>
                        </li>
                        <li>
                            <HashLink smooth to='/#news'>
                                НОВОСТИ
                            </HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="/#contacts">
                                КОНТАКТЫ
                            </HashLink>
                        </li>
                    </ul>
                    <div className="bars" onClick={toggleDrawer}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="16"
                            width="14"
                            viewBox="0 0 448 512">
                            <path
                                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                        </svg>
                        <Drawer
                            open={isOpen}
                            onClose={toggleDrawer}
                            direction='right'
                            className='bla bla bla'
                        >

                            <HashLink smooth to='/#companiy'>
                                О КОМПАНИИ
                            </HashLink>

                            <HashLink smooth to='/#products'>
                                ПРОДУКЦИЯ
                            </HashLink>

                            <HashLink smooth to='/#news'>
                                НОВОСТИ
                            </HashLink>

                            <HashLink smooth to='/#contacts'>
                                КОНТАКТЫ
                            </HashLink>
                            <dt>
                                ВЫБОР ЯЗЫКА:
                                <ul>
                                    <p>
                                        Uz
                                    </p>
                                    <p>
                                        Ru
                                    </p>
                                    <p>
                                        Eng
                                    </p>
                                </ul>
                            </dt>
                        </Drawer>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav