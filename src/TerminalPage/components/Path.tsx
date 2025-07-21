import styles from '../TerminalPage.module.scss';
import {Time} from "./Time.tsx";
export const Path = () => {
    return (
        <div className={styles.path}>
            <div>
                ~/temp/path
            </div>
            <div>
                <Time />
            </div>
        </div>
    )
}