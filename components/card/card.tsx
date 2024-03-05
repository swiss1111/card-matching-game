import styles from './card.module.css'
import Image from "next/image";
import React from "react";
import {CardProps} from "../../types/gameTypes";

export default function Card({onClick, card}: CardProps) {
    return (
        <button
            className={`${styles.card} ${card.condition === "hidden" ? styles.cardHidden : ""} ${card.condition === "selected" ? styles.cardSelected : ""} ${card.condition === "found" ? styles.cardFound : ""}`}
            onClick={() => {
                if (card.condition === "hidden") {
                    onClick(card)
                }
            }}>
            <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>

                </div>
                <div className={styles.flipCardBack}>
                    <Image
                        width={100}
                        height={100}
                        className={styles.headerLogo}
                        src={card.image}
                        alt={card.image}
                    />
                </div>
            </div>
        </button>
    )
}
