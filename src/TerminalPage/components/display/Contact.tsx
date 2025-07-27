import styles from '../../styles/display.module.scss';

export const Contact = () => {
    return (
        <div>
            <div>
                <span className={styles.unicode_label}>✉</span>: <a href={'mailto:brz0323@gmail.com'}>brz0323@gmail.com</a>
            </div>
            <div>
                <span className={styles.unicode_label}>☍</span>: <a href={'https://www.linkedin.com/in/ezbz/'}>https://www.linkedin.com/in/ezbz/</a>
            </div>
            <div>
                <span className={styles.unicode_label}>☏</span>: +1 (630) 917-9680 via SMS
            </div>
            <div>
                My preferred method of contact is email, as it's the most reliable way to reach me. I'm more likely to see and respond to email than LinkedIn messages or texts.
            </div>
        </div>
    )
}