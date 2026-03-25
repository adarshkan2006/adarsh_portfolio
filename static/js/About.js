function About() {
    const [ref, inView] = useInView();
    return (
        <section id="about" className="section" ref={ref}>
            {inView && (
                <>
                    <div className="section-label slide-in-left"><span className="dot" /> About Me</div>
                    <h2 className="section-title slide-in-left" style={{animationDelay:'0.1s'}}>
                        Get to Know <span className="highlight-orange">Me</span>
                    </h2>
                    <div className="about-grid">
                        <div className="about-image-side slide-in-left" style={{animationDelay:'0.2s'}}>
                            <div className="about-image-wrapper">
                                <img src="/static/images/profile.png" alt="Adarsh Sanoj Kanoujia" className="about-image" />
                            </div>
                        </div>
                        <div className="about-content-side">
                            <div className="about-left-content slide-in-right" style={{animationDelay:'0.3s'}}>
                                <div className="about-text">
                                    <p>
                                        Motivated B.Sc.-IT student with a <strong style={{color:'var(--accent-green)'}}>9.4 CGPA</strong> from
                                        Nirmala Memorial Foundation College of Commerce and Science.
                                    </p>
                                    <p>
                                        <strong style={{color:'var(--accent-orange)'}}>Passionate about Data Analytics</strong> — I thrive on
                                        transforming raw data into meaningful insights that drive smarter decisions. From crafting
                                        interactive dashboards in Power BI to performing deep-dive analysis with Excel and Python,
                                        I am building my career around the power of data.
                                    </p>
                                    <p>
                                        Beyond analytics, I love exploring blockchain technology, cybersecurity concepts,
                                        and full-stack web development to stay versatile in the ever-evolving tech landscape.
                                    </p>
                                </div>
                                <div className="about-stats">
                                    <div className="stat-card">
                                        <div className="stat-number">9.4</div>
                                        <div className="stat-label">CGPA</div>
                                    </div>
                                    <div className="stat-card">
                                        <div className="stat-number">3+</div>
                                        <div className="stat-label">Projects</div>
                                    </div>
                                    <div className="stat-card">
                                        <div className="stat-number">7+</div>
                                        <div className="stat-label">Skills</div>
                                    </div>
                                    <div className="stat-card">
                                        <div className="stat-number">2.5+</div>
                                        <div className="stat-label">Yrs Experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
}
