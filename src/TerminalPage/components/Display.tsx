import {FileSystemPane} from "./FileSystem.tsx";
import {DisplayPane} from "./DisplayPane.tsx";
import styles from "../styles/display.module.scss";
export const Display = () => {
    return (
        <div className={styles.display}>
            <FileSystemPane />
            <DisplayPane />
        </div>
    )
}