import React, { useRef, useState, useEffect } from "react";
import { Link } from "gatsby";
import GitHubIcon from "../Icons/Github";
import styles from "./card.module.scss";
import Img from "gatsby-image";

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

export default ({ title, url, img, desc, fe, be }) => {
    return (
        <div className={styles.card}>
            {img ? <Img fixed={img} /> : false}
            <div className={styles.textPreview}>
                <Link to={url}>
                    <h2>{title}</h2>
                    <div>{desc}</div>
                </Link>
                <div className="external-links">
                    {fe ? (
                        <a href="https://github.com/KAfable?tab=repositories">
                            Frontend
                            <GitHubIcon fill={"#dcddde"} />
                        </a>
                    ) : (
                        false
                    )}

                    <a href="https://github.com/KAfable?tab=repositories">
                        Anchor
                    </a>
                </div>
            </div>
        </div>
    );
};

// has an iamge

// modal on hover
// transparent layer, blurs the background
// github link
// snippet text
