function Contact() {
    const [ref, inView] = useInView();
    const [form, setForm] = React.useState({ name: "", email: "", phone: "", message: "" });
    const [sending, setSending] = React.useState(false);
    const [toast, setToast] = React.useState(null);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        try {
            const res = await fetch("/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            setToast({ type: "success", text: data.message });
            setForm({ name: "", email: "", phone: "", message: "" });
        } catch {
            setToast({ type: "error", text: "Something went wrong. Please try again." });
        }
        setSending(false);
        setTimeout(() => setToast(null), 4000);
    };

    return (
        <section id="contact" className="section" ref={ref} style={{background: 'var(--bg-secondary)'}}>
            {inView && (
                <>
                    <div className="section-label slide-in-left"><span className="dot" /> Contact</div>
                    <h2 className="section-title slide-in-left" style={{animationDelay:'0.1s'}}>
                        Let's <span className="highlight-green">Connect</span>
                    </h2>
                    <div className="contact-grid">
                        <div className="contact-info slide-in-left" style={{animationDelay:'0.2s'}}>
                            <div className="contact-item">
                                <div className="contact-icon orange">✉️</div>
                                <div>
                                    <div className="contact-label">Email</div>
                                    <a href="mailto:kanoujiaadarsh246@gmail.com" className="contact-value">kanoujiaadarsh246@gmail.com</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon green">📞</div>
                                <div>
                                    <div className="contact-label">Phone</div>
                                    <a href="tel:+918600367488" className="contact-value">+91 8600367488</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon orange">🔗</div>
                                <div>
                                    <div className="contact-label">LinkedIn</div>
                                    <a href="https://www.linkedin.com/in/adarsh-kanoujia-a23151295" target="_blank" rel="noopener noreferrer" className="contact-value">linkedin.com/in/adarsh-kanoujia</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon green">🐙</div>
                                <div>
                                    <div className="contact-label">GitHub</div>
                                    <a href="https://github.com/adarshkan2006" target="_blank" rel="noopener noreferrer" className="contact-value">github.com/adarshkan2006</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon orange">📸</div>
                                <div>
                                    <div className="contact-label">Instagram</div>
                                    <a href="https://www.instagram.com/adarsh__07_k" target="_blank" rel="noopener noreferrer" className="contact-value">instagram.com/adarsh__07_k</a>
                                </div>
                            </div>
                        </div>

                        <form className="contact-form slide-in-right" style={{animationDelay:'0.3s'}} onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    className="form-input" type="text" name="name"
                                    placeholder="Your Name" required
                                    value={form.name} onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-input" type="email" name="email"
                                    placeholder="Your Email" required
                                    value={form.email} onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-input" type="tel" name="phone"
                                    placeholder="Your Phone Number"
                                    value={form.phone} onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    className="form-textarea" name="message"
                                    placeholder="Your Message" required
                                    value={form.message} onChange={handleChange}
                                />
                            </div>
                            <button className="form-submit" type="submit" disabled={sending}>
                                {sending ? "Sending..." : "Send Message 🚀"}
                            </button>
                        </form>
                    </div>
                </>
            )}
            {toast && <div className={`toast ${toast.type}`}>{toast.text}</div>}
        </section>
    );
}
