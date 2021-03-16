import n from './style.module.css'
import cn from 'classnames'
import { useState } from 'react'

const NavBar = () => {

    const [isNav, setNav] = useState(false)

    const handler = () => {
        setNav(!isNav)
    }

    return (
        <>
            <nav className={n.root}>
                <div className={n.navWrapper}>
                    <p className={n.brand}>
                        LOGO
                    </p>
                    <a onClick={handler} className={cn(n.menuButton, {[n.active] : isNav})}>
                        <span/>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default NavBar