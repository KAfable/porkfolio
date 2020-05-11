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

export default props => {
    const { title, showcase, img, desc, fe, be } = props;
    return (
        <div className={styles.card}>
            {img ? (
                <div className={styles.imgWrapper}>
                    <Img
                        className={styles.imgWrapper}
                        alt={`${title}`}
                        fixed={img}
                    />
                </div>
            ) : (
                false
            )}
            <div className={styles.textPreview}>
                <Link to={showcase}>
                    <h2>{title}</h2>
                    <div>{desc}</div>
                </Link>
                <div className={styles.externalLinks}>
                    {fe ? (
                        <a href={fe}>
                            <h3>Frontend</h3> <GitHubIcon fill="#dcddde" />
                        </a>
                    ) : (
                        false
                    )}
                    {be ? (
                        <a href={be}>
                            <h3>Backend</h3> <GitHubIcon fill="#dcddde" />
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
