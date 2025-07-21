import styles from '../TerminalPage.module.scss';
import {Time} from "./Time.tsx";
import {useContext} from "react";
import {AppContext} from "../AppContext.tsx";
export const Path = () => {
    const { filePath } = useContext(AppContext);

    return (
        <div className={styles.path}>
            <div>
                {filePath}
            </div>
            <div>
                <Time />
            </div>
        </div>
    )
}