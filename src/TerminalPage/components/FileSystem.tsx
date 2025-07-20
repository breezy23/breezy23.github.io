import { FileSelector } from './FileSelector.tsx'
import styles from '../TerminalPage.module.scss'

export const FileSystemPane = () => {
    return (
        <div className={styles.filesystem}>
            <div className={styles.fileselector_title}>
                title
            </div>
            <div className={styles.fileselector_type}>
                type
            </div>
        </div>
    )
}