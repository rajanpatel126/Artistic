import { useState } from "react";

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    window.addEventListener("scroll", toggleVisibility);

    return (
        <button
            className={`scroll-to-top-btn ${isVisible ? "visible" : ""}`}
            onClick={scrollToTop}
        >
            Scroll to Top
        </button>
    );
}

export default ScrollToTopButton;
