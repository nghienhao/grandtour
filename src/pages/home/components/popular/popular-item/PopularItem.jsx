export default function PopularItem({imgLink, name, href}) {
    return (<a className="popular_item" href={href}>
            <img src={imgLink} alt={name}></img>
            <h3>{name}</h3>
    </a>)
}