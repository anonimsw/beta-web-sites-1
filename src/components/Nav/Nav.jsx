import React, { useEffect, useState } from 'react'
import '../Nav/Nav.scss'
import { NavLink } from 'react-router-dom'
import img1 from "../../assets/logo.png"
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import MenuIcon from '@mui/icons-material/Menu';

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
                            <NavLink to=''>
                                О КОМПАНИИ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to=''>
                                ПРОДУКЦИЯ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to=''>
                                НОВОСТИ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to=''>
                                КОНТАКТЫ
                            </NavLink>
                        </li>
                    </ul>
                    <div className="bars" onClick={toggleDrawer}>
                        <MenuIcon />
                        <Drawer
                            open={isOpen}
                            onClose={toggleDrawer}
                            direction='right'
                            className='bla bla bla'
                        >
                            <span>
                                О КОМПАНИИ
                            </span>
                            <span>
                                ПРОДУКЦИЯ
                            </span>
                            <span>
                                НОВОСТИ
                            </span>
                            <span>
                                КОНТАКТЫ
                            </span>
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