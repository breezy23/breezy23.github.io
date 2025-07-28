import react1 from '../../../assets/ascii-icons/react-1.txt?raw';
import react2 from '../../../assets/ascii-icons/react-2.txt?raw';
import styles from '../../styles/display.module.scss'
import {useEffect, useState} from "react";

export const ReactIcon = () => {
    const [currentFrame, setCurrentFrame] = useState(0);

    const frames = [react1, react2]
    useEffect(() => {
        const timer = setInterval(() => {
            const frame = currentFrame + 1;
            setCurrentFrame(frame % frames.length)
        }, 1000);

        return () => clearInterval(timer);
    }, [currentFrame]);

    return (
        <div className={styles.icon_wrapper}>
            <pre className={styles.ascii_icon}>{frames[currentFrame]}</pre>
        </div>
    );
}