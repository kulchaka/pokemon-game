import Menu from "./Menu";
import NavBar from "./NavBar";
import { useState } from 'react'


const MenuHeader = ({bgActive}) => {

    const [isOpen, setOpen] = useState(null)

    const handlerNav = () => {
        // console.log(bool, 'props')
        // setOpen(!bool)
        // console.log(isActive, 'isActive')
        setOpen(prevState => !prevState)
    }

    return (
        <>
            <Menu isOpen={isOpen} deActiveNav={handlerNav}/>
            <NavBar isOpen={isOpen} bgActive={bgActive} onClickNav={handlerNav}/>
        </>
    )
}

export default MenuHeader