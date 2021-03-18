const LinksMenu = ({text, link}) => {
    return (
        <>
            <li>
                <a href={link}>
                    {text}
                </a>
            </li>
        </>
    )
}

export default LinksMenu