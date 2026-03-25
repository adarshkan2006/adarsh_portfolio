function Education() {
    const [ref, inView] = useInView();
    return (
        <section id="education" className="section" ref={ref} style={{background: 'var(--bg-secondary)'}}>
            {inView && (
                <div style={{maxWidth: 700}}>
                    <div className="section-label slide-in-right"><span className="dot" /> Education</div>
                    <h2 className="section-title slide-in-right" style={{animationDelay:'0.1s'}}>
                        Academic <span className="highlight-green">Journey</span>
                    </h2>
                    <div className="timeline">
                        {EDUCATION.map((e, i) => (
                            <div className={`timeline-item slide-in-right`} style={{animationDelay: `${0.2 + i * 0.12}s`}} key={i}>
                                <div className="timeline-dot" />
                                <div className="timeline-card">
                                    <div className="timeline-date">{e.date}</div>
                                    <div className="timeline-title">{e.title}</div>
                                    <div className="timeline-sub">{e.sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
