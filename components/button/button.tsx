import styles from './button.module.css'
import {ButtonProps} from "../../types/gameTypes";

export default function Button({onClick, title}: ButtonProps) {
    return (
        <button className={styles.button} onClick={() => {
            onClick()
        }}>
            {title}
        </button>
    )
}
