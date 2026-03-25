function Skills() {
    const [ref, inView] = useInView();
    return (
        <section id="skills" className="section" ref={ref}>
            {inView && (
                <>
                    <div className="section-label slide-in-left"><span className="dot" /> Skills</div>
                    <h2 className="section-title slide-in-left" style={{animationDelay:'0.1s'}}>
                        Technical <span className="highlight-orange">Arsenal</span>
                    </h2>
                    <div className="skills-container">
                        {SKILLS.map((s, i) => (
                            <span className={`skill-badge ${s.color} slide-in-up`} style={{animationDelay: `${0.15 + i * 0.08}s`}} key={s.name}>
                                <span className="skill-dot" />
                                {s.name}
                            </span>
                        ))}
                    </div>
                </>
            )}
        </section>
    );
}
