import styles from "../../styles/display.module.scss";
import vite from "../../../assets/vite.txt?raw"

export const ViteIcon = () => {
    const icon = vite
    return (
        <div className={styles.icon_wrapper}>
            <pre className={styles.icon}>{icon}</pre>
        </div>
    );
}