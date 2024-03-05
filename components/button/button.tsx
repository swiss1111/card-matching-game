import styles from './button.module.css'
import {ButtonProps} from "../../types/gameTypes";

export default function Button({onClick, title, style}: ButtonProps) {
    return (
        <button className={`${styles.button} ${style}`} onClick={() => {
            onClick()
        }}>
            {title}
        </button>
    )
}
