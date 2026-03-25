// ========== CUSTOM HOOKS ==========
function useInView(threshold) {
    if (threshold === undefined) threshold = 0.15;
    const ref = React.useRef(null);
    const [inView, setInView] = React.useState(false);
    React.useEffect(function () {
        var observer = new IntersectionObserver(
            function (entries) { if (entries[0].isIntersecting) setInView(true); },
            { threshold: threshold }
        );
        if (ref.current) observer.observe(ref.current);
        return function () { observer.disconnect(); };
    }, []);
    return [ref, inView];
}
