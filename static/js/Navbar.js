function Navbar() {
    const [open, setOpen] = React.useState(false);
    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <a href="#" className="navbar-logo">Portfolio of Adarsh</a>
                <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                    <span /><span /><span />
                </button>
                <ul className={`navbar-links ${open ? "open" : ""}`}>
                    {NAV_LINKS.map((l) => (
                        <li key={l.label}>
                            <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
