function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-badge fade-in">
                    <span className="pulse" />
                    Open to Opportunities
                </div>

                <h1 className="fade-in d1" style={{position:'relative'}}>
                    <div className="hero-glow"></div>
                    Hi, I'm<br />
                    <span className="gradient-text">Adarsh Sanoj Kanoujia</span>
                </h1>

                <p className="hero-subtitle fade-in d2">
                    B.Sc.-IT Student &amp; Aspiring Data Analyst — passionate about
                    transforming raw data into meaningful insights and building a career in Data Analytics.
                </p>

                <div className="hero-links fade-in d3">
                    <a className="hero-link" href="mailto:kanoujiaadarsh246@gmail.com">
                        ✉️&nbsp; kanoujiaadarsh246@gmail.com
                    </a>
                    <a className="hero-link" href="tel:+918600367488">
                        📞&nbsp; +91 8600367488
                    </a>
                    <a className="hero-link" href="https://www.linkedin.com/in/adarsh-kanoujia-a23151295" target="_blank" rel="noopener noreferrer">
                        🔗&nbsp; LinkedIn
                    </a>
                    <a className="hero-link" href="https://github.com/adarshkan2006" target="_blank" rel="noopener noreferrer">
                        🐙&nbsp; GitHub
                    </a>
                    <a className="hero-link" href="https://www.instagram.com/adarsh__07_k" target="_blank" rel="noopener noreferrer">
                        📸&nbsp; Instagram
                    </a>
                </div>

                <div className="hero-cta fade-in d4">
                    <a href="#projects"><button className="btn-primary">View My Work</button></a>
                    <a href="#contact"><button className="btn-secondary">Get In Touch</button></a>
                </div>
            </div>
        </section>
    );
}
