export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">SiteName</a>
        <ul>
            <CustomLink href="/about">About</CustomLink>
            <CustomLink href="/doing">Doing</CustomLink>
            <CustomLink href="/done">Done</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname; 
    return <li className={path === href ? "active" : ""}><a href={href} {...props}>{ children }</a></li>
}