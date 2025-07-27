import styles from "../../styles/display.module.scss";

type AsciiIconProps = {
    asciiText: string;
}
export const AsciiIcon = ({ asciiText }: AsciiIconProps) => {

    return (
        <div className={styles.icon_wrapper}>
            <pre className={styles.ascii_icon}>{asciiText}</pre>
        </div>
    );
}