import styles from './TerminalPage.module.scss'
import {Display} from "./components/Display.tsx";
import {Path} from "./components/Path.tsx";

export const Terminal = () => {
    return (
        <div className={styles.terminal_container}>
            <Display />
            <Path />
        </div>
    )
}