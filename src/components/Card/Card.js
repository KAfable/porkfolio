import React, { useRef, useState, useEffect } from "react";
import { Link } from "gatsby";
// import image from "../../projects/ftb-interactions/ftb-interactions-preview.png";
import styles from "./card.module.scss";

function useHover() {
    const ref = useRef();
    const [hovered, setHovered] = useState(false);

    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    useEffect(() => {
        const modal = ref.current;
        modal.addEventListener("mouseenter", enter);
        modal.addEventListener("mouseleave", leave);
        return () => {
            modal.removeEventListener("mouseenter", enter);
            modal.removeEventListener("mouseleave", leave);
        };
    }, [ref]);

    return [ref, hovered];
}

export default ({ title, url }) => {
    const [ref, hovered] = useHover();

    return (
        <div className={styles.card} ref={ref}>
            <h2>{title}</h2>
            {/* <img src={image} /> */}
            <Link to={url}>
                <div>Preview text here</div>
            </Link>
            <div className="external-links">
                <a href="https://github.com/KAfable?tab=repositories">GH</a>
                <a href="https://github.com/KAfable?tab=repositories">Anchor</a>
            </div>
        </div>
    );
};

// has an iamge

// modal on hover
// transparent layer, blurs the background
// github link
// snippet text
