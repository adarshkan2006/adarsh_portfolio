function About() {
    const [ref, inView] = useInView();
    return (
        <section id="about" className="section" ref={ref}>
            {inView && (
                <>
                    {/* Label is outside the grid so it doesn't affect image alignment */}
                    <div className="section-label slide-in-left" style={{animationDelay:'0.1s', marginBottom: '20px'}}>
                        <span className="dot" /> About Me
                    </div>
                    
                    <div className="about-grid" style={{alignItems: 'flex-start'}}>
                        <div className="about-content-side slide-in-left" style={{animationDelay:'0.2s'}}>
                            {/* Grid starts with the H2, so the image on the right will align with its top */}
                            <h2 className="section-title" style={{marginBottom: '32px', opacity: 1}}>
                                Get to Know <span className="highlight-orange">Me</span>
                            </h2>
                            
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
                        
                        <div className="about-image-side slide-in-right" style={{animationDelay:'0.3s'}}>
                            {/* Minimal formatting as requested, just a clean container */}
                            <div className="about-image-wrapper" style={{boxShadow: 'none', borderRadius: '0', background: 'none', marginTop: '10px'}}>
                                <img src="/static/images/profile.png" alt="Adarsh Sanoj Kanoujia" className="about-image" style={{borderRadius: '0', width: '100%', height: 'auto'}} />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
}
