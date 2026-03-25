function Projects() {
    const [ref, inView] = useInView();
    return (
        <section id="projects" className="section" ref={ref} style={{background: 'var(--bg-secondary)'}}>
            {inView && (
                <>
                    <div className="section-label slide-in-left"><span className="dot" /> Projects</div>
                    <h2 className="section-title slide-in-left" style={{animationDelay:'0.1s'}}>
                        Featured <span className="highlight-green">Work</span>
                    </h2>
                    <div className="projects-grid">
                        {PROJECTS.map((p, i) => (
                            <div className={`project-card slide-in-up`} style={{animationDelay: `${0.2 + i * 0.12}s`}} key={i}>
                                <div className="project-banner">
                                    <div className="project-banner-bg" style={{background: p.bannerGradient}} />
                                    <span className="project-banner-icon">{p.emoji}</span>
                                </div>
                                <div className="project-body">
                                    <span className={`project-tag ${p.tagClass}`}>{p.tag}</span>
                                    <h3 className="project-title">{p.title}</h3>
                                    <p className="project-desc">{p.desc}</p>
                                    <div className="project-techs">
                                        {p.techs.map((t) => (
                                            <span className="project-tech" key={t}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </section>
    );
}
