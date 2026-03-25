function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
