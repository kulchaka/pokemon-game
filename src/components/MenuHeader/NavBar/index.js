import n from './style.module.css'
import cn from 'classnames'
import { useState } from 'react'

const NavBar = ({isOpen, bgActive= false, onClickNav}) => {

    const [isNav, setNav] = useState(false)

    // const handler = () => {
    //     setNav(!isNav)
    //     onClickNav && onClickNav(isNav)
    // }

    return (
        <>
            <nav id={n.navbar} className={cn(n.root, {
                [n.bgActive]: bgActive
            })}>
                <div className={n.navWrapper}>
                    <p className={n.brand}>
                        LOGO
                    </p>
                    <div onClick={onClickNav} className={cn(n.menuButton, {[n.active] : isOpen})}>
                        <span/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar