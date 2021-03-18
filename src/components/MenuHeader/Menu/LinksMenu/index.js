import {Link} from "react-router-dom";

const LinksMenu = ({text, link}) => {
    return (
        <>
            <li>
                <Link to={link}>
                    {text}
                </Link>
            </li>
        </>
    )
}

export default LinksMenu