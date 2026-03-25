function Experience() {
    const [ref, inView] = useInView();
    return (
        <section id="experience" className="section" ref={ref}>
            {inView && (
                <>
                    <div className="section-label slide-in-right"><span className="dot" /> Experience</div>
                    <h2 className="section-title slide-in-right" style={{animationDelay:'0.1s'}}>
                        Work <span className="highlight-orange">Experience</span>
                    </h2>
                    <div className="exp-grid">
                        {EXPERIENCE.map((e, i) => (
                            <div className={`exp-card slide-in-up`} style={{animationDelay: `${0.2 + i * 0.12}s`}} key={i}>
                                <div className="exp-role">{e.role}</div>
                                <div className="exp-company">{e.company}</div>
                                <div className="exp-duration">🕐 {e.duration}</div>
                                <p className="exp-desc">{e.desc}</p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </section>
    );
}
