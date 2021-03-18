import {Link} from "react-router-dom";

const LinksMenu = ({text, link, onClickLink}) => {
    return (
        <>
            <li onClick={onClickLink}>
                <Link to={link}>
                    {text}
                </Link>
            </li>
        </>
    )
}

export default LinksMenu