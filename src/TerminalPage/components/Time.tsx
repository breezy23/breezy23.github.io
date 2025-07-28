import {useEffect, useState} from "react";
import styles from '../styles/path.module.scss'

export const Time = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 500);

        return () => clearInterval(timer);
    }, []);

    const hours = currentTime.getHours();
    const hours12 = hours % 12 === 0 ? 12 : hours % 12;
    const minutes = currentTime.getMinutes();
    const milliseconds = currentTime.getMilliseconds();

    const hoursFormatted = hours12 < 10 ? `0${hours12}` : hours12;
    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;
    const shouldTick = milliseconds < 500;
    return (
        <div>
            <span>
                {hoursFormatted}
            </span>
            <span className={shouldTick ? styles.tick : styles.tock}>
                :
            </span>
            <span>
                {minutesFormatted}
            </span>
            <span>
                {hours >= 12 ? 'PM' : 'AM'}
            </span>
        </div>
    );
}