import styles from './styles/TerminalPage.module.scss'
import {Display} from "./components/Display.tsx";
import {Path} from "./components/Path.tsx";
import {AppProvider} from "./AppContext.tsx";

export const Terminal = () => {
    return (
        <AppProvider>
            <div className={styles.terminal_container}>
                <Display />
                <Path />
            </div>
        </AppProvider>
    );
}