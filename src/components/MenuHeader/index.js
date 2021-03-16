import Menu from "./Menu";
import NavBar from "./NavBar";
import { useState } from 'react'

const MenuHeader = () => {

    const [isActive, setNav] = useState(false)

    const handlerNav = (bool) => {
        console.log(bool, 'props')
        setNav(!isActive)
        console.log(isActive, 'isActive')
    }

    return (
        <>
            <Menu state={isActive} />
            <NavBar onClickNav={handlerNav}/>
        </>
    )
}

export default MenuHeader