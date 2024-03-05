import styles from './gameTable.module.css'
import {createCardSortedArray} from "../../utils/gameUtils";
import React, {useEffect, useState} from "react";
import Card from "../card/card";
import {GameTableProps, Card as CardType} from "../../types/gameTypes";
import {toast} from "react-toastify";

export default function GameTable({size}: GameTableProps) {
    const [cardArray, setCardArray] = useState([] as CardType[]);
    const [cardTable, setCardTable] = useState([] as CardType[][]);
    const [steps, setSteps] = useState(0);

    useEffect(() => {
        createGame();
    }, [size])

    function resetGame() {
        createGame();
        setSteps(0);
    }

    function createGame() {
        if (size) {
            const [cardShuffledArray, table] = createCardSortedArray(size);
            setCardArray(cardShuffledArray);
            setCardTable(table);
        }
    }

    function checkWinner() {
        const notHiddenArray = cardArray.filter(card => card.condition !== "hidden");

        if (cardArray.length === notHiddenArray.length) {
            toast("Winner", {
                hideProgressBar: true,
                autoClose: 2000,
                type: 'success',
                position: 'bottom-right'
            });
        }
    }

    function cardClick(card: CardType) {
        const selectedCardArray = cardArray.filter(card => card.condition === "selected");

        switch (selectedCardArray.length) {
            case 0:
                card.condition = "selected";
                break;
            case 1:
                setSteps(steps+1);
                if (card.typeId === selectedCardArray[0].typeId) {
                    card.condition = "found";
                    selectedCardArray[0].condition = "found";
                } else {
                    card.condition = "selected";
                }
                break;
            case 2:
                selectedCardArray.forEach(card => card.condition = "hidden");
                card.condition = "selected";
                break;
        }

        setCardTable([...cardTable]);

        checkWinner();
    }

    return (
        <div>
            <div className={styles.controlPanel}>
                {steps}
            </div>
            <div className={styles.table}>
                {
                    cardTable.map((row, rowIndex) => (
                        <div className={styles.row} key={`row-${rowIndex}`}>
                            {
                                row.map((card, cardIndex) => (
                                    <Card card={card} onClick={cardClick} key={`card-${card.typeId}-${cardIndex}`}/>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
