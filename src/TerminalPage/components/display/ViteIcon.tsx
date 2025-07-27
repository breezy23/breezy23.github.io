import styles from "../../styles/display.module.scss";
import vite from "../../../assets/ascii-icons/vite.txt?raw"

export const ViteIcon = () => {
    const icon = vite
    return (
        <div className={styles.icon_wrapper}>
            <pre className={styles.ascii_icon}>{icon}</pre>
        </div>
    );
}