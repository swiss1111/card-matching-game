import styles from './deckSizeDropDown.module.css'
import {createDeckSizesArray} from "../../utils/gameUtils";
import {DeckSizeDropDownProps} from "../../types/gameTypes";



export default function DeckSizeDropDown({onSelect, size}: DeckSizeDropDownProps) {
    return (
        <div className={styles.container}>
            <div className={styles.label}>Deck Size:</div>
            <div>
                <select
                    value={size || 6}
                    onChange={(e) => {
                        onSelect(Number(e.target.value));
                    }}
                    className={styles.select}
                >
                    {createDeckSizesArray().map((deckSize) => (
                        <option key={deckSize} value={deckSize}>
                            {deckSize}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
