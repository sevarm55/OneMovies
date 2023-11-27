import { useEffect, useState } from 'react'
import BurgerBox from '../BurgerBox/BurgerBox'
import LogoBox from '../LogoBox/LogoBox'
import NavBox from '../NavBox/NavBox'
import UserBox from '../UserBox/UserBox'

import s from './Header.module.css'
import BurgerNav from '../BurgerNav/BurgerNav'

const Header = () => {
    
    const [scrolled, setScrolled] = useState(false);
    const [isBurgerActive, setIsBurgerActive] = useState(false);
    
    const getBurgerMenu = () => {
        setIsBurgerActive(!isBurgerActive)
    }
    console.log(isBurgerActive);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    },[])

    const handleScroll = () => {
        const offset = window.scrollY
        if(offset > 100) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }
    
    return (
        <div className={`${s.header} ${scrolled ? s.scrolled : ''}`}>
            <BurgerBox getBurgerMenu={getBurgerMenu}setIsBurgerActive={setIsBurgerActive} />
            <BurgerNav setIsBurgerActive={setIsBurgerActive} isBurgerActive={isBurgerActive} />
            <LogoBox />
            <NavBox />
            <UserBox />
        </div>
    )
}

export default Header