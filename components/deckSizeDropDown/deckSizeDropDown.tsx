import styles from './deckSizeDropDown.module.css'
import {createDeckSizesArray} from "../../utils/gameUtils";

type DeckSizeDropDownProps = {
    onSelect: (size: number) => void
    size: number
}

export default function DeckSizeDropDown({onSelect, size}: DeckSizeDropDownProps) {
    return (
        <div className={styles.container}>
            <div className={styles.label}>Deck Size:</div>
            <div>
                <select
                    value={size}
                    onChange={(e) => {
                        onSelect(Number(e.target.value));
                    }}
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
