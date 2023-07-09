export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">TODO APP</a>
        <ul>
            <CustomLink href="/about">ABOUT</CustomLink>
            <CustomLink href="/doing">DOING</CustomLink>
            <CustomLink href="/done">DONE</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname; 
    return <li className={path === href ? "active" : ""}><a href={href} {...props}>{ children }</a></li>
}